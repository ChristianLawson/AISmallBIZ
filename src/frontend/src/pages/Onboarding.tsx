import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import {
  useProfile,
  useSaveExtendedProfile,
  useSaveProfile,
} from "@/hooks/useProfile";
import {
  ALL_BUSINESS_TYPES,
  GOAL_LABELS,
  Goal,
  INDUSTRY_LABELS,
  type IndustryType,
  TEAM_SIZE_LABELS,
  type TeamSize,
} from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const STEPS = [
  "Personal Info",
  "Business Info",
  "Your Team",
  "Your Goals",
  "Business Stage",
  "Biggest Challenges",
];

const GOAL_ICONS: Record<Goal, string> = {
  [Goal.googleMaps]: "\uD83D\uDCCD",
  [Goal.socialAds]: "\uD83D\uDCF1",
  [Goal.businessPlanning]: "\uD83D\uDCCB",
};

const GOAL_DESCRIPTIONS: Record<Goal, string> = {
  [Goal.googleMaps]: "Rank higher on Google Maps & local search",
  [Goal.socialAds]: "Run effective ads on Facebook, Instagram & more",
  [Goal.businessPlanning]: "Build a solid business plan with AI guidance",
};

const BUSINESS_STAGES = [
  {
    value: "startup",
    emoji: "\uD83C\uDF31",
    label: "Just Starting Out",
    sub: "startup",
  },
  {
    value: "growing",
    emoji: "\uD83D\uDCC8",
    label: "Growing",
    sub: "0-2 yrs",
  },
  {
    value: "scaling",
    emoji: "\uD83D\uDE80",
    label: "Scaling Up",
    sub: "2-5 yrs",
  },
  {
    value: "established",
    emoji: "\uD83C\uDFC6",
    label: "Established",
    sub: "5+ yrs",
  },
];

const CHALLENGE_OPTIONS = [
  { value: "online_visibility", label: "Getting found online" },
  { value: "branding", label: "Branding & identity" },
  { value: "social_media", label: "Social media marketing" },
  { value: "business_planning", label: "Business planning" },
  { value: "profitability", label: "Profitability" },
  { value: "hiring", label: "Hiring & team" },
  { value: "technology", label: "Technology setup" },
  { value: "customer_retention", label: "Customer retention" },
];

type FormErrors = Record<string, string>;

function Spinner() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export default function Onboarding() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const saveProfile = useSaveProfile();
  const saveExtendedProfile = useSaveExtendedProfile();

  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industryType, setIndustryType] = useState<IndustryType | "">("");
  const [location, setLocation] = useState("");
  const [teamSize, setTeamSize] = useState<TeamSize | "">(" ".trim() as "");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [businessStage, setBusinessStage] = useState("");
  const [challenges, setChallenges] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSettingUp, setIsSettingUp] = useState(false);

  useEffect(() => {
    if (!profileLoading && profile) {
      navigate({ to: "/dashboard" });
    }
  }, [profile, profileLoading, navigate]);

  const validateStep = (s: number): boolean => {
    const next: FormErrors = {};
    if (s === 0)
      return (
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      );
    if (s === 1) {
      if (!businessName.trim()) next.businessName = "Business name is required";
      if (!industryType) next.industryType = "Please select your industry";
      if (!location.trim()) next.location = "Location is required";
    } else if (s === 2) {
      if (!teamSize) next.teamSize = "Please select your team size";
    } else if (s === 3) {
      if (goals.length === 0) next.goals = "Please select at least one goal";
    } else if (s === 4) {
      if (!businessStage)
        next.businessStage = "Please select your business stage";
    }
    // step 4 (challenges) is optional
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const toggleGoal = (goal: Goal) => {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
    if (errors.goals) setErrors((e) => ({ ...e, goals: "" }));
  };

  const toggleChallenge = (val: string) => {
    setChallenges((prev) =>
      prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val],
    );
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;
    if (!industryType || !teamSize) return;
    setIsSettingUp(true);
    try {
      await saveProfile.mutateAsync({
        businessName: businessName.trim(),
        industryType: industryType as IndustryType,
        location: location.trim(),
        teamSize: teamSize as TeamSize,
        goals,
        name: `${firstName.trim()} ${lastName.trim()}`,

        email: email.trim(),
        signupDate: BigInt(Date.now()),
        subscriptionTier: undefined,
      });
      await saveExtendedProfile.mutateAsync({
        businessStage: businessStage as import("@/types").BusinessStage,
        challenges,
      });
      toast.success("Profile saved! Personalizing your dashboard\u2026");
      await new Promise((r) => setTimeout(r, 1200));
      navigate({ to: "/dashboard" });
    } catch {
      setIsSettingUp(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-elevated">
          <CardContent className="pt-10 pb-8 px-8 text-center">
            <div className="text-4xl mb-4">\uD83D\uDD12</div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              Get Business &amp; Technology Updates for Your Business
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Sign in to receive personalized AI-powered business updates,
              technology recommendations, and industry-specific guides tailored
              to your business.
            </p>
            <Button
              type="button"
              onClick={() => login()}
              data-ocid="onboarding.login_button"
              className="w-full"
            >
              Sign In with Internet Identity
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Free to join. No spam. Just smart business insights.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (profileLoading) {
    return (
      <div
        data-ocid="onboarding.loading_state"
        className="min-h-screen bg-background flex items-center justify-center"
      >
        <div className="text-muted-foreground text-sm animate-pulse">
          Loading your profile…
        </div>
      </div>
    );
  }

  if (isSettingUp) {
    return (
      <div
        data-ocid="onboarding.setting_up_state"
        className="min-h-screen bg-gradient-warm flex flex-col items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="text-center max-w-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Spinner />
          </div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-2">
            Setting up your personalized dashboard…
          </h2>
          <p className="text-sm text-muted-foreground">
            We’re tailoring your recommendations based on your goals and
            industry. Just a moment!
          </p>
        </motion.div>
      </div>
    );
  }

  const progressPercent = Math.round((step / STEPS.length) * 100);

  return (
    <div
      data-ocid="onboarding.page"
      className="min-h-screen bg-gradient-warm flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Brand header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-center"
      >
        <span className="font-display font-bold text-2xl tracking-tight">
          <span className="text-primary">AI</span>
          <span className="text-foreground">SmallBiz</span>
        </span>
        <p className="mt-2 text-base font-semibold text-foreground/90 font-display">
          6 steps to your personalized business hub
        </p>
        <p className="mt-1 text-sm text-foreground/70 font-body max-w-sm">
          Tell us about your business so we can personalize your recommendations
        </p>
      </motion.div>

      {/* Step indicator */}
      <div
        data-ocid="onboarding.step_indicator"
        className="flex items-center gap-1 mb-4 overflow-x-auto pb-1"
      >
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-1">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-smooth shrink-0 ${
                i < step
                  ? "bg-primary text-primary-foreground"
                  : i === step
                    ? "bg-secondary text-secondary-foreground ring-4 ring-secondary/25"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {i < step ? "\u2713" : i + 1}
            </div>
            <span
              className={`text-xs hidden sm:inline whitespace-nowrap ${
                i === step
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`w-6 h-px mx-0.5 ${
                  i < step ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step label */}
      <p className="text-xs text-muted-foreground mb-3 font-medium tracking-wide uppercase">
        Step {step + 1} of {STEPS.length}
      </p>

      {/* Progress bar */}
      <div
        data-ocid="onboarding.progress_bar"
        className="w-full max-w-lg mb-6 h-2 bg-muted rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Animated step card */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-elevated border-border/60">
          <CardContent className="pt-8 pb-8 px-8">
            {/* Step 0: Personal Info */}
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Let us get to know you
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    We will use this to personalize your experience and keep you
                    updated.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    id="first-name"
                    data-ocid="onboarding.first_name_input"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-background dark:bg-[#374151] text-[#1F2937] dark:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-accent-neutral"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    id="last-name"
                    data-ocid="onboarding.last_name_input"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-background dark:bg-[#374151] text-[#1F2937] dark:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-accent-neutral"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-addr"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email-addr"
                    data-ocid="onboarding.email_input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-background dark:bg-[#374151] text-[#1F2937] dark:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-accent-neutral"
                  />
                </div>
              </div>
            )}

            {/* Step 1: Business Info */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Your business details
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Let’s start with the basics: you can update this anytime.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessName" className="text-sm font-medium">
                    Business name
                  </Label>
                  <Input
                    data-ocid="onboarding.business_name_input"
                    id="businessName"
                    placeholder="e.g. Maria's Deli"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      if (errors.businessName)
                        setErrors((err) => ({ ...err, businessName: "" }));
                    }}
                    className={`h-12 text-sm focus-visible:ring-2 focus-visible:ring-primary/30 ${
                      errors.businessName
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }`}
                  />
                  {errors.businessName && (
                    <p
                      data-ocid="onboarding.business_name_field_error"
                      className="text-xs text-destructive"
                    >
                      {errors.businessName}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="industryType" className="text-sm font-medium">
                    Industry
                  </Label>
                  <select
                    data-ocid="onboarding.industry_select"
                    id="industryType"
                    value={industryType}
                    onChange={(e) => {
                      setIndustryType(e.target.value as IndustryType);
                      if (errors.industryType)
                        setErrors((err) => ({ ...err, industryType: "" }));
                    }}
                    className={`w-full h-12 px-3 rounded-md border text-sm bg-background text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0 ${
                      errors.industryType
                        ? "border-destructive"
                        : "border-input"
                    }`}
                  >
                    <option value="">Select your industry…</option>
                    {ALL_BUSINESS_TYPES.map((bt) => (
                      <option key={bt.key} value={bt.key}>
                        {bt.label}
                      </option>
                    ))}
                  </select>
                  {errors.industryType && (
                    <p
                      data-ocid="onboarding.industry_field_error"
                      className="text-xs text-destructive"
                    >
                      {errors.industryType}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="location" className="text-sm font-medium">
                    City / Location
                  </Label>
                  <Input
                    data-ocid="onboarding.location_input"
                    id="location"
                    placeholder="e.g. Austin, TX"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (errors.location)
                        setErrors((err) => ({ ...err, location: "" }));
                    }}
                    className={`h-12 text-sm focus-visible:ring-2 focus-visible:ring-primary/30 ${
                      errors.location
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }`}
                  />
                  {errors.location && (
                    <p
                      data-ocid="onboarding.location_field_error"
                      className="text-xs text-destructive"
                    >
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Team Size */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    How big is your team?
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    We’ll tailor advice to match your capacity and resources.
                  </p>
                </div>
                <div
                  data-ocid="onboarding.team_size_radio"
                  className="space-y-3"
                >
                  {(
                    Object.entries(TEAM_SIZE_LABELS) as [TeamSize, string][]
                  ).map(([value, label]) => {
                    const selected = teamSize === value;
                    return (
                      <button
                        type="button"
                        key={value}
                        data-ocid={`onboarding.team_size.${value}`}
                        onClick={() => {
                          setTeamSize(value);
                          if (errors.teamSize)
                            setErrors((e) => ({ ...e, teamSize: "" }));
                        }}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-lg border-2 text-left transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                          selected
                            ? "border-primary bg-primary/8 text-foreground"
                            : "border-border bg-card hover:border-primary/40 text-foreground"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selected
                              ? "border-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {selected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          )}
                        </div>
                        <span className="font-medium text-sm">{label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.teamSize && (
                  <p
                    data-ocid="onboarding.team_size_field_error"
                    className="text-xs text-destructive"
                  >
                    {errors.teamSize}
                  </p>
                )}
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    What are your priorities?
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Choose everything you’d like to improve: select as many as
                    you like.
                  </p>
                </div>
                <div
                  data-ocid="onboarding.goals_checkboxes"
                  className="space-y-3"
                >
                  {(Object.entries(GOAL_LABELS) as [Goal, string][]).map(
                    ([value, label]) => {
                      const selected = goals.includes(value);
                      return (
                        <button
                          type="button"
                          key={value}
                          data-ocid={`onboarding.goal.${value}`}
                          onClick={() => toggleGoal(value)}
                          className={`w-full flex items-start gap-4 px-4 py-4 rounded-lg border-2 text-left transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                            selected
                              ? "border-primary bg-primary/8"
                              : "border-border bg-card hover:border-primary/40"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                              selected
                                ? "border-primary bg-primary"
                                : "border-muted-foreground bg-background"
                            }`}
                          >
                            {selected && (
                              <svg
                                className="w-3 h-3 text-primary-foreground"
                                fill="none"
                                viewBox="0 0 12 12"
                                role="img"
                                aria-label="Selected"
                              >
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-base">
                                {GOAL_ICONS[value]}
                              </span>
                              <span className="font-medium text-sm text-foreground">
                                {label}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {GOAL_DESCRIPTIONS[value]}
                            </p>
                          </div>
                        </button>
                      );
                    },
                  )}
                </div>
                {errors.goals && (
                  <p
                    data-ocid="onboarding.goals_field_error"
                    className="text-xs text-destructive"
                  >
                    {errors.goals}
                  </p>
                )}
              </div>
            )}

            {/* Step 4: Business Stage */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    What stage is your business?
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    This helps us pitch advice at the right level.
                  </p>
                </div>
                <div
                  data-ocid="onboarding.business_stage_radio"
                  className="grid grid-cols-2 gap-3"
                >
                  {BUSINESS_STAGES.map((stage) => {
                    const selected = businessStage === stage.value;
                    return (
                      <button
                        type="button"
                        key={stage.value}
                        data-ocid={`onboarding.stage.${stage.value}`}
                        onClick={() => {
                          setBusinessStage(stage.value);
                          if (errors.businessStage)
                            setErrors((e) => ({ ...e, businessStage: "" }));
                        }}
                        className={`flex flex-col items-center gap-2 px-4 py-5 rounded-xl border-2 text-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                          selected
                            ? "border-primary bg-primary/8"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <span className="text-2xl" aria-hidden="true">
                          {stage.emoji}
                        </span>
                        <div>
                          <p className="font-semibold text-sm text-foreground">
                            {stage.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {stage.sub}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.businessStage && (
                  <p
                    data-ocid="onboarding.business_stage_field_error"
                    className="text-xs text-destructive"
                  >
                    {errors.businessStage}
                  </p>
                )}
              </div>
            )}

            {/* Step 5: Biggest Challenges */}
            {step === 5 && (
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    What are your biggest challenges?
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select all that apply: we’ll prioritize guides for these
                    areas.
                  </p>
                </div>
                <div
                  data-ocid="onboarding.challenges_checkboxes"
                  className="grid grid-cols-2 gap-3"
                >
                  {CHALLENGE_OPTIONS.map((challenge) => {
                    const selected = challenges.includes(challenge.value);
                    return (
                      <button
                        type="button"
                        key={challenge.value}
                        data-ocid={`onboarding.challenge.${challenge.value}`}
                        onClick={() => toggleChallenge(challenge.value)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg border-2 text-left transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                          selected
                            ? "border-primary bg-primary/8"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            selected
                              ? "border-primary bg-primary"
                              : "border-muted-foreground bg-background"
                          }`}
                        >
                          {selected && (
                            <svg
                              className="w-2.5 h-2.5 text-primary-foreground"
                              fill="none"
                              viewBox="0 0 12 12"
                              role="img"
                              aria-label="Selected"
                            >
                              <path
                                d="M2 6l3 3 5-5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs font-medium text-foreground">
                          {challenge.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground italic">
                  Optional: skip if none apply right now.
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  data-ocid="onboarding.back_button"
                  onClick={handleBack}
                  className="flex-1 h-12 text-sm font-medium"
                >
                  \u2190 Back
                </Button>
              )}
              {step < STEPS.length - 1 ? (
                <Button
                  type="button"
                  size="lg"
                  data-ocid="onboarding.next_button"
                  onClick={handleNext}
                  className="flex-1 h-12 text-sm font-medium"
                >
                  Continue \u2192
                </Button>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  data-ocid="onboarding.submit_button"
                  onClick={handleSubmit}
                  disabled={saveProfile.isPending || isSettingUp}
                  className="flex-1 h-12 text-sm font-medium"
                >
                  {saveProfile.isPending ? (
                    <span
                      data-ocid="onboarding.loading_state"
                      className="flex items-center gap-2"
                    >
                      <Spinner />
                      Saving…
                    </span>
                  ) : (
                    "Let’s Go! 🚀"
                  )}
                </Button>
              )}
            </div>

            {saveProfile.isError && (
              <p
                data-ocid="onboarding.error_state"
                className="text-xs text-destructive text-center mt-3"
              >
                Something went wrong. Please try again.
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <p className="mt-6 text-xs text-muted-foreground text-center">
        You can update your profile anytime from your dashboard.
      </p>
    </div>
  );
}

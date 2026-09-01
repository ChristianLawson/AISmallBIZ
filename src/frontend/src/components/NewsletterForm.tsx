import { Check } from "lucide-react";
import { useState } from "react";

import { Frequency } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSubscribeToNewsletter } from "@/hooks/useNewsletter";

const FREQUENCIES: { value: Frequency; label: string }[] = [
  { value: Frequency.weekly, label: "Weekly" },
  { value: Frequency.monthly, label: "Monthly" },
  { value: Frequency.both, label: "Both" },
];

const FREQUENCY_LABELS: Record<Frequency, string> = {
  [Frequency.weekly]: "Weekly",
  [Frequency.monthly]: "Monthly",
  [Frequency.both]: "Weekly and Monthly",
};

interface NewsletterFormProps {
  variant?: "footer" | "home";
}

export function NewsletterForm({ variant = "footer" }: NewsletterFormProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState<Frequency>(Frequency.weekly);
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>(
    {},
  );
  const subscribe = useSubscribeToNewsletter();

  const idPrefix = variant === "home" ? "home-newsletter" : "footer-newsletter";

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: { firstName?: string; email?: string } = {};
    if (!firstName.trim()) {
      nextErrors.firstName = "Please enter your first name.";
    }
    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      subscribe.mutate(
        {
          firstName: firstName.trim(),
          email: email.trim(),
          frequency,
        },
        {
          onSuccess: () => {
            setSubscribed(true);
          },
        },
      );
    }
  }

  const heading = (
    <div className="flex-1">
      <h3 className="font-display font-bold text-xl text-foreground mb-1">
        Get weekly small business tips
      </h3>
      <p className="text-sm text-muted-foreground">
        Join 500+ business owners getting AI-powered advice every week.
      </p>
    </div>
  );

  const successState = (
    <div
      data-ocid={`${idPrefix}.success_state`}
      className="verify-panel w-full md:w-[26rem]"
    >
      <span className="verify-panel-icon" aria-hidden="true">
        <Check size={16} />
      </span>
      <div>
        <p className="verify-panel-title">
          Check your inbox, {firstName.trim() || "friend"}.
        </p>
        <p className="verify-panel-desc">
          A verification email is on its way to {email.trim()}. Click the link
          in that email to confirm your subscription before you start receiving{" "}
          {FREQUENCY_LABELS[frequency].toLowerCase()} updates.
        </p>
        <span className="badge-frequency mt-3">
          {FREQUENCY_LABELS[frequency]}
        </span>
      </div>
    </div>
  );

  const form = (
    <form
      onSubmit={handleSubscribe}
      data-ocid={`${idPrefix}.form`}
      noValidate
      className="flex flex-col gap-4 w-full md:w-[26rem]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor={`${idPrefix}-first-name`}
            className="text-sm text-foreground"
          >
            First name
          </Label>
          <Input
            id={`${idPrefix}-first-name`}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={
              errors.firstName ? `${idPrefix}-first-name-error` : undefined
            }
            data-ocid={`${idPrefix}.first_name_input`}
            className="bg-background"
          />
          {errors.firstName ? (
            <p
              id={`${idPrefix}-first-name-error`}
              data-ocid={`${idPrefix}.first_name_error`}
              className="text-xs text-destructive"
            >
              {errors.firstName}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor={`${idPrefix}-email`}
            className="text-sm text-foreground"
          >
            Email
          </Label>
          <Input
            id={`${idPrefix}-email`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${idPrefix}-email-error` : undefined
            }
            data-ocid={`${idPrefix}.input`}
            className="bg-background"
          />
          {errors.email ? (
            <p
              id={`${idPrefix}-email-error`}
              data-ocid={`${idPrefix}.email_error`}
              className="text-xs text-destructive"
            >
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm text-foreground font-medium">
          Frequency
        </legend>
        <RadioGroup
          value={frequency}
          onValueChange={(value) => setFrequency(value as Frequency)}
          data-ocid={`${idPrefix}.frequency`}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {FREQUENCIES.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem
                value={option.value}
                id={`${idPrefix}-frequency-${option.value}`}
                data-ocid={`${idPrefix}.frequency.${option.value}`}
              />
              <Label
                htmlFor={`${idPrefix}-frequency-${option.value}`}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          data-ocid={`${idPrefix}.submit_button`}
          disabled={subscribe.isPending}
          className="button-cta w-full sm:w-auto"
        >
          {subscribe.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
        {subscribe.isError ? (
          <p
            data-ocid={`${idPrefix}.error_state`}
            className="text-xs text-destructive"
          >
            Something went wrong. Please try again.
          </p>
        ) : null}
        <p className="text-xs text-muted-decorative">
          We never share your information.
        </p>
      </div>
    </form>
  );

  if (variant === "home") {
    return (
      <section
        data-ocid="home.newsletter.section"
        aria-label="Newsletter signup"
        className="bg-background py-20 md:py-24 px-4"
      >
        <div className="max-w-5xl mx-auto newsletter-card flex flex-col md:flex-row md:items-center gap-6">
          {heading}
          {subscribed ? successState : form}
        </div>
      </section>
    );
  }

  return (
    <div className="newsletter-card mb-12 flex flex-col md:flex-row md:items-center gap-6">
      {heading}
      {subscribed ? successState : form}
    </div>
  );
}

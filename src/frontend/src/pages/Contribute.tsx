import { Layout } from "@/components/Layout";
import { TopicBadge } from "@/components/TopicBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import {
  useMyContributions,
  useSubmitContribution,
} from "@/hooks/useContributions";
import { ContributionStatus, TOPIC_LABELS, type Topic } from "@/types";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  Lightbulb,
  Send,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const STATUS_CONFIG: Record<
  ContributionStatus,
  { label: string; icon: React.ReactNode; className: string }
> = {
  [ContributionStatus.pending]: {
    label: "Pending Review",
    icon: <Clock className="size-3.5" />,
    className: "bg-chart-5/15 text-foreground border-chart-5/30",
  },
  [ContributionStatus.approved]: {
    label: "Approved",
    icon: <CheckCircle2 className="size-3.5" />,
    className: "bg-accent/15 text-accent-foreground border-accent/25",
  },
  [ContributionStatus.rejected]: {
    label: "Not Approved",
    icon: <XCircle className="size-3.5" />,
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

interface FormState {
  authorName: string;
  title: string;
  topic: string;
  content: string;
  businessContext: string;
}

const EMPTY_FORM: FormState = {
  authorName: "",
  title: "",
  topic: "",
  content: "",
  businessContext: "",
};

function SubmissionForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const submit = useSubmitContribution();

  const set = (field: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.authorName.trim())
      next.authorName = "Your name or business name is required.";
    if (!form.title.trim()) next.title = "A title for your guide is required.";
    if (!form.topic) next.topic = "Please select a topic.";
    if (!form.content.trim() || form.content.trim().length < 50)
      next.content = "Content must be at least 50 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submit.mutateAsync({
        authorName: form.authorName.trim(),
        title: form.title.trim(),
        topic: form.topic as Topic,
        content: form.content.trim(),
        businessContext: form.businessContext.trim(),
      });
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div
        data-ocid="contribute.success_state"
        className="flex flex-col items-center gap-4 py-12 text-center"
      >
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="size-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-1">
            Submission Received!
          </h3>
          <p className="text-muted-foreground max-w-sm">
            Thank you for sharing your knowledge. Our team will review your
            guide and notify you once it&apos;s approved.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setSubmitted(false)}
          data-ocid="contribute.submit_another_button"
        >
          Submit Another Guide
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="authorName" className="text-sm font-medium">
          Your Name or Business Name <span className="text-destructive">*</span>
        </Label>
        <input
          id="authorName"
          data-ocid="contribute.author_input"
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-2 focus:ring-ring/40 ${
            errors.authorName ? "border-destructive" : "border-input"
          }`}
          placeholder="e.g. Maria's Deli or Maria Rossi"
          value={form.authorName}
          onChange={(e) => set("authorName")(e.target.value)}
        />
        {errors.authorName && (
          <p
            data-ocid="contribute.authorName.field_error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="size-3.5" /> {errors.authorName}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="guideTitle" className="text-sm font-medium">
          Guide Title <span className="text-destructive">*</span>
        </Label>
        <input
          id="guideTitle"
          data-ocid="contribute.title_input"
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-2 focus:ring-ring/40 ${
            errors.title ? "border-destructive" : "border-input"
          }`}
          placeholder="e.g. How I Doubled My Google Maps Visibility in 30 Days"
          value={form.title}
          onChange={(e) => set("title")(e.target.value)}
        />
        {errors.title && (
          <p
            data-ocid="contribute.title.field_error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="size-3.5" /> {errors.title}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="topic" className="text-sm font-medium">
          Topic <span className="text-destructive">*</span>
        </Label>
        <Select value={form.topic} onValueChange={set("topic")}>
          <SelectTrigger
            id="topic"
            data-ocid="contribute.topic_select"
            className={errors.topic ? "border-destructive" : ""}
          >
            <SelectValue placeholder="Choose the topic that best fits your guide" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(TOPIC_LABELS).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.topic && (
          <p
            data-ocid="contribute.topic.field_error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="size-3.5" /> {errors.topic}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="content" className="text-sm font-medium">
          Your Guide Content <span className="text-destructive">*</span>
        </Label>
        <textarea
          id="content"
          data-ocid="contribute.content_textarea"
          rows={10}
          className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-2 focus:ring-ring/40 resize-y min-h-[160px] ${
            errors.content ? "border-destructive" : "border-input"
          }`}
          placeholder="Share your practical tips, strategies, and real-world experience. Be specific and actionable: the more detail the better for fellow SMB owners."
          value={form.content}
          onChange={(e) => set("content")(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          {form.content.length} characters: minimum 50 required
        </p>
        {errors.content && (
          <p
            data-ocid="contribute.content.field_error"
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="size-3.5" /> {errors.content}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="businessContext" className="text-sm font-medium">
          Business Context{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <textarea
          id="businessContext"
          data-ocid="contribute.business_context_textarea"
          rows={3}
          className="w-full rounded-lg border border-input px-3.5 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-2 focus:ring-ring/40 resize-y"
          placeholder="e.g. This guide is most useful for restaurants, delis, and food service businesses with a physical location."
          value={form.businessContext}
          onChange={(e) => set("businessContext")(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          Help readers know if this guide is relevant to their business type.
        </p>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          data-ocid="contribute.submit_button"
          className="gap-2 min-w-[160px]"
          disabled={submit.isPending}
        >
          {submit.isPending ? (
            <>
              <span className="animate-spin size-4 border-2 border-current border-t-transparent rounded-full" />
              Submitting&hellip;
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit for Review
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function SubmissionsSection() {
  const { data: contributions, isLoading } = useMyContributions();

  return (
    <section className="mt-12" data-ocid="contribute.submissions_section">
      <div className="flex items-center gap-3 mb-6">
        <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="size-4 text-primary" />
        </div>
        <h2 className="text-xl font-display font-semibold text-foreground">
          My Submissions
        </h2>
      </div>

      {isLoading && (
        <div className="space-y-3" data-ocid="contribute.loading_state">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      )}

      {!isLoading && (!contributions || contributions.length === 0) && (
        <div
          data-ocid="contribute.submissions.empty_state"
          className="flex flex-col items-center gap-3 py-12 text-center rounded-xl border border-dashed border-border bg-muted/30"
        >
          <FileText className="size-10 text-muted-foreground/50" />
          <div>
            <p className="font-medium text-foreground">No submissions yet</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Fill out the form above to share your first guide.
            </p>
          </div>
        </div>
      )}

      {!isLoading && contributions && contributions.length > 0 && (
        <div className="space-y-3">
          {contributions.map((c, i) => {
            const status = STATUS_CONFIG[c.status];
            return (
              <Card
                key={String(c.id)}
                data-ocid={`contribute.submissions.item.${i + 1}`}
                className="shadow-card hover:shadow-elevated transition-smooth"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <TopicBadge topic={c.topic} size="sm" />
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${
                            status.className
                          }`}
                        >
                          {status.icon}
                          {status.label}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground truncate">
                        {c.title}
                      </h3>
                      {c.businessContext && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {c.businessContext}
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground shrink-0">
                      {new Date(
                        Number(c.submittedAt) / 1_000_000,
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {c.status === ContributionStatus.rejected &&
                    c.rejectionReason && (
                      <div className="mt-3 flex items-start gap-2 rounded-lg bg-destructive/5 border border-destructive/20 px-3.5 py-2.5">
                        <AlertCircle className="size-4 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-destructive">
                            Reviewer feedback
                          </p>
                          <p className="text-xs text-destructive/80 mt-0.5">
                            {c.rejectionReason}
                          </p>
                        </div>
                      </div>
                    )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default function Contribute() {
  const { isAuthenticated, loginStatus, login } = useAuth();

  if (
    loginStatus !== "idle" &&
    loginStatus !== "logging-in" &&
    !isAuthenticated
  ) {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center py-32 px-4 text-center"
          data-ocid="contribute.unauthenticated_state"
        >
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Lightbulb size={28} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">
            Share Your Knowledge
          </h1>
          <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
            Sign in to submit guides and share your business expertise with the
            SMB community.
          </p>
          <Button
            type="button"
            size="lg"
            onClick={() => login()}
            data-ocid="contribute.login_button"
          >
            Sign In to Contribute
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="size-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">
                Share Your Knowledge
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Have a tip that helped your business grow? Submit a guide and
                help fellow SMB owners succeed. Every submission is reviewed by
                our team before publishing to ensure quality and accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="gap-1.5 text-xs">
                  <CheckCircle2 className="size-3" />
                  Admin reviewed before publishing
                </Badge>
                <Badge variant="secondary" className="gap-1.5 text-xs">
                  <Lightbulb className="size-3" />
                  Real experience valued
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Card className="shadow-elevated" data-ocid="contribute.form_card">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-display">
              Submit a Guide
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Fields marked with <span className="text-destructive">*</span> are
              required.
            </p>
          </CardHeader>
          <CardContent>
            <SubmissionForm />
          </CardContent>
        </Card>

        <SubmissionsSection />
      </div>
    </Layout>
  );
}

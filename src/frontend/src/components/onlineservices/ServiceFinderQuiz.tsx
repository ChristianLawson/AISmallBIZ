import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

interface QuizResult {
  services: string[];
  reason: string;
}

function getRecommendations(
  entityType: string,
  stage: string,
  compliance: string,
): QuizResult {
  if (entityType === "llc" && stage === "startup" && compliance === "yes") {
    return {
      services: ["ZenBusiness", "Northwest Registered Agent"],
      reason:
        "Best all-in-one LLC formation with ongoing compliance support for new founders.",
    };
  }
  if (entityType === "llc" && stage === "startup" && compliance === "no") {
    return {
      services: ["Swyft Filings", "ZenBusiness"],
      reason:
        "Fast, affordable LLC formation with easy online setup: no ongoing compliance needed.",
    };
  }
  if (entityType === "corp" && stage === "startup") {
    return {
      services: ["Clerky", "Stripe Atlas"],
      reason:
        "Delaware C-Corp with VC-standard documentation: built for startups raising investment.",
    };
  }
  if (entityType === "llc" && stage === "scaling") {
    return {
      services: ["BizFilings", "MyCorporation"],
      reason:
        "Multi-state compliance and IP protection for scaling businesses expanding nationally.",
    };
  }
  if (entityType === "sole" || entityType === "dba") {
    return {
      services: ["Rocket Lawyer", "ZenBusiness"],
      reason:
        "Legal document templates and simple formation for sole proprietors and DBA registrations.",
    };
  }
  if (stage === "scaling") {
    return {
      services: ["BizFilings", "Gusto"],
      reason:
        "Multi-state compliance and full HR/payroll infrastructure for scaling operations.",
    };
  }
  return {
    services: ["ZenBusiness", "Rocket Lawyer"],
    reason:
      "Solid all-around formation and legal document support for most business types.",
  };
}

export function ServiceFinderQuiz() {
  const [step, setStep] = useState(0);
  const [entityType, setEntityType] = useState("");
  const [stage, setStage] = useState("");
  const [_compliance, setCompliance] = useState("");
  const [result, setResult] = useState<QuizResult | null>(null);

  const finish = (comp: string) => {
    setCompliance(comp);
    setResult(getRecommendations(entityType, stage, comp));
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setEntityType("");
    setStage("");
    setCompliance("");
    setResult(null);
  };

  return (
    <div
      className="rounded-2xl p-6 mb-12"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.28 0.12 330 / 0.06) 0%, oklch(0.55 0.14 85 / 0.06) 100%)",
        border: "1px solid oklch(0.28 0.12 330 / 0.2)",
      }}
      data-ocid="online-services-guide.service_finder_quiz"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
          style={{
            background: "oklch(0.28 0.12 330 / 0.12)",
            color: "oklch(0.28 0.12 330)",
          }}
        >
          ⚡
        </div>
        <div>
          <h3
            className="font-display text-lg font-bold"
            style={{ color: "oklch(0.28 0.12 330)" }}
          >
            60-Second Service Finder
          </h3>
          <p className="text-xs text-muted-foreground">
            3 quick questions → your top 2 recommended services
          </p>
        </div>
        {step > 0 && step < 3 && (
          <div className="ml-auto flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-6 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background:
                    i < step
                      ? "oklch(0.28 0.12 330)"
                      : "oklch(0.28 0.12 330 / 0.2)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {step === 0 && (
        <div data-ocid="online-services-guide.quiz_start">
          <p className="text-sm text-muted-foreground mb-4">
            What are you forming?
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { val: "llc", label: "LLC" },
              { val: "corp", label: "Corporation (C-Corp / S-Corp)" },
              { val: "sole", label: "Sole Proprietor" },
              { val: "dba", label: "DBA (Doing Business As)" },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => {
                  setEntityType(opt.val);
                  setStep(1);
                }}
                data-ocid={`online-services-guide.quiz_entity_${opt.val}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 hover:shadow-sm"
                style={{
                  background: "oklch(0.98 0.005 75)",
                  border: "1px solid oklch(0.28 0.12 330 / 0.2)",
                  color: "oklch(0.28 0.12 330)",
                }}
              >
                <ArrowRight size={14} className="shrink-0" />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div data-ocid="online-services-guide.quiz_stage">
          <p className="text-sm text-muted-foreground mb-4">
            Are you a startup or scaling?
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { val: "startup", label: "🌱 Startup: just getting started" },
              { val: "growing", label: "📈 Growing: 1-3 years in" },
              { val: "scaling", label: "🚀 Scaling: expanding operations" },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => {
                  setStage(opt.val);
                  setStep(2);
                }}
                data-ocid={`online-services-guide.quiz_stage_${opt.val}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-sm"
                style={{
                  background: "oklch(0.98 0.005 75)",
                  border: "1px solid oklch(0.28 0.12 330 / 0.2)",
                  color: "oklch(0.28 0.12 330)",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div data-ocid="online-services-guide.quiz_compliance">
          <p className="text-sm text-muted-foreground mb-4">
            Do you need ongoing compliance support?
          </p>
          <div className="flex gap-3">
            {[
              {
                val: "yes",
                label: "Yes: remind me about annual reports, renewals",
              },
              { val: "no", label: "No: I will handle compliance myself" },
            ].map((opt) => (
              <button
                key={opt.val}
                type="button"
                onClick={() => finish(opt.val)}
                data-ocid={`online-services-guide.quiz_compliance_${opt.val}`}
                className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 hover:shadow-sm"
                style={{
                  background: "oklch(0.98 0.005 75)",
                  border: "1px solid oklch(0.28 0.12 330 / 0.2)",
                  color: "oklch(0.28 0.12 330)",
                }}
              >
                <ArrowRight size={14} className="shrink-0" />
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && result && (
        <div data-ocid="online-services-guide.quiz_result">
          <div
            className="rounded-xl p-4 mb-4"
            style={{
              background: "oklch(0.55 0.16 145 / 0.08)",
              border: "1px solid oklch(0.55 0.16 145 / 0.25)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ color: "oklch(0.40 0.12 145)" }}
            >
              ✓ Your Top Recommendations
            </p>
            <div className="flex flex-wrap gap-3 mb-3">
              {result.services.map((svc) => (
                <span
                  key={svc}
                  className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl"
                  style={{
                    background: "oklch(0.28 0.12 330)",
                    color: "oklch(0.97 0.006 75)",
                  }}
                >
                  <CheckCircle size={14} />
                  {svc}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">{result.reason}</p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: "oklch(0.28 0.12 330)" }}
            data-ocid="online-services-guide.quiz_restart_button"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}

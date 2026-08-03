import { Check, ClipboardCheck, Printer, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Interactive, printable hiring interview checklist.
 *
 * - Checkboxes persist their checked state across visits via localStorage.
 * - "Print Checklist" button triggers window.print() and is hidden on print.
 * - Leverages the global @media print stylesheet in index.css (light bg,
 *   hidden nav/buttons, visible checkboxes, 11pt font).
 * - Section wrapped in <section id="hiring-checklist"> for anchor navigation.
 */

const STORAGE_KEY = "aisb:hiring-checklist:v1";

type ChecklistItem = { id: string; text: string };
type ChecklistGroup = { category: string; items: ChecklistItem[] };

const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    category: "Empathy",
    items: [
      {
        id: "emp-1",
        text: "Ask the candidate to describe a time they helped a struggling coworker or customer",
      },
      {
        id: "emp-2",
        text: "Listen for genuine concern, not performance: note specific actions they took",
      },
      {
        id: "emp-3",
        text: "Present a real workplace conflict scenario and ask how they would resolve it",
      },
      {
        id: "emp-4",
        text: "Watch whether they ask clarifying questions before jumping to a solution",
      },
      {
        id: "emp-5",
        text: "Check that they credit others and avoid blaming individuals in past stories",
      },
    ],
  },
  {
    category: "Accountability",
    items: [
      {
        id: "acc-1",
        text: "Ask about a project that failed and what they personally owned in the failure",
      },
      {
        id: "acc-2",
        text: 'Listen for "I" statements about mistakes, not "we" deflections',
      },
      {
        id: "acc-3",
        text: "Verify they describe what they changed in their process afterward",
      },
      {
        id: "acc-4",
        text: "Ask how they handle missed deadlines: look for proactive communication",
      },
      {
        id: "acc-5",
        text: "Confirm references can speak to their follow-through on commitments",
      },
    ],
  },
  {
    category: "Ethics",
    items: [
      {
        id: "eth-1",
        text: "Ask about a time they faced an ethical dilemma at work",
      },
      {
        id: "eth-2",
        text: "Listen for willingness to escalate, even at personal cost",
      },
      {
        id: "eth-3",
        text: "Present a pressure-to-cut-corners scenario and ask for their response",
      },
      {
        id: "eth-4",
        text: "Verify they can articulate a personal principle, not just company policy",
      },
      {
        id: "eth-5",
        text: "Check that they distinguish between legal compliance and doing right",
      },
    ],
  },
  {
    category: "Teamwork",
    items: [
      {
        id: "tea-1",
        text: "Ask the candidate to describe their most effective team and their role in it",
      },
      {
        id: "tea-2",
        text: "Listen for how they handle disagreement with a teammate",
      },
      {
        id: "tea-3",
        text: "Present a scenario where a teammate is underperforming and ask their approach",
      },
      {
        id: "tea-4",
        text: "Check whether they describe building others up, not just their own wins",
      },
      {
        id: "tea-5",
        text: "Ask what they look for in teammates: look for complementary, not identical, skills",
      },
    ],
  },
  {
    category: "Patterns",
    items: [
      {
        id: "pat-1",
        text: "Review the candidate's career history for growth, not just tenure",
      },
      {
        id: "pat-2",
        text: "Look for repeated themes in their stories: leadership, problem-solving, mentorship",
      },
      {
        id: "pat-3",
        text: "Ask why they left each prior role: watch for consistent, honest framing",
      },
      {
        id: "pat-4",
        text: "Check for a pattern of staying long enough to deliver outcomes, not just starting",
      },
      {
        id: "pat-5",
        text: "Note whether their stated strengths show up consistently across examples",
      },
    ],
  },
  {
    category: "Values",
    items: [
      {
        id: "val-1",
        text: "Ask what they value most in a workplace and listen for specificity",
      },
      {
        id: "val-2",
        text: "Compare their stated values to your company's stated values: flag mismatches",
      },
      {
        id: "val-3",
        text: "Ask about a time they had to compromise a value and how they reconciled it",
      },
      {
        id: "val-4",
        text: "Check that their values show up in their past decisions, not just their words",
      },
      {
        id: "val-5",
        text: "Verify they can name a value they would not compromise for any job",
      },
    ],
  },
  {
    category: "Behavior",
    items: [
      {
        id: "beh-1",
        text: "Observe how they treat reception staff and anyone not interviewing them",
      },
      {
        id: "beh-2",
        text: "Note body language: eye contact, posture, attentiveness throughout",
      },
      {
        id: "beh-3",
        text: "Watch how they respond to a question they cannot answer: deflection vs honesty",
      },
      {
        id: "beh-4",
        text: "Check whether they interrupt, listen actively, or dominate the conversation",
      },
      {
        id: "beh-5",
        text: "Ask a curveball question and observe composure under unexpected pressure",
      },
    ],
  },
];

const ALL_IDS = CHECKLIST_GROUPS.flatMap((g) => g.items.map((i) => i.id));

function loadState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, boolean>;
    return ALL_IDS.reduce<Record<string, boolean>>((acc, id) => {
      acc[id] = Boolean(parsed[id]);
      return acc;
    }, {});
  } catch {
    return {};
  }
}

export function HiringChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setChecked(loadState());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* storage may be unavailable (private mode): silently ignore */
    }
  }, [checked]);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const resetAll = () => {
    const cleared = ALL_IDS.reduce<Record<string, boolean>>((acc, id) => {
      acc[id] = false;
      return acc;
    }, {});
    setChecked(cleared);
  };

  const handlePrint = () => window.print();

  const completedCount = ALL_IDS.filter((id) => checked[id]).length;
  const totalCount = ALL_IDS.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return (
    <section
      id="hiring-checklist"
      data-ocid="hiring.checklist.section"
      className="card-guide print:rounded-none print:border print:p-4 print:shadow-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-5 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
            <ClipboardCheck size={20} className="text-[#6366F1]" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Hiring Interview Checklist
            </h2>
            <p className="text-sm text-muted-foreground">
              A printable, step-by-step checklist for every hire you make.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetAll}
            data-ocid="hiring.checklist.reset_button"
            aria-label="Reset all checklist items"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:border-[#6366F1]/40 hover:text-[#6366F1] transition-colors duration-200"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            type="button"
            onClick={handlePrint}
            data-ocid="hiring.checklist.print_button"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366F1] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors duration-200"
          >
            <Printer size={14} />
            Print Checklist
          </button>
        </div>
      </div>

      {/* Print header: only visible when printing */}
      <div className="hidden print:block mb-6 pb-3 border-b border-gray-400">
        <div className="text-2xl font-bold">Hiring Interview Checklist</div>
        <div className="text-sm text-gray-700 mt-1">
          AISmallBiz.org: Hiring for Character &amp; Culture Fit
        </div>
      </div>

      {/* On-screen title (hidden on print) */}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 print:hidden">
        Hiring Interview Checklist
      </h2>
      <p className="text-muted-foreground text-base mb-5 max-w-2xl print:hidden">
        Work through every group before you extend an offer. Your progress saves
        automatically: close the tab and come back any time.
      </p>

      {/* Progress bar (screen only) */}
      <div className="mb-6 print:hidden">
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-1.5">
          <span>
            {completedCount} of {totalCount} complete
          </span>
          <span className="text-[#6366F1]">{progressPct}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-[#6366F1] rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Checklist grid */}
      <div className="grid md:grid-cols-2 gap-5 print:grid-cols-2 print:gap-4">
        {CHECKLIST_GROUPS.map((group, gi) => (
          <div
            key={group.category}
            data-ocid={`hiring.checklist.group.${gi + 1}`}
            className="rounded-xl border border-border bg-card p-5 print:rounded-none print:border print:border-gray-400 print:p-3"
          >
            <div className="font-display text-base font-bold text-foreground mb-3 pb-2 border-b border-border print:border-gray-400">
              {group.category}
            </div>
            <ul className="space-y-2.5">
              {group.items.map((item, ii) => {
                const isChecked = Boolean(checked[item.id]);
                return (
                  <li
                    key={item.id}
                    data-ocid={`hiring.checklist.item.${gi + 1}.${ii + 1}`}
                    className="flex items-start gap-3"
                  >
                    <div className="relative shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        aria-checked={isChecked}
                        aria-label={item.text}
                        onChange={() => toggle(item.id)}
                        data-ocid={`hiring.checklist.checkbox.${gi + 1}.${ii + 1}`}
                        className={`w-5 h-5 rounded border-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-1 appearance-none cursor-pointer ${
                          isChecked
                            ? "bg-[#6366F1] border-[#6366F1] text-white"
                            : "bg-card border-[#6366F1]/40 hover:border-[#6366F1]"
                        } print:border-gray-700 print:bg-white print:text-black print:appearance-auto`}
                      />
                      {isChecked && (
                        <Check
                          size={12}
                          strokeWidth={3}
                          className="print:!text-black pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white print:hidden"
                        />
                      )}
                    </div>
                    <span
                      className={`text-sm leading-relaxed flex-1 ${
                        isChecked
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      } print:text-black print:no-underline`}
                    >
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-6 rounded-xl border border-[#C7D2FE] bg-[#EEF2FF] p-4 text-center print:mt-4 print:border-gray-400 print:bg-gray-50">
        <p className="text-sm font-semibold text-foreground italic mb-1 print:text-black">
          Hire for character. Train for skill. The checklist above is your
          guardrail against a costly mis-hire.
        </p>
        <p className="text-xs text-muted-foreground print:text-gray-700">
          : AISmallBiz.org Hiring Guide
        </p>
      </div>
    </section>
  );
}

export default HiringChecklistSection;

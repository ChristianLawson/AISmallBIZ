import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { IndustryBrandingData } from "@/data/industryBrandingData";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight, Printer } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface IndustryCardProps {
  industryKey: string;
  data: IndustryBrandingData;
  index: number;
}

function IndustryWorksheet({
  data,
  industryKey,
}: {
  data: IndustryBrandingData;
  industryKey: string;
}) {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [voice, setVoice] = useState<string[]>([]);
  const [showStatement, setShowStatement] = useState(false);

  const setField = (id: string, value: string) => {
    setFields((prev) => ({ ...prev, [id]: value }));
  };

  const toggleVoice = (v: string) => {
    setVoice((prev) =>
      prev.includes(v)
        ? prev.filter((x) => x !== v)
        : prev.length < 2
          ? [...prev, v]
          : prev,
    );
  };

  const filled = data.worksheetFields.map((f) => fields[f.id] || "");
  const allFilled = filled.every((v) => v.trim().length > 0);

  const brandStatement = allFilled
    ? `We exist because ${filled[0]}. We help ${filled[3]} solve ${filled[1]}. Our brand is ${voice.length ? voice.join(" and ") : "[choose voice]"}.`
    : "";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="bg-card border border-primary/15 rounded-xl p-4 space-y-4"
      data-ocid={`${industryKey}.worksheet`}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h4 className="font-display font-bold text-base text-foreground">
          Brand Storytelling Worksheet
        </h4>
        <button
          type="button"
          onClick={handlePrint}
          data-ocid={`${industryKey}.print_worksheet_button`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/40 transition-colors duration-200"
        >
          <Printer size={14} />
          Print
        </button>
      </div>

      <div className="space-y-3">
        {data.worksheetFields.map((field, idx) => (
          <div key={field.id} className="space-y-1">
            <label
              className="block text-sm font-semibold text-foreground"
              htmlFor={`${industryKey}-${field.id}`}
            >
              <span className="text-primary font-mono mr-1">{idx + 1}.</span>
              {field.label}
            </label>
            {idx < 2 ? (
              <textarea
                data-ocid={`${industryKey}.worksheet_input.${idx + 1}`}
                value={fields[field.id] || ""}
                onChange={(e) => setField(field.id, e.target.value)}
                rows={2}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none transition-colors"
                id={`${industryKey}-${field.id}`}
              />
            ) : (
              <input
                type="text"
                data-ocid={`${industryKey}.worksheet_input.${idx + 1}`}
                value={fields[field.id] || ""}
                onChange={(e) => setField(field.id, e.target.value)}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                id={`${industryKey}-${field.id}`}
              />
            )}
          </div>
        ))}

        <div className="space-y-1.5">
          <p className="block text-sm font-semibold text-foreground">
            <span className="text-primary font-mono mr-1">5.</span> My brand
            voice is (choose 2):
          </p>
          <div
            className="flex flex-wrap gap-1.5"
            data-ocid={`${industryKey}.voice_selector`}
          >
            {data.voiceOptions.map((v) => (
              <button
                key={v}
                type="button"
                data-ocid={`${industryKey}.voice_option.${v.toLowerCase()}`}
                onClick={() => toggleVoice(v)}
                className={`px-3 py-1 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                  voice.includes(v)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          {voice.length === 2 && (
            <p className="text-sm text-muted-foreground">
              You&apos;ve selected 2 voice traits. Click one to deselect before
              choosing another.
            </p>
          )}
        </div>
      </div>

      <div>
        <button
          type="button"
          data-ocid={`${industryKey}.generate_statement_button`}
          onClick={() => setShowStatement(true)}
          disabled={!allFilled}
          className="button-cta w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate My Brand Statement
        </button>
      </div>

      {showStatement && brandStatement && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-ocid={`${industryKey}.statement_result`}
          className="rounded-lg bg-primary/8 border border-primary/20 px-4 py-3"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
            Your Brand Statement
          </p>
          <p className="font-display font-semibold text-foreground text-sm leading-relaxed">
            &ldquo;{brandStatement}&rdquo;
          </p>
        </motion.div>
      )}
    </div>
  );
}

function IndustrySizeTabs({
  data,
  industryKey,
}: {
  data: IndustryBrandingData;
  industryKey: string;
}) {
  const [activeTab, setActiveTab] = useState<string>(
    data.businessSizeTabs[0]?.id || "micro",
  );
  const _activeTabData =
    data.businessSizeTabs.find((t) => t.id === activeTab) ??
    data.businessSizeTabs[0];

  return (
    <div data-ocid={`${industryKey}.size_tabs`}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full flex-wrap h-auto gap-1 mb-3 bg-muted/50">
          {data.businessSizeTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              data-ocid={`${industryKey}.tab.${tab.id}`}
              className="text-xs px-2 py-1"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.businessSizeTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {tab.intro}
              </p>
              <div className="space-y-3">
                {tab.items.map((item, i) => (
                  <div
                    key={item.title}
                    data-ocid={`${industryKey}.strategy.${tab.id}.${i + 1}`}
                    className="rounded-lg border border-primary/10 bg-background/50 p-3"
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-primary/40 shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h5 className="font-semibold text-foreground text-sm">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2 ml-5">
                      {item.body}
                    </p>
                    <div className="ml-5 border-l-2 border-primary/30 bg-primary/5 rounded-r-md px-3 py-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide block mb-0.5">
                        Example:
                      </span>
                      <p className="text-sm text-foreground/80 italic leading-snug">
                        {item.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export function IndustryCard({ data, industryKey, index }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="h-full"
    >
      <div
        className={`rounded-xl border-2 ${data.color} ${data.bg} p-5 transition-all duration-200 hover:shadow-premium h-full flex flex-col`}
        data-ocid={`branding.industry_card.${industryKey}`}
      >
        {/* Card Header */}
        <div className="mb-4">
          <div className="text-3xl mb-2">{data.emoji}</div>
          <h3 className="font-display font-bold text-foreground mb-2">
            {data.label}
          </h3>
          <ul className="space-y-1">
            {data.principles.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary mt-0.5 shrink-0">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <a
            href={`${data.to}#${data.hash}`}
            data-ocid={`${industryKey}.guide_link`}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            See {data.label} Branding Guide <ChevronRight size={12} />
          </a>
        </div>

        {/* Accordion Q&A */}
        <div className="mb-4 flex-1">
          <h4 className="font-display font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs">
              ?
            </span>
            Common Questions
          </h4>
          <AccordionPrimitive.Root type="multiple" className="space-y-2">
            {data.qa.map((item, idx) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                data-ocid={`${industryKey}.qa.item.${idx + 1}`}
                className="rounded-lg border border-border bg-card overflow-hidden shadow-card"
              >
                <AccordionTrigger
                  data-ocid={`${industryKey}.qa.question.${idx + 1}`}
                  className="group w-full flex items-center justify-between gap-3 px-3 py-3 text-left cursor-pointer text-sm font-semibold text-foreground [&[data-state=open]>svg]:rotate-180"
                >
                  <span className="leading-snug">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div
                    data-ocid={`${industryKey}.qa.answer.${idx + 1}`}
                    className="px-3 pb-3 pt-0 text-sm text-muted-foreground leading-relaxed"
                  >
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionPrimitive.Root>
        </div>

        {/* Worksheet */}
        <div className="mb-4">
          <IndustryWorksheet data={data} industryKey={industryKey} />
        </div>

        {/* Business Size Tabs */}
        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs">
              📊
            </span>
            Strategies by Business Size
          </h4>
          <IndustrySizeTabs data={data} industryKey={industryKey} />
        </div>
      </div>
    </motion.div>
  );
}

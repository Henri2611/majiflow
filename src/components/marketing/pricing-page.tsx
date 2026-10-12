"use client";

import { useState } from "react";
import { Check, Minus, ShieldCheck, WandSparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "@/components/shared/pricing-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { Accordion } from "@/components/ui/accordion";
import { plans } from "@/lib/data/plans";
import type { Plan, PlanName } from "@/lib/types";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

const comparison: { feature: string; plans: (string | boolean)[] }[] = [
  { feature: "Business profile & online menu", plans: [true, true, true] },
  { feature: "Orders from the website", plans: [true, true, true] },
  { feature: "M-Pesa checkout", plans: [true, true, true] },
  { feature: "Sales reports from your own orders", plans: [true, true, true] },
  { feature: "Advanced analytics & charts", plans: [false, true, true] },
  { feature: "Promotions dashboard", plans: [false, true, true] },
  { feature: "Stock alerts", plans: [true, true, true] },
  { feature: "Staff accounts", plans: [false, "Planned", "Planned"] },
  { feature: "Customer SMS & WhatsApp updates", plans: [false, "Planned", "Planned"] },
  { feature: "Priority listing in search", plans: [false, "Planned", "Planned"] },
  { feature: "Card payments", plans: ["Planned", "Planned", "Planned"] },
  { feature: "Recurring orders", plans: ["Planned", "Planned", "Planned"] },
  { feature: "Custom branding & domain", plans: [false, false, "Planned"] },
  { feature: "Multiple branches & fleets", plans: [false, false, "Planned"] },
  { feature: "Priority WhatsApp support", plans: [false, false, "Planned"] },
  { feature: "Dedicated account manager", plans: [false, false, "Planned"] },
];

const planIds: PlanName[] = ["starter", "growth", "pro"];

export function PricingPage() {
  const [billing, setBilling] = useState<Billing>("annual");
  const { toast } = useToast();

  const choose = (plan: Plan) =>
    toast({
      kind: "success",
      title: `${plan.name} selected`,
      message: "Start your 14-day free trial and set up billing whenever you are ready.",
    });

  const planMap = Object.fromEntries(plans.map((p) => [p.id, p])) as Record<PlanName, Plan>;

  return (
    <>
      <PageHero
        label="Pricing"
        pulseLabel
        title={
          <>
            A subscription, <span className="text-gradient">not a commission</span>
          </>
        }
        description="Simple flat monthly pricing with no commission on orders. Every plan starts with a 14-day free trial, so you only start paying once your station is taking orders."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex justify-center">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.id} className={plan.highlighted ? "lg:-mt-4" : ""}>
                <PricingCard plan={plan} annual={billing === "annual"} onChoose={choose} />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-success/25 bg-transparent-soft/40 p-6 sm:flex-row">
            <ShieldCheck className="size-6 shrink-0 text-success" aria-hidden />
            <p className="flex-1 text-sm leading-relaxed text-foreground/85">
              <strong className="font-semibold text-foreground">No surprise fees, ever.</strong> You
              keep the full KES price customers pay. Cancel anytime - export your data and your
              profile stays live until the end of the billing period.
            </p>
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            label="Compare plans"
            title={
              <>
                What is included <span className="text-gradient">and what is coming</span>
              </>
            }
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full min-w-[640px] border-collapse bg-white text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Feature
                  </th>
                  {planIds.map((id) => (
                    <th key={id} scope="col" className="px-6 py-4 text-center">
                      <span className={cn("font-display text-base", planMap[id].highlighted && "text-[#0052FF]")}>
                        {planMap[id].name}
                      </span>
                      {planMap[id].highlighted && (
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#0052FF]">
                          Most popular
                        </p>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="px-6 py-3.5 font-medium text-foreground">{row.feature}</td>
                    {row.plans.map((val, i) => (
                      <td key={i} className="px-6 py-3.5 text-center">
                        {val === true ? (
                          <span className="inline-flex size-5 items-center justify-center rounded-full bg-transparent-soft text-success">
                            <Check className="size-3" strokeWidth={3} aria-hidden />
                          </span>
                        ) : val === false ? (
                          <span className="inline-flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
                            <Minus className="size-3" aria-hidden />
                          </span>
                        ) : (
                          <span className="font-mono text-xs text-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Value section */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            label="The business value"
            title={
              <>
                What your money <span className="text-gradient">actually buys</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: WandSparkles,
                title: "An online storefront",
                text: "The station profile, menu, prices and delivery zones your customers see, ready to share and order from.",
              },
              {
                icon: ShieldCheck,
                title: "Prepaid payments",
                text: "Customers pay with M-Pesa before dispatch, and every payment is reconciled against the order in your dashboard.",
              },
              {
                icon: Check,
                title: "Retention tools",
                text: "Repeat reminders, loyalty tools and promotions help customers come back, alongside the repeat-rate and customer insights built into every dashboard.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-white p-7 shadow-card">
                <span className="flex size-11 items-center justify-center rounded-xl bg-neutral-100 text-black shadow-accent">
                  <v.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl text-foreground">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container size="md">
          <SectionHeading
            label="Pricing FAQs"
            title={
              <>
                Questions about <span className="text-gradient">billing</span>
              </>
            }
          />
          <Accordion
            className="mt-10"
            items={[
              { q: "How does the free trial work?", a: "Every plan starts with a 14-day free trial. We only charge you once the trial ends, and you can cancel before then at no cost." },
              { q: "Which payment methods can my customers use?", a: "Customers can pay with M-Pesa at checkout, and with card where a station accepts it. Payments settle to your station account." },
              { q: "Can I change plans at any time?", a: "Yes. You can move up or down between plans from your billing settings, and the change is prorated on your next invoice." },
              { q: "What is included in every plan?", a: "Every plan includes your online profile, product catalogue, order management, customer list, sales reports, stock alerts and M-Pesa checkout. Advanced analytics and the promotions dashboard are part of Growth and Pro." },
            ]}
          />
          <div className="mt-10 text-center">
            <Button size="lg" onClick={() => choose(plans[0])}>
              Start free trial
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function BillingToggle({ billing, onChange }: { billing: Billing; onChange: (b: Billing) => void }) {
  return (
    <div className="flex items-center rounded-xl border border-border bg-white p-1 shadow-card" role="group" aria-label="Billing period">
      {(["monthly", "annual"] as const).map((b) => (
        <button
          key={b}
          onClick={() => onChange(b)}
          aria-pressed={billing === b}
          className={cn(
            "relative rounded-lg px-4 py-2 text-sm font-semibold min-h-11",
            billing === b ? "text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {billing === b && <span aria-hidden className="absolute inset-0 rounded-lg bg-transparent shadow-accent" />}
          <span className="relative">
            {b === "monthly" ? "Monthly" : "Annual"}
            {b === "annual" && (
              <span className={cn("ml-1.5 rounded-full px-1.5 py-0.5 font-mono text-[10px]", billing === b ? "bg-white/20 text-white" : "bg-transparent-soft text-success")}>
                −17%
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
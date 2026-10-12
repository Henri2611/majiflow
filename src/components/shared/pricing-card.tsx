"use client";

import { Check, ArrowRight, Clock } from "lucide-react";
import type { Plan } from "@/lib/types";
import { formatKES } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: Plan;
  annual: boolean;
  onChoose?: (plan: Plan) => void;
  className?: string;
}

export function PricingCard({ plan, annual, onChoose, className }: PricingCardProps) {
  const price = annual ? plan.annualPrice / 12 : plan.monthlyPrice;
  const highlighted = Boolean(plan.highlighted);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1",
        highlighted
          ? "border-[#0052FF] shadow-[0_28px_60px_-28px_rgba(0,82,255,0.5)] ring-1 ring-[#0052FF]/20"
          : "border-border shadow-card hover:shadow-layered",
        className
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0052FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-accent">
          Most popular
        </span>
      )}

      <h3 className="font-display text-2xl text-foreground">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-[2.75rem] leading-none font-bold tracking-tight text-foreground">
          {formatKES(Math.round(price))}
        </span>
        <span className="pb-1 text-sm text-muted-foreground">/ month</span>
      </div>
      <p className="mt-2 text-xs font-medium text-muted-foreground">
        {annual ? `Billed annually · ${formatKES(plan.annualPrice)}/yr` : "Billed monthly"}
      </p>

      <div className="my-6 h-px bg-border" />

      <ul className="flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0052FF]/10 text-[#0052FF]">
              <Check className="size-3" strokeWidth={3} aria-hidden />
            </span>
            {f}
          </li>
        ))}
        {plan.planned?.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Clock className="size-3" aria-hidden />
            </span>
            <span>
              {f}
              <span className="ml-1.5 rounded-full bg-muted px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide">
                Planned
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          size="lg"
          variant={highlighted ? "default" : "secondary"}
          onClick={() => onChoose?.(plan)}
          className="group w-full"
          aria-label={`Choose the ${plan.name} plan`}
        >
          {plan.cta}
          <ArrowRight className="size-4" aria-hidden />
        </Button>
        <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {plan.audience}
        </p>
      </div>
    </div>
  );
}

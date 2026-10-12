import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-60" />
      <div className="pointer-events-none absolute inset-0 animate-float">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent/25 blur-[130px]"
        />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <AnimatedSection className="flex flex-col items-center gap-5">
            <SectionLabel tone="dark" pulse>
              Clean water, close to home
            </SectionLabel>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              See the whole flow <span className="text-gradient">before you trust it.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Compare stations, build a cart, pay with M-Pesa and track your delivery to the gate.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/browse">
                <Button size="lg" className="group w-full sm:w-auto">
                  <LayoutDashboard className="size-4" aria-hidden />
                  Browse the stations
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </Link>
              <Link href="/business">
                <Button size="lg" variant="dark" className="group w-full sm:w-auto">
                  Open the dashboard
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </Link>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              M-Pesa &amp; card · Order tracking · Verified stations
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
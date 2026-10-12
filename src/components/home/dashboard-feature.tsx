import Link from "next/link";
import { CheckCircle2, LayoutDashboard, Repeat2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/animated-section";

const checklist = [
  "Accept or reject orders and move them to delivered",
  "Set a delivery fee and free-delivery minimum per station",
  "Stock alerts before a product runs out",
  "A customer list with order history and repeat rate",
  "Sales charts and popular products from stored orders",
];

export function DashboardFeature() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              label="The business dashboard"
              title={
                <>
                  A dashboard built for a{" "}
                  <span className="text-gradient">busy station</span>
                </>
              }
              description="Every panel is a page in your dashboard, filled with your live orders and stock."
            />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {checklist.map((c) => (
                <StaggerItem key={c}>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
                    <p className="text-sm leading-relaxed text-foreground/85">{c}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <AnimatedSection delay={0.2} className="mt-9">
              <div className="flex flex-wrap gap-3">
                <Link href="/business">
                  <Button size="lg" className="group">
                    Explore the dashboard
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Button>
                </Link>
                <Link href="/business/register">
                  <Button size="lg" variant="secondary">
                    Open the dashboard
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Dashboard preview */}
          <AnimatedSection delay={0.1} className="relative">
            <div aria-hidden className="pointer-events-none absolute -inset-8 bg-radial-glow" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-layered">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <LayoutDashboard className="size-4 text-[#0052FF]" aria-hidden />
                  BioWater Refill Station
                </div>
                <Badge variant="success">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
                  </span>
                  Growth · Live
                </Badge>
              </div>

              <div className="grid grid-cols-4 gap-3 px-5 pt-4">
                {[
                  { label: "Today", value: "KES 48,250", up: true },
                  { label: "Orders", value: "34", up: true },
                  { label: "Pending", value: "5", up: false },
                  { label: "Out", value: "9", up: false },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-muted/70 p-2.5">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{s.label}</p>
                    <p className="mt-0.5 truncate text-sm font-bold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5 pt-4">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Weekly revenue
                  </p>
                  <p className="text-xs font-semibold text-success">+12.4%</p>
                </div>
                <div className="mt-2 flex h-20 items-end gap-1.5">
                  {[31800, 42900, 36600, 52400, 61000, 47300, 44150].map((v, i) => (
                    <div key={i} className="relative flex-1">
                      <div
                        className="w-full rounded-t-md bg-foreground"
                        style={{ height: `${(v / 61000) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -left-4 -top-4 hidden rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-card md:flex md:items-center md:gap-2">
              <Repeat2 className="size-4 text-[#0052FF]" aria-hidden />
              <p className="text-xs font-semibold text-foreground">Repeat rate from stored orders</p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
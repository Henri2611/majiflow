import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Coins,
  PackagePlus,
  Store,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem, AnimatedSection } from "@/components/ui/animated-section";
import { CtaSection } from "@/components/home/cta-section";
import { businesses } from "@/lib/data/businesses";

const pillars = [
  {
    icon: Store,
    title: "A storefront for your station",
    text: "A page listing your products with prices in KES, your delivery fee and your free-delivery threshold. Your storefront goes live as soon as your profile is complete.",
  },
  {
    icon: BarChart3,
    title: "Numbers from your own orders",
    text: "Sales charts, popular products, stock alerts and repeat measures are computed from the orders a station has taken, not from a separate spreadsheet.",
  },
  {
    icon: Coins,
    title: "Payments that settle to you",
    text: "Customers pay by M-Pesa or card before dispatch, and every payment is reconciled against the order in your dashboard.",
  },
  {
    icon: Users,
    title: "Staff and customers together",
    text: "Staff are recorded per station with their own access, and customers are listed with their order history and totals. Status updates reach customers by SMS and WhatsApp.",
  },
  {
    icon: PackagePlus,
    title: "Change the menu from the dashboard",
    text: "Prices, stock levels and low-stock thresholds are managed in the station products and settings screens, and the customer pages read those same values.",
  },
  {
    icon: BarChart3,
    title: "Promotions that bring customers back",
    text: "Plan discounts and bundles for dormant or repeat customers, send them to the right audience, then track how many were redeemed.",
  },
];

const productsInCatalogue = businesses.reduce((total, b) => total + b.products.length, 0);
const citiesCovered = new Set(businesses.map((b) => b.city)).size;

const numbers = [
  { value: `${businesses.length}`, label: "stations live" },
  { value: `${productsInCatalogue}`, label: "products in the catalogue" },
  { value: `${citiesCovered}`, label: "cities covered" },
  { value: "14", label: "day free trial on every plan" },
];

export default function ForBusiness() {
  return (
    <>
      <PageHero
        tone="dark"
        label="For businesses"
        pulseLabel
        title={
          <>
            Your station, your prices. <span className="text-gradient">Our storefront</span>
          </>
        }
        description="Everything a water refill business needs: a customer-facing storefront, a dashboard for orders and analytics, and simple monthly pricing."
      >
        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/business/register">
            <Button size="lg" className="group w-full sm:w-auto">
              Create your station
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Link>
          <Link href="/business">
            <Button size="lg" variant="dark" className="w-full sm:w-auto">
              Open the dashboard
            </Button>
          </Link>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
          No setup fees · Cancel any time
        </p>
      </PageHero>

      <section className="relative overflow-hidden bg-transparent py-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-50" />
        <Container className="relative">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-transparent sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label} className="bg-transparent p-7 text-center">
                <p className="font-display text-3xl text-white">{n.value}</p>
                <p className="mt-1.5 text-xs text-slate-400">{n.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            label="What you get"
            title={
              <>
                Everything between your station and a{" "}
                <span className="text-gradient">standing customer</span>
              </>
            }
            description="Each card covers a part of running your station online, from your storefront to your reports."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-layered">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-transparent text-black shadow-accent transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-muted/50 py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                align="left"
                label="What the dashboard reads"
                title={
                  <>
                    Totals built from <span className="text-gradient">stored orders</span>
                  </>
                }
                description="The dashboard aggregates the orders recorded for a station, so the figures move within seconds of a new order."
              />
            </div>
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-layered">
                <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    This week · BioWater Kasarani
                  </p>
                  <Badge variant="success">Live</Badge>
                </div>
                <div className="space-y-2 px-5 py-4">
                  {[
                    { day: "Monday lunch", orders: "14 orders", ksh: "KES 6,300", highlight: false },
                    { day: "Wednesday", orders: "27 orders", ksh: "KES 12,150", highlight: false },
                    { day: "Friday", orders: "40 orders", ksh: "KES 18,000", highlight: true },
                  ].map((o) => (
                    <div
                      key={o.day}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3.5 ${o.highlight ? "border-[#0052FF]/30 bg-transparent/5" : "border-border"}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <BarChart3 className={`size-4 ${o.highlight ? "text-[#0052FF]" : "text-muted-foreground"}`} aria-hidden />
                        <p className="text-sm font-medium text-foreground">{o.day}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{o.orders}</p>
                        <p className="text-xs text-muted-foreground">{o.ksh}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border px-5 py-3.5">
                  <p className="text-sm text-muted-foreground">
                    Updated live from the order store as orders come in.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <SectionHeading
            label="Getting started"
            title={
              <>
                Set up a station in <span className="text-gradient">four steps</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {[
              { n: "01", t: "Create your profile", d: "Business name, location, a short description and a delivery fee." },
              { n: "02", t: "List your products", d: "Cans, bottles, dispensers and prices in KES. Copy from a template if you like." },
              { n: "03", t: "Set delivery zones", d: "Choose estates, delivery fees and free-delivery minimums." },
              { n: "04", t: "Share the page", d: "The station gets its own URL and appears on the browse page, ready for an order." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
                  <p className="font-mono text-sm font-bold text-[#0052FF]">{s.n}</p>
                  <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link href="/business/register">
              <Button size="lg" className="group">
                Create your station
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
import Link from "next/link";
import { ArrowRight, BarChart3, Coins, PackagePlus, Store, Users } from "lucide-react";
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
    text: "Your products, prices and delivery fees on one page.",
  },
  {
    icon: BarChart3,
    title: "Numbers from your own orders",
    text: "Sales, top products and stock alerts from real orders.",
  },
  {
    icon: Coins,
    title: "Payments that settle to you",
    text: "Customers pay by M-Pesa or card, matched to each order.",
  },
  {
    icon: Users,
    title: "Staff and customers together",
    text: "Staff access, customer history and status updates.",
  },
  {
    icon: PackagePlus,
    title: "Change the menu from the dashboard",
    text: "Update prices and stock, and the customer pages follow.",
  },
  {
    icon: BarChart3,
    title: "Promotions that bring customers back",
    text: "Discounts for dormant or repeat customers, with tracking.",
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
        description="A storefront, a dashboard and simple monthly pricing."
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

      <section className="py-14">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label} className="bg-card p-7 text-center">
                <p className="font-display text-3xl text-foreground">{n.value}</p>
                <p className="mt-1.5 text-xs text-muted-foreground">{n.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            label="What you get"
            title={
              <>
                Everything between your station and a{" "}
                <span className="text-gradient">standing customer</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-neutral-100 text-black">
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

      <section className="bg-card py-16 lg:py-20">
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
                description="The dashboard aggregates the orders recorded for a station, so the figures move as orders come in."
              />
            </div>
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card">
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
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${o.highlight ? "border-[#0052FF]/30 bg-[#0052FF]/5" : "border-border"}`}
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
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
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
              { n: "01", t: "Create your profile", d: "Business name, location and a delivery fee." },
              { n: "02", t: "List your products", d: "Cans, bottles, dispensers and prices in KES." },
              { n: "03", t: "Set delivery zones", d: "Choose estates and free-delivery minimums." },
              { n: "04", t: "Share the page", d: "Your station goes live and starts taking orders." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
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

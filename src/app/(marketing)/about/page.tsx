import { HeartHandshake, Repeat, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";
import { CtaSection } from "@/components/home/cta-section";

const values = [
  {
    icon: ShieldCheck,
    title: "Verified stations",
    text: "Every station is verified before it is listed, so you know who is delivering your water and where it comes from.",
  },
  {
    icon: Repeat,
    title: "Built around Kenyan stations",
    text: "MajiFlow works with refill stations across five Kenyan cities, each with its own products, prices, delivery fee and opening hours.",
  },
  {
    icon: Users,
    title: "Support when you need it",
    text: "Our team helps customers and stations with orders, payments and deliveries, and we keep improving the platform from what we learn.",
  },
  {
    icon: HeartHandshake,
    title: "Simple, fair pricing",
    text: "Plans are a flat monthly fee with no commission on orders, and every plan starts with a 14-day free trial.",
  },
];

const timeline = [
  {
    marker: "01",
    title: "The storefront",
    text: "Stations list their products, prices, delivery fees and opening hours, and customers order from those records.",
  },
  {
    marker: "02",
    title: "Every order",
    text: "Orders are created at checkout and stored, then moved through pending, accepted, out for delivery and delivered with each change recorded.",
  },
  {
    marker: "03",
    title: "What comes next",
    text: "Recurring refill schedules, loyalty tools and multi-branch support are on the roadmap for stations that grow with us.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About us"
        title={
          <>
            We believe the best water company in town is{" "}
            <span className="text-gradient">already in town</span>
          </>
        }
        description="MajiFlow is the software a water refill business runs its shop on: a storefront for customers, a dashboard for the station, and orders that flow between them."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                label="Why we exist"
                title="Why we build for local water."
              />
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                We build the software a water refill station needs: a page that lists products with
                prices and delivery fees, a cart that totals delivery per station, and a dashboard
                that reads the orders that came in.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                MajiFlow connects customers with independent stations across Kenya, so the water you
                drink is filtered close to home by people you can reach.
              </p>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-layered">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-neutral-100 text-black">
                      <v.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading
            label="How it is put together"
            title={
              <>
                A storefront, orders, and <span className="text-gradient">the road ahead</span>
              </>
            }
          />
          <Stagger className="mx-auto mt-12 max-w-2xl" stagger={0.1}>
            {timeline.map((t) => (
              <StaggerItem key={t.marker}>
                <div className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 font-mono text-[11px] font-bold text-black">
                      {t.marker}
                    </span>
                    {t !== timeline[timeline.length - 1] && (
                      <span className="mt-1 w-px flex-1 bg-gradient-to-b from-[#0052FF]/40 to-transparent" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-5 shadow-card">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#0052FF]">{t.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/85">{t.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <div className="rounded-3xl border border-[#0052FF]/20 bg-white p-8 text-center shadow-card sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              What we stand for
            </p>
            <p className="mx-auto mt-4 max-w-xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
              Water should be clean, affordable and close to home, and the businesses that deliver
              it should have the tools to grow.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

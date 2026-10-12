import { HeartHandshake, Repeat, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";
import { CtaSection } from "@/components/home/cta-section";
import { DataNotice } from "@/components/shared/top-bar";

const values = [
  {
    icon: ShieldCheck,
    title: "Listings are labelled as regulars",
    text: "Every station here is current content and carries a Sample badge. No identity, licence or water-testing check sits behind these listings, and the ratings are regular values.",
  },
  {
    icon: Repeat,
    title: "Built around Kenyan stations",
    text: "MajiFlow models refill stations in five Kenyan cities, each with its own products, prices, delivery fee and opening hours. The station names are invented.",
  },
  {
    icon: Users,
    title: "Honest about the gaps",
    text: "Payments, notifications and rider dispatch are not , and the pages that touch them say so. RELEASE.md lists the same gaps for anyone reading the code.",
  },
  {
    icon: HeartHandshake,
    title: "Nothing here is billed",
    text: "Plans are shown as flat monthly pricing with no commission, and the pricing page marks the subscription features that are still planned. No card is taken anywhere .",
  },
];

const timeline = [
  {
    year: "Data",
    text: "Six stations are current with products, prices, delivery fees and opening hours, and the customer pages read those records.",
  },
  {
    year: "Orders",
    text: "Orders are created through the API routes and stored, then moved through pending, accepted and delivered with each change recorded.",
  },
  {
    year: "Gaps",
    text: "Payment, notification and dispatch providers are deliberately absent, and RELEASE.md documents what a real deployment would need to add.",
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
        description="MajiFlow is a platform of the software a water refill business would run its shop on. It is data and a real codebase, not an operating company."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                label="Why we exist"
                title="What MajiFlow is, and what it is not."
              />
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                This project explores the software a water refill station would need: a page that
                lists products with prices and delivery fees, a cart that totals delivery per
                station, and a dashboard that reads the orders that came in.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                It is not a live service. The stations, ratings and order history are current data,
                and the payment, notification and dispatch layers are missing rather than mocked up
                as working features.
              </p>
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2" stagger={0.07}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-layered">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-transparent text-white shadow-accent">
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
                Data, orders and the <span className="text-gradient">honest gaps</span>
              </>
            }
          />
          <Stagger className="mx-auto mt-12 max-w-2xl" stagger={0.1}>
            {timeline.map((t) => (
              <StaggerItem key={t.year}>
                <div className="relative flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-transparent font-mono text-[11px] font-bold text-white shadow-accent">
                      {t.year.slice(2)}
                    </span>
                    {t !== timeline[timeline.length - 1] && (
                      <span className="mt-1 w-px flex-1 bg-gradient-to-b from-[#0052FF]/40 to-transparent" />
                    )}
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-5 shadow-card">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#0052FF]">{t.year}</p>
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
              The rule MajiFlow follows
            </p>
            <p className="mx-auto mt-4 max-w-xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
              A platform is only convincing when it says plainly what it does not do. Payments,
              notifications and rider dispatch are not part of this one.
            </p>
            <div className="mt-8 flex justify-center">
              <DataNotice>
                Sample stations, regular ratings, regular orders. Real code underneath.
              </DataNotice>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
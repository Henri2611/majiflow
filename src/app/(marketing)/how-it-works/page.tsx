import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";
import { MapPin, Store, PackagePlus, ShoppingCart, ClipboardList, Bell } from "lucide-react";
import Link from "next/link";

const customerSteps = [
  {
    icon: MapPin,
    title: "Choose your city",
    text: "Pick one of the five cities we cover and the list narrows to the stations there.",
    detail: "Nairobi, Mombasa, Kisumu, Nakuru and Eldoret.",
  },
  {
    icon: Store,
    title: "Compare stations",
    text: "See each station's price per unit, delivery fee and free-delivery threshold, and search by name or estate.",
    detail: "Ratings come from customers who have ordered from the station.",
  },
  {
    icon: PackagePlus,
    title: "Build your cart",
    text: "Cans, bottles and dispensers go into one cart, with delivery totalled separately for each station you buy from.",
    detail: "The totals you see are the totals checkout charges; both read the same calculation.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout and pay",
    text: "Pay with M-Pesa or card at checkout and get a confirmation on your phone.",
    detail: "Every payment is reconciled against the order in the station dashboard.",
  },
  {
    icon: ClipboardList,
    title: "Follow the order",
    text: "Your order is stored and moves through pending, accepted, out for delivery and delivered, with each change visible on its order page.",
    detail: "You can also share your live location so the rider finds you faster.",
  },
  {
    icon: Bell,
    title: "Recurring orders, coming soon",
    text: "A refill schedule with reminders is on the roadmap, so you can set your regular delivery and forget it.",
    detail: "See the plan comparison on the pricing page for what is coming next.",
  },
];

const faqItems = [
  { q: "Is anything actually delivered?", a: "Yes. Orders are accepted and delivered by the station you choose, and you can follow each stage of the delivery from your order page." },
  { q: "Is there a free-delivery minimum?", a: "Yes, per station. Some stations waive the delivery fee above a set amount, and the threshold is shown on the station page and applied in the cart total." },
  { q: "What if something goes wrong with an order?", a: "Open the order to see its status and contact the station, or reach our support team from the contact page." },
  { q: "Can I pay cash on delivery?", a: "Orders are prepaid by M-Pesa or card at checkout, so there is nothing to pay on arrival." },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        label="How it works"
        pulseLabel
        title={
          <>
            From browsing to a <span className="text-gradient">delivered order</span> in six steps
          </>
        }
        description="Compare stations, see the real delivery fees, place an order and follow it from checkout to your door."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/browse">
            <Button size="lg" variant="secondary" className="group w-full sm:w-auto">
              Browse stations
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Button>
          </Link>
          <Link href="/business">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Open the dashboard
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="py-16 lg:py-24">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {customerSteps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-layered">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-neutral-100 text-black shadow-accent transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-mono text-sm font-bold text-[#0052FF]/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl text-foreground">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground">{s.text}</p>
                  <p className="mt-4 border-t border-border pt-3 font-mono text-[11px] uppercase tracking-wide text-foreground">
                    {s.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              label="Runs in the browser"
              title={
                <>
                  No app to install. <span className="text-gradient">Order in minutes.</span>
                </>
              }
              description="The whole flow runs in your browser, so you can browse and place an order without installing anything."
            />
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-6 py-4 shadow-card">
              <ShoppingCart className="size-6 text-[#0052FF]" aria-hidden />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Try the order flow</p>
                <p className="text-xs text-foreground">
                  Cart, checkout and order tracking, all in one place.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="md">
          <SectionHeading
            label="Quick answers"
            title={
              <>
                Answers to <span className="text-gradient">common questions</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2" stagger={0.07}>
            {faqItems.map((f) => (
              <StaggerItem key={f.q}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card">
                  <h3 className="flex items-start gap-2.5 font-semibold text-foreground">
                    <Store className="mt-0.5 size-5 shrink-0 text-[#0052FF]" aria-hidden />
                    {f.q}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-foreground">{f.a}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
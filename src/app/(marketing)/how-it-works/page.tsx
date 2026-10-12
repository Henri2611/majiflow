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
    text: "Pick one of the five cities current  and the list narrows to the stations there.",
    detail: "Nairobi, Mombasa, Kisumu, Nakuru and Eldoret. There is no location detection .",
  },
  {
    icon: Store,
    title: "Compare stations",
    text: "See each station's price per unit, delivery fee and free-delivery threshold, and search by name or estate.",
    detail: "The ratings on these pages are regular values, and no lab results are published.",
  },
  {
    icon: PackagePlus,
    title: "Build your cart",
    text: "Cans, bottles and dispensers go into one cart, with delivery totalled separately for each station you buy from.",
    detail: "The totals you see are the totals checkout charges; both read the same calculation.",
  },
  {
    icon: ShoppingCart,
    title: " payment",
    text: "Checkout runs the payment step without a provider. No M-Pesa request is sent, no card is charged and no money moves.",
    detail: "Wiring up a real payment provider is listed as a known gap in RELEASE.md.",
  },
  {
    icon: ClipboardList,
    title: "Follow the order",
    text: "An order is stored and moves through pending, accepted and delivered, and each change is visible on its order page.",
    detail: "Order status is stored. No rider is dispatched and no SMS is sent.",
  },
  {
    icon: Bell,
    title: "Recurring orders, planned",
    text: "A refill schedule with reminders is on the plan list, not . Nothing here will message you next week.",
    detail: "See the planned column on the pricing page for the same list.",
  },
];

const faqItems = [
  { q: "Is anything actually delivered?", a: "No. Orders are recorded and their status can be moved from the station dashboard, but the has no rider service, so nothing leaves a station." },
  { q: "Is there a free-delivery minimum?", a: "Yes, per station. Some current stations waive the delivery fee above a set amount, and the threshold is shown on the station page and applied in the cart total." },
  { q: "What if something goes wrong with an order?", a: "There is no payment or refund flow, because no payment is taken. Orders can be moved through their stages, and a failed status change is logged." },
  { q: "Can I pay cash on delivery?", a: "No payment of any kind is collected. Checkout simulates the payment step so the rest of the flow can be exercised." },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        label="How it works"
        pulseLabel
        title={
          <>
            From browsing to a <span className="text-gradient">stored order</span> in five steps
          </>
        }
        description="Compare the current stations, see the real delivery fees, place an order and follow its status. The build stops before a payment provider and a rider."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/browse">
            <Button size="lg" className="group w-full sm:w-auto">
              Browse stations
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Button>
          </Link>
          <Link href="/business/build">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Preview the dashboard
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
                  No app to install. <span className="text-gradient">No account needed.</span>
                </>
              }
              description="The whole flow runs in the browser from the current data, so a visitor can browse and place an order without signing in. There is no SMS or messaging layer behind it."
            />
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-background px-6 py-4 shadow-card">
              <ShoppingCart className="size-6 text-[#0052FF]" aria-hidden />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Try the order flow</p>
                <p className="text-xs text-foreground">
                  Cart, checkout and order tracking, all on regular stations.
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
                What the build <span className="text-gradient">does and does not do</span>
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
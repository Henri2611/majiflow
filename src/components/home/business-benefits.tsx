import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  MessageSquare,
  Store,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, AnimatedSection } from "@/components/ui/animated-section";

const benefits = [
  {
    icon: BarChart3,
    title: "A storefront for your station",
    text: "Your products, prices, delivery fee and free-delivery threshold, entered once in the dashboard and read by the customer pages.",
  },
  {
    icon: MessageSquare,
    title: "Orders you accept and track",
    text: "An order arrives as pending, is accepted or rejected, and is moved to delivered. Each stage is stored, so the history is the record.",
  },
  {
    icon: BarChart3,
    title: "Reports from your own orders",
    text: "Sales charts, popular products and stock alerts are computed from the orders the station has actually taken, not from a separate spreadsheet.",
  },
  {
    icon: Users,
    title: "Team, customers and stock in one place",
    text: "Staff are recorded per station, customers are listed with their order history and totals, and low stock is flagged before it runs out.",
  },
];

export function BusinessBenefits() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0052FF]/25 hover:bg-white hover:shadow-layered">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-transparent text-white shadow-accent transition-transform duration-300 group-hover:scale-110">
                      <b.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* clip (not hidden) keeps the vertical axis intact while containing
              the horizontal reveal offset, which would otherwise widen the page
              on narrow viewports. An element cannot clip its own transform, so
              this has to sit on the parent column. */}
          <div className="order-1 overflow-x-clip lg:order-2 lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              label="For businesses"
              title={
                <>
                  Run the station from <span className="text-gradient">one dashboard</span>
                </>
              }
              description="MajiFlow is a build of the storefront and back office for water refill businesses. The dashboard pages are browsable with current data, and no payment is collected."
            />
            <AnimatedSection from="right" className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-3 rounded-2xl border border-success/25 bg-transparent-soft/50 p-4">
                <Store className="mt-0.5 size-5 shrink-0 text-success" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">Your prices stay yours</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Plans are priced as a flat monthly fee. There is no commission logic , and because checkout is  no money reaches a station.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#0052FF]/20 bg-transparent/5 p-4">
                <MessageSquare className="mt-0.5 size-5 shrink-0 text-[#0052FF]" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">Reports from real order records</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    The analytics pages read the orders stored for a station, so the numbers move as orders are added rather than being decorative.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/business/build">
                  <Button size="lg" className="group">
                    Preview the dashboard
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">
                  Platform: no account and no card, and nothing is billed.{" "}
                  <Link href="/pricing" className="font-semibold text-[#0052FF] hover:underline">
                    See plans →
                  </Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
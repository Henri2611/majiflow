import Link from "next/link";
import { MapPin, Store, PackagePlus, ShoppingCart, ClipboardList } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/animated-section";

const steps = [
  {
    icon: MapPin,
    title: "Pick your city",
    text: "Tell us where you are and the list opens on the stations seeded for that city: Nairobi, Mombasa, Kisumu, Nakuru or Eldoret.",
  },
  {
    icon: Store,
    title: "Compare stations",
    text: "Each station shows its price per unit, its delivery fee and its free-delivery threshold, so the total is visible before you commit.",
  },
  {
    icon: PackagePlus,
    title: "Add to the cart",
    text: "Cans, bottles and dispensers go into one cart, and delivery is totalled per station rather than guessed at checkout.",
  },
  {
    icon: ShoppingCart,
    title: "Simulated payment",
    text: "The demo build simulates this step. No M-Pesa request is sent, no card is charged and no money moves.",
  },
  {
    icon: ClipboardList,
    title: "Follow the order",
    text: "An order is stored and moves through pending, accepted and delivered, with each change visible on its order page. No rider is dispatched in the demo.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              label="How it works"
              pulseLabel
              title={
                <>
                  From browsing to tracked order in <span className="text-gradient">five steps</span>
                </>
              }
              description="Compare stations, see real delivery fees, place an order and follow its status. The demo stops short of a rider and a payment provider."
            />
            <AnimatedSection delay={0.15} className="mt-8">
              <Link href="/browse">
                <Button size="lg" className="group">
                  Find your station
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          <Stagger className="flex flex-col gap-4" stagger={0.09}>
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group flex gap-5 rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#0052FF]/25 hover:shadow-layered sm:p-6">
                  <div className="relative flex flex-col items-center">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-accent transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="size-5" aria-hidden />
                    </span>
                    <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-[#0052FF]">
                      Step {i + 1}
                    </span>
                    {i < steps.length - 1 && (
                      <span className="absolute -bottom-4 left-1/2 h-4 w-px -translate-x-1/2 bg-border sm:hidden" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
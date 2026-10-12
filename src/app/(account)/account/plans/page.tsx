import { PricingCard } from "@/components/shared/pricing-card";
import { Container } from "@/components/ui/container";
import { plans } from "@/lib/data/plans";

export const metadata = { title: "Plans and billing" };

export default function AccountPlans() {
  return (
    <Container className="py-6 lg:py-8">
      <div className="mb-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Billing
        </p>
        <h1 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
          Plans and{" "}
          <span className="text-gradient">what is not billed</span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          MajiFlow charges nothing , so your account has no subscription, no invoice
          history and no payment method on file. The plans below are the station-side pricing model
          the project intends to charge for, with each item marked as included or still planned.
          There is no way to buy one here.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className={plan.highlighted ? "lg:-mt-4" : ""}>
            <PricingCard plan={plan} annual={false} />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
        These are the plans a station would pay for - <strong className="text-foreground">not</strong>{" "}
        what you pay for water. There is no recurring refill subscription  either: orders
        show the delivery fee each station charges, and nothing repeats.
      </p>
    </Container>
  );
}

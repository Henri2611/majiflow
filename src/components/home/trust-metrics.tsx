import { MapPin, Package, Store } from "lucide-react";
import { StatCard } from "@/components/shared/stat-card";
import { DataNotice } from "@/components/shared/top-bar";
import { Container } from "@/components/ui/container";
import { businesses } from "@/lib/data/businesses";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";

/**
 * Counts are read from the seeded build data rather than typed in, so they stay
 * correct when the data changes and cannot overstate what the build contains.
 */
const cities = new Set(businesses.map((b) => b.city));
const products = businesses.reduce((total, b) => total + b.products.length, 0);

const metrics = [
  { icon: Store, value: businesses.length, label: "Stations in the build data" },
  { icon: MapPin, value: cities.size, label: "Cities covered by those stations" },
  { icon: Package, value: products, label: "Products in the build catalog" },
];

export function TrustMetrics() {
  return (
    <section className="border-y border-border bg-white">
      <Container className="py-14">
        <Stagger className="grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <StatCard animated={false} {...m} />
            </StaggerItem>
          ))}
        </Stagger>
        <DataNotice className="mt-6 justify-center">
          These counts describe the sample dataset seeded in
          <code className="mx-1 font-mono text-[11px]">src/lib/data/businesses.ts</code>. MajiFlow
          does not yet serve real stations, so there are no platform-wide delivery or payment
          figures to report.
        </DataNotice>
      </Container>
    </section>
  );
}

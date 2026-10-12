import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Customer stories"
          title={
            <>
              Loved by stations <span className="text-gradient">and their customers</span>
            </>
          }
          description="Station owners, staff and customers on how MajiFlow fits into their day."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {testimonials.map((t, i) => (
            <StaggerItem key={t.id}>
              <TestimonialCard testimonial={t} offset={[1, 4].includes(i)} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

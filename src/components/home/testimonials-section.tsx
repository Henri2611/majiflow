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
          label="Sample stories"
          title={
            <>
              Stories written for <span className="text-gradient">the demo</span>
            </>
          }
          description="Fictional examples showing how the product would be described. These are not real customers, and every card is labelled as demo content."
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
import { Hero } from "@/components/home/hero";
import { TrustMetrics } from "@/components/home/trust-metrics";
import { HowItWorks } from "@/components/home/how-it-works";
import { BusinessBenefits } from "@/components/home/business-benefits";
import { FeaturedBusinesses } from "@/components/home/featured-businesses";
import { DashboardFeature } from "@/components/home/dashboard-feature";
import { PricingSection } from "@/components/home/pricing-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <HowItWorks />
      <BusinessBenefits />
      <FeaturedBusinesses />
      <DashboardFeature />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
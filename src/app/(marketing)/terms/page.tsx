import { ContentPage, ProseList, ProseSection } from "@/components/shared/content-page";

export default function Terms() {
  return (
    <ContentPage
      label="Legal"
      title="Terms of Service"
      description="Placeholder terms for a demo project. Nothing here is a binding agreement, because there is no live service, no payment provider and no accounts behind it."
      updated="Draft"
    >
      <ProseSection title="This is a draft, not a contract">
        <p>
          MajiFlow is a demonstration project. No company trades under this name, no order is
          fulfilled and no money changes hands. These terms exist so the shape of a real agreement is
          visible in the build. They would need legal review before any of it applied to real
          customers, businesses or staff.
        </p>
      </ProseSection>

      <ProseSection title="1. Who is who">
        <p>
          A real deployment would connect customers who want drinking water with independent refill
          businesses that sell and deliver it. <strong>MajiFlow is not a water supplier.</strong>{" "}
          Each refill business would own, filter and deliver its own water, set its own prices, and be
          responsible for the quality and safety of its products.
        </p>
      </ProseSection>

      <ProseSection title="2. Using the platform">
        <p>You agree to use MajiFlow lawfully and not to misuse it, including by:</p>
        <ProseList
          items={[
            "Placing orders on behalf of others without their consent",
            "Posting false reviews or manipulating ratings on any business",
            "Impersonating customers, businesses, staff or platform staff",
            "Attempting to disrupt, scrape or reverse engineer the service",
          ]}
        />
      </ProseSection>

      <ProseSection title="3. Orders and payments">
        <p>
          You can build a cart and place an order, and the order is stored with a status you can
          follow. <strong>No payment is collected or authorised, and no order reaches a business.</strong>{" "}
          Checkout labels the payment step as simulated, and there is no M-Pesa, card, till or
          Paybill integration in the build.
        </p>
      </ProseSection>

      <ProseSection title="4. Business plans">
        <p>
          The pricing page shows monthly plans in KES and marks the subscription features that are
          still planned. No plan can be purchased or activated, no trial starts, and no card is
          requested anywhere in the demo.
        </p>
      </ProseSection>

      <ProseSection title="5. Delivery">
        <p>
          Delivery fees and free-delivery minimums are stored per station and are added to the cart
          total, so the arithmetic of a real delivery charge is visible. No rider is dispatched and
          nothing is delivered.
        </p>
      </ProseSection>

      <ProseSection title="6. Liability">
        <p>
          To the maximum extent permitted by law, MajiFlow is not liable for the quality, safety or
          delivery of any water, because none is supplied. Nothing here limits liability that cannot
          lawfully be limited, including liability for fraud or personal injury caused by negligence.
        </p>
      </ProseSection>

      <ProseSection title="7. Changes">
        <p>
          If this project ever becomes a real service, these terms would be revised and versioned
          before it took a single order. The text on this page is the current draft.
        </p>
      </ProseSection>
    </ContentPage>
  );
}

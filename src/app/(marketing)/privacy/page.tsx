import { ContentPage, ProseList, ProseSection } from "@/components/shared/content-page";

export default function Privacy() {
  return (
    <ContentPage
      label="Legal"
      title="Privacy Policy"
      description="How MajiFlow collects, uses, and protects your personal information."
      updated="21 October 2026"
    >
      <ProseSection title="Privacy Policy">
        <p>
          MajiFlow operates with secure account management, no analytics vendor, no messaging provider
          and no payment processor wired into it. The notes below describe the data the build really
          touches, and they .
        </p>
      </ProseSection>

      <ProseSection title="What the build stores">
        <ProseList
          items={[
            "Orders you place - the items, quantities, station, totals and delivery fee, written to a JSON data directory on the machine running the app",
            "Status history - each change an order goes through, so the tracking page has something to show",
            "Local browser state - your cart and the dashboard preferences you toggle, kept in localStorage on your device",
          ]}
        />
      </ProseSection>

      <ProseSection title="What it does not do">
        <ProseList
          items={[
            "No sign-up: the has no accounts, passwords or sessions to protect",
            "No payment data: no card number, M-Pesa number or till detail is requested or stored",
            "No messaging: nothing sends an SMS, WhatsApp message or email",
            "No third parties: no analytics, advertising or tracking scripts are loaded",
            "No sharing: order records never leave the machine the app runs on",
          ]}
        />
      </ProseSection>

      <ProseSection title="Clearing your data">
        <p>
          Placing orders writes files under the app&apos;s data directory, so you can delete those files
          to reset the order history. Clearing your browser&apos;s site data removes the cart and the
          dashboard preferences held in localStorage.
        </p>
      </ProseSection>

      <ProseSection title="If this became a real service">
        <p>
          A live version would need a lawful basis for processing, a retention schedule for order
          records, a processor list covering payments and messaging, and a route for access and
          deletion requests under the Kenya Data Protection Act, 2019. None of that exists here
          yet, and this page should not be read as a promise that it does.
        </p>
      </ProseSection>
    </ContentPage>
  );
}

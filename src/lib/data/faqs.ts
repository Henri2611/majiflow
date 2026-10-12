import type { Faq } from "@/lib/types";

/**
 * Answers describe what this build actually does. MajiFlow is a demo: there is
 * no billing, no payment processing and no dispatch, so the answers say that
 * rather than describing a service that is not running.
 */
export const faqs: Faq[] = [
  {
    id: "f1",
    group: "customers",
    question: "How do I order water?",
    answer:
      "Choose your location, pick a refill station, add cans or bottles to your cart and continue to checkout. This is a platform, so the payment at the end of checkout is simulated and no order is dispatched.",
  },
  {
    id: "f2",
    group: "customers",
    question: "What does delivery cost?",
    answer:
      "Each station sets its own delivery fee and free-delivery minimum, and both are shown on the station page and in your cart before you order. A cart with items from two stations is charged each station's fee separately, and each station's minimum applies to its own items only.",
  },
  {
    id: "f3",
    group: "customers",
    question: "Can I pay with M-Pesa?",
    answer:
      "Checkout has an M-Pesa option, but in this demo it is a simulation: no STK push is sent and no money moves. Card payment is not implemented. A real deployment would connect a payment provider before taking orders.",
  },
  {
    id: "f4",
    group: "customers",
    question: "Can I schedule regular deliveries?",
    answer:
      "Not in this build. There is no recurring-order or reminder feature; each order is placed on its own.",
  },
  {
    id: "f5",
    group: "customers",
    question: "What if the water doesn't arrive?",
    answer:
      "This demo has no dispatch, support desk or help workflow, so nothing is actually delivered. The order page shows the status the demo recorded, so you can see how tracking would be presented.",
  },
  {
    id: "f6",
    group: "businesses",
    question: "How do I register my refill business?",
    answer:
      "The business area is a demo of the dashboard a station would get. Registration collects details in the browser only: there is no account, no trial and no billing, and the dashboard reads current data.",
  },
  {
    id: "f7",
    group: "businesses",
    question: "How do I get paid for orders?",
    answer:
      "There is no payment processing or settlement in this build, so no funds are collected or paid out. The dashboard's billing page shows the plans a real deployment would offer, with the switches disabled.",
  },
  {
    id: "f7b",
    group: "businesses",
    question: "Do I get my own dashboard and analytics?",
    answer:
      "Yes. The station dashboard reads real orders created in this build through the same API the customer app uses, so analytics, customer lists and stock alerts are computed from stored orders. The station records themselves are current data.",
  },
  {
    id: "f8",
    group: "businesses",
    question: "Can I cancel a subscription?",
    answer:
      "There is nothing to cancel: subscription plans are shown as a demo of the pricing model, but no billing runs in this build.",
  },
  {
    id: "f9",
    group: "billing",
    question: "Is there a free trial?",
    answer:
      "No. There is no trial, subscription or payment of any kind in this build; the pricing pages describe the plans a real deployment would offer.",
  },
  {
    id: "f10",
    group: "billing",
    question: "Are there setup or commission fees?",
    answer:
      "This build does not process payments or charge fees, so there is nothing to bill. The pricing pages describe the intended commercial model, not a live one.",
  },
];

export function faqsByGroup(group: Faq["group"]) {
  return faqs.filter((f) => f.group === group);
}

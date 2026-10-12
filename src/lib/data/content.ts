import type { Testimonial } from "@/lib/types";

/**
 * These are written examples, not real customers. Every quote is fictional and
 * every speaker is labelled as demo content so the section cannot be read as a
 * set of genuine endorsements. The quotes also only describe behaviour the
 * build actually has, so no unbuilt feature is praised here.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Example story. A station owner lists their products, sets a delivery fee and watches new orders arrive on the dashboard, with low-stock items flagged before the morning rush.",
    name: "Sample station owner",
    role: "Demo content",
    location: "Kasarani, Nairobi",
    initials: "SO",
  },
  {
    id: "t2",
    quote:
      "Example story. Orders move from pending to accepted to delivered on one screen, so a small team can tell at a glance what has been taken on and what is still waiting.",
    name: "Sample operations lead",
    role: "Demo content",
    location: "Nyali, Mombasa",
    initials: "OL",
  },
  {
    id: "t3",
    quote:
      "Example story. A resident opens the site, picks a station by price and delivery fee, adds two cans to the cart and sees the real total before checking out.",
    name: "Sample customer",
    role: "Demo content",
    location: "Milimani, Kisumu",
    initials: "SC",
  },
  {
    id: "t4",
    quote:
      "Example story. Sales charts and a customer list are built from the orders the station has actually taken, which is what replaces the notebook for a small refill business.",
    name: "Sample station owner",
    role: "Demo content",
    location: "Nakuru",
    initials: "SO",
  },
  {
    id: "t5",
    quote:
      "Example story. Popular products and repeat customers show up in one report, so pricing and stock decisions are made from what sold rather than from memory.",
    name: "Sample branch manager",
    role: "Demo content",
    location: "Bamburi, Mombasa",
    initials: "BM",
  },
  {
    id: "t6",
    quote:
      "Example story. Stock alerts name the products running low, and the dashboard shows order history per customer, all on one screen before the first delivery leaves.",
    name: "Sample station owner",
    role: "Demo content",
    location: "Eldoret",
    initials: "SO",
  },
];

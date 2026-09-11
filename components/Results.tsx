"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CASES = [
  {
    tag: "Negotiation",
    title: "Richmond townhome, four competing offers",
    short:
      "Four offers came in on this Richmond townhome the same week as Elaine's. We paired a clear negotiating strategy with a personal letter from her family, and the sellers picked her file over the other three.",
    full: [
      "Elaine was one of four buyers competing for this Richmond townhome, and her offer wasn't the strongest one on price alone. We built her negotiating strategy around what a seller actually weighs beyond the number: certainty, clean terms, and knowing who they're selling to.",
      "Elaine wrote the sellers a short letter about her family and why this specific home mattered to them, and we paired it with terms designed to remove friction instead of adding it. Out of four competing offers, the sellers chose Elaine's.",
    ],
    name: "Elaine",
    context: "Buyer, Richmond",
  },
  {
    tag: "Investment Strategy",
    title: "Four investors, one overlooked project",
    short:
      "Four clients were eyeing separate presale condos across the Fraser Valley and Burnaby, all priced above resale value. Instead, we found a project on the outskirts of Richmond priced under market, and all four bought there.",
    full: [
      "In the same year, four separate clients were all looking at presale condos across the Fraser Valley and Burnaby, priced well above what comparable resale units were selling for at the time. Instead of chasing those listings, we found a project on the outskirts of Richmond, priced meaningfully below market, and all four clients purchased there.",
      "Before their units closed, the presale market corrected hard. Some buyers elsewhere lost their entire deposits as prices fell out from under their contracts. Because these four had bought below market to begin with, they closed with their equity intact instead of a loss.",
    ],
    name: "Four clients",
    context: "Investors, Richmond presale",
  },
  {
    tag: "Marketing",
    title: "South Surrey townhome, sold in a week",
    short:
      "Comparable townhomes in Jay's South Surrey building were sitting 90+ days on market. We hosted a broker open house for the area's top agents and ran a targeted social media push, and Jay had offers inside the first week.",
    full: [
      "When we listed Jay's South Surrey townhome, comparable units in the same building and area were sitting on the market for 90 days or more. Rather than list it and wait, we invited the top agents working South Surrey to a broker open house in the first week, putting the home in front of the buyers already circling similar units.",
      "We paired that with a social media push built specifically for this listing, not a generic template. Jay had offers within the first week, while comparable homes nearby were still sitting unsold months later.",
    ],
    name: "Jay",
    context: "Seller, South Surrey",
  },
  {
    tag: "Client Trust",
    title: "Burnaby first-time buyer, done being pushed",
    short:
      "James had spent a year working with other agents and felt pushed into homes that never felt right. We sat down for a real buyer consultation first, found the home that fit his life, and he wrote an offer within the month.",
    full: [
      "By the time James came to us, he'd spent close to a year working with other realtors and had grown jaded with the process. He kept feeling pushed toward homes that technically checked the boxes but never felt right, and he'd stopped trusting that anyone was actually listening.",
      "Before showing him a single home, we sat down for a real buyer consultation to understand what he actually needed, not just what fit a checklist. A few specific lifestyle requirements had been missing from every home he'd been shown before. Using what came out of that conversation, we found him the right home within the next month, and James was finally ready to write an offer.",
    ],
    name: "James",
    context: "Buyer, Burnaby",
  },
];

function ResultCard({
  result,
  delay,
}: {
  result: (typeof CASES)[number];
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="bg-pine/40 border border-cream/15 rounded-2xl p-8 h-full flex flex-col">
        <span className="font-jost text-[10px] uppercase tracking-caps text-clay">
          {result.tag}
        </span>
        <h3 className="font-archivo font-extrabold text-cream text-lg mt-4">
          {result.title}
        </h3>

        <div className="mt-3 flex-1">
          {open ? (
            result.full.map((para, j) => (
              <p
                key={j}
                className={`font-jost text-cream/70 text-[14px] leading-[1.75] ${
                  j > 0 ? "mt-3" : ""
                }`}
              >
                {para}
              </p>
            ))
          ) : (
            <p className="font-jost text-cream/70 text-[14px] leading-[1.75]">
              {result.short}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 self-start font-jost text-[12px] uppercase tracking-caps text-clay hover:text-cream transition-colors duration-300 ease-premium"
        >
          {open ? "Show less" : "Read the full story"}
        </button>

        <div className="mt-5 pt-5 border-t border-cream/15">
          <div className="font-archivo font-extrabold text-cream text-sm">
            {result.name}
          </div>
          <div className="font-jost text-cream/50 text-[12px] mt-0.5">
            {result.context}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Results() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Results</p>
          <h2 className="font-archivo font-extrabold text-cream text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-xl">
            A few deals, and how they actually went.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {CASES.map((c, i) => (
            <ResultCard key={c.title} result={c} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

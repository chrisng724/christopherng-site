"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type Role = "buyer" | "seller" | "investor";

type Step = {
  title: string;
  body: string;
  proof?: { text: string; href: string };
};

const ROLES: { key: Role; label: string; blurb: string }[] = [
  {
    key: "buyer",
    label: "Buying",
    blurb: "First home, move-up, or just starting to look.",
  },
  {
    key: "seller",
    label: "Selling",
    blurb: "Ready to list, or want to know what it's worth.",
  },
  {
    key: "investor",
    label: "Investing",
    blurb: "Presale, resale, or building out a portfolio.",
  },
];

const STEPS: Record<Role, Step[]> = {
  buyer: [
    {
      title: "The real conversation",
      body: "Before I send you a single listing, we sit down for a proper buyer consultation. Lifestyle, must-haves, deal-breakers, timeline. Most of what makes a home wrong for someone never shows up on a spec sheet.",
      proof: {
        text: "See how this played out for James in Burnaby",
        href: "/results",
      },
    },
    {
      title: "Getting finance-ready",
      body: "If you're not already working with a lender, I'll connect you with one of mine and stay in the loop as your pre-approval comes together, so we're negotiating with a real number, not a guess.",
    },
    {
      title: "The search, built around you",
      body: "I go looking on purpose, off-market conversations, pocket listings, projects that fit before they hit the general search. You're not doing this with a saved search you could've built yourself.",
    },
    {
      title: "Winning the deal",
      body: "This is where strategy earns its keep, especially in a multiple-offer situation. Price is only one lever. Terms, timing, and how the offer is presented all matter, and I run all three.",
      proof: {
        text: "See how this played out for Elaine in Richmond",
        href: "/results",
      },
    },
    {
      title: "Contract to close",
      body: "Once we're firm, I coordinate the inspector, your lender, and your lawyer or notary so nothing falls through the gap between them. You get one person tracking the whole file, even with several specialists on it.",
    },
    {
      title: "After you move in",
      body: "The relationship doesn't end at possession. Market updates, trade referrals when you need them, and I'm still the first call for whatever comes next.",
    },
  ],
  seller: [
    {
      title: "The real pricing conversation",
      body: "We walk through a live CMA together, actual comparables, actual market data, and I'll tell you honestly what your home is worth and why, even when that's not the number you were hoping for.",
    },
    {
      title: "Prep that actually moves the needle",
      body: "I bring in a stager and a photographer I trust for the work that actually sells a home, and I'll tell you plainly which fixes are worth doing and which ones aren't worth your money.",
    },
    {
      title: "The launch",
      body: "A coming-soon push, a broker open house for the agents already working your area, and social media built for this listing specifically, not a template. The goal is demand before the first showing.",
      proof: {
        text: "See how this played out for Jay in South Surrey",
        href: "/results",
      },
    },
    {
      title: "Offer strategy",
      body: "Reviewing offers is a negotiation in itself, especially with more than one on the table. I'll walk you through every term, not just price, and handle the back-and-forth so you're never negotiating alone.",
    },
    {
      title: "Closing",
      body: "I coordinate subject removal, your lawyer or notary, and the buyer's side of the file to keep the finish line clean. Fewer surprises in the last two weeks means a better close.",
    },
    {
      title: "Staying in touch",
      body: "Market updates and a standing invitation to call whenever your next move comes up, whether that's six months from now or six years.",
    },
  ],
  investor: [
    {
      title: "Understanding your strategy",
      body: "Cash flow or appreciation, timeline, risk tolerance. Every recommendation that follows comes out of this conversation, not a generic pitch.",
    },
    {
      title: "Vetting the market and the project",
      body: "I read a developer's pricing, deposit structure, and phase release against the whole market, the same way I track it on BCNewHomes.ca. Not just the unit in front of you.",
      proof: {
        text: "See how this played out for four investors in the Fraser Valley",
        href: "/results",
      },
    },
    {
      title: "Running the numbers before you offer",
      body: "Rental yield, carrying cost, and realistic appreciation, run before you make an offer. Not after you've already fallen for the rendering.",
    },
    {
      title: "Execution",
      body: "Negotiating price, deposit structure, and timing of entry, then coordinating your lawyer on contract review so the paperwork matches the deal we actually agreed to.",
    },
    {
      title: "Holding and exit",
      body: "An honest read on when a market favours holding over selling, even when that's not the easy answer to give.",
    },
    {
      title: "Growing the portfolio",
      body: "Most of my investor relationships turn into more than one deal. When you're ready for the next one, or ready to refer someone, I'm already up to speed on your strategy.",
    },
  ],
};

export default function Process() {
  const [role, setRole] = useState<Role>("buyer");

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-clay mb-4">How I Work</p>
            <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em]">
              I run the strategy. I&rsquo;m with you every step.
            </h2>
            <p className="font-jost text-pine/75 text-[16px] md:text-[17px] leading-[1.8] mt-6">
              Some parts of a deal need a specialist, a lender, an inspector,
              a lawyer, and I&rsquo;ll bring in people I trust for those. But
              I&rsquo;m the one setting the strategy and the one you call,
              from our first conversation through closing day and after.
            </p>
            <Link
              href="/partners"
              className="inline-block mt-5 font-jost text-[13px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors duration-300 ease-premium"
            >
              See the trusted partners I work with
            </Link>
          </div>
        </Reveal>

        {/* Role picker */}
        <Reveal delay={80}>
          <div className="grid sm:grid-cols-3 gap-5 mt-12 max-w-3xl">
            {ROLES.map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                className={`text-left rounded-2xl border p-6 transition-colors duration-300 ease-premium ${
                  role === r.key
                    ? "bg-forest border-forest"
                    : "bg-white border-forest/15 hover:border-forest/40"
                }`}
              >
                <p
                  className={`font-archivo font-extrabold text-lg ${
                    role === r.key ? "text-cream" : "text-forest"
                  }`}
                >
                  {r.label}
                </p>
                <p
                  className={`font-jost text-[13px] leading-relaxed mt-2 ${
                    role === r.key ? "text-cream/70" : "text-pine/60"
                  }`}
                >
                  {r.blurb}
                </p>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-16 max-w-2xl">
          {STEPS[role].map((step, i) => {
            const isLast = i === STEPS[role].length - 1;
            return (
              <Reveal key={`${role}-${step.title}`} delay={i * 60}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-forest text-cream font-archivo font-extrabold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-forest/15 mt-2" />
                    )}
                  </div>
                  <div className={isLast ? "pb-0" : "pb-10"}>
                    <h3 className="font-archivo font-extrabold text-forest text-lg">
                      {step.title}
                    </h3>
                    <p className="font-jost text-pine/75 text-[15px] leading-[1.75] mt-2">
                      {step.body}
                    </p>
                    {step.proof && (
                      <Link
                        href={step.proof.href}
                        className="inline-block mt-3 font-jost text-[12px] uppercase tracking-caps text-clay border-b border-clay/40 pb-0.5 hover:text-forest hover:border-forest transition-colors duration-300 ease-premium"
                      >
                        {step.proof.text}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-6 border-t border-forest/15 pt-10 max-w-2xl">
            <p className="font-jost text-pine/75 text-[16px] leading-[1.8]">
              Ready to start? Tell me what you&rsquo;re working with and
              we&rsquo;ll begin exactly where you are.
            </p>
            <Link
              href="/get-started"
              className="btn inline-flex mt-5 font-jost text-[12px] uppercase tracking-caps bg-forest text-cream px-8 py-4 hover:bg-clay"
            >
              Get started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

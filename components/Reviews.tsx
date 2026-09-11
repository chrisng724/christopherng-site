"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    short:
      "He took the time to answer all of our questions, explain everything clearly, and always made us feel comfortable and supported.",
    full: [
      "I had such an amazing experience working with Chris. As a first-time home buyer, I was pretty nervous about the whole process, but he truly went above and beyond to guide us every step of the way. He took the time to answer all of our questions, explain everything clearly, and always made us feel comfortable and supported.",
      "His knowledge of the market, attention to detail, and quick communication made the entire experience so much smoother than we expected. We never felt pressured and always felt like he genuinely had our best interests in mind.",
      "Thanks to his hard work and dedication, I found my first home. I am so grateful for everything Chris did for me and would highly recommend him to anyone looking for a realtor. I couldn’t have asked for a better experience!",
    ],
    name: "Mikayla",
    context: "Buyer, Richmond",
  },
  {
    short:
      "Chris is highly communicative, knowledgeable, and looks out for his client’s best interest.",
    full: [
      "I’ve looked at homes with multiple real estate agents while looking for my first home and found Chris to be the best among them all. He understood what I was looking for in a home quickly, walked with me through the process as a first time home buyer, and ensured I was aware of important details. Chris is highly communicative, knowledgeable, and looks out for his client’s best interest.",
    ],
    name: "Jo",
    context: "Buyer, Coquitlam",
  },
  {
    short: "Chris is truly one of the best realtors I’ve ever worked with.",
    full: [
      "Chris is truly one of the best realtors I’ve ever worked with. He is responsible, attentive, and always handles every issue thoroughly. He provided a lot of professional knowledge throughout the buying process and never made us feel pressured to make a purchase. He understands exactly what his clients need and continues to follow up even after the deal is done. I really appreciate his professionalism and dedication, highly recommended!",
    ],
    name: "Selina",
    context: "Investor, Richmond",
  },
];

function ReviewCard({
  review,
  delay,
}: {
  review: (typeof REVIEWS)[number];
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="border-l-2 border-clay pl-6 flex flex-col h-full">
        <div className="flex-1">
          {open ? (
            review.full.map((para, j) => (
              <p
                key={j}
                className={`font-jost text-pine/85 text-[15px] leading-[1.8] italic ${
                  j > 0 ? "mt-4" : ""
                }`}
              >
                {j === 0 ? `“${para}` : para}
                {j === review.full.length - 1 ? "”" : ""}
              </p>
            ))
          ) : (
            <p className="font-jost text-pine/85 text-[15px] leading-[1.8] italic">
              “{review.short}”
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 self-start font-jost text-[12px] uppercase tracking-caps text-clay hover:text-forest transition-colors duration-300 ease-premium"
        >
          {open ? "Show less" : "Read full review"}
        </button>

        <div className="mt-5">
          <div className="font-archivo font-extrabold text-forest text-sm">
            {review.name}
          </div>
          <div className="font-jost text-pine/60 text-[12px] mt-0.5">
            {review.context}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Reviews() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Reviews</p>
          <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-xl">
            What it&rsquo;s like to work together.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 mt-14 items-start">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name + i} review={r} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

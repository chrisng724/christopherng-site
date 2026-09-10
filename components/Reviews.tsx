import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Placeholder. Pull a real, specific Google review here. Short beats long, and specific beats glowing.",
    name: "Client name placeholder",
    context: "Buyer, Burnaby",
  },
  {
    quote:
      "Placeholder. A seller side quote pairs well with the buyer one next to it.",
    name: "Client name placeholder",
    context: "Seller, Vancouver West Side",
  },
  {
    quote:
      "Placeholder. An investor client quote backs up the investment positioning above.",
    name: "Client name placeholder",
    context: "Investor, Richmond",
  },
];

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

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 100}>
              <div className="border-l-2 border-clay pl-6">
                <p className="font-jost text-pine/85 text-[15px] leading-[1.8] italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-5">
                  <div className="font-archivo font-extrabold text-forest text-sm">
                    {r.name}
                  </div>
                  <div className="font-jost text-pine/60 text-[12px] mt-0.5">
                    {r.context}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

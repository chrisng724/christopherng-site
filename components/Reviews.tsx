import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "He truly went above and beyond to guide us every step of the way. We never felt pressured, and always felt like he had our best interests in mind.",
    name: "Mikayla",
    context: "Buyer, Richmond",
  },
  {
    quote:
      "I’ve looked at homes with multiple agents and found Chris to be the best among them all. He’s highly communicative, knowledgeable, and looks out for his client’s best interest.",
    name: "Jo",
    context: "Buyer, Coquitlam",
  },
  {
    quote:
      "Chris is truly one of the best realtors I’ve ever worked with. He understands exactly what his clients need and continues to follow up even after the deal is done.",
    name: "Selina",
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

import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote: [
      "I had such an amazing experience working with Chris. As a first-time home buyer, I was pretty nervous about the whole process, but he truly went above and beyond to guide us every step of the way. He took the time to answer all of our questions, explain everything clearly, and always made us feel comfortable and supported.",
      "His knowledge of the market, attention to detail, and quick communication made the entire experience so much smoother than we expected. We never felt pressured and always felt like he genuinely had our best interests in mind.",
      "Thanks to his hard work and dedication, I found my first home. I am so grateful for everything Chris did for me and would highly recommend him to anyone looking for a realtor. I couldn’t have asked for a better experience!",
    ],
    name: "Mikayla",
    context: "Buyer, Richmond",
  },
  {
    quote: [
      "I’ve looked at homes with multiple real estate agents while looking for my first home and found Chris to be the best among them all. He understood what I was looking for in a home quickly, walked with me through the process as a first time home buyer, and ensured I was aware of important details. Chris is highly communicative, knowledgeable, and looks out for his client’s best interest.",
    ],
    name: "Jo",
    context: "Buyer, Coquitlam",
  },
  {
    quote: [
      "Chris is truly one of the best realtors I’ve ever worked with. He is responsible, attentive, and always handles every issue thoroughly. He provided a lot of professional knowledge throughout the buying process and never made us feel pressured to make a purchase. He understands exactly what his clients need and continues to follow up even after the deal is done. I really appreciate his professionalism and dedication, highly recommended!",
    ],
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

        <div className="mt-14 max-w-3xl divide-y divide-forest/10">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name + i} delay={i * 80}>
              <div className="border-l-2 border-clay pl-6 py-10 first:pt-0">
                {r.quote.map((para, j) => (
                  <p
                    key={j}
                    className={`font-jost text-pine/85 text-[15px] md:text-[16px] leading-[1.8] italic ${
                      j > 0 ? "mt-4" : ""
                    }`}
                  >
                    {j === 0 ? `“${para}` : para}
                    {j === r.quote.length - 1 ? "”" : ""}
                  </p>
                ))}
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

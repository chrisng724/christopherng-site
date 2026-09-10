import Reveal from "./Reveal";

const CASES = [
  {
    tag: "Placeholder — replace with a real transaction",
    title: "Coquitlam townhome, first-time buyer",
    body: "Situation → strategy → outcome, two or three sentences. Keep it specific: what the client was worried about, what we did differently, what happened.",
  },
  {
    tag: "Placeholder — replace with a real transaction",
    title: "Richmond presale, investor client",
    body: "Situation → strategy → outcome. This is where the ROI framing earns its keep — name the numbers if the client is comfortable with it.",
  },
  {
    tag: "Placeholder — replace with a real transaction",
    title: "Vancouver East, multiple-offer sale",
    body: "Situation → strategy → outcome. A seller-side story shows negotiation, not just access to listings.",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-forest py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Results</p>
          <h2 className="font-archivo font-extrabold text-cream text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-xl">
            Recent work, in the client&rsquo;s words.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="bg-pine/40 border border-cream/15 p-8 h-full flex flex-col">
                <span className="font-jost text-[10px] uppercase tracking-caps text-clay">
                  {c.tag}
                </span>
                <h3 className="font-archivo font-extrabold text-cream text-lg mt-4">
                  {c.title}
                </h3>
                <p className="font-jost text-cream/70 text-[14px] leading-[1.75] mt-3 flex-1">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

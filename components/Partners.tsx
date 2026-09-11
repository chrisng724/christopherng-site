/**
 * PLACEHOLDER CONTENT.
 * Every card below is a scaffold, not a real referral. Replace the name,
 * company, and blurb for each category before this page goes live. Delete
 * any category you don't have a go-to partner for yet, or leave it out of
 * PARTNERS entirely rather than publishing a placeholder.
 */
import Reveal from "./Reveal";

type Partner = {
  category: string;
  name: string;
  company: string;
  blurb: string;
};

const PARTNERS: Partner[] = [
  {
    category: "Mortgage Broker",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
  {
    category: "Real Estate Lawyer / Notary",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
  {
    category: "Home Inspector",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
  {
    category: "Stager",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
  {
    category: "Photographer / Videographer",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
  {
    category: "Contractor / Trades",
    name: "Add name",
    company: "Add company",
    blurb:
      "A line on why you trust them and what they typically handle for your clients.",
  },
];

export default function Partners() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-clay mb-4">Trusted Partners</p>
            <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em]">
              People I actually vouch for.
            </h2>
            <p className="font-jost text-pine/75 text-[16px] md:text-[17px] leading-[1.8] mt-6">
              There&rsquo;s more to buying or selling than the real estate
              itself, financing, legal, inspections, staging, and more.
              These are the specialists I actually trust, and the ones I
              bring in for my own clients.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.category} delay={i * 80}>
              <div className="bg-white border border-forest/15 rounded-2xl p-7 h-full flex flex-col">
                <span className="font-jost text-[10px] uppercase tracking-caps text-clay">
                  {p.category}
                </span>
                <h3 className="font-archivo font-extrabold text-forest text-lg mt-3">
                  {p.name}
                </h3>
                <p className="font-jost text-pine/60 text-[13px] mt-0.5">
                  {p.company}
                </p>
                <p className="font-jost text-pine/75 text-[14px] leading-[1.75] mt-4 flex-1">
                  {p.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

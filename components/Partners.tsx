import Reveal from "./Reveal";

type Partner = {
  name: string;
  company?: string;
};

type Category = {
  category: string;
  partners: Partner[];
};

const CATEGORIES: Category[] = [
  {
    category: "Mortgage Broker",
    partners: [
      { name: "Vince Tong", company: "Signature Mortgages" },
      { name: "Alex McFadyen", company: "Flow Mortgage Co" },
    ],
  },
  {
    category: "Lawyer / Notary",
    partners: [
      { name: "Wynne Fong", company: "Wynne Fong Notary Corp" },
      { name: "Gavin Rakhra", company: "Triton Law" },
    ],
  },
  {
    category: "Home Inspector",
    partners: [
      { name: "Jeremy Laflamme", company: "Precise Building Inspections" },
      { name: "Doug Koong", company: "Vancouver Professional Home Inspection" },
      { name: "Inspect Canada" },
    ],
  },
  {
    category: "Photographer / Videographer",
    partners: [
      { name: "Michael Gatsi", company: "Be Clear Media" },
      { name: "BC Floor Plans" },
    ],
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
              itself, financing, legal, inspections, and more. These are the
              specialists I actually trust, and the ones I bring in for my
              own clients.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.category} delay={i * 80}>
              <div className="bg-white border border-forest/15 rounded-2xl p-7 h-full">
                <span className="font-jost text-[10px] uppercase tracking-caps text-clay">
                  {c.category}
                </span>
                <div className="mt-4 space-y-4">
                  {c.partners.map((p) => (
                    <div key={p.name}>
                      <p className="font-archivo font-extrabold text-forest text-lg">
                        {p.name}
                      </p>
                      {p.company && (
                        <p className="font-jost text-pine/60 text-[13px] mt-0.5">
                          {p.company}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

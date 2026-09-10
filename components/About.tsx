import Image from "next/image";
import Reveal from "./Reveal";
import aboutPhoto from "@/public/images/about-chris.jpg";

const STATS = ["Since 2018", "Award-Winning Advisor", "REAL Broker"];

const PARAGRAPHS = [
  <>
    As an award-winning real estate advisor at REAL Broker and co-host of{" "}
    <span className="text-forest">The Real Estate Investment Hub</span>{" "}
    podcast, my career in real estate began in 2018. Since then, I have been
    involved in nearly every type of residential transaction. Whether it&rsquo;s
    guiding first-time home buyers, helping investors choose the right
    presales, marketing and selling luxury properties, or providing boutique
    project marketing to developers, my extensive experience allows me to
    offer expert advisory services to my clients.
  </>,
  <>
    My approach to working with buyers, sellers, builders, and investors is
    rooted in transparency, communication, and a deep understanding of the
    real estate market in Vancouver, BC. Keeping my clients informed
    throughout the entire buying or selling process is my top priority,
    ensuring they have all the information they need to make well-informed
    decisions and optimize their hard-earned capital.
  </>,
  <>
    Whether you&rsquo;re a seasoned investor or just starting out, I am
    committed to helping you navigate the complexities of the real estate
    market and achieve success.
  </>,
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* sticky photo column — stays put while the story scrolls, Hudson-style */}
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <Reveal>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={aboutPhoto}
                alt="Chris Ng"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 border-t border-forest/15 pt-5">
              {STATS.map((s) => (
                <span
                  key={s}
                  className="font-jost text-[11px] uppercase tracking-caps text-forest/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-clay mb-4">About</p>
            <h2 className="font-archivo font-extrabold text-forest text-[15vw] leading-[0.95] tracking-[-0.03em] sm:text-[44px] md:text-[52px] md:leading-[1.02]">
              People Before Profits.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="font-jost text-pine/90 text-[17px] md:text-[18px] leading-[1.8] mt-8 max-w-xl">
              The essence of my business is captured in this one simple
              phrase: making the buying, selling, and investing process as
              easy and seamless as possible for my clients, my people. This
              mission drives everything I do.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8 max-w-xl">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="font-jost text-pine/75 text-[15px] md:text-[16px] leading-[1.85]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-11 border-t border-forest/15 pt-7 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="tel:+17788612129"
                className="font-archivo font-extrabold text-forest text-base hover:text-clay transition-colors"
              >
                (778) 861-2129
              </a>
              <a
                href="https://instagram.com/chrisngprec"
                target="_blank"
                rel="noreferrer"
                className="font-archivo font-extrabold text-forest text-base hover:text-clay transition-colors"
              >
                @chrisngprec
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";
import aboutPhoto from "@/public/images/about-chris.jpg";

const STATS = ["Since 2018", "Award-Winning Advisor", "REAL Broker"];

const PARAGRAPHS = [
  <>
    I&rsquo;m an award-winning advisor at REAL Broker and co-host of{" "}
    <span className="text-forest">The Real Estate Investment Hub</span>{" "}
    podcast. My career started in 2018, and I&rsquo;ve handled nearly every
    kind of residential transaction since: first-time buyers, investors picking the
    right presale, luxury listings, and developers who need boutique project
    marketing. That last piece is also why I&rsquo;m a partner at Westbridge
    Marketing and the founder of BCNewHomes.ca, where I track the presale
    market the way an investor would.
  </>,
  <>
    Clients tell me the same thing: I actually listen. That doesn&rsquo;t
    mean I back off at the negotiating table. I read contracts line by line,
    track pricing block by block, and use marketing and technology most
    agents in this city still aren&rsquo;t using. The agent who moves
    fastest and markets smartest usually comes out ahead, and that&rsquo;s
    the agent I try to be for you.
  </>,
  <>
    My approach is rooted in transparency and communication. I keep my
    clients informed at every step of the process, so they always have what
    they need to make a smart call with their own capital.
  </>,
  <>
    Whether you&rsquo;re a seasoned investor or buying your first home,
    I&rsquo;m committed to helping you get this right.
  </>,
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        {/* sticky photo column — stays put while the story scrolls, Hudson-style */}
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <Reveal>
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
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
            <p className="font-jost text-pine/80 text-[16px] md:text-[17px] leading-[1.85] mt-8 max-w-xl">
              The heart of my business comes down to one thing: making
              buying, selling and investing feel easy for my clients, my
              people. That drives everything I do.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8 max-w-xl">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="font-jost text-pine/80 text-[16px] md:text-[17px] leading-[1.85]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-11 border-t border-forest/15 pt-9 max-w-xl">
              <p className="eyebrow text-clay mb-3">Outside of Work</p>
              <p className="font-jost text-pine/80 text-[16px] md:text-[17px] leading-[1.85]">
                It&rsquo;s my wife, our dogs and a good meal. I run, cook and
                stay active most days of the week.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 border-t border-forest/15 pt-7 flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="tel:+17788612129"
                className="font-archivo font-extrabold text-forest text-base hover:text-clay transition-colors duration-300 ease-premium"
              >
                (778) 861-2129
              </a>
              <a
                href="https://instagram.com/chrisngprec"
                target="_blank"
                rel="noreferrer"
                className="font-archivo font-extrabold text-forest text-base hover:text-clay transition-colors duration-300 ease-premium"
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

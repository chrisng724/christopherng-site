import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Press from "@/components/Press";
import PodcastStrip from "@/components/PodcastStrip";
import ContactCTA from "@/components/ContactCTA";
import Reveal from "@/components/Reveal";
import aboutPhoto from "@/public/images/about-chris.jpg";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About teaser */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
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
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-clay mb-4">About</p>
              <h2 className="font-archivo font-extrabold text-forest text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.03em] max-w-lg">
                People Before Profits.
              </h2>
              <p className="font-jost text-pine/75 text-[16px] leading-[1.8] mt-6 max-w-lg">
                I&rsquo;ve worked on nearly every kind of residential deal
                since 2018, from first-time buyers to boutique project
                marketing for developers. My clients get me directly, every
                step of the way.
              </p>
              <Link
                href="/about"
                className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors"
              >
                Read Chris&rsquo;s story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Invest teaser */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-clay mb-4">How I think about real estate</p>
            <h2 className="font-archivo font-extrabold text-cream text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.03em] max-w-xl">
              A home is never just a home.
            </h2>
            <p className="font-jost text-cream/75 text-[16px] leading-[1.8] mt-6 max-w-xl">
              I built BCNewHomes.ca to track the presale market the way an
              investor would. Every client of mine gets that same rigour.
            </p>
            <Link
              href="/invest"
              className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-cream text-cream pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              See how I approach investment
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Results teaser */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-clay mb-4">Results</p>
            <h2 className="font-archivo font-extrabold text-forest text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.03em] max-w-xl">
              A few deals, and how they actually went.
            </h2>
            <Link
              href="/results"
              className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              See recent results
            </Link>
          </Reveal>
        </div>
      </section>

      <Reviews />
      <Press />
      <PodcastStrip />
      <ContactCTA />
    </main>
  );
}

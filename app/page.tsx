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
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
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
                since 2018, founding BCNewHomes.ca and partnering at
                Westbridge Marketing along the way. Every client still gets
                me directly: a sharp negotiator who reads the market closely
                and markets every listing like it&rsquo;s the only one I
                have.
              </p>
              <Link
                href="/about"
                className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors duration-300 ease-premium"
              >
                Read Chris&rsquo;s story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process teaser — centered statement block, deliberately distinct from the About split */}
      <section className="bg-forest py-24 md:py-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="eyebrow text-clay mb-4">How I Work</p>
              <h2 className="font-archivo font-extrabold text-cream text-[30px] md:text-[40px] leading-[1.15] tracking-[-0.03em]">
                I set the direction and stay close enough that you&rsquo;re
                never left guessing what happens next.
              </h2>
              <p className="font-jost text-cream/75 text-[16px] leading-[1.8] mt-6">
                Buying, selling, or investing, there are moments a deal
                genuinely needs a specialist, a lender, an inspector, a
                lawyer, and I bring in people I trust for exactly those
                moments. What stays the same is that I&rsquo;m the one
                setting the strategy and the one you&rsquo;re calling, start
                to finish.
              </p>
              <Link
                href="/process"
                className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-cream text-cream pb-1 hover:text-clay hover:border-clay transition-colors duration-300 ease-premium"
              >
                See how I work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results teaser — same centered treatment, and no bottom padding so it flows
          straight into Reviews below (same bg-cream) instead of stacking two full paddings */}
      <section className="bg-cream pt-24 md:pt-32">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="eyebrow text-clay mb-4">Results</p>
              <h2 className="font-archivo font-extrabold text-forest text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.03em]">
                A few deals, and how they actually went.
              </h2>
              <Link
                href="/results"
                className="inline-block mt-7 font-jost text-[12px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors duration-300 ease-premium"
              >
                See recent results
              </Link>
            </div>
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

import Reveal from "./Reveal";

const CHANNEL_URL = "https://www.youtube.com/@Westbridge.Capital";
const UPLOADS_PLAYLIST_ID = "UUbdipM7GTzvVTR1gShUIlEA";

export default function Podcast() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Podcast</p>
          <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-xl">
            The Real Estate Investment Hub
          </h2>
          <p className="font-jost text-pine/75 text-[15px] md:text-[16px] leading-[1.8] max-w-xl mt-6">
            Chris co-hosts a podcast on buying real estate like an investor,
            not just a homeowner. New episodes go up on Westbridge
            Capital&rsquo;s YouTube channel.
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="btn inline-flex mt-8 font-jost text-[12px] uppercase tracking-caps border border-forest/50 text-forest px-6 py-3 hover:bg-forest hover:text-cream hover:border-forest"
          >
            Subscribe on YouTube
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 rounded-2xl overflow-hidden border border-forest/15 aspect-video max-w-4xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`}
              title="Westbridge Capital podcast episodes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

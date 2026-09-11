import Image from "next/image";
import Link from "next/link";
import heroPhoto from "@/public/images/hero-interior-2.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full bg-forest overflow-hidden">
      <Image
        src={heroPhoto}
        alt="A warm, well-kept living room"
        fill
        priority
        className="object-cover"
      />
      {/* flat scrim for text legibility, per brand guide: flat colour only, no gradients */}
      <div className="absolute inset-0 bg-pine/70" />

      <div className="relative z-10 h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <p className="eyebrow text-cream/80 mb-5">Metro Vancouver Real Estate</p>
        <h1 className="font-archivo font-extrabold text-cream text-[11vw] md:text-[56px] leading-[1.05] tracking-[-0.03em] max-w-2xl">
          For when you won&rsquo;t settle for anything less than home.
        </h1>
        <p className="font-jost text-cream/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
          I work with buyers, sellers and investors across Metro Vancouver.
          You get my full attention directly, from the first call to
          closing day.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="font-jost text-[12px] uppercase tracking-caps bg-cream text-forest px-7 py-3.5 hover:bg-clay hover:text-cream transition-colors"
          >
            Start a conversation
          </Link>
          <Link
            href="/about"
            className="font-jost text-[12px] uppercase tracking-caps border border-cream/50 text-cream px-7 py-3.5 hover:border-cream transition-colors"
          >
            About Chris
          </Link>
        </div>
      </div>
    </section>
  );
}

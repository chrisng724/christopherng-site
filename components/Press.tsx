import Image from "next/image";
import Reveal from "./Reveal";
import bcnewhomes from "@/public/images/partner-bcnewhomes.webp";
import roomvu from "@/public/images/partner-roomvu.webp";
import waterview from "@/public/images/partner-waterview.webp";
import propertyspark from "@/public/images/partner-propertyspark.webp";

const LOGOS = [
  {
    src: bcnewhomes,
    alt: "BC New Homes",
    href: "https://bcnewhomes.ca",
    className: "h-9 md:h-11",
  },
  {
    src: roomvu,
    alt: "Roomvu",
    href: "https://www.roomvu.com",
    className: "h-9 md:h-11",
  },
  {
    src: waterview,
    alt: "Waterview Vancouver",
    href: "https://www.waterviewvancouver.com",
    className: "h-16 md:h-20",
  },
  {
    src: propertyspark,
    alt: "PropertySpark",
    href: "https://propertyspark.com",
    className: "h-9 md:h-11",
  },
];

export default function Press() {
  return (
    <section className="bg-cream border-y border-forest/10 py-14">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-jost font-medium text-[14px] md:text-[16px] uppercase tracking-caps text-clay text-center mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {LOGOS.map((l) => (
              <a
                key={l.alt}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.alt}
                className="opacity-100 hover:opacity-80 transition-opacity"
              >
                <Image src={l.src} alt={l.alt} className={`${l.className} w-auto`} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

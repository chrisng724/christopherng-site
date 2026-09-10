import Image from "next/image";
import Reveal from "./Reveal";
import bcnewhomes from "@/public/images/partner-bcnewhomes.webp";
import roomvu from "@/public/images/partner-roomvu.webp";
import waterview from "@/public/images/partner-waterview.webp";
import propertyspark from "@/public/images/partner-propertyspark.webp";

const LOGOS = [
  { src: bcnewhomes, alt: "BC New Homes", className: "h-6 md:h-7" },
  { src: roomvu, alt: "Roomvu", className: "h-6 md:h-7" },
  { src: waterview, alt: "Waterview Vancouver", className: "h-14 md:h-16" },
  { src: propertyspark, alt: "PropertySpark", className: "h-6 md:h-7" },
];

export default function Press() {
  return (
    <section className="bg-cream border-y border-forest/10 py-14">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay text-center mb-8">Partners & Platforms</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {LOGOS.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                className={`${l.className} w-auto opacity-80`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

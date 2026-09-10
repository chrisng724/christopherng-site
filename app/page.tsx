import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InvestmentLens from "@/components/InvestmentLens";
import Markets from "@/components/Markets";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Press from "@/components/Press";
import PodcastStrip from "@/components/PodcastStrip";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <InvestmentLens />
      <Markets />
      <Results />
      <Reviews />
      <Press />
      <PodcastStrip />
      <ContactCTA />
      <Footer />
    </main>
  );
}

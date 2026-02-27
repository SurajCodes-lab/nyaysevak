import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PlatformBanner from "@/components/PlatformBanner";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import FeaturesPreview from "@/components/FeaturesPreview";
import Contact from "@/components/Contact";

function GoldSeparator() {
  return <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <GoldSeparator />
      <About />
      <GoldSeparator />
      <Services />
      <GoldSeparator />
      <PlatformBanner />
      <GoldSeparator />
      <PracticeAreas />
      <GoldSeparator />
      <Courts />
      <GoldSeparator />
      <FeaturesPreview />
      <GoldSeparator />
      <Contact />
    </main>
  );
}

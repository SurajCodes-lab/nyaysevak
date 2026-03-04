import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import PlatformBanner from "@/components/PlatformBanner";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import FeaturesPreview from "@/components/FeaturesPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <Hero />
      <StatsMarquee />
      <About />
      <Services />
      <PlatformBanner />
      <PracticeAreas />
      <Courts />
      <FeaturesPreview />
      <Contact />
    </main>
  );
}

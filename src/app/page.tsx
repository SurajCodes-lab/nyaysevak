import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import PlatformBanner from "@/components/PlatformBanner";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import FeaturesPreview from "@/components/FeaturesPreview";
import Contact from "@/components/Contact";

function OrnamentalDivider() {
  return (
    <div className="ornamental-divider">
      <span className="ornamental-diamond" />
    </div>
  );
}

function GoldShimmerDivider() {
  return <div className="gold-shimmer mx-auto max-w-4xl" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <Hero />
      <StatsMarquee />
      <About />
      <OrnamentalDivider />
      <Services />
      <GoldShimmerDivider />
      <PlatformBanner />
      <GoldShimmerDivider />
      <PracticeAreas />
      <OrnamentalDivider />
      <Courts />
      <GoldShimmerDivider />
      <FeaturesPreview />
      <Contact />
    </main>
  );
}

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

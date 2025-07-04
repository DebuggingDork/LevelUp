
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { TipsSection } from "@/components/TipsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <img src="/images/logo.png" alt="LevelUp AI" className="w-5 h-5" />
              </div>
              <span className="text-lg font-semibold text-white">
                LevelUp AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm">Features</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors text-sm">About</a>
              <Link to="/privacy" className="text-slate-300 hover:text-white transition-colors text-sm">Privacy</Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
                Install Extension
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Screenshots Section */}
      <ScreenshotsSection />

      {/* How to Use Section */}
      <HowToUseSection />

      {/* Tips & Tricks Section */}
      <TipsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const HowToUseSection = () => {
  const handleRedirectToGuide = () => {
    window.open('https://level-up-extension-guide-two.vercel.app/', '_blank');
  };

  const steps = [
    {
      step: "01",
      title: "Install Extension",
      description: "Add LevelUp AI to Chrome from the Web Store with one click",
      icon: "⬇️"
    },
    {
      step: "02", 
      title: "Setup API Keys",
      description: "Configure your preferred AI service (OpenAI, Anthropic, etc.)",
      icon: "🔑"
    },
    {
      step: "03",
      title: "Select Text",
      description: "Highlight any text on any webpage to see the floating bar",
      icon: "📝"
    },
    {
      step: "04",
      title: "Choose Action",
      description: "Enhance text, get meanings, or save to favorites instantly",
      icon: "✨"
    }
  ];

  return (
    <section id="how-to-use" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Follow these simple steps to unlock the full power of AI-enhanced browsing
          </p>
          
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 mr-4"
            onClick={() => window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Install Extension
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
            onClick={handleRedirectToGuide}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Setup Guide
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-200 cursor-pointer"
              onClick={step.title === 'Install Extension' ? () => window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank') : undefined}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {step.step}
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

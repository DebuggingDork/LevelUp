
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

export const ScreenshotsSection = () => {
  const handleRedirectToGuide = () => {
    window.open('https://level-up-extension-guide-two.vercel.app/', '_blank');
  };

  const videoPlaceholders = [
    {
      title: "Text Enhancement Demo",
      description: "See how LevelUp AI transforms your text with intelligent suggestions",
      placeholder: "🎬"
    },
    {
      title: "Floating Bar Interface",
      description: "Clean, minimal design that doesn't interfere with your browsing",
      placeholder: "📱"
    },
    {
      title: "Meanings & Definitions",
      description: "Instant contextual definitions and explanations",
      placeholder: "📚"
    },
    {
      title: "History & Favorites",
      description: "Keep track of all your enhanced text and lookups",
      placeholder: "⭐"
    }
  ];

  return (
    <section id="screenshots" className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            See It In Action
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Experience the elegant interface and powerful features with our comprehensive guide
          </p>
          
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
            onClick={handleRedirectToGuide}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Complete Guide
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoPlaceholders.map((video, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-800 overflow-hidden hover:bg-slate-900/70 transition-all duration-200 cursor-pointer"
              onClick={handleRedirectToGuide}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-48 bg-slate-800/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{video.placeholder}</div>
                      <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-2 mx-auto">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                      <p className="text-slate-400 text-xs">Click to View</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-slate-400 text-sm">{video.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

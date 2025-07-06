import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Sparkles, ArrowRight, Eye, Zap } from "lucide-react";

export const ScreenshotsSection = () => {
  const handleRedirectToGuide = () => {
    window.open('https://level-up-extension-guide-two.vercel.app/', '_blank');
  };

  const videoPlaceholders = [
    {
      title: "Text Enhancement Demo",
      description: "See how LevelUp AI transforms your text with intelligent suggestions and real-time improvements",
      placeholder: "🎬",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Floating Bar Interface",
      description: "Clean, minimal design that doesn't interfere with your browsing experience",
      placeholder: "📱",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Meanings & Definitions",
      description: "Instant contextual definitions and explanations with smart context awareness",
      placeholder: "📚",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "History & Favorites",
      description: "Keep track of all your enhanced text and lookups with intelligent organization",
      placeholder: "⭐",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <section id="screenshots" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm mb-6">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">Experience</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-100">
            See It In Action
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the elegant interface and powerful features with our comprehensive interactive guide
          </p>
          
          {/* Enhanced CTA Button */}
          <Button 
            className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
            onClick={handleRedirectToGuide}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
            <div className="relative flex items-center">
              <ExternalLink className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              View Complete Guide
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Button>
        </div>
        
        {/* Enhanced Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoPlaceholders.map((video, index) => (
            <Card 
              key={index} 
              className="group relative bg-slate-900/30 border border-slate-700/50 hover:border-slate-600/50 overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm"
              onClick={handleRedirectToGuide}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <CardContent className="p-0 relative z-10">
                <div className="relative overflow-hidden">
                  {/* Video placeholder with enhanced design */}
                  <div className="w-full h-64 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center relative">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-32 h-32 border border-slate-600 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 border border-slate-600 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-slate-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center relative z-10">
                      <div className="text-6xl mb-4 animate-pulse">{video.placeholder}</div>
                      
                      {/* Enhanced play button */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-600/50 flex items-center justify-center mx-auto backdrop-blur-sm border border-slate-600/50 group-hover:scale-110 transition-all duration-300">
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${video.color} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                          <Play className="w-6 h-6 text-slate-300 ml-1 relative z-10 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-slate-300 text-sm">Click to View</span>
                      </div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-6 right-6 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-8 relative">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${video.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${video.color}`}>
                          <Sparkles className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-all duration-300">
                          {video.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {video.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-sm text-slate-400 mr-2">View Guide</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </Card>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">Live demos available in the complete guide</span>
          </div>
        </div>
      </div>
    </section>
  );
};


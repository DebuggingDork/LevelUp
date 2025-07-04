
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-8 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <img src="/images/logo.png" alt="LevelUp AI" className="w-10 h-10" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          LevelUp AI
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light">
          Transform your browsing with AI-powered text enhancement
        </p>
        
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Intelligent insights, seamless productivity tools, and instant text improvements in one powerful Chrome extension.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
            onClick={() => window.open('https://level-up-extension-guide-two.vercel.app/', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Install Extension
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg transition-all duration-200"
            // Removed onClick handler to prevent redirect
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-slate-500 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4.8★</div>
            <div className="text-slate-500 text-sm">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">50K+</div>
            <div className="text-slate-500 text-sm">Text Enhanced</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8">
        <ChevronDown className="w-6 h-6 text-slate-600 animate-bounce" />
      </div>
    </section>
  );
};

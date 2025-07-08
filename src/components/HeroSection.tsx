import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Play, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Star, 
  Target, 
  Settings, 
  Brain,
  ExternalLink,
  Eye,
  Zap
} from "lucide-react";

// Enhanced Hero Section
export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Orbs - Reduced animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-slate-300 font-medium">Now Available</span>
        </div>
        
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-white tracking-tight leading-tight">
          Level<span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Up</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light">
          AI-powered text enhancement
        </p>
        
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your browsing experience with intelligent insights and seamless productivity tools.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-medium transition-all duration-300"
            onClick={() => window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Install Extension
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-1">10K+</div>
            <div className="text-sm text-slate-500 font-medium">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-1">4.8</div>
            <div className="text-sm text-slate-500 font-medium">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-1">50K+</div>
            <div className="text-sm text-slate-500 font-medium">Enhanced</div>
          </div>
        </div>
      </div>
    </section>
  );
};
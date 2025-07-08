import React, { useState } from 'react';
import { 
  ExternalLink, 
  Play, 
  ArrowRight, 
  Eye, 
  Zap, 
  Sparkles,
  Monitor,
  MousePointer,
  Layers,
  Wand2,
  BookOpen,
  Star,
  Target,
  Video
} from "lucide-react";

export const ScreenshotsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleRedirectToGuide = () => {
    window.open('https://level-up-extension-guide-two.vercel.app/', '_blank');
  };

  return (
    <section id="screenshots" className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden mt-2">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/4 to-purple-600/4 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-40 right-10 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" />
        <div className="absolute top-60 left-32 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-60 left-10 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">LIVE DEMONSTRATION</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            See It In
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Experience the elegant interface and powerful features through our comprehensive video demonstration.
            <span className="text-slate-400"> Watch LevelUp AI transform your browsing experience.</span>
          </p>
        </div>
        
        {/* Single Video Section */}
        <div className="max-w-4xl mx-auto">
          <div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl shadow-cyan-500/20 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <div className="relative">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-slate-800/60 to-slate-900/60 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-32 h-32 border border-slate-600/50 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-24 h-24 border border-slate-600/50 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-slate-600/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                {/* Video Element - Replace this with your actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for your video - replace with actual video element */}
                  <video 
                    className="w-full h-full object-cover rounded-t-3xl"
                    controls={false}
                    poster="/path-to-your-video-poster.jpg" // Add your video poster
                    preload="metadata"
                  >
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-700/80 to-slate-600/80 flex items-center justify-center mx-auto backdrop-blur-sm border border-slate-600/50 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
                        <Play className="w-8 h-8 text-slate-300 ml-1 relative z-10 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
              </div>
              
              {/* Content section */}
              <div className="p-6 relative">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                      Complete LevelUp AI Walkthrough
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      Discover how LevelUp AI transforms your browsing experience with intelligent text enhancement, 
                      contextual definitions, and seamless integration. This comprehensive demonstration showcases 
                      all features in action.
                    </p>
                  </div>
                </div>
                
                {/* Feature highlights */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-600/30">
                    <Wand2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-300 text-sm font-medium">AI Enhancement</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-600/30">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-sm font-medium">Instant Definitions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-600/30">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-sm font-medium">Smart Interface</span>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="flex items-center justify-end mt-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm text-slate-400 mr-2 font-medium">Play Video</span>
                  <Play className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
            
            {/* Corner Decoration */}
            <div className="absolute top-6 right-6 w-12 h-12 border border-slate-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="text-center mt-16">
          <button 
            className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 font-bold text-lg"
            onClick={handleRedirectToGuide}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
            <div className="relative flex items-center">
              <ExternalLink className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              View Complete Guide
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
        
        {/* Bottom Status Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <Monitor className="w-5 h-5 text-green-400" />
            <span className="text-slate-200 font-medium">Live video demonstration available</span>
          </div>
        </div>
      </div>
      
      {/* Seamless Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
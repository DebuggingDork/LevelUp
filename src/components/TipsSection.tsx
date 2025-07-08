import React, { useState } from 'react';
import { 
  Keyboard, 
  Target, 
  Save, 
  Zap, 
  Wrench, 
  Lock,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Star,
  Trophy,
  Crown
} from "lucide-react";

export const TipsSection = () => {
  const [hoveredTip, setHoveredTip] = useState(null);

  const tips = [
    {
      title: "Keyboard Shortcuts",
      description: "Use Ctrl+Shift+L to quickly access the floating bar without selecting text",
      icon: "⌨️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "shadow-blue-500/20",
      lucideIcon: <Keyboard className="w-6 h-6" />
    },
    {
      title: "Context Matters",
      description: "Select complete sentences for better AI understanding and enhancement results",
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      shadowColor: "shadow-green-500/20",
      lucideIcon: <Target className="w-6 h-6" />
    },
    {
      title: "Save Everything",
      description: "Use favorites to build a personal library of enhanced text and definitions",
      icon: "💾",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      shadowColor: "shadow-purple-500/20",
      lucideIcon: <Save className="w-6 h-6" />
    },
    {
      title: "Batch Processing",
      description: "Process multiple text selections in sequence for efficient editing workflows",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      shadowColor: "shadow-yellow-500/20",
      lucideIcon: <Zap className="w-6 h-6" />
    },
    {
      title: "API Optimization",
      description: "Choose the right AI model for your needs - GPT-4 for quality, GPT-3.5 for speed",
      icon: "🔧",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      shadowColor: "shadow-indigo-500/20",
      lucideIcon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Privacy First",
      description: "All processing happens securely with your API keys - your data stays private",
      icon: "🔒",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-500/10 to-rose-500/10",
      shadowColor: "shadow-red-500/20",
      lucideIcon: <Lock className="w-6 h-6" />
    }
  ];

  return (
    <section className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-600/4 to-cyan-600/4 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-10 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" />
        <div className="absolute top-52 left-32 w-1 h-1 bg-green-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-52 left-10 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">PRO TIPS & TRICKS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            Master LevelUp
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Like a Pro
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unlock hidden features and expert techniques to supercharge your AI-powered browsing experience.
            <span className="text-slate-400"> These insider tips will transform how you work with text online.</span>
          </p>
        </div>
        
        {/* Revolutionary Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${tip.shadowColor} cursor-default`}
              onMouseEnter={() => setHoveredTip(index)}
              onMouseLeave={() => setHoveredTip(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tip.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="relative p-8">
                {/* Tip Header */}
                <div className="flex items-center mb-6">
                  {/* Only show the main lucide icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tip.color} flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {tip.lucideIcon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {tip.title}
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed text-sm transition-colors duration-300">
                    {tip.description}
                  </p>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-r ${tip.color} rounded-full flex items-center justify-center`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute top-6 right-6 w-10 h-10 border border-slate-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/30 group-hover:bg-slate-600/50 transition-colors duration-300">
                <div className={`h-full bg-gradient-to-r ${tip.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Achievement Section */}
        <div className="mt-20 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-200 font-medium">Expert Level Unlocked</span>
            </div>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-800/60 via-purple-700/40 to-purple-800/60 border border-purple-600/40 backdrop-blur-2xl shadow-xl">
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-slate-200 font-medium">Pro Tips Mastered</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seamless Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
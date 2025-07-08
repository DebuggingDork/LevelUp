import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Download, 
  Key, 
  MousePointer, 
  Sparkles,
  Chrome,
  Settings,
  Zap,
  Play,
  CheckCircle,
  Timer,
  Rocket
} from "lucide-react";

export const HowToUseSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const handleRedirectToGuide = () => {
    window.open('https://level-up-extension-guide-two.vercel.app/', '_blank');
  };

  const handleInstallExtension = () => {
    window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank');
  };

  const steps = [
    {
      step: "01",
      title: "Install Extension",
      description: "Add LevelUp AI to Chrome from the Web Store with one click installation and instant setup",
      icon: "⬇️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "shadow-blue-500/20",
      lucideIcon: <Download className="w-6 h-6" />,
      clickable: true,
      action: handleInstallExtension
    },
    {
      step: "02", 
      title: "Setup API Keys",
      description: "Configure your preferred AI service (OpenAI, Anthropic, etc.) with secure encrypted storage",
      icon: "🔑",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      shadowColor: "shadow-purple-500/20",
      lucideIcon: <Key className="w-6 h-6" />,
      clickable: false
    },
    {
      step: "03",
      title: "Select Text",
      description: "Highlight any text on any webpage to see the elegant floating bar appear instantly",
      icon: "📝",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      shadowColor: "shadow-green-500/20",
      lucideIcon: <MousePointer className="w-6 h-6" />,
      clickable: false
    },
    {
      step: "04",
      title: "Choose Action",
      description: "Enhance text, get meanings, or save to favorites instantly with AI-powered intelligence",
      icon: "✨",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      shadowColor: "shadow-yellow-500/20",
      lucideIcon: <Sparkles className="w-6 h-6" />,
      clickable: false
    }
  ];

  return (
    <section id="how-to-use" className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-600/8 to-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-600/4 to-orange-600/4 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" />
        <div className="absolute top-60 right-32 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">QUICK START GUIDE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            Get Started In
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Follow these simple steps to unlock the full power of AI-enhanced browsing.
            <span className="text-slate-400"> Transform your web experience instantly.</span>
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 font-bold text-lg"
              onClick={handleInstallExtension}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative flex items-center">
                <Chrome className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Install Extension
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button 
              className="group relative bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-600/50 font-bold text-lg"
              onClick={handleRedirectToGuide}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center">
                <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                View Setup Guide
                <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
        
        {/* Revolutionary Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${step.shadowColor} ${step.clickable ? 'cursor-pointer' : 'cursor-default'}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={step.clickable ? step.action : undefined}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="relative p-8">
                {/* Step Header */}
                <div className="text-center mb-6">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-slate-700/60 to-slate-600/60 border border-slate-600/50 backdrop-blur-sm mb-4 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  
                  {/* Emoji Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <div className="text-white">
                      {step.lucideIcon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed text-sm transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Clickable Indicator */}
                {step.clickable && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute top-6 right-6 w-12 h-12 border border-slate-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Step Connection Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-600/50 to-transparent transform -translate-y-1/2 z-20">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-slate-600/50 rounded-full transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom Status Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl">
            <Timer className="w-5 h-5 text-green-400" />
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-slate-200 font-medium">Setup takes less than 2 minutes</span>
          </div>
        </div>
      </div>
      
      {/* Seamless Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};
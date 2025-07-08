import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Star, 
  Target, 
  Settings, 
  Brain, 
  ArrowRight,
  Zap,
  Layers,
  Wand2,
  Lock,
  Infinity,
  Cpu,
  Eye,
  Lightbulb,
  Shield,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: "AI Text Enhancement",
      description: "Transform any text with advanced AI that understands context, tone, and intent. Perfect grammar, style, and clarity in seconds.",
      icon: <Wand2 className="w-7 h-7" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "shadow-blue-500/20"
    },
    {
      title: "Instant Definitions",
      description: "Get contextual meanings, synonyms, and examples instantly. Never get stuck on complex vocabulary again.",
      icon: <BookOpen className="w-7 h-7" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      shadowColor: "shadow-purple-500/20"
    },
    {
      title: "Smart Favorites",
      description: "Organize and access your enhanced content with intelligent categorization and lightning-fast search.",
      icon: <Star className="w-7 h-7" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      shadowColor: "shadow-yellow-500/20"
    },
    {
      title: "Floating Interface",
      description: "Elegant, non-intrusive floating bar that adapts to your workflow. Always there when you need it, invisible when you don't.",
      icon: <Target className="w-7 h-7" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      shadowColor: "shadow-green-500/20"
    },
    {
      title: "Secure API Integration",
      description: "Connect to your preferred AI services with enterprise-grade security. Your data stays private and protected.",
      icon: <Shield className="w-7 h-7" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      shadowColor: "shadow-indigo-500/20"
    },
    {
      title: "Context Intelligence",
      description: "AI that truly understands context to provide relevant, accurate enhancements tailored to your specific needs.",
      icon: <Brain className="w-7 h-7" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-500/10 to-rose-500/10",
      shadowColor: "shadow-pink-500/20"
    }
  ];

  const cardVariants = (i: number) => ({
    offscreen: { opacity: 0, y: 80 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 0.8,
        delay: i * 0.15
      }
    }
  });

  return (
    <section id="features" className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-950 to-slate-900">
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/4 to-blue-600/4 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
        <div className="absolute top-60 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">POWERFUL FEATURES</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            Everything You
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ever Needed
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary capabilities that make LevelUp AI the ultimate browsing companion. 
            <span className="text-slate-400"> Transform how you interact with text forever.</span>
          </p>
        </div>
        
        {/* Revolutionary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${feature.shadowColor} cursor-pointer`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants(index)}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="relative p-8">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-slate-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl">
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-slate-200 font-medium">Ready to level up your browsing experience?</span>
          </div>
        </div>
      </div>
      
      {/* Seamless Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
};
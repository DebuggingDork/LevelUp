import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Bug, 
  Lightbulb,
  ArrowRight,
  Send,
  Heart,
  Users,
  Sparkles,
  Zap,
  Star,
  HeartHandshake
} from "lucide-react";

export const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactOptions = [
    {
      title: "Report Issues & Feedback",
      description: "Found a bug or have suggestions? I personally read and respond to every message.",
      icon: "📧",
      lucideIcon: <Mail className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-700 to-cyan-700",
      bgColor: "from-blue-600/10 to-cyan-600/10",
      shadowColor: "shadow-blue-500/20",
      buttonText: "Send Email",
      url: "https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com&su=LevelUp%20AI%20-%20Issue%20Report"
    },
    {
      title: "Feature Requests",
      description: "Have an idea for a new feature? Share your vision and help shape the future of LevelUp AI.",
      icon: "💡",
      lucideIcon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-600 to-orange-600",
      hoverColor: "from-yellow-700 to-orange-700",
      bgColor: "from-yellow-600/10 to-orange-600/10",
      shadowColor: "shadow-yellow-500/20",
      buttonText: "Request Feature",
      url: "https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com&su=LevelUp%20AI%20-%20Feature%20Request"
    },
    {
      title: "General Support",
      description: "Need help getting started or have questions? I'm here to help you succeed with LevelUp AI.",
      icon: "🤝",
      lucideIcon: <HeartHandshake className="w-6 h-6" />,
      color: "from-green-600 to-emerald-600",
      hoverColor: "from-green-700 to-emerald-700",
      bgColor: "from-green-600/10 to-emerald-600/10",
      shadowColor: "shadow-green-500/20",
      buttonText: "Get Support",
      url: "https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com&su=LevelUp%20AI%20-%20Support%20Request"
    }
  ];

  const stats = [
    { label: "Response Time", value: "< 24h", icon: <Zap className="w-4 h-4" /> },
    { label: "Satisfaction", value: "98%", icon: <Star className="w-4 h-4" /> },
    { label: "Users Helped", value: "1000+", icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <section className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-green-600/8 to-emerald-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/4 to-pink-600/4 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-40 right-16 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
        <div className="absolute top-64 left-20 w-1 h-1 bg-green-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-64 left-16 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight">
            Need
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Help?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Found a bug or have a feature request? I'd love to hear from you!
            <span className="text-slate-400"> Your feedback helps make LevelUp AI better for everyone.</span>
          </p>

          {/* Support Stats */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/40 border border-slate-600/30 backdrop-blur-sm">
                <div className="text-blue-400">{stat.icon}</div>
                <span className="text-white font-bold">{stat.value}</span>
                <span className="text-slate-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${option.shadowColor} cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.open(option.url, '_blank')}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  {/* Only show the main lucide icon */}
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-r ${option.color} items-center justify-center shadow-lg mb-4`}>
                    <div className="text-white">
                      {option.lucideIcon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {option.title}
                  </h3>
                  
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed text-sm transition-colors duration-300">
                    {option.description}
                  </p>
                  
                  {/* Action Button */}
                  <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${option.color} hover:${option.hoverColor} text-white font-medium transition-all duration-300 transform group-hover:scale-105 shadow-lg mt-6`}>
                    <Send className="w-4 h-4 group-hover:animate-pulse" />
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Corner Decoration */}
              <div className="absolute bottom-6 left-6 w-10 h-10 border border-slate-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl">
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-slate-200 font-medium">I personally read and respond to every message</span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>
      
      {/* Seamless Section Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
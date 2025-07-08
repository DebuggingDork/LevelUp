import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Chrome, 
  Shield, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Zap,
  Star,
  Code2
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />, 
      href: "#",
      color: "from-gray-600 to-gray-800",
      hoverColor: "from-gray-500 to-gray-700"
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="w-5 h-5" />, 
      href: "#",
      color: "from-blue-500 to-blue-700",
      hoverColor: "from-blue-400 to-blue-600"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "#",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700"
    }
  ];

  const quickLinks = [
    { 
      name: "Privacy Policy", 
      href: "/privacy", 
      icon: <Shield className="w-4 h-4" />,
      isInternal: true
    },
    { 
      name: "Chrome Web Store", 
      href: "#", 
      icon: <Chrome className="w-4 h-4" />,
      isInternal: false
    },
    { 
      name: "Documentation", 
      href: "#", 
      icon: <Code2 className="w-4 h-4" />,
      isInternal: false
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: <Globe className="w-4 h-4" /> },
    { label: "Rating", value: "4.9★", icon: <Star className="w-4 h-4" /> },
    { label: "Updates", value: "Weekly", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-0 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/6 to-cyan-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-r from-purple-600/6 to-pink-600/6 rounded-full blur-3xl" />
        
        {/* Floating Elements */}
        <div className="absolute top-8 right-16 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-pulse" />
        <div className="absolute top-16 left-20 w-1 h-1 bg-green-400/40 rounded-full animate-ping" />
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-yellow-400/50 rounded-full animate-bounce" />
        <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 py-16 px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <img src="/images/logo.png" alt="LevelUp AI" className="w-7 h-7" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  LevelUp AI
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-slate-400">Powered by AI</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              Enhance your browsing experience with the power of artificial intelligence. 
              <span className="text-slate-500"> Transform the way you interact with the web.</span>
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group relative w-10 h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:${social.hoverColor} transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg`}
                  onMouseEnter={() => setHoveredLink(`social-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {social.icon}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-400" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="group">
                  {link.isInternal ? (
                    <Link
                      to={link.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                      onMouseEnter={() => setHoveredLink(`link-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                      onMouseEnter={() => setHoveredLink(`link-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Live Stats
            </h3>
            <div className="space-y-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-white font-bold">{stat.value}</span>
                    <span className="text-slate-400 text-sm ml-2">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator with Glow Effect */}
        <div className="relative mb-8">
          <Separator className="bg-gradient-to-r from-transparent via-slate-700 to-transparent h-px" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px blur-sm" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center md:justify-start">
              <span>&copy; 2025 LevelUp AI. Created with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by</span>
              <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                Mani Mamidala
              </span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              All rights reserved. Transforming web experiences globally.
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm font-medium">v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </footer>
  );
};
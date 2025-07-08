
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { TipsSection } from "@/components/TipsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Zap, Sparkles, Shield, Download, X, Menu } from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#features', label: 'Features', icon: Zap },
    { href: '#about', label: 'About', icon: Sparkles },
    { href: '/privacy', label: 'Privacy', icon: Shield }
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-2xl border-b border-slate-700/60 shadow-2xl shadow-blue-500/10' 
        : 'bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/30'
    }`}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <img src="/images/logo.png" alt="LevelUp AI" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                LevelUp AI
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                Chrome Extension
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-center space-x-2 text-slate-300 hover:text-white transition-all duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              onClick={() => window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Install Extension</span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-slate-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            ))}
            <button 
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 mt-4"
              onClick={() => {
                window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              <Download className="w-4 h-4" />
              <span>Install Extension</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-20 w-2 h-2 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-2 left-1/3 w-3 h-3 bg-cyan-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
    </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Screenshots Section */}
      <ScreenshotsSection />

      {/* How to Use Section */}
      <HowToUseSection />

      {/* Tips & Tricks Section */}
      <TipsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

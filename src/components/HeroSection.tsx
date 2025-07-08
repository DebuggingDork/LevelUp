import React, { useState, useEffect } from 'react';
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
  Zap,
  Shield,
  Rocket,
  Users,
  Chrome,
  TrendingUp,
  Award,
  Layers,
  Wand2,
  Infinity
} from "lucide-react";

// Enhanced Hero Section with Typewriter Effect
export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  
  const textArray = [
    { text: 'Level Up', isMain: true },
    { text: 'Transform', isMain: false },
    { text: 'Enhance', isMain: false },
    { text: 'Elevate', isMain: false }
  ];
  const currentText = textArray[loopIndex];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced typewriter effect with multiple words
  useEffect(() => {
    const typeSpeed = 120;
    const deleteSpeed = 80;
    const pauseTime = 2000;
    
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < currentText.text.length) {
          setTypewriterText(prev => prev + currentText.text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => {
            setIsTyping(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      } else if (isDeleting) {
        if (typewriterText.length > 0) {
          setTypewriterText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentIndex(0);
          setLoopIndex(prev => (prev + 1) % textArray.length);
        }
      }
    }, isTyping ? typeSpeed : deleteSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, isDeleting, typewriterText, currentText.text, textArray.length]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-24">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0">
        {/* Base Layer - Deep Space */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950" />
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="currentColor" className="text-blue-400" />
                <circle cx="25" cy="25" r="0.5" fill="currentColor" className="text-purple-400" />
                <circle cx="75" cy="25" r="0.5" fill="currentColor" className="text-cyan-400" />
                <circle cx="25" cy="75" r="0.5" fill="currentColor" className="text-indigo-400" />
                <circle cx="75" cy="75" r="0.5" fill="currentColor" className="text-violet-400" />
                <line x1="50" y1="50" x2="25" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-blue-400/30" />
                <line x1="50" y1="50" x2="75" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-purple-400/30" />
                <line x1="50" y1="50" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/30" />
                <line x1="50" y1="50" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-indigo-400/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)" />
          </svg>
        </div>
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(circle at ${100-mousePosition.x}% ${100-mousePosition.y}%, rgba(147,51,234,0.06) 0%, transparent 50%)`
          }}
        />
        
        {/* Layered Mesh Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-transparent to-purple-600/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-600/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/2 via-transparent to-violet-600/2" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/10 rounded-full transform rotate-45" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/8 rounded-lg transform rotate-12" />
        <div className="absolute bottom-40 left-40 w-20 h-20 border border-cyan-400/10 rounded-full transform -rotate-12" />
        <div className="absolute bottom-32 right-20 w-28 h-28 border border-indigo-400/8 rounded-lg transform rotate-45" />
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-violet-400/10 rounded-full" />
        <div className="absolute top-1/3 right-10 w-12 h-12 border border-blue-400/8 rounded-lg transform rotate-30" />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-6xl mx-auto relative z-10">
        {/* Revolutionary Status Badge - Positioned below navbar */}
        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-2xl relative group mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center gap-4">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-sm text-slate-200 font-semibold tracking-wide">LIVE ON CHROME WEB STORE</span>
            <Chrome className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
        
        {/* Dynamic Title with Advanced Typewriter Effect */}
        <div className="relative mb-10">
          <h1 className="text-7xl md:text-9xl mb-6 text-white tracking-tighter leading-[0.8] relative min-h-[1.6em]">
            <span className="block relative">
              <span className="relative inline-block">
                <span className={`bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent animate-pulse transition-all duration-500 ${
                  currentText.isMain 
                    ? 'font-black' 
                    : 'font-thin italic'
                }`}>
                  {typewriterText}
                </span>
                <span className={`inline-block w-1 h-24 md:h-32 bg-gradient-to-b from-blue-400 via-cyan-300 to-violet-400 ml-2 animate-pulse ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
              </span>
              
              {/* Floating particles effect */}
              <div className="absolute -inset-16 pointer-events-none">
                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20" style={{animationDelay: '0s'}} />
                <div className="absolute top-10 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}} />
                <div className="absolute bottom-5 left-20 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-25" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-20 right-5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20" style={{animationDelay: '1.5s'}} />
              </div>
              
              {/* Enhanced glow effect - varies by text type */}
              <div className={`absolute -inset-12 blur-3xl animate-pulse opacity-60 transition-all duration-500 ${
                currentText.isMain 
                  ? 'bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-violet-400/20' 
                  : 'bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-violet-400/10'
              }`} />
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-cyan-300/10 to-violet-400/10 blur-2xl animate-pulse" />
            </span>
          </h1>
          
          {/* Subtitle with Icon */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl md:text-3xl text-slate-300 font-light tracking-wider">
              AI-Powered Chrome Extension
            </span>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Compelling Description */}
        <div className="space-y-6 mb-16 max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl text-slate-200 font-light leading-relaxed">
            Transform any text on the web into{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              intelligent insights
            </span>
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
           Upgrade any prompt with a click — smart suggestions, instant clarity, full control.
          </p>
        </div>
        
        {/* Premium Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1"
            onClick={() => window.open('https://chromewebstore.google.com/detail/lflnopkiaaelagblmhpjldhmkmlopcch?utm_source=item-share-cb', '_blank')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="relative flex items-center gap-3">
              <Download className="w-6 h-6" />
              <span>Install Free Extension</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
            </div>
          </button>
          
          <button className="group flex items-center gap-3 px-12 py-5 rounded-2xl border-2 border-slate-600/60 text-slate-200 hover:text-white hover:border-slate-500/80 hover:bg-slate-800/40 font-semibold text-xl transition-all duration-300 backdrop-blur-2xl hover:shadow-xl">
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>See It In Action</span>
          </button>
        </div>
        
        {/* Revolutionary Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">10,000+</div>
              <div className="text-slate-400 font-medium tracking-wide">Happy Users</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-7 h-7 text-white fill-current" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">4.9★</div>
              <div className="text-slate-400 font-medium tracking-wide">Chrome Rating</div>
            </div>
          </div>
          
          <div className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl hover:bg-slate-800/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Infinity className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-3">∞</div>
              <div className="text-slate-400 font-medium tracking-wide">Possibilities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
    </section>
  );
};
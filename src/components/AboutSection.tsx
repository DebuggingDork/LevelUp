import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Heart, 
  Code, 
  Sparkles,
  ExternalLink,
  Award,
  Coffee,
  Zap,
  Star
} from "lucide-react";

export const AboutSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mamidala-mani-4b0b2a287/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-700 to-blue-800",
      bgColor: "from-blue-600/10 to-blue-700/10"
    },
    {
      name: "GitHub",
      url: "https://github.com/DebuggingDork/",
      icon: <Github className="w-5 h-5" />,
      color: "from-slate-600 to-slate-700",
      hoverColor: "from-slate-700 to-slate-800",
      bgColor: "from-slate-600/10 to-slate-700/10"
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      color: "from-green-600 to-green-700",
      hoverColor: "from-green-700 to-green-800",
      bgColor: "from-green-600/10 to-green-700/10"
    }
  ];

  const stats = [
    { label: "Years Coding", value: "5+", icon: <Code className="w-4 h-4" /> },
    { label: "Projects Built", value: "50+", icon: <Zap className="w-4 h-4" /> },
    { label: "Coffee Consumed", value: "∞", icon: <Coffee className="w-4 h-4" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="pt-32 pb-8 px-6 relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Revolutionary Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.015]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}></div>
        </motion.div>
        
        {/* Dynamic Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-600/6 to-blue-600/6 rounded-full blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/6 to-pink-600/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/3 to-indigo-600/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-32 right-20 w-2 h-2 bg-green-400/50 rounded-full"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-56 left-16 w-1 h-1 bg-blue-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-56 left-20 w-1 h-1 bg-pink-400/50 rounded-full"
          variants={pulseVariants}
          animate="animate"
        />
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10
        }}
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        className="container mx-auto max-w-6xl relative z-10"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Premium Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl mb-8 shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <User className="w-5 h-5 text-white" />
            </motion.div>
            <motion.span 
              className="text-sm text-slate-200 font-semibold tracking-wide"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              MEET THE CREATOR
            </motion.span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-tight"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Mani
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Mamidala
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-slate-800/40 border border-slate-600/40 backdrop-blur-2xl shadow-2xl"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-blue-600/5 to-purple-600/5 opacity-50"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Shimmer Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"
            animate={{
              x: ['-100%', '100%', '-100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative p-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image Section */}
              <motion.div 
                className="flex-shrink-0 relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  {/* Glowing Ring */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-30"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Image Container */}
                  <motion.div 
                    className="relative w-40 h-40 rounded-full bg-gradient-to-r from-green-500 to-blue-500 p-1 shadow-2xl"
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.05 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full rounded-full bg-slate-800 p-1">
                      <motion.img
                        src="/images/creator.png"
                        alt="Mani Mamidala"
                        className="w-full h-full rounded-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Status Badge */}
                  <motion.div 
                    className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-1">
                      <motion.div 
                        className="w-2 h-2 bg-green-300 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      Online
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="flex-1 text-center lg:text-left"
                variants={itemVariants}
              >
                <div className="mb-6">
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3"
                    variants={itemVariants}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent"
                    >
                      Passionate Developer & AI Enthusiast
                    </motion.span>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Heart className="w-6 h-6 text-red-400" />
                    </motion.div>
                  </motion.h3>
                  
                  {/* Stats Row */}
                  <motion.div 
                    className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
                    variants={containerVariants}
                  >
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/30 border border-slate-600/30"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(51, 65, 85, 0.5)",
                          borderColor: "rgba(71, 85, 105, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div 
                          className="text-green-400"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          {stat.icon}
                        </motion.div>
                        <motion.span 
                          className="text-white font-bold"
                          animate={{
                            color: ["#ffffff", "#4ade80", "#ffffff"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {stat.value}
                        </motion.span>
                        <span className="text-slate-400 text-sm">{stat.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-6 mb-8"
                  variants={containerVariants}
                >
                  <motion.p 
                    className="text-lg text-slate-300 leading-relaxed"
                    variants={itemVariants}
                    whileHover={{ 
                      color: "#e2e8f0",
                      transition: { duration: 0.3 }
                    }}
                  >
                    I'm a software developer with a passion for creating tools that enhance productivity
                    and make technology more accessible. LevelUp AI was born from my desire to bring
                    the power of artificial intelligence directly to your browsing experience.
                  </motion.p>
                  
                  <motion.p 
                    className="text-slate-400 leading-relaxed"
                    variants={itemVariants}
                    whileHover={{ 
                      color: "#cbd5e1",
                      transition: { duration: 0.3 }
                    }}
                  >
                    When I'm not coding, you'll find me exploring the latest AI developments,
                    contributing to open-source projects, and thinking about the next innovation
                    that will shape how we interact with technology.
                  </motion.p>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={containerVariants}
                >
                  {socialLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      className={`group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r ${link.color} hover:${link.hoverColor} text-white font-medium transition-all duration-300 shadow-lg`}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setHoveredButton(index)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      {/* Animated Background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        animate={hoveredButton === index ? {
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.5, 0],
                        } : {}}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Shimmer Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={hoveredButton === index ? {
                          x: ['-100%', '100%'],
                        } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <div className="relative flex items-center">
                        <motion.div 
                          animate={hoveredButton === index ? {
                            y: [0, -5, 0],
                            rotate: [0, 10, -10, 0],
                          } : {}}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          {link.icon}
                        </motion.div>
                        <motion.span 
                          className="ml-2"
                          animate={hoveredButton === index ? {
                            x: [0, 2, 0],
                          } : {}}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          {link.name}
                        </motion.span>
                        <motion.div
                          animate={hoveredButton === index ? {
                            x: [0, 4, 0],
                            rotate: [0, 45, 0],
                          } : {}}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                        >
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/40 to-slate-800/60 border border-slate-600/40 backdrop-blur-2xl shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
            </motion.div>
            <motion.span 
              className="text-slate-200 font-medium"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Building the future, one line of code at a time
            </motion.span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="w-5 h-5 text-green-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Seamless Section Transition */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </section>
  );
};
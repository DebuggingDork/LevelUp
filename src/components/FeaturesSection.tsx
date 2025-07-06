import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, BookOpen, Star, Target, Settings, Brain, ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Enhance Text",
      description: "Improve grammar, tone, and clarity with AI-powered text enhancement that understands context and intent.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Get Meanings",
      description: "Instantly understand complex words and phrases with contextual definitions and real-world examples.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Favorites & History",
      description: "Save and organize your enhanced text and lookups with smart categorization and quick access.",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Floating Bar",
      description: "Access all features through an elegant, non-intrusive floating interface that adapts to your workflow.",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "API Setup",
      description: "Seamlessly integrate with your preferred AI services and APIs with secure configuration management.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Smart Context",
      description: "AI understands context to provide relevant and accurate enhancements tailored to your specific needs.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover the capabilities that make LevelUp AI the ultimate browsing companion
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                    {feature.icon}
                  </div>
                </div>
                
                <CardTitle className="text-lg font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
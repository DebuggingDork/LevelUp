
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      title: "Enhance Text",
      description: "Improve grammar, tone, and clarity with AI-powered text enhancement.",
      icon: "✨"
    },
    {
      title: "Get Meanings",
      description: "Instantly understand complex words and phrases with contextual definitions.",
      icon: "📚"
    },
    {
      title: "Favorites & History",
      description: "Save and organize your enhanced text and lookups for easy access.",
      icon: "⭐"
    },
    {
      title: "Floating Bar",
      description: "Access all features through an elegant, non-intrusive floating interface.",
      icon: "🎯"
    },
    {
      title: "API Setup",
      description: "Seamlessly integrate with your preferred AI services and APIs.",
      icon: "🔧"
    },
    {
      title: "Smart Context",
      description: "AI understands context to provide relevant and accurate enhancements.",
      icon: "🧠"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover the capabilities that make LevelUp AI the ultimate browsing companion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-200"
            >
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
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

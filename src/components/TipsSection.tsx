
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TipsSection = () => {
  const tips = [
    {
      title: "Keyboard Shortcuts",
      description: "Use Ctrl+Shift+L to quickly access the floating bar without selecting text",
      icon: "⌨️"
    },
    {
      title: "Context Matters",
      description: "Select complete sentences for better AI understanding and enhancement results",
      icon: "🎯"
    },
    {
      title: "Save Everything",
      description: "Use favorites to build a personal library of enhanced text and definitions",
      icon: "💾"
    },
    {
      title: "Batch Processing",
      description: "Process multiple text selections in sequence for efficient editing workflows",
      icon: "⚡"
    },
    {
      title: "API Optimization",
      description: "Choose the right AI model for your needs - GPT-4 for quality, GPT-3.5 for speed",
      icon: "🔧"
    },
    {
      title: "Privacy First",
      description: "All processing happens securely with your API keys - your data stays private",
      icon: "🔒"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pro Tips
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Master LevelUp AI with these expert tips and hidden features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-all duration-200"
            >
              <CardHeader className="pb-4">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <CardTitle className="text-lg font-semibold text-white">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

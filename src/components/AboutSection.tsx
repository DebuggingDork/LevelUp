
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Mani Mamidala
          </h2>
        </div>
        
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-slate-800 p-1">
                  <img 
                    src="/images/creator.png" 
                    alt="Mani Mamidala" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Passionate Developer & AI Enthusiast
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  I'm a software developer with a passion for creating tools that enhance productivity 
                  and make technology more accessible. LevelUp AI was born from my desire to bring 
                  the power of artificial intelligence directly to your browsing experience.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring the latest AI developments, 
                  contributing to open-source projects, and thinking about the next innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm"
                    onClick={() => window.open('https://www.linkedin.com/in/mamidala-mani-4b0b2a287/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-2 text-sm"
                    onClick={() => window.open('https://github.com/DebuggingDork/', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-4 py-2 text-sm"
                    onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

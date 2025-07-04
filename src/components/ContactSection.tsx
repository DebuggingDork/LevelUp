
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Need Help?
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Found a bug or have a feature request? I'd love to hear from you! 
            Your feedback helps make LevelUp AI better for everyone.
          </p>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-3">Report Issues & Feedback</h3>
            <p className="text-slate-400 mb-6">
              Click the button below to send me an email directly. I personally read and respond to every message.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=mamidala.mani1355@gmail.com&su=LevelUp%20AI%20-%20Issue%20Report', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Report an Issue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

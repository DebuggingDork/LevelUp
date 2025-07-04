
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <img src="/images/logo.png" alt="LevelUp AI" className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold text-white">
              LevelUp AI
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Chrome Web Store</a>
          </div>
        </div>
        
        <Separator className="my-6 bg-slate-800" />
        
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; 2025 LevelUp AI. Created with ❤️ by Mani Mamidala. All rights reserved.</p>
          <p className="mt-1">
            Enhance your browsing experience with the power of artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

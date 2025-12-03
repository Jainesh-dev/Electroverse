import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Twitch, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 border-t border-white/10 font-sans relative overflow-hidden">
      
      {/* --- THEME BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content - Horizontal Alignment */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
          
          {/* 1. LOGO SECTION - Styled for Theme */}
          <div className="flex-shrink-0">
            <div className="w-24 h-32 bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-4 rounded-lg group hover:border-purple-500/50 transition-colors duration-500 relative">
               {/* Inner Glow on Hover */}
               <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
               <img 
                 src="/logo.png" 
                 alt="Electroverse Logo" 
                 className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
               />
            </div>
          </div>

          {/* 2. LINKS SECTION - Horizontal Group of Columns */}
          <div className="flex-grow flex flex-wrap gap-10 xl:gap-24">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase relative inline-block">
                About Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500"></span>
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors tracking-wide">OUR STORY</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors tracking-wide">TEAM</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors tracking-wide">CAREERS</a>
                <a href="#" className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors tracking-wide">INTERNSHIPS</a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
               <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase relative inline-block">
                 Resources
                 <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-500"></span>
               </h4>
               <div className="flex flex-col gap-3">
                 <a href="#" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors tracking-wide">ADVERTISING</a>
                 <a href="#" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors tracking-wide">EVENTS</a>
                 <a href="#" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors tracking-wide">PRESS ROOM</a>
                 <a href="#" className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors tracking-wide">SUPPORT</a>
               </div>
            </div>
             
             {/* Column 3 - Subscribe */}
            <div className="flex flex-col gap-6 max-w-xs">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                      <Send className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase">Subscribe</h4>
                </div>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                   Access exclusive content and join the future of technology.
                </p>
            </div>

          </div>

          {/* 3. SOCIALS SECTION (Right Aligned) */}
          <div className="flex flex-col gap-6">
            <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase">Follow Us</h4>
            <div className="grid grid-cols-4 gap-6 text-gray-500">
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-purple-400 hover:scale-110 transition-all duration-300"><Twitch className="w-5 h-5" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Terms & Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
           <div className="flex gap-8 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Addendum</a>
           </div>
           <p className="tracking-wide opacity-70">&copy; 2024 ELECTROVERSE. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

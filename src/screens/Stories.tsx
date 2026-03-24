import React from 'react';
import { Leaf, Heart, MessageCircle, Share2, ChevronDown, User, Music, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Stories() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1080&h=1920&fit=crop" 
          alt="Story Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Top Bar */}
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-12">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white mr-2"
          >
            <ArrowLeft size={24} />
          </button>
          <Leaf className="text-white" size={24} />
          <span className="font-serif text-xl font-bold text-white">Sanctuary Stories</span>
        </div>
        <div className="flex gap-6">
          <ThemeToggle />
          <span className="text-white font-bold border-b-2 border-white pb-1">Following</span>
          <span className="text-white/60 font-bold">Discover</span>
        </div>
        <div className="w-6"></div>
      </header>

      {/* Right Interaction Bar */}
      <div className="absolute right-4 bottom-32 z-50 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Creator" />
          </div>
          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center -mt-4 border-2 border-black">
            <span className="text-white text-[10px] font-bold">+</span>
          </div>
        </div>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Heart size={24} className="text-white group-hover:fill-white" />
          </div>
          <span className="text-white text-xs font-bold">12.4K</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <MessageCircle size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-bold">842</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Share2 size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-bold">Share</span>
        </button>

        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center animate-spin-slow">
          <Music size={20} className="text-white" />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 w-full p-8 pb-12 z-40">
        <div className="max-w-md space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-white font-bold text-lg">Julian Rivers</h3>
            <span className="bg-primary/40 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Day 124</span>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">
            Finding peace in the morning stillness. Recovery isn't just about what you stop doing, it's about what you start noticing. #Mindfulness #RecoveryJourney
          </p>
          <div className="flex items-center gap-2 text-white/70 text-xs font-bold">
            <Music size={14} />
            <span>Original Audio - Morning Serenity</span>
          </div>
        </div>
      </div>

      {/* Navigation Overlay */}
      <div className="absolute bottom-0 w-full h-1 bg-white/20">
        <div className="h-full bg-white w-1/3"></div>
      </div>
    </div>
  );
}

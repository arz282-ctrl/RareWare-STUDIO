import React from 'react';
import { Menu, Shield, Brain, Star, SquarePen, Send, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Chat() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <header className="glass fixed top-0 w-full z-50 shadow-sm">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-surface-container-low transition-colors rounded-full text-primary"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex flex-col">
              <h1 className="font-serif text-xl font-semibold text-primary">Safe Space</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant opacity-70">Session Active</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:flex items-center px-4 py-1.5 bg-surface-container-low rounded-full gap-2">
              <Shield size={14} className="text-secondary" />
              <span className="text-xs font-medium text-on-surface-variant">Safe & Secure Session</span>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqyMoMl1002gi4-fafgGF2kMp0O1und4xy3USQkiQs47JuI0uJGHBYGyfU7nGTyh3FghaCtRGK7Ex7noKtFgMjMFp9w1ZOT9NrN_9Nym130a3lA9zow0lWw9C-bed5j4QVwv1INqm7A8EpLGqhGZYKV2GUB8uDvjTNyGxnwPiry3QiTSNk7sZjRHPU9L4mIbt2DvUCk1110GV5MJKADvvw0IVDlfZ4wXcgknwtZjKx66QZDEi3xM3kIAhxoJ_SiVfcQaNORD5EkhU" 
                alt="Counselor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-44 min-h-screen max-w-5xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          <div className="flex justify-center">
            <span className="px-4 py-1 bg-surface-container-low rounded-full text-[11px] font-bold tracking-widest uppercase text-on-surface-variant/60">Tuesday, October 24</span>
          </div>

          {/* Counselor Message */}
          <div className="flex flex-col gap-4 max-w-[85%] md:max-w-[70%]">
            <div className="flex items-end gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <Brain size={16} className="text-secondary" />
              </div>
              <div className="bg-secondary-container rounded-3xl rounded-bl-none p-5 shadow-sm">
                <p className="font-serif text-lg leading-relaxed text-on-secondary-container">
                  Good morning. I'm Counselor Aris. I've been reflecting on our progress from Day 3. You mentioned feeling a bit more grounded after the breathing exercise. How are you holding that space today?
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium text-on-surface-variant/50 ml-11">Aris • 09:12 AM</span>
          </div>

          {/* User Message */}
          <div className="flex flex-col gap-4 max-w-[85%] md:max-w-[70%] ml-auto items-end">
            <div className="flex items-end gap-3 justify-end">
              <div className="bg-surface-container-highest rounded-3xl rounded-br-none p-5 shadow-sm">
                <p className="text-md leading-relaxed text-on-surface">
                  It's been a mixed morning. I felt strong earlier, but I'm starting to notice some of those familiar triggers as I head into work. Just trying to stay present.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-medium text-on-surface-variant/50 mr-2">You • 09:14 AM</span>
          </div>

          {/* Counselor Response */}
          <div className="flex flex-col gap-4 max-w-[85%] md:max-w-[70%]">
            <div className="flex items-end gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                <Brain size={16} className="text-secondary" />
              </div>
              <div className="bg-secondary-container rounded-3xl rounded-bl-none p-5 shadow-sm">
                <p className="font-serif text-lg leading-relaxed text-on-secondary-container">
                  It is completely natural for those triggers to surface during transitions. Acknowledging them is your first win of the day. Shall we explore one of those triggers specifically, or would you like a quick grounding technique for your commute?
                </p>
              </div>
            </div>
            <div className="ml-11 flex flex-wrap gap-2 mt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-tertiary-container/10 border border-tertiary-container/20 rounded-full">
                <Star size={14} className="text-tertiary fill-tertiary" />
                <span className="text-[11px] font-bold text-tertiary uppercase tracking-tight">Milestone: Resilience Awareness</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-on-surface-variant/50 ml-11">Aris • 09:15 AM</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full z-40">
        <div className="max-w-5xl mx-auto px-4 md:px-8 mb-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {[
              "I'm feeling a craving...",
              "Tell me more about Day 3",
              "How can I stay calm right now?",
              "Review my goals"
            ].map((prompt, i) => (
              <button key={i} className="shrink-0 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/20 rounded-full text-sm font-medium text-primary hover:bg-surface-container transition-all shadow-sm">
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="glass backdrop-blur-2xl px-4 md:px-8 pt-4 pb-8 md:pb-12 border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <SquarePen className="text-outline-variant group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              className="w-full bg-surface-container-high border-none rounded-2xl py-5 pl-12 pr-16 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Share what's on your mind..." 
            />
            <div className="absolute inset-y-2 right-2 flex items-center">
              <button className="h-10 w-10 bg-gradient-to-br from-primary to-primary-container rounded-xl text-white flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                <Send size={20} />
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex items-center px-4 py-1 bg-surface-container-low rounded-full gap-2 opacity-60">
              <Lock size={14} className="text-secondary fill-secondary" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Secure E2EE Session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

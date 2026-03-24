import React from 'react';
import { Leaf, ScrollText, Stars, UserRound, Users, BookOpen, ChevronRight, CheckCircle, Lock, BrainCircuit, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="glass sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Leaf className="text-primary" size={28} />
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">Sanctuary</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => navigate('/wisdom')}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary"
          >
            <Sparkles size={24} />
          </button>
          <div 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden shadow-sm border-2 border-primary/10 cursor-pointer hover:border-primary transition-all"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFtQaLU-bG0jHTnwPSAco579d8MwSza3Bilurj-qDvVyT3cnKQ21nXUop1-IDKEheshhLs-u3hUAlMKmlpRHFHTWF0vD6O_VgK34ttXxa87QvhYrqx4cIMHhnKCdDva-hXO75JkCKw8jQXsljVaTKe-Y_sMoEp8Sxb8vg1Ag26lD3i9GKxWLZTS3crK0TKAQA1pYXnhkQbw15sD3KM2B8Zw-taeIhFRdGgatkhHvjIyvAWDMAxc1HLXgWtEy0zBzJJPjY93DjyNIY" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-8 space-y-12">
        {/* Daily Intention */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative cursor-pointer"
          onClick={() => navigate('/wisdom')}
        >
          <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 overflow-hidden relative group editorial-shadow">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/60 mb-4 block">Daily Intention</span>
              <h2 className="font-serif text-3xl md:text-4xl text-on-surface leading-tight mb-6 italic">
                "Your recovery is not a race, it is a return to the person you were always meant to be."
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <ScrollText className="text-primary" size={16} />
                </div>
                <p className="text-sm font-medium text-on-surface-variant">Authored by Dr. Aris Thorne, Counselor</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Sobriety Counter */}
          <div 
            onClick={() => navigate('/progress')}
            className="md:col-span-5 bg-surface-container-lowest rounded-3xl p-8 flex flex-col justify-between editorial-shadow border border-outline-variant/10 cursor-pointer hover:border-primary/20 transition-all"
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant/70">Healing Journey</span>
              <div className="mt-8 flex flex-col items-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="6"></circle>
                    <circle cx="96" cy="96" fill="transparent" r="88" stroke="url(#goldGradient)" strokeDasharray="552" strokeDashoffset="120" strokeLinecap="round" strokeWidth="8"></circle>
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#cca830', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: '#735c00', stopOpacity: 1 }}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-serif font-bold text-on-surface">12</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">Days Strong</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-tertiary-container/10 p-4 rounded-2xl flex items-center gap-4">
              <Stars className="text-tertiary fill-tertiary" size={24} />
              <div>
                <p className="text-sm font-bold text-tertiary">New Milestone: Serenity</p>
                <p className="text-xs text-on-tertiary-container/70">You've reached your longest streak this month.</p>
              </div>
            </div>
          </div>

          {/* Today's Focus */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-serif text-2xl text-on-surface">Today's Focus</h3>
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">3 Tasks Remaining</span>
            </div>
            <div className="space-y-4">
              {[
                { title: '5-minute Reflection', desc: "Center your thoughts on today's intention.", icon: UserRound, path: '/breathing' },
                { title: 'Connect with community', desc: "Share a word of encouragement in the lounge.", icon: Users, path: '/lounge' },
                { title: 'Evening Gratitude', desc: "Note three things that held you steady today.", icon: BookOpen, path: '/guide' },
              ].map((task, i) => (
                <div 
                  key={i} 
                  onClick={() => navigate(task.path)}
                  className="group bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 p-6 rounded-2xl flex items-center gap-6 cursor-pointer editorial-shadow"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    <task.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface">{task.title}</h4>
                    <p className="text-sm text-on-surface-variant">{task.desc}</p>
                  </div>
                  <ChevronRight className="text-outline-variant" size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Week Progress */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="font-serif text-2xl text-on-surface">First Week Milestones</h3>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto no-scrollbar pb-4">
            {[
              { day: 1, title: 'Awakening', status: 'completed' },
              { day: 2, title: 'Breathe', status: 'completed' },
              { day: 3, title: 'Foundation', status: 'active' },
              { day: 4, title: 'Insight', status: 'locked' },
              { day: 5, title: 'Balance', status: 'locked' },
              { day: 6, title: 'Strength', status: 'locked' },
              { day: 7, title: 'Victory', status: 'locked' },
            ].map((m) => (
              <div 
                key={m.day} 
                onClick={() => navigate('/guide')}
                className={cn(
                  "flex-1 min-w-[120px] p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer",
                  m.status === 'completed' ? "bg-primary text-white" : 
                  m.status === 'active' ? "bg-primary-container text-on-primary-container border-2 border-primary/20 ring-4 ring-primary/5" :
                  "bg-surface-container text-on-surface-variant/60"
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-3">Day {m.day}</span>
                {m.status === 'completed' ? <CheckCircle size={24} className="mb-2 fill-white text-primary" /> :
                 m.status === 'active' ? (
                   <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-2 animate-pulse">
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                   </div>
                 ) : <Lock size={24} className="mb-2 text-outline-variant" />}
                <span className="text-xs font-bold">{m.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Support Card */}
        <section className="pb-8">
          <div className="bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden editorial-shadow">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-serif text-2xl text-white mb-2">Feeling overwhelmed?</h3>
              <p className="text-white/80 max-w-sm">Your counselor is available for a private check-in right now.</p>
            </div>
            <button 
              onClick={() => navigate('/chat')}
              className="relative z-10 bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-3"
            >
              <BrainCircuit size={20} />
              Talk to Counselor
            </button>
          </div>
        </section>
      </main>

      <button 
        onClick={() => navigate('/chat')}
        className="fixed bottom-28 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-90 transition-transform md:hidden"
      >
        <MessageCircle className="fill-white" size={24} />
      </button>
    </div>
  );
}

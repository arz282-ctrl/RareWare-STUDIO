import React from 'react';
import { Leaf, Check, Award, Building2, Lock, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Milestones() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="glass sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary mr-2"
          >
            <ArrowLeft size={24} />
          </button>
          <Leaf className="text-primary" size={24} />
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">Sanctuary</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed cursor-pointer hover:border-primary transition-all"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANuBsDeuR8B6otTOayKnM3oQKS4V3zBCA-lbGZxQSFUwdmcEaXRwzxBE2egKAM36SP0Pw-kOrvgkypLANTk_lL8aRz0WshQJn62DZ2b0H4H4n9SdaAG548q5P4FhSkQprF6jiVCiCNoWIhx0sYGqgGnW0MjfTh8qnZH2MEQ9CstGzqgIHgSx2jwcJqrjcwfuuYImF3_WKm_YDzO84QvkQ32VkXHOhBXabtSKNxmWk_an5uspRW0vItAg8oR16qd-19FSX8I46OEcA" 
              alt="User" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-8">
        <section className="mb-12">
          <p className="text-primary font-semibold tracking-[0.1em] uppercase text-xs mb-2">Milestone Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-4 leading-tight">The First Week</h2>
          <p className="text-on-surface-variant max-w-lg leading-relaxed">
            The beginning of your path is the most courageous step. We honor your presence here. This week is about grounding and gentle discovery.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-surface-container-low rounded-3xl p-8 relative overflow-hidden editorial-shadow">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="font-serif text-xl">Current Progress</h3>
              <span className="text-primary font-bold">Day 3 of 7</span>
            </div>
            <div className="relative flex justify-between items-center z-10">
              <div className="absolute h-0.5 w-full bg-outline-variant/30 top-1/2 -translate-y-1/2"></div>
              <div className="absolute h-0.5 w-1/3 bg-primary top-1/2 -translate-y-1/2"></div>
              
              {[
                { day: 1, type: 'done' },
                { day: 2, type: 'done' },
                { day: 3, type: 'today' },
                { day: 4, type: 'locked' },
                { day: 5, type: 'locked' },
                { day: 6, type: 'locked' },
                { day: 7, type: 'premium' },
              ].map((d) => (
                <div key={d.day} className="relative flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300",
                    d.type === 'done' ? "bg-primary text-white shadow-lg" :
                    d.type === 'today' ? "w-10 h-10 bg-gradient-to-br from-primary to-primary-container text-white shadow-[0_0_20px_rgba(0,70,74,0.3)] ring-4 ring-background" :
                    "bg-surface-container-high border border-outline-variant text-outline"
                  )}>
                    {d.type === 'done' ? <Check size={14} className="fill-white" /> :
                     d.type === 'premium' ? <Award size={14} /> :
                     <span>{d.day}</span>}
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    d.type === 'today' ? "text-primary" : "text-on-surface-variant"
                  )}>{d.type === 'today' ? 'Today' : `Day ${d.day}`}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 flex flex-col gap-8">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl editorial-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <Building2 className="text-tertiary-container/30" size={96} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-tertiary-container/20 text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Active Focus</span>
                  <span className="text-on-surface-variant text-sm font-medium">Day 3</span>
                </div>
                <h3 className="font-serif text-4xl mb-6 text-on-surface">Foundation</h3>
                <div className="space-y-6 max-w-lg">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">What to expect</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Today, the fog might begin to lift slightly. You may feel a mix of fatigue and clarity. This is your foundation forming—be patient with the process.
                    </p>
                  </div>
                  <div className="bg-tertiary-container/10 border-l-4 border-tertiary-container p-4 rounded-r-2xl">
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-on-tertiary-container">Small Wins</h4>
                    <p className="text-on-tertiary-container italic">"Acknowledging my presence is my first victory of the day."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-3xl">
              <h3 className="font-serif text-2xl mb-6">Daily Anchors</h3>
              <div className="space-y-4">
                {[
                  { title: 'Mindful Hydration', desc: 'Drink 8 glasses of water today' },
                  { title: '5-minute Breathing', desc: 'Practice focused inhalation in the Guide tab' },
                  { title: 'Check-in with Counselor', desc: 'Send a short update on your mood' },
                ].map((anchor, i) => (
                  <label key={i} className="flex items-center gap-4 group cursor-pointer p-4 bg-background rounded-2xl hover:bg-surface-container-high transition-colors">
                    <input type="checkbox" className="w-6 h-6 rounded-full border-outline text-primary focus:ring-primary" />
                    <div className="flex flex-col">
                      <span className="font-bold text-on-surface group-hover:text-primary transition-colors">{anchor.title}</span>
                      <span className="text-xs text-on-surface-variant">{anchor.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-xl mb-4 ml-2">Weekly Rhythm</h4>
            {[
              { day: 1, title: 'Awakening', type: 'done' },
              { day: 2, title: 'Breathe', type: 'done' },
              { day: 4, title: 'Observation', type: 'locked' },
              { day: 5, title: 'Resilience', type: 'locked' },
              { day: 6, title: 'Connection', type: 'locked' },
              { day: 7, title: 'Renewal', type: 'star' },
            ].map((r) => (
              <div key={r.day} className={cn(
                "p-4 rounded-2xl border flex items-center gap-4 transition-all duration-300",
                r.type === 'done' ? "bg-surface-container-highest/40 border-outline-variant/20 opacity-70" :
                r.type === 'star' ? "bg-gradient-to-br from-tertiary/5 to-tertiary-container/20 border-tertiary-container/30" :
                "bg-surface-container-low border-l-4 border-outline-variant"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  r.type === 'done' ? "bg-primary/10 text-primary" :
                  r.type === 'star' ? "bg-tertiary-container/20 text-tertiary" :
                  "bg-surface-container-high text-outline"
                )}>
                  {r.type === 'done' ? <Check size={20} /> :
                   r.type === 'star' ? <Star size={20} /> :
                   <Lock size={20} />}
                </div>
                <div>
                  <p className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    r.type === 'star' ? "text-on-tertiary-container" : "text-on-surface-variant"
                  )}>Day {r.day}</p>
                  <p className={cn(
                    "font-bold",
                    r.type === 'star' ? "text-on-tertiary-container" : "text-on-surface"
                  )}>{r.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <Sparkles className="text-primary mx-auto mb-4" size={40} />
          <p className="font-serif text-lg text-on-surface-variant italic">"Success is the sum of small efforts, repeated day in and day out."</p>
        </div>
      </main>
    </div>
  );
}

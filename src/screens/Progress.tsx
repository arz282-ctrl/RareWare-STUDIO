import React, { useEffect, useState } from 'react';
import { Leaf, ChevronLeft, Calendar, TrendingUp, Award, Droplets, Wind, ScrollText, MoreHorizontal, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Label } from 'recharts';
import { getRecoveryInsight } from '../services/gemini';
import { ThemeToggle } from '../components/ThemeToggle';

const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 70 },
  { name: 'Sat', value: 85 },
  { name: 'Sun', value: 90 },
];

export default function Progress() {
  const navigate = useNavigate();
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  useEffect(() => {
    async function fetchInsight() {
      setIsLoadingInsight(true);
      const insight = await getRecoveryInsight(data);
      setAiInsight(insight);
      setIsLoadingInsight(false);
    }
    fetchInsight();
  }, []);

  return (
    <div className="min-h-screen pb-32">
      <header className="glass sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">My Progress</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10 cursor-pointer hover:border-primary transition-all"
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
        {/* AI Insight Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-secondary-container/30 to-primary-container/20 border border-primary/10"
        >
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-primary mb-1">Recovery Coach Insight</h3>
              {isLoadingInsight ? (
                <div className="space-y-2">
                  <div className="h-4 w-48 bg-primary/5 animate-pulse rounded"></div>
                  <div className="h-4 w-32 bg-primary/5 animate-pulse rounded"></div>
                </div>
              ) : (
                <p className="text-on-surface-variant leading-relaxed italic">
                  "{aiInsight}"
                </p>
              )}
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Sparkles size={120} className="text-primary" />
          </div>
        </motion.section>

        {/* Hero Stats */}
        <section className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden editorial-shadow">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4 block">Current Milestone</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Day 42 <span className="text-2xl font-sans font-normal opacity-60">of Recovery</span></h2>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                <Calendar size={20} className="text-on-primary-container" />
                <span className="text-sm font-bold">6 Weeks Strong</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                <TrendingUp size={20} className="text-on-primary-container" />
                <span className="text-sm font-bold">+12% Consistency</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-serif text-2xl text-on-surface">Weekly Consistency</h3>
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">October 2024</span>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-on-surface-variant/60">{day}</span>
                <div className={cn(
                  "w-full aspect-square rounded-2xl flex items-center justify-center transition-all duration-300",
                  i < 5 ? "bg-primary text-white shadow-lg" : "bg-surface-container-high border border-outline-variant/20"
                )}>
                  {i < 5 && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chart Section */}
        <section className="bg-surface-container-low rounded-3xl p-8 editorial-shadow">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-serif text-2xl text-on-surface">Emotional Equilibrium</h3>
              <p className="text-sm text-on-surface-variant">Your self-reported mood trends over the last 7 days.</p>
            </div>
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e2dd" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6f7979', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                  itemStyle={{ color: '#00464a', fontWeight: 700 }}
                />
                <ReferenceLine 
                  y={75} 
                  stroke="#00464a" 
                  strokeDasharray="3 3" 
                  strokeOpacity={0.3}
                >
                  <Label 
                    value="Goal" 
                    position="left" 
                    fill="#00464a" 
                    fontSize={10} 
                    fontWeight={700}
                    offset={10}
                  />
                </ReferenceLine>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#00464a" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#00464a', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, fill: '#00464a' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <h3 className="font-serif text-2xl text-on-surface">Earned Wisdom</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'First Breath', icon: Wind, color: 'bg-blue-50 text-blue-600' },
              { title: 'Community Pillar', icon: Award, color: 'bg-amber-50 text-amber-600' },
              { title: 'Deep Reflection', icon: ScrollText, color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Hydration Hero', icon: Droplets, color: 'bg-cyan-50 text-cyan-600' },
            ].map((badge, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl flex flex-col items-center text-center gap-4 editorial-shadow border border-outline-variant/10 group hover:border-primary/20 transition-all">
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform", badge.color)}>
                  <badge.icon size={32} />
                </div>
                <span className="text-sm font-bold text-on-surface">{badge.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Anchors Progress */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Hydration', value: 80, icon: Droplets, color: 'text-blue-500' },
            { label: 'Breathing', value: 100, icon: Wind, color: 'text-emerald-500' },
            { label: 'Reflection', value: 40, icon: ScrollText, color: 'text-amber-500' },
          ].map((anchor, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-2xl flex items-center gap-6">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-high" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className={anchor.color} cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="176" strokeDashoffset={176 - (176 * anchor.value) / 100} strokeLinecap="round" strokeWidth="4"></circle>
                </svg>
                <anchor.icon className={cn("absolute", anchor.color)} size={18} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{anchor.label}</p>
                <p className="text-xl font-bold text-on-surface">{anchor.value}%</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

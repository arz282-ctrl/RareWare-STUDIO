import React from 'react';
import { Leaf, Search, Bookmark, Share2, Play, ChevronRight, Brain, ScrollText, Verified, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Wisdom() {
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
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">Expert Wisdom</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant">
            <Search size={20} />
          </button>
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
        {/* Specialist Spotlight */}
        <section>
          <div className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 flex flex-col md:row items-center gap-12 editorial-shadow relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="md:w-1/3 shrink-0 relative">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" 
                  alt="Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-xl">
                <Brain size={24} />
              </div>
            </div>
            <div className="flex-1 space-y-6 relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                <Verified size={16} className="fill-primary text-white" />
                Specialist Spotlight
              </div>
              <h2 className="font-serif text-4xl text-on-surface leading-tight">Dr. Aris Thorne</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                "Healing is not a linear path, but a series of small, intentional choices. My goal is to provide you with the psychological tools to navigate the complex terrain of recovery."
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                  View Insights
                </button>
                <button className="p-3 border border-outline-variant rounded-full hover:bg-surface-container-high transition-colors">
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['All Insights', 'Medical Advice', 'Therapy Exercises', 'Nutrition', 'Sleep Science'].map((cat, i) => (
            <button 
              key={i} 
              className={cn(
                "shrink-0 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all",
                i === 0 ? "bg-primary text-white shadow-lg" : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Featured Article */}
        <section className="space-y-8">
          <div className="flex justify-between items-end">
            <h3 className="font-serif text-2xl text-on-surface">Latest Contributions</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Restoring Dopamine Baseline',
                desc: 'How to naturally recalibrate your reward system during the first 90 days of recovery.',
                author: 'Dr. Aris Thorne',
                image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop',
                type: 'Medical'
              },
              {
                title: 'The Power of Daily Anchors',
                desc: 'Why small, repetitive rituals are the secret to long-term neurological resilience.',
                author: 'Julian Rivers',
                image: 'https://images.unsplash.com/photo-1499209974431-9ddd3e2f01f8?w=600&h=400&fit=crop',
                type: 'Psychology'
              }
            ].map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                    {article.type}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-serif text-2xl mb-2 text-on-surface group-hover:text-primary transition-colors">{article.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{article.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-container-high"></div>
                    <span className="text-xs font-bold text-on-surface-variant">{article.author}</span>
                  </div>
                  <div className="flex gap-4 text-outline">
                    <Bookmark size={16} />
                    <Share2 size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Pro-Bono CTA */}
        <section className="pb-8">
          <div className="bg-primary-container text-on-primary-container rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 editorial-shadow">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl mb-2">Pro-Bono Support</h3>
              <p className="opacity-80 max-w-md">We offer free specialist sessions for those in early recovery facing financial hardship.</p>
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
              Apply for Support
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

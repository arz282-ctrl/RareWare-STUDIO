import React from 'react';
import { Leaf, Bell, Search, Heart, MessageCircle, Share2, Plus, Sparkles, Play, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

const posts = [
  {
    id: '1',
    author: { name: 'Elena M.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', role: 'Day 42' },
    content: "Today marks my 6th week. I never thought I'd see this day. To anyone starting out: the first 3 days are a storm, but the sun does come out. Keep breathing.",
    timestamp: '2h ago',
    sparks: 124,
    replies: 18,
    tags: ['#Gratitude', '#SafeSpace']
  },
  {
    id: '2',
    author: { name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', role: 'Day 12' },
    content: "Just finished the 'Foundation' exercise with Aris. Feeling a bit raw but definitely more present. Grateful for this community.",
    timestamp: '4h ago',
    sparks: 89,
    replies: 12,
    tags: ['#Breathe', '#Foundation']
  },
  {
    id: '3',
    author: { name: 'Sarah J.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', role: 'Day 156' },
    content: "The urge was strong today, but I came here instead. Reading your stories reminded me why I started. Thank you all for being my anchor.",
    timestamp: '6h ago',
    sparks: 342,
    replies: 45,
    tags: ['#Strength', '#Community']
  }
];

export default function Lounge() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-32">
      <header className="glass sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Leaf className="text-primary" size={24} />
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">The Lounge</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => navigate('/stories')}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary"
          >
            <Play size={20} />
          </button>
          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant">
            <Search size={20} />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFtQaLU-bG0jHTnwPSAco579d8MwSza3Bilurj-qDvVyT3cnKQ21nXUop1-IDKEheshhLs-u3hUAlMKmlpRHFHTWF0vD6O_VgK34ttXxa87QvhYrqx4cIMHhnKCdDva-hXO75JkCKw8jQXsljVaTKe-Y_sMoEp8Sxb8vg1Ag26lD3i9GKxWLZTS3crK0TKAQA1pYXnhkQbw15sD3KM2B8Zw-taeIhFRdGgatkhHvjIyvAWDMAxc1HLXgWtEy0zBzJJPjY93DjyNIY" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-8 space-y-12">
        {/* Daily Spark */}
        <section>
          <div 
            onClick={() => navigate('/stories')}
            className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&h=600&fit=crop" 
              alt="Daily Spark" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-2 block">Daily Spark</span>
              <h2 className="font-serif italic text-2xl md:text-3xl text-white max-w-lg leading-tight">
                "One day at a time is enough. Do not look back and grieve over the past, for it is gone."
              </h2>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="text-white fill-white" size={32} />
            </div>
          </div>
        </section>

        {/* Filter Tags */}
        <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {['All Stories', '#Gratitude', '#SafeSpace', '#Breathe', '#Foundation', '#Strength'].map((tag, i) => (
            <button 
              key={i} 
              className={cn(
                "shrink-0 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all",
                i === 0 ? "bg-primary text-white shadow-lg" : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {tag}
            </button>
          ))}
        </section>

        {/* Feed */}
        <section className="space-y-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-2xl text-on-surface">Words of Encouragement</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1">
              Newest First
              <Plus size={16} />
            </button>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface-container-lowest p-8 rounded-3xl editorial-shadow border border-outline-variant/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/5">
                      <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{post.author.name}</h4>
                      <p className="text-xs font-bold text-primary tracking-widest uppercase">{post.author.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-on-surface-variant/60 font-medium">{post.timestamp}</span>
                </div>
                
                <p className="text-lg text-on-surface leading-relaxed mb-6 font-medium">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="text-xs font-bold text-primary/60">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-primary/5">
                        <Heart size={20} className="group-hover:fill-primary" />
                      </div>
                      <span className="text-sm font-bold">{post.sparks}</span>
                    </button>
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-primary/5">
                        <MessageCircle size={20} />
                      </div>
                      <span className="text-sm font-bold">{post.replies}</span>
                    </button>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-8">
          <div className="bg-surface-container-high rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} className="text-primary" />
            </div>
            <h3 className="font-serif text-3xl mb-4 text-on-surface">Lend a Word</h3>
            <p className="text-on-surface-variant max-w-md mx-auto mb-8">
              Your experience could be the light someone else needs today. Share your story safely.
            </p>
            <button 
              onClick={() => navigate('/create')}
              className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto"
            >
              <Camera size={20} />
              Share Reflection
            </button>
          </div>
        </section>
      </main>

      <button 
        onClick={() => navigate('/create')}
        className="fixed bottom-28 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-90 transition-transform md:hidden"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}

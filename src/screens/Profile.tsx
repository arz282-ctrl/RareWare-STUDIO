import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Settings, 
  Award, 
  Shield, 
  Calendar, 
  Zap, 
  Star, 
  Share2, 
  ChevronRight,
  Heart,
  Target,
  Trophy,
  Edit2,
  Check,
  X,
  Camera
} from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

const achievements = [
  { id: 1, title: 'First Breath', icon: Wind, color: 'bg-blue-500', date: 'Oct 12, 2025' },
  { id: 2, title: '7 Day Streak', icon: Zap, color: 'bg-yellow-500', date: 'Oct 19, 2025' },
  { id: 3, title: 'Community Pillar', icon: Heart, color: 'bg-red-500', date: 'Oct 22, 2025' },
  { id: 4, title: 'Wisdom Seeker', icon: Star, color: 'bg-purple-500', date: 'Oct 24, 2025' },
];

import { Wind } from 'lucide-react';

const milestones = [
  { day: 1, title: 'Awakening', status: 'completed', date: 'Oct 12' },
  { day: 2, title: 'Breathe', status: 'completed', date: 'Oct 13' },
  { day: 3, title: 'Foundation', status: 'completed', date: 'Oct 14' },
  { day: 7, title: 'Victory', status: 'upcoming', date: 'Oct 19' },
];

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Julian Rivers',
    bio: 'Member since October 2025',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFtQaLU-bG0jHTnwPSAco579d8MwSza3Bilurj-qDvVyT3cnKQ21nXUop1-IDKEheshhLs-u3hUAlMKmlpRHFHTWF0vD6O_VgK34ttXxa87QvhYrqx4cIMHhnKCdDva-hXO75JkCKw8jQXsljVaTKe-Y_sMoEp8Sxb8vg1Ag26lD3i9GKxWLZTS3crK0TKAQA1pYXnhkQbw15sD3KM2B8Zw-taeIhFRdGgatkhHvjIyvAWDMAxc1HLXgWtEy0zBzJJPjY93DjyNIY'
  });

  const [editForm, setEditForm] = useState(profile);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('user_profile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setProfile(parsed);
      setEditForm(parsed);
    }
  }, []);

  const handleSave = () => {
    setProfile(editForm);
    localStorage.setItem('user_profile', JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${profile.name}'s Sanctuary Profile`,
      text: `I've reached a 12-day streak on Sanctuary! My recovery journey is going strong.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} Check it out here: ${shareData.url}`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      // Ignore AbortError (user canceled the share)
      if (err instanceof Error && err.name === 'AbortError') {
        return;
      }
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[100] bg-on-surface text-surface px-6 py-3 rounded-2xl font-bold shadow-2xl flex items-center gap-3"
          >
            <Check size={20} className="text-primary" />
            Profile link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      <header className="glass sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold tracking-tight font-serif text-primary">My Sanctuary</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={cn(
              "p-2 rounded-full transition-colors",
              isEditing ? "bg-primary text-white" : "hover:bg-surface-container-low text-on-surface-variant"
            )}
          >
            {isEditing ? <X size={24} /> : <Settings size={24} />}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-8 space-y-12">
        {/* User Profile Card */}
        <section>
          <div className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 editorial-shadow relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative group">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                <img 
                  src={profile.avatarUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white z-20">
                    <Camera size={32} />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white p-3 rounded-2xl shadow-xl z-20">
                <Shield size={24} />
              </div>
            </div>

            <div className="flex-1 space-y-6 relative z-10 text-center md:text-left w-full">
              <AnimatePresence mode="wait">
                {isEditing ? (
                  <motion.div 
                    key="edit-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Name</label>
                      <input 
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full bg-surface-container-highest border-none rounded-2xl px-6 py-3 font-serif text-2xl text-on-surface focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Short Bio</label>
                      <textarea 
                        value={editForm.bio}
                        onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                        className="w-full bg-surface-container-highest border-none rounded-2xl px-6 py-3 text-on-surface focus:ring-2 focus:ring-primary outline-none transition-all resize-none h-24"
                        placeholder="Tell us about your journey..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Avatar URL</label>
                      <input 
                        type="text"
                        value={editForm.avatarUrl}
                        onChange={(e) => setEditForm({ ...editForm, avatarUrl: e.target.value })}
                        className="w-full bg-surface-container-highest border-none rounded-2xl px-6 py-3 text-xs text-on-surface-variant focus:ring-2 focus:ring-primary outline-none transition-all"
                        placeholder="Image URL"
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button 
                        onClick={handleSave}
                        className="flex-1 bg-primary text-white py-4 rounded-full font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        <Check size={20} />
                        Save Changes
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="flex-1 bg-surface-container-highest text-on-surface py-4 rounded-full font-bold hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
                      >
                        <X size={20} />
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="display-info"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div>
                      <h2 className="font-serif text-4xl text-on-surface leading-tight mb-2">{profile.name}</h2>
                      <p className="text-on-surface-variant font-medium">{profile.bio}</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
                      <div className="flex flex-col">
                        <span className="text-2xl font-serif font-bold text-primary">12 Days</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Current Streak</span>
                      </div>
                      <div className="w-[1px] bg-outline-variant/30 hidden md:block"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-serif font-bold text-primary">24</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Sessions Done</span>
                      </div>
                      <div className="w-[1px] bg-outline-variant/30 hidden md:block"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-serif font-bold text-primary">8</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Achievements</span>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mt-8">
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                      >
                        <Edit2 size={18} />
                        Edit Profile
                      </button>
                      <button 
                        onClick={handleShare}
                        className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                      >
                        <Share2 size={18} />
                        Share Profile
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Achievements Grid */}
        <section className="space-y-8">
          <div className="flex justify-between items-end">
            <h3 className="font-serif text-2xl text-on-surface">Recent Achievements</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1">
              View All
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <motion.div 
                key={achievement.id}
                whileHover={{ y: -5 }}
                className="bg-surface-container-low p-6 rounded-3xl flex flex-col items-center text-center editorial-shadow border border-outline-variant/10"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg", achievement.color)}>
                  <achievement.icon size={32} />
                </div>
                <h4 className="font-bold text-on-surface text-sm mb-1">{achievement.title}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="font-serif text-2xl text-on-surface">Milestone Timeline</h3>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, i) => (
              <div 
                key={i}
                className={cn(
                  "p-6 rounded-2xl flex items-center justify-between transition-all duration-300",
                  milestone.status === 'completed' ? "bg-surface-container-lowest border border-primary/10" : "bg-surface-container-low opacity-60"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    milestone.status === 'completed' ? "bg-primary text-white" : "bg-surface-container-high text-outline"
                  )}>
                    {milestone.status === 'completed' ? <Trophy size={20} /> : <Target size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">{milestone.title}</h4>
                    <p className="text-xs text-on-surface-variant">Day {milestone.day} Milestone</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{milestone.date}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{milestone.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Summary */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div className="bg-secondary-container/20 p-8 rounded-3xl border border-secondary-container/30">
            <Calendar className="text-secondary mb-4" size={32} />
            <h4 className="font-serif text-xl mb-2">Consistency</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">You've checked in 92% of the days this month. Your morning routine is becoming a strong anchor.</p>
          </div>
          <div className="bg-tertiary-container/20 p-8 rounded-3xl border border-tertiary-container/30">
            <Target className="text-tertiary mb-4" size={32} />
            <h4 className="font-serif text-xl mb-2">Focus Areas</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Your primary focus is "Health & Vitality". You've completed 15 exercises in this category.</p>
          </div>
          <div className="bg-primary-container/20 p-8 rounded-3xl border border-primary-container/30">
            <Award className="text-primary mb-4" size={32} />
            <h4 className="font-serif text-xl mb-2">Next Goal</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">3 days until your "15-Day Milestone". Keep breathing, you're doing incredible work.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

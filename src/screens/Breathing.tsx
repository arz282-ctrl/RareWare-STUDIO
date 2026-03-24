import React, { useState, useRef, useEffect } from 'react';
import { X, ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, Music, Wind, Sparkles, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

const meditations = [
  {
    id: 'morning-calm',
    title: 'Morning Calm',
    duration: '5:00',
    description: 'Start your day with clarity and intention.',
    icon: Sun,
    color: 'bg-amber-500/10 text-amber-600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'stress-relief',
    title: 'Stress Relief',
    duration: '8:00',
    description: 'Release tension and find your center.',
    icon: Wind,
    color: 'bg-blue-500/10 text-blue-600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'quick-reset',
    title: 'Quick Reset',
    duration: '3:00',
    description: 'A brief moment to ground yourself.',
    icon: Sparkles,
    color: 'bg-emerald-500/10 text-emerald-600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'evening-wind-down',
    title: 'Evening Wind Down',
    duration: '10:00',
    description: 'Prepare your mind for restful sleep.',
    icon: Moon,
    color: 'bg-indigo-500/10 text-indigo-600',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  }
];

export default function Breathing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'breathe' | 'guided'>('breathe');
  const [selectedMeditation, setSelectedMeditation] = useState(meditations[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedMeditation]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSkipForward = () => {
    const currentIndex = meditations.findIndex(m => m.id === selectedMeditation.id);
    const nextIndex = (currentIndex + 1) % meditations.length;
    setSelectedMeditation(meditations[nextIndex]);
    setIsPlaying(true);
  };

  const handleSkipBack = () => {
    const currentIndex = meditations.findIndex(m => m.id === selectedMeditation.id);
    const prevIndex = (currentIndex - 1 + meditations.length) % meditations.length;
    setSelectedMeditation(meditations[prevIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="bg-surface min-h-screen selection:bg-primary-container/30 overflow-hidden relative">
      <audio 
        ref={audioRef}
        src={selectedMeditation.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 backdrop-blur-md transition-all active:scale-95 text-primary"
        >
          <ArrowLeft size={24} />
        </button>
        
        <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/10 shadow-sm">
          <button 
            onClick={() => setActiveTab('breathe')}
            className={cn(
              "px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
              activeTab === 'breathe' ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:text-primary"
            )}
          >
            Breathe
          </button>
          <button 
            onClick={() => setActiveTab('guided')}
            className={cn(
              "px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
              activeTab === 'guided' ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:text-primary"
            )}
          >
            Guided
          </button>
        </div>

        <ThemeToggle />
      </header>

      <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-8 pt-20">
        {/* Ambient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-tertiary-container/5 blur-[100px]"></div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'breathe' ? (
            <motion.div 
              key="breathe"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="relative z-10 flex flex-col items-center justify-center space-y-16 w-full"
            >
              {/* Breathing Orb */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full border border-primary/10"></div>
                <div className="absolute w-64 h-64 rounded-full bg-primary/5 blur-2xl"></div>
                
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <span className="relative font-serif italic text-3xl text-white tracking-wide">Inhale</span>
                </motion.div>
                
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-48 h-48 rounded-full border-2 border-primary/20"
                ></motion.div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <p className="text-xs tracking-[0.2rem] uppercase text-primary/60 font-bold">Step 1 of 4</p>
                <h2 className="font-serif text-3xl text-primary font-light max-w-xs leading-relaxed">
                  Fill your lungs slowly with the scent of calm.
                </h2>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="guided"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Player Card */}
              <div className="bg-surface-container-low rounded-[2.5rem] p-8 md:p-12 editorial-shadow border border-outline-variant/10">
                <div className="flex flex-col items-center text-center space-y-8">
                  <div className={cn("w-32 h-32 rounded-3xl flex items-center justify-center shadow-xl", selectedMeditation.color)}>
                    <selectedMeditation.icon size={64} />
                  </div>
                  
                  <div>
                    <h2 className="font-serif text-3xl text-on-surface mb-2">{selectedMeditation.title}</h2>
                    <p className="text-on-surface-variant text-sm font-medium">{selectedMeditation.description}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full space-y-2">
                    <input 
                      type="range" 
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleProgressChange}
                      className="w-full h-1.5 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-8">
                    <button 
                      onClick={handleSkipBack}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <SkipBack size={24} />
                    </button>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
                    >
                      {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                    </button>
                    <button 
                      onClick={handleSkipForward}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <SkipForward size={24} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Playlist */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-on-surface px-2">Choose your journey</h3>
                <div className="space-y-4">
                  {meditations.map((med) => (
                    <button 
                      key={med.id}
                      onClick={() => {
                        setSelectedMeditation(med);
                        setIsPlaying(true);
                      }}
                      className={cn(
                        "w-full p-6 rounded-3xl flex items-center gap-6 transition-all duration-300 text-left group",
                        selectedMeditation.id === med.id 
                          ? "bg-primary text-white shadow-lg scale-[1.02]" 
                          : "bg-surface-container-low hover:bg-surface-container-lowest text-on-surface editorial-shadow"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                        selectedMeditation.id === med.id ? "bg-white/20" : med.color
                      )}>
                        <med.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{med.title}</h4>
                        <p className={cn(
                          "text-xs",
                          selectedMeditation.id === med.id ? "text-white/70" : "text-on-surface-variant"
                        )}>{med.duration} • {med.description}</p>
                      </div>
                      {selectedMeditation.id === med.id && isPlaying && (
                        <div className="flex gap-1 items-end h-4">
                          {[0.6, 0.8, 0.4, 0.7].map((h, i) => (
                            <motion.div 
                              key={i}
                              animate={{ height: ["20%", "100%", "20%"] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                              className="w-1 bg-white rounded-full"
                              style={{ height: `${h * 100}%` }}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {activeTab === 'breathe' && (
          <div className="absolute bottom-20 z-10 w-full px-12 text-center">
            <div className="max-w-md mx-auto">
              <p className="font-serif italic text-on-surface-variant text-lg leading-relaxed opacity-80">
                "This moment will pass."
              </p>
              <div className="mt-4 w-8 h-[1px] bg-outline-variant/30 mx-auto"></div>
            </div>
          </div>
        )}

        {/* Phase Indicators (Breathe Tab Only) */}
        {activeTab === 'breathe' && (
          <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-8 z-10">
            {[
              { label: 'Inhale', active: true },
              { label: 'Hold', active: false },
              { label: 'Exhale', active: false },
              { label: 'Pause', active: false },
            ].map((phase, i) => (
              <div key={i} className={cn("flex items-center space-x-4 group transition-opacity duration-500", phase.active ? "opacity-100" : "opacity-30")}>
                <span className={cn("text-[10px] font-bold tracking-widest uppercase", phase.active ? "text-primary" : "text-on-surface-variant")}>
                  {phase.label}
                </span>
                <div className={cn("w-2 h-2 rounded-full", phase.active ? "bg-primary" : "bg-outline")}></div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

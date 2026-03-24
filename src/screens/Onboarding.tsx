import React from 'react';
import { Leaf, X, Heart, Users, Briefcase, UserRound, ArrowRight, Verified } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-tertiary-container/10 blur-[100px]"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaP5M2TSMNfNaXtvTbqZaWk_adNWth2TFZDWnqyjavpVgWxwSCQdUhEQ6NBuoT3Ys-r3CD4NPY_MS7eIvINLSPOUKV6Kh8OuHIOJ2hyCcxzDztUOLVUishatT-Zksjch-zDmtTjoOGlmSw7wDNxu6f4wFkiUBcEwpvf4DnZEO1xKvsFOdPXJyxz8XCb_iNH32vtGpEhGPbM-Gx332ng0tbhbGE5wKMcb-ZkhvGKIZWNth_5fx1LzkYtG9vg6ciQlC6aFD_Etc5KjU"
          referrerPolicy="no-referrer"
        />
      </div>

      <header className="w-full px-6 pt-12 pb-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Leaf className="text-primary" size={32} />
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Sanctuary</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => navigate('/')}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              Exit
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[40%] transition-all duration-700 ease-out"></div>
        </div>
        <div className="flex justify-between mt-3 px-1">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Intentions</span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Challenges</span>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Goals</span>
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-8 pb-32">
        <section className="mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-on-background leading-tight mb-6 max-w-2xl">
            Every journey begins with a single <span className="italic text-primary">breath</span>.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md md:ml-[10%]">
            Take a moment to center yourself. We're here to understand your path so we can walk it together.
          </p>
        </section>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="relative glass rounded-3xl p-8 md:p-12 editorial-shadow border border-surface-container-high">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-on-background">
              What brings you to Sanctuary today?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'health', title: 'Health & Vitality', desc: 'I want to reclaim my physical and mental energy.', icon: Heart },
                { id: 'relationships', title: 'Relationships', desc: "I'm focused on mending bonds with loved ones.", icon: Users },
                { id: 'career', title: 'Career Growth', desc: 'I want to rebuild my professional life and focus.', icon: Briefcase },
                { id: 'peace', title: 'Peace of Mind', desc: 'I seek inner stability and emotional balance.', icon: UserRound },
              ].map((opt) => (
                <label key={opt.id} className="cursor-pointer group">
                  <input type="radio" name="goal" className="hidden peer" defaultChecked={opt.id === 'health'} />
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center peer-checked:group-[]:bg-primary-container transition-colors">
                      <opt.icon className="text-primary group-peer-checked:text-on-primary-container" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">{opt.title}</h3>
                      <p className="text-sm text-on-surface-variant">{opt.desc}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-3">Anything else on your mind?</p>
              <textarea 
                className="w-full bg-surface-container-high rounded-2xl p-4 text-on-surface placeholder:text-outline border-transparent focus:border-primary/40 focus:ring-0 transition-all resize-none h-24" 
                placeholder="Type here..."
              ></textarea>
            </div>
          </div>
        </div>

        <section className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary-container/10 text-tertiary font-medium mb-4">
            <Verified size={16} className="fill-tertiary" />
            <span>Safe & Secure Space</span>
          </div>
          <p className="text-on-surface-variant italic font-serif text-lg opacity-70">
            "Your past is a lesson, not a life sentence."
          </p>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-6 glass backdrop-blur-xl flex flex-col items-center justify-center border-t border-outline-variant/10">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="px-8 py-4 rounded-full text-on-surface-variant font-semibold hover:bg-surface-container-low transition-colors"
          >
            Back
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Continue Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

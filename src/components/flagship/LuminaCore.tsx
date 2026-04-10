import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Droplet, ArrowRight } from 'lucide-react';

export const LuminaCore: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for the panels
  const y1 = useTransform(scrollYProgress, [0.6, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.6, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [0, -50]);

  return (
    <section className="relative bg-[#000000] text-[#F4F4F4] py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Flares */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(208,0,255,0.05)_0%,transparent_70%)] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(208,0,255,0.05)_0%,transparent_70%)] rounded-full pointer-events-none z-0 opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-48"
        >
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.02em] text-white max-w-4xl mix-blend-difference mb-12">
            ENERGY <br/> IS FLUID
          </h1>
          <div className="w-24 h-[1px] bg-[#D000FF] mb-12" />
          <p className="text-xl md:text-2xl text-white/50 max-w-xl font-light tracking-wide leading-relaxed">
            A continuous state of becoming. Free from the rigid architecture of the grid, Lumina represents the chaotic beauty of pure light and unchecked motion.
          </p>
        </motion.div>

        {/* Floating Glass Panels */}
        <div className="relative min-h-[1200px]">
          
          {/* Panel 1 */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 right-0 w-full max-w-[600px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-12 shadow-2xl z-20 hover:border-[#D000FF]/30 transition-colors duration-500"
          >
            <div className="flex items-start gap-8">
              <Droplet className="text-[#D000FF]" size={48} strokeWidth={1} />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-widest uppercase">STATELESS FORM</h3>
                <p className="text-white/50 leading-relaxed font-light mb-8 text-sm">
                  Energy adapts to its container. It seeks the path of least resistance, flowing through the digital space unburdened by rigid structure or absolute coordinates.
                </p>
                <div className="relative overflow-hidden group h-64 border border-white/5">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlxAE2Eudfiss4fWHw_pf43nmA_qWNclkcC6IZGgPARMNhDLG8QYW2C_JfqZRiFst1oxR1gHHe_ZPHBUnMQXpdwAnEVeRT7dKjlqDLObNsr2ZMSaZrZeFvNO2ZVA_J0qQYq-s8aGDYFeudJSA2d7B8fSmYqu0DyAX92b0h5uMjaWSyPdfpc6sXLaEjhtohQxDt09TSyqjjoMuyKBwEXiksfmb_--EZwLvREhJlgzL82G5T_oUENqy2B5BJUGrr9E3bEjYdvqz" 
                    alt="Statesless Form" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Panel 2 */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-[450px] left-0 w-full max-w-[450px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-12 shadow-2xl z-30 hover:border-[#D000FF]/30 transition-colors duration-500"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#D000FF] uppercase mb-6 block">Observation 02</span>
            <h3 className="text-3xl font-bold mb-6 text-white tracking-tighter uppercase">KINETIC POTENTIAL</h3>
            <div className="h-[1px] w-12 bg-[#D000FF] mb-8" />
            <p className="text-white/50 leading-relaxed font-light mb-8 text-sm">
              The absence of grid lines does not imply the absence of order. It is an order defined by relationships, gravity, and momentum.
            </p>
            <button className="flex items-center gap-4 py-4 px-8 border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:border-[#D000FF] hover:text-[#D000FF] transition-all group">
              Explore Dynamics
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </button>
          </motion.div>

          {/* Panel 3 */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute top-[850px] right-[5%] w-full max-w-[700px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-16 shadow-2xl z-10 hover:border-[#D000FF]/30 transition-colors duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">Illumination</h3>
                <p className="text-white/40 text-sm leading-loose font-light">
                  Light defines space entirely differently than lines do. It reveals texture, creates depth through shadow, and guides focus organically.
                </p>
              </div>
              <div className="relative aspect-square rounded-full overflow-hidden border border-white/5 bg-black/40 group">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF6xXG8OdeE4c37qH_qTjWq-qqFrPumqEadVmBizCEYWiujuoAupGDaqr7IFTRDWGJGjfBTXt83Tx323N2NVaiUO8MkUWGkoGAfyunJ7icSDBxmE7ZJKWxeKGfbVfP253ohyLS-66y2ewO3A5o5zNmr_pku5rx2NYNXsfqMMxciTT4hXoBRlrDBlnfV6wj7O0hYis9JZ8Pw5Pbztr7Vzcxn9poGChLLGoaqhDefKLmlbwG1Fh2sEQiOUvlFBzkOIYwS21PYD44" 
                  alt="Illumination" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Floating Status Marker */}
      <div className="fixed bottom-12 right-12 z-50 flex flex-col items-end gap-2 mix-blend-difference font-mono text-[9px] tracking-[0.2em] uppercase text-white/40 pointer-events-none">
        <div className="flex items-center gap-4">
          <span>Scroll to Discover</span>
          <div className="w-12 h-[1px] bg-white/40"></div>
        </div>
        <div className="opacity-50 mt-4">Lumina Core v1.3</div>
      </div>
    </section>
  );
};

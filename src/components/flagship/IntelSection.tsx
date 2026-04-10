import React from 'react';
import { motion } from 'motion/react';

export const IntelSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000000] text-[#F4F4F6] selection:bg-[#D000FF] selection:text-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Fixed Side Heading */}
        <div className="md:w-1/2 md:h-screen md:sticky md:top-0 flex flex-col justify-center p-12 border-r border-[#2A2A35]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.05em] uppercase mb-6">
              THE LIGHT<br />IN THE VOID.
            </h2>
            <div className="font-mono text-sm tracking-[0.3em] text-[#2A2A35] uppercase">
              [01] // MANIFESTO
            </div>
          </motion.div>
          
          {/* Kinetic Background Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(to right, #2A2A35 1px, transparent 1px), linear-gradient(to bottom, #2A2A35 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="md:w-1/2 p-8 py-24 md:p-24 flex flex-col gap-24">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-[1.8] tracking-wide"
          >
            We exist at the intersection of <span className="text-[#D000FF] font-bold uppercase">absolute structure</span> and raw, unbridled <span className="text-[#D000FF] font-bold uppercase">energy</span>. The void is not empty; it is a canvas awaiting definition. 
            <br/><br/>
            In an era of digital noise, we forge clarity through subtraction. Every pixel, every line of logic must justify its existence. We strip away the superfluous until only the <span className="text-[#D000FF] font-bold uppercase">core truth</span> remains. This is the essence of Rareware.
          </motion.article>

          {/* Stat Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-y border-[#2A2A35] bg-[#050507] p-8 flex flex-col sm:flex-row items-center justify-between group hover:border-[#D000FF] transition-colors"
          >
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="text-[#2A2A35] font-mono text-[10px] uppercase tracking-widest group-hover:text-[#F4F4F6] transition-colors">METRIC // ALPHA</span>
              <span className="text-xl font-mono uppercase tracking-widest">DEPLOYED NODES</span>
            </div>
            <div className="text-[#D000FF] font-mono text-4xl font-bold mt-4 sm:mt-0 drop-shadow-[0_0_10px_rgba(208,0,255,0.3)]">
              1,024
            </div>
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-[1.8] tracking-wide"
          >
            The architecture we build—the Nexus—is unforgiving. It demands precision. Yet, within its rigid confines, we inject moments of <span className="text-[#D000FF] font-bold uppercase">luminous intensity</span>. 
            <br/><br/>
            These flashes of electric violet are not mere decoration; they are pulses of data, signaling life within the machine. They guide the eye, reward intent, and elevate the interaction from functional to <span className="text-[#D000FF] font-bold uppercase">cinematic</span>.
          </motion.article>

          {/* Stat Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-y border-[#2A2A35] bg-[#050507] p-8 flex flex-col sm:flex-row items-center justify-between group hover:border-[#D000FF] transition-colors"
          >
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <span className="text-[#2A2A35] font-mono text-[10px] uppercase tracking-widest group-hover:text-[#F4F4F6] transition-colors">METRIC // BETA</span>
              <span className="text-xl font-mono uppercase tracking-widest">SYSTEM UPTIME</span>
            </div>
            <div className="text-[#D000FF] font-mono text-4xl font-bold mt-4 sm:mt-0 drop-shadow-[0_0_10px_rgba(208,0,255,0.3)]">
              99.999%
            </div>
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-[1.8] tracking-wide"
          >
            We do not design websites. We architect <span className="text-[#D000FF] font-bold uppercase text-2xl">digital monoliths</span>. Environments that command respect. Interfaces that operate with military precision while delivering high-end luxury aesthetics.
            <br/><br/>
            Embrace the darkness. <span className="text-[#D000FF] font-bold uppercase text-2xl">Find the light.</span>
          </motion.article>

          <div className="flex justify-center pt-12 pb-24 opacity-30">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#2A2A35]">/// END OF MANIFEST ///</span>
          </div>
        </div>
      </div>
    </section>
  );
};

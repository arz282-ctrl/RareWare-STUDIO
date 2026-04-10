import React from 'react';
import { motion } from 'motion/react';

const protocols = [
  {
    ref: "REF: P_01_INGEST",
    step: "[01]",
    title: "INGESTION",
    stage: "STAGE: DISCOVERY",
    desc: "Data harvesting and strategic mapping. We intercept user signals, market stressors, and brand DNA to construct a comprehensive project telemetry.",
    deliverables: ["STAKEHOLDER_TELEMETRY", "MARKET_VULNERABILITY_SCAN", "USER_BEHAVIOR_LOGGING"],
    footerL: { label: "CORE_LOAD", value: "OPTIMIZED" },
    footerR: { label: "PROCESSING_POWER", value: "HIGH_DENSITY" }
  },
  {
    ref: "REF: P_02_ARCH",
    step: "[02]",
    title: "ARCHITECTURE",
    stage: "STAGE: DESIGN",
    desc: "Systemic blueprinting and visual engineering. We construct high-fidelity schematics that define spatial logic, user flow, and the visual frequency of the interface.",
    deliverables: ["GRID_STRUCTURALISM", "KINETIC_UI_BLUEPRINTING", "VISUAL_VOID_MAPPING"],
    footerL: { label: "RENDER_MODE", value: "PHYSICAL_BASED" },
    footerR: { label: "ASPECT_RATIO", value: "ULTRA_WIDE" }
  },
  {
    ref: "REF: P_03_EXEC",
    step: "[03]",
    title: "EXECUTION",
    stage: "STAGE: DEVELOPMENT",
    desc: "Compiling designs into performant infrastructure. We utilize low-latency frameworks and modular codebases to ensure maximum operational efficiency.",
    deliverables: ["NEXT_GEN_COMPILATION", "NEURAL_API_INTEGRATION", "PERFORMANCE_HARDENING"],
    footerL: { label: "COMPILE_TIME", value: "0.042ms" },
    footerR: { label: "SERVER_LOAD", value: "MINIMAL" }
  },
  {
    ref: "REF: P_04_DEPL",
    step: "[04]",
    title: "DEPLOYMENT",
    stage: "STAGE: LAUNCH",
    desc: "System initialization and global synchronization. We move from staging environments to the live obsidian void, monitoring performance metrics in real-time.",
    deliverables: ["EDGE_NETWORK_PROPAGATION", "LIVE_SYSTEM_TELEMETRY", "POST_LAUNCH_OPTIMIZATION"],
    footerL: { label: "NETWORK_STATUS", value: "LIVE" },
    footerR: { label: "SYNC_RATE", value: "1:1_PARITY" }
  }
];

export const ProtocolsTimeline: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#000000] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <header className="mb-24 border-l-4 border-[#D000FF] pl-8">
           <span className="font-mono text-[10px] tracking-[0.3em] text-[#2A2A35] uppercase mb-4 block">SYSTEM_VERSION // PROTOCOL_MAPPING</span>
           <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase tracking-tight leading-[0.85] mb-6">PROTOCOLS</h2>
           <p className="text-white/50 max-w-lg text-lg font-light leading-relaxed">
             A rigorous architectural framework designed to transform raw variables into highly-optimized digital experiences.
           </p>
        </header>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-[3.5rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D000FF] to-transparent opacity-20 shadow-[0_0_15px_#D000FF]" />

          {protocols.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative pl-24 group"
            >
              {/* Node Dot */}
              <div className="absolute left-[3.15rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-black border-2 border-[#D000FF] rounded-full shadow-[0_0_10px_#D000FF] z-10 group-hover:scale-125 transition-transform" />

              <div className="relative bg-[#050507]/70 backdrop-blur-xl border border-[#2A2A35] p-10 md:p-12 hover:border-[#D000FF]/40 transition-all duration-500">
                <span className="absolute top-6 right-8 font-mono text-[8px] text-[#2A2A35] group-hover:text-white/30 transition-colors uppercase tracking-widest">{phase.ref}</span>
                <div className="font-mono text-xl text-[#D000FF] mb-2">{phase.step}</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-1 group-hover:translate-x-2 transition-transform duration-500">{phase.title}</h3>
                <div className="font-mono text-[10px] text-[#2A2A35] uppercase tracking-widest mb-8">{phase.stage}</div>
                
                <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xl">{phase.desc}</p>
                
                <ul className="space-y-3 mb-12">
                  {phase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#D000FF]" />
                      <span className="font-mono text-[9px] text-white uppercase tracking-widest">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center pt-8 border-t border-[#2A2A35]/50 font-mono text-[9px] uppercase tracking-widest text-[#2A2A35]">
                   <div>
                     <div className="opacity-50 mb-1">{phase.footerL.label}</div>
                     <div className="text-white">{phase.footerL.value}</div>
                   </div>
                   <div className="text-right">
                     <div className="opacity-50 mb-1">{phase.footerR.label}</div>
                     <div className="text-white">{phase.footerR.value}</div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

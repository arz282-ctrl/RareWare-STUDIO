import React from 'react';
import { motion } from 'motion/react';
import { Network, Shield, Cpu, Zap } from 'lucide-react';

export const SystemsGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#000000]">
      <div className="max-w-7xl mx-auto space-y-1">
        
        {/* Bento Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 border border-[#2A2A35]/30">
          
          {/* Item 1: Wide Image/Feature (Hybrid) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden bg-[#050507] h-[500px] border border-[#2A2A35]"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMY-6a4ycxB1ReajIsNLr_RlzgU6haJanEy8jDdS7xIQbm64ZUH5EUpxCHxsBVl9QR_mt-Y0ESZfLMq6QWdCvje6NcnZilKHNNQl5kj6ywhkJctZRT4CF7k1fqPHvdIlTL-j6V-UFvOUTSf0b1RupZVPagpyJn0ipsUMe3sll0f1ES5oC9MTm5nmvvDEWYuI28kGU-iGMXjm0vx7wWcewLu_KE66IHilpfQXV7K96plAWv7XI-JmNTm0fIoo32-R38LJ4KukH-" 
              alt="System Core" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#D000FF] uppercase mb-4">CORE_PROTOCOL</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white mb-4">DECRYPT_ALGORITHM_V2</h3>
              <p className="text-white/50 max-w-md text-sm leading-relaxed">
                Quantum-resistant encryption layers deployed at the edge. Redefining what it means to be truly invisible on the open network.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Stats (Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#050507] p-12 border border-[#2A2A35] flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="w-12 h-[1px] bg-[#D000FF]" />
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Network Statistics</h4>
              
              <div className="space-y-12">
                <div>
                  <span className="block text-5xl font-bold text-white tracking-tighter">0.03ms</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#2A2A35] mt-2 block">Latency Threshold</span>
                </div>
                <div>
                  <span className="block text-5xl font-bold text-white tracking-tighter">99.9%</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#2A2A35] mt-2 block">Uptime Integrity</span>
                </div>
              </div>
            </div>
            <div className="font-mono text-[8px] text-right tracking-[0.2em] text-[#2A2A35]">
              REF_ID: RW_X99
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          
          {/* Item 3: Service Preview (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 group bg-[#050507] border border-[#2A2A35] p-12 h-[400px] flex flex-col justify-end gap-6 hover:bg-[#D000FF]/[0.02] hover:border-[#D000FF]/30 transition-all duration-500"
          >
            <Network className="text-[#D000FF] group-hover:scale-110 transition-transform" size={40} strokeWidth={1} />
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">NETWORK_MESH</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Global distribution networks with zero-trust architecture. Decentralized. Unstoppable.
            </p>
            <div className="w-fit border-b border-[#D000FF] pb-1 cursor-pointer">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D000FF]">Initialize_Access</span>
            </div>
          </motion.div>

          {/* Item 4: Image/Feature (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 relative overflow-hidden bg-[#050507] h-[400px] border border-[#2A2A35]"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtdkVQ04KDCbT-hj1jYephhKZnEysh5BmEbx1RWjzCBmUkp41equKPCTLXNMvCzPBozWMm8UcD3VXFVXzbgo-bAzl6IuYZ2aQCdNOKA6fDbc7rcEN4-lKikfzkfQbvvKWp_dxVatjjNHO2bc0Ntf8orEQSNPg0cBh6x07R2nq3fPsIQtzWrb9X3dxHsyTgCZPL0AEAGw4zGUnEAcxgiYwN3bj6z0lLvyGzzrkZQ-nfUTni7ZDV-67kGU7NDhmx__aYwvx3p7Jy" 
              alt="System Architecture" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 opacity-30 group-hover:opacity-60 transition-opacity duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 border border-[#D000FF]/30 backdrop-blur-xl bg-black/40">
                <span className="font-mono text-lg md:text-xl tracking-[0.5em] text-white uppercase font-light">Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Capabilities Title Overlay */}
      <div className="max-w-7xl mx-auto mt-24 flex justify-between items-end border-b border-[#2A2A35] pb-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#D000FF] uppercase mb-4 block">SYSTEM.SERVICES</span>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold italic tracking-tighter uppercase leading-none">CAPABILITIES</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#D000FF] uppercase">VIEW_ALL_SYSTEMS</span>
          <Zap size={16} className="text-[#D000FF] group-hover:fill-[#D000FF] transition-all" />
        </motion.div>
      </div>

    </section>
  );
};

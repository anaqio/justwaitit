"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Layers, PlayCircle, Eye } from "lucide-react";
import { Player } from "@remotion/player";
import { IntroVideo } from "@/remotion/IntroVideo";

const features = [
  {
    title: "AI Studio Alpha",
    desc: "A professional workspace for high-end fashion editing.",
    icon: Layers,
    status: "In Development",
  },
  {
    title: "Virtual Try-On",
    desc: "Hyper-realistic garment draping on AI models.",
    icon: Sparkles,
    status: "Q2 2026",
  },
  {
    title: "Lookbook Automator",
    desc: "Generate entire editorial campaigns in one click.",
    icon: Zap,
    status: "Phase 3",
  },
];

export function ComingSoonSection() {
  const [view, setView] = useState<"video" | "preview">("video");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 snap-start overflow-hidden py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-bold text-aq-blue uppercase tracking-[0.3em]">Coming Soon</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight">
                The Future of <br />
                <span className="text-brand-gradient italic">Moroccan Fashion</span>
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-body max-w-md mx-auto lg:mx-0">
                We are building the first professional AI Visual Studio tailored for the unique aesthetic and scale of modern fashion commerce in Morocco.
              </p>
            </div>

            <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-aq-blue/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-aq-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{f.title}</h4>
                      <span className="text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-aq-blue/20 text-aq-blue font-bold border border-aq-blue/20">
                        {f.status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setView("video")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${view === 'video' ? 'bg-aq-blue text-white shadow-lg shadow-aq-blue/20' : 'bg-secondary/10 text-muted-foreground hover:text-foreground'}`}
              >
                <PlayCircle className="w-4 h-4" /> Intro Video
              </button>
              <button 
                onClick={() => setView("preview")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${view === 'preview' ? 'bg-aq-blue text-white shadow-lg shadow-aq-blue/20' : 'bg-secondary/10 text-muted-foreground hover:text-foreground'}`}
              >
                <Eye className="w-4 h-4" /> Interactive Preview
              </button>
            </div>
          </motion.div>

          {/* Media Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none"
          >
            <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass-strong border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {view === "video" ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Player
                      component={IntroVideo}
                      durationInFrames={270}
                      compositionWidth={1080}
                      compositionHeight={1920}
                      fps={30}
                      controls
                      autoPlay
                      loop
                      acknowledgeRemotionLicense
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center space-y-4 sm:space-y-6"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-aq-blue/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-2">
                      <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-aq-blue" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold font-display italic">Interactive Experience</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
                      The alpha version of our interactive engine is now available for testing.
                    </p>
                    <button 
                      onClick={() => document.getElementById('product-preview')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-4 sm:mt-6 px-6 py-3 bg-aq-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-aq-blue/20"
                    >
                      Explore Studio Engine
                    </button>
                    <div className="grid grid-cols-3 gap-2 w-full max-w-[200px] sm:max-w-xs mt-4 sm:mt-8 opacity-20">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-square rounded-lg sm:rounded-xl bg-white/5 border border-white/5" />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Timeline Indicator */}
              <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 px-8 sm:px-12 z-10">
                <div className="h-1 w-full bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-aq-blue shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-3 h-3 rounded-full bg-aq-blue border-4 border-background" />
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[6px] sm:text-[8px] font-bold text-aq-blue uppercase tracking-widest">Phase 1: Brand</span>
                  <span className="text-[6px] sm:text-[8px] font-bold text-aq-blue uppercase tracking-widest">Phase 2: Preview</span>
                  <span className="text-[6px] sm:text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Phase 3: Studio</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-aq-ink border border-white/10 flex items-center justify-center shadow-xl animate-float z-20">
              <span className="font-display font-extrabold text-aq-blue text-[10px] sm:text-xs tracking-tighter uppercase">{view}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

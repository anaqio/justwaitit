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
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 snap-start overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-aq-blue uppercase tracking-[0.3em]">Coming Soon</h2>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display leading-tight">
                The Future of <br />
                <span className="text-brand-gradient italic">Moroccan Fashion</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-body max-w-md">
                We are building the first professional AI Visual Studio tailored for the unique aesthetic and scale of modern fashion commerce in Morocco.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={f.title} className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-aq-blue/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-aq-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-foreground">{f.title}</h4>
                      <span className="text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-aq-blue/20 text-aq-blue font-bold border border-aq-blue/20">
                        {f.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setView("video")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'video' ? 'bg-aq-blue text-white shadow-lg shadow-aq-blue/20' : 'bg-secondary/10 text-muted-foreground hover:text-foreground'}`}
              >
                <PlayCircle className="w-4 h-4" /> Intro Video
              </button>
              <button 
                onClick={() => setView("preview")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${view === 'preview' ? 'bg-aq-blue text-white shadow-lg shadow-aq-blue/20' : 'bg-secondary/10 text-muted-foreground hover:text-foreground'}`}
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
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-strong border-white/10 shadow-2xl relative">
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
                      durationInFrames={150}
                      compositionWidth={1080}
                      compositionHeight={1920}
                      fps={30}
                      controls
                      autoPlay
                      loop
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
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-aq-blue/10 rounded-3xl flex items-center justify-center mb-4">
                      <Sparkles className="w-10 h-10 text-aq-blue" />
                    </div>
                    <h4 className="text-2xl font-bold font-display italic">Interactive Experience</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Select your garment and environment to see the AI transformation in real-time.
                    </p>
                    <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-8">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/5 animate-pulse" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-aq-blue uppercase tracking-[0.2em] animate-pulse">Coming in Phase 2</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-aq-ink border border-white/10 flex items-center justify-center shadow-xl animate-float">
              <span className="font-display font-extrabold text-aq-blue text-xs tracking-tighter uppercase">{view}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEntranceState } from "@/hooks/useEntranceState";
import { IntroScenes } from "./IntroScenes";
import { MorphTransition } from "./MorphTransition";
import { motion, AnimatePresence } from "framer-motion";

interface EntranceOrchestratorProps {
  children: React.ReactNode;
}

export function EntranceOrchestrator({ children }: EntranceOrchestratorProps) {
  const { state, skip, complete, startMorphing } = useEntranceState();

  if (state === "complete" || state === "skipped") {
    return <>{children}</>;
  }

  return (
    <>
      {state === "intro" && <IntroScenes onComplete={startMorphing} />}
      {state === "morphing" && <MorphTransition onComplete={complete} />}
      
      <AnimatePresence>
        {(state === "intro" || state === "morphing") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8 z-[60]"
          >
            <button
              onClick={skip}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Skip <span className="text-white/60 ml-2">(ESC)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={state === "intro" || state === "morphing" ? "invisible" : ""}>
        {children}
      </div>
    </>
  );
}

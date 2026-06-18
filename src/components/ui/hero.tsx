"use client"

import { useRef } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden" style={{background: '#050508'}}>
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
          </filter>
          <filter id="text-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#050508", "#22c55e", "#16a34a", "#14532d", "#050508"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        colors={["#050508", "#ffffff", "#22c55e", "#050508"]}
        speed={0.15}
      />

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <svg className="size-10" fill="currentColor" viewBox="0 0 100 100">
            <path d="M32 4 L56 20 L56 44 L32 60 L8 44 L8 20 Z" stroke="url(#hero-gradient)" strokeWidth="6" fill="none" />
            <path d="M22 28 L32 16 L42 28" stroke="url(#hero-gradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="ml-3">
            <div className="text-lg font-bold tracking-tight text-white">CITADEL</div>
            <div className="text-[10px] text-gray-500 -mt-0.5 tracking-widest uppercase">Alpha</div>
          </div>
        </motion.div>
      </header>

      <main className="absolute bottom-16 left-8 z-20 max-w-2xl">
        <div className="text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 border border-white/10"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white/90 text-sm font-medium tracking-wide">
              ✨ Dual Momentum — Strategie validee academiquement
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block text-4xl md:text-5xl lg:text-6xl mb-2 font-light"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #22c55e 30%, #16a34a 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              Trade the
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl">Dual Momentum</span>
            <span className="block text-2xl md:text-3xl font-light text-white/80 italic mt-2">Quantitatif &amp; Data-Driven</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Une methode quantitative basee sur 30 ans de recherche academique.
            CAGR 32% valide OOS. Track record public.
          </motion.p>
        </div>
      </main>

      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <PulsingBorder
            colors={["#22c55e", "#16a34a", "#14532d", "#00ff88", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.08}
            softness={0.2}
            intensity={3}
            spots={4}
            spotSize={0.08}
            pulse={0.05}
            smoke={0.3}
            smokeSize={3}
            scale={0.6}
            rotation={0}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  )
}

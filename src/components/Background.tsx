import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Background() {
  const [mounted, setMounted] = useState(false)
  
  // Only render animations after hydration to prevent mismatches
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950">
      
      {/* 1. Base Gradient Wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.05)_0%,transparent_60%)]" />

      {/* 2. Animated Floating Orbs */}
      {mounted && (
        <div className="absolute inset-0 opacity-[0.85] dark:opacity-100">
          
          {/* Top Left - Emerald Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.15, 0.25, 0.15], 
              scale: [1, 1.05, 1],
              x: [0, 40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-300/60 blur-[120px] dark:bg-emerald-500/25"
          />

          {/* Bottom Right - Indigo/Purple Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1], 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-indigo-300/60 blur-[130px] dark:bg-indigo-600/20"
          />

          {/* Center - Deep Cyan Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05], 
              scale: [1, 1.1, 1],
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute left-[30%] top-[40%] h-[400px] w-[400px] rounded-full bg-sky-400/40 blur-[120px] dark:bg-cyan-500/10"
          />
        </div>
      )}

      {/* 3. High-Tech Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_90%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_90%)]" />

      {/* 4. Film Grain / Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-multiply dark:mix-blend-overlay dark:opacity-[0.05] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')] [background-size:240px_240px]" />
      
      {/* 5. Edge Vignette (Darkening edges to focus content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_40%,rgba(0,0,0,0.015)_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,transparent_20%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  )
}

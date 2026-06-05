import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Background() {
  const [mounted, setMounted] = useState(false)
  
  // Only render animations after hydration to prevent mismatches
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* 1. Light Mode Soft Iridescent Bubble Background (Inspired by reference) */}
      {mounted && (
        <div className="absolute inset-0 block dark:hidden opacity-80">
          {/* Top Left Bubble (Yellow/Orange) */}
          <motion.div
            animate={{ 
              x: [0, 40, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-[10%] -top-[10%] h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-yellow-200/40 via-orange-200/30 to-pink-200/40 blur-[80px]"
          />

          {/* Top Right Bubble (Pink/Blue/Purple) */}
          <motion.div
            animate={{ 
              x: [0, -30, 30, 0],
              y: [0, 30, -30, 0],
              scale: [1, 0.95, 1.05, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-[5%] top-[10%] h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-pink-300/40 via-purple-300/30 to-sky-350/40 blur-[90px]"
          />

          {/* Center Left Bubble (Mint/Teal) */}
          <motion.div
            animate={{ 
              x: [0, 20, -30, 0],
              y: [0, 40, -20, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[5%] top-[45%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-emerald-200/30 via-teal-200/30 to-sky-200/30 blur-[80px]"
          />

          {/* Bottom Right Bubble (Lavender/Purple) */}
          <motion.div
            animate={{ 
              x: [0, -40, 20, 0],
              y: [0, -30, 40, 0]
            }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-[15%] -right-[5%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-200/40 via-fuchsia-200/30 to-pink-200/40 blur-[90px]"
          />
        </div>
      )}

      {/* 2. Dark Mode Cyber Nebula Background */}
      {mounted && (
        <div className="absolute inset-0 hidden dark:block">
          {/* Top Left - Emerald Ambient Glow */}
          <motion.div
            animate={{ 
              opacity: [0.15, 0.25, 0.15], 
              scale: [1, 1.05, 1],
              x: [0, 40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[120px]"
          />

          {/* Bottom Right - Purple Orbit */}
          <motion.div
            animate={{ 
              opacity: [0.12, 0.22, 0.12], 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/12 blur-[130px]"
          />

          {/* Center - Deep Indigo/Cyan Pulse */}
          <motion.div
            animate={{ 
              opacity: [0.08, 0.18, 0.08], 
              scale: [1, 1.1, 1],
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[25%] top-[35%] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[120px]"
          />
        </div>
      )}

      {/* 3. High-Tech Architectural Grid Pattern (Extremely soft for light mode) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_90%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] dark:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_90%)]" />

      {/* 4. Film Grain / Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.012] mix-blend-multiply dark:mix-blend-overlay dark:opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')] [background-size:240px_240px]" />
      
      {/* 5. Edge Vignette (Darkening edges to focus content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_50%,rgba(0,0,0,0.01)_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}

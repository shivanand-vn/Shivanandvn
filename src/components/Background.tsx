import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Background() {
  const [mounted, setMounted] = useState(false)
  
  // Only render animations after hydration to prevent mismatches
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* 1. Fixed Ambient Layer (Drifting bubbles, film grain, vignette) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
        
        {/* Light Mode Soft Iridescent Bubble Background */}
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

        {/* Dark Mode Cyber Nebula Background */}
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

        {/* Film Grain / Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.012] mix-blend-multiply dark:mix-blend-overlay dark:opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22240%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22240%22 height=%22240%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')] [background-size:240px_240px]" />
        
        {/* Edge Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_50%,rgba(0,0,0,0.01)_100%)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* 2. Fixed Blueprint Background Layer (Static view, content scrolls over it) */}
      <div className="pointer-events-none fixed inset-0 -z-[9] overflow-hidden w-full h-full">
        {/* High-Tech Architectural Grid Pattern */}
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_85%_85%_at_50%_50%,#000_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" />

        {/* Honeycomb Hexagon Netting on the Far Left Edge */}
        <div className="absolute left-0 top-[10%] opacity-[0.35] dark:opacity-[0.22] transition-opacity duration-300">
          <svg width="180" height="420" viewBox="0 0 180 420" fill="none" className="text-zinc-400 dark:text-zinc-700">
            {/* Hexagon Paths */}
            <path d="M 0 40 L 30 22 L 60 40 L 60 76 L 30 94 L 0 76 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 60 40 L 90 22 L 120 40 L 120 76 L 90 94 L 60 76 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 120 40 L 150 22 L 180 40 L 180 76 L 150 94 L 120 76 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 30 94 L 60 112 L 90 94" stroke="currentColor" strokeWidth="1" />
            <path d="M 90 94 L 120 112 L 150 94" stroke="currentColor" strokeWidth="1" />
            <path d="M 0 148 L 30 130 L 60 148 L 60 184 L 30 202 L 0 184 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 60 148 L 90 130 L 120 148 L 120 184 L 90 202 L 60 184 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 120 148 L 150 130 L 180 148 L 180 184 L 150 202 L 120 184 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 30 202 L 60 220 L 90 202" stroke="currentColor" strokeWidth="1" />
            <path d="M 90 202 L 120 220 L 150 202" stroke="currentColor" strokeWidth="1" />
            <path d="M 0 256 L 30 238 L 60 256 L 60 292 L 30 310 L 0 292 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 60 256 L 90 238 L 120 256 L 120 292 L 90 310 L 60 292 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 120 256 L 150 238 L 180 256 L 180 292 L 150 310 L 120 292 Z" stroke="currentColor" strokeWidth="1" />
            <path d="M 30 310 L 60 328 L 90 310" stroke="currentColor" strokeWidth="1" />
            <path d="M 90 310 L 120 328 L 150 310" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 1: IDEATE & DESIGN (Top Left / Left Center) */}
        {/* Monospace planning block */}
        <div className="absolute top-[28%] left-[4%] lg:left-[10%] max-w-[280px] opacity-[0.4] dark:opacity-[0.24] transition-opacity duration-300">
          <pre className="font-mono text-[10px] font-bold leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`[Phase: Planning]
  Idea: workflow_automation
  Architecture: serverless_micro
  ──> [Spec] ──> [Mockup] ──> [Code]`}
          </pre>
        </div>

        {/* Server Cloud & API endpoint logs (Top Center/Right) */}
        <div className="absolute top-[6%] left-[28%] lg:left-[42%] opacity-[0.38] dark:opacity-[0.24] transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2">
            {/* Cloud Icon */}
            <svg width="56" height="38" viewBox="0 0 24 16" fill="none" className="text-zinc-400 dark:text-zinc-505">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            <div className="font-mono text-[9px] text-zinc-500 dark:text-zinc-500 space-y-0.5 border border-dashed border-zinc-400 dark:border-zinc-700 p-1.5 rounded-lg bg-white/40 dark:bg-zinc-950/40 select-none shadow-sm">
              <div className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> GET /api/users
              </div>
              <div className="flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" /> GET /api/data
              </div>
              <div className="flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-500">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> POST /api/data
              </div>
            </div>
          </div>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 2: CODE (Top Right) */}
        {/* Funny terminal loop snippet (eat, code, repeat) */}
        <div className="absolute top-[12%] right-[5%] lg:right-[12%] max-w-[280px] opacity-[0.45] dark:opacity-[0.28] transition-opacity duration-300">
          <pre className="font-mono text-[10px] font-semibold leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`> npm start

def main():
    while alive:
        eat()
        code()
        repeat()`}
          </pre>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 3: TEST & DEBUG (Middle Left / Middle Center) */}
        {/* Monospace Test Suite Block */}
        <div className="absolute top-[48%] left-[4%] lg:left-[8%] max-w-[280px] opacity-[0.42] dark:opacity-[0.26] transition-opacity duration-300">
          <pre className="font-mono text-[9px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`PASS  src/tests/auth.test.ts
 ✓ jwt_generation (12ms)
 ✓ argon2_hashing (38ms)
 ✓ middleware_auth (15ms)
 
Tests: 3 passed, 3 total`}
          </pre>
        </div>

        {/* Monospace Debug Console Logs (Middle Center) */}
        <div className="absolute top-[50%] left-[28%] lg:left-[44%] max-w-[300px] opacity-[0.35] dark:opacity-[0.22] transition-opacity duration-300">
          <pre className="font-mono text-[9px] leading-relaxed text-zinc-400 dark:text-zinc-655 select-none">
{`[sys] server listening on :5173
[sys] database connected.
[warn] cache memory load: 68%
[sys] hot reload complete.`}
          </pre>
        </div>

        {/* Database Cylinder Stack (Middle Right-Center) */}
        <div className="absolute top-[32%] right-[28%] lg:right-[40%] opacity-[0.38] dark:opacity-[0.24] transition-opacity duration-300">
          <div className="flex items-center gap-3">
            <svg width="40" height="52" viewBox="0 0 48 64" fill="none" className="text-zinc-400 dark:text-zinc-500">
              <ellipse cx="24" cy="12" rx="20" ry="8" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5] fill-white dark:fill-zinc-950" />
              <path d="M4 12v12c0 4.42 8.95 8 20 8s20-3.58 20-8V12" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5]" />
              <path d="M4 24v12c0 4.42 8.95 8 20 8s20-3.58 20-8V24" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5]" />
              <path d="M4 36v12c0 4.42 8.95 8 20 8s20-3.58 20-8V36" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5]" />
              <ellipse cx="24" cy="24" rx="20" ry="8" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5] fill-none" />
              <ellipse cx="24" cy="36" rx="20" ry="8" className="stroke-zinc-400 dark:stroke-zinc-500 stroke-[1.5] fill-none" />
            </svg>
            <div className="font-mono text-[9px] text-zinc-500 dark:text-zinc-500 select-none">
              <div className="font-bold text-emerald-600 dark:text-emerald-500">docker_container: active</div>
              <div>image: mongodb/atlas</div>
              <div>status: listening_27017</div>
            </div>
          </div>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 4: CONTAINERIZE / BUILD (Middle Right) */}
        {/* Dockerfile snippet */}
        <div className="absolute top-[48%] right-[5%] lg:right-[10%] max-w-[280px] opacity-[0.4] dark:opacity-[0.25] transition-opacity duration-300">
          <pre className="font-mono text-[9px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --quiet
COPY . .
CMD ["npm", "run", "dev"]`}
          </pre>
        </div>

        {/* Flowchart Curved Connectors */}
        <div className="absolute top-[20%] left-[25%] lg:left-[45%] opacity-[0.35] dark:opacity-[0.22]">
          <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 dark:text-zinc-600">
            {/* Curved Path connecting Cloud to Database cylinder stack */}
            <path d="M100 10 C 100 80, -20 80, -20 140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            {/* Curved Path connecting Cloud to Coding loop snippet */}
            <path d="M100 10 C 100 50, 180 50, 180 90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="10" r="4" className="fill-purple-500 animate-pulse" />
            <circle cx="-20" cy="140" r="4" className="fill-emerald-500 animate-pulse" />
          </svg>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 5: DEPLOY & MAINTAIN (Bottom Left / Bottom Center / Bottom Right) */}
        {/* Python Database Class Code Block */}
        <div className="absolute bottom-[28%] left-[4%] lg:left-[10%] opacity-[0.45] dark:opacity-[0.28] transition-opacity duration-300">
          <pre className="font-mono text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`class Database:
    def fetch_data(self):
        result = self.query()
        return json.dumps(result)`}
          </pre>
        </div>

        {/* Vercel deploy status */}
        <div className="absolute bottom-[10%] left-[4%] lg:left-[10%] max-w-[280px] opacity-[0.42] dark:opacity-[0.26] transition-opacity duration-300">
          <pre className="font-mono text-[9px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`[deploy] vercel-deployment
 status: success (production)
 url: portfolio.shivanand.dev
 latency: 12ms (SSL: active)`}
          </pre>
        </div>

        {/* Git Branch Commits representation */}
        <div className="absolute bottom-[10%] left-[34%] lg:left-[45%] opacity-[0.4] dark:opacity-[0.25] transition-opacity duration-300">
          <svg width="180" height="120" viewBox="0 0 180 120" fill="none" className="text-zinc-400 dark:text-zinc-600">
            <line x1="30" y1="10" x2="30" y2="110" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30 40 C 60 40, 80 60, 80 85 C 80 105, 50 110, 30 110" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="30" cy="20" r="4" className="fill-white stroke-zinc-400 dark:fill-zinc-950 dark:stroke-zinc-600 stroke-2" />
            <circle cx="30" cy="65" r="4" className="fill-white stroke-zinc-400 dark:fill-zinc-950 dark:stroke-zinc-600 stroke-2" />
            <circle cx="80" cy="60" r="3.5" className="fill-purple-500" />
            <circle cx="80" cy="90" r="3.5" className="fill-emerald-500" />
            <text x="42" y="24" className="font-mono text-[8px] fill-zinc-400 dark:fill-zinc-500 select-none">main: init</text>
            <text x="90" y="64" className="font-mono text-[8px] fill-zinc-400 dark:fill-zinc-500 select-none">feat/loop</text>
            <text x="90" y="94" className="font-mono text-[8px] fill-zinc-400 dark:fill-zinc-500 select-none">feat/database</text>
          </svg>
        </div>

        {/* DEVELOPER LIFECYCLE - PHASE 6: MONITOR & REPEAT (Bottom Right) */}
        {/* Terminal execution log */}
        <div className="absolute bottom-[28%] right-[4%] lg:right-[12%] opacity-[0.45] dark:opacity-[0.28] transition-opacity duration-300">
          <pre className="font-mono text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`def main():
    git commit -m "feat: new feature"
    docker-compose up`}
          </pre>
        </div>

        {/* Live system monitoring stats */}
        <div className="absolute bottom-[10%] right-[4%] lg:right-[12%] max-w-[280px] opacity-[0.42] dark:opacity-[0.26] transition-opacity duration-300">
          <pre className="font-mono text-[9px] leading-relaxed text-zinc-500 dark:text-zinc-500 select-none">
{`🚀 req_rate: 1.4k/sec
⚡ latency_p95: 11ms
💾 cpu_usage: 12.4%
💾 RAM: 425MB / 1024MB`}
          </pre>
        </div>
      </div>

      {/* 3. Central Glass Blur Barrier (Shields main text content from blueprint clutter) */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[95vw] lg:max-w-6xl -z-[8] bg-slate-50/45 dark:bg-zinc-950/45 backdrop-blur-[6px] [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]" />
    </>
  )
}

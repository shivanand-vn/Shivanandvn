import { motion } from 'framer-motion'
import { FiMapPin, FiBookOpen, FiCalendar, FiStar } from 'react-icons/fi'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
      {children}
    </span>
  )
}

function parseYearRange(title: string) {
  if (title.includes('(Pursuing)')) return '2024 - Present'
  const match = title.match(/\((\d{4})\)/)
  if (match?.[1]) return match[1]
  return ''
}

const educationDetails = [
  { location: 'Hubli / Dharwad', scoreBadge: null as string | null },
  { location: 'Hubli / Dharwad', scoreBadge: 'CGPA: 8.45' },
  { location: 'Hubli / Dharwad', scoreBadge: '81.67%' },
  { location: 'Mudhol', scoreBadge: '82.72%' },
] as const

// Grid:
//   Row 1: MCA (col1)   |  SSLC (col2)
//   Row 2: BSc (col1)   |  PUC  (col2)
// U-path flow: SSLC → PUC → BSc → MCA (clockwise U starting top right)
const displayOrder = [
  { ...portfolio.education[0], ...educationDetails[0], side: 'left' as const, dotDelay: 2.4, mobileOrder: 'order-1 md:order-none' },  // MCA (last)
  { ...portfolio.education[3], ...educationDetails[3], side: 'right' as const, dotDelay: 0.2, mobileOrder: 'order-4 md:order-none' }, // SSLC (first)
  { ...portfolio.education[1], ...educationDetails[1], side: 'left' as const, dotDelay: 1.7, mobileOrder: 'order-2 md:order-none' },  // BSc (third)
  { ...portfolio.education[2], ...educationDetails[2], side: 'right' as const, dotDelay: 0.8, mobileOrder: 'order-3 md:order-none' }, // PUC (second)
]

export default function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="My academic journey and key milestones."
        />

        {/* 
          md:px-[40px] provides the space for the lines on left and right outside the cards.
          left-[0px] and right-[0px] will place the tracks perfectly bounding the wrapper.
        */}
        <div className="relative pb-12 md:px-[40px]">
          
          {/* ========================================================= */}
          {/* ══════════════ STATIC BACKGROUND TRACKS ═══════════════ */}
          {/* ========================================================= */}
          {/* Right vertical track */}
          <div className="hidden md:block absolute right-0 top-[20%] bottom-[-24px] w-[2px] bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full" />
          {/* Bottom horizontal track */}
          <div className="hidden md:block absolute right-0 left-0 bottom-[-24px] h-[2px] bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full" />
          {/* Left vertical track */}
          <div className="hidden md:block absolute left-0 bottom-[-24px] top-[20%] w-[2px] bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full" />


          {/* ========================================================= */}
          {/* ══════════════ ANIMATED GLOWING TRACKS ════════════════ */}
          {/* ========================================================= */}
          
          {/* 1. Right Line (SSLC -> PUC -> Bottom Right Corner) */}
          <motion.div
            className="hidden md:block absolute right-0 w-[2px] origin-top bg-gradient-to-b from-emerald-400 to-emerald-500 shadow-[0_0_12px_2px_rgba(52,211,153,0.5)] z-[5] rounded-full"
            style={{ top: '20%', bottom: '-24px' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'linear' }}
          />
          
          {/* 2. Bottom Line (Bottom Right Corner -> Bottom Left Corner) */}
          <motion.div
            className="hidden md:block absolute h-[2px] origin-right bg-emerald-500 shadow-[0_0_12px_2px_rgba(52,211,153,0.5)] z-[5] rounded-full"
            style={{ left: '0', right: '0', bottom: '-24px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 1.0, ease: 'linear' }}
          />

          {/* 3. Left Line (Bottom Left Corner -> MCA) */}
          <motion.div
            className="hidden md:block absolute left-0 w-[2px] origin-bottom bg-gradient-to-t from-emerald-500 to-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.5)] z-[5] rounded-full"
            style={{ bottom: '-24px', top: '20%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'linear' }}
          />


          {/* ========================================================= */}
          {/* ═════════════════ CARDS & GLOWING DOTS ════════════════ */}
          {/* ========================================================= */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2">
            {displayOrder.map((e, idx) => {
              const isCurrent = e.title.includes('Pursuing')
              const year = parseYearRange(e.title)
              const isLeft = e.side === 'left'

              return (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className={`relative ${e.mobileOrder}`}
                >
                  {/* Glowing dot on left/right edge bridging the gap to the line */}
                  {/* With md:px-[40px] wrapper and tracking line at 0, 
                      the line is exactly 40px away from the card boundary.
                      Using offset 47px makes its center lock mathematically onto the line's center. */}
                  <div
                    className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-20 w-4 h-4
                      ${isLeft ? '-left-[47px]' : '-right-[47px]'}`}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_3px_rgba(52,211,153,0.6)] dark:bg-emerald-400 dark:shadow-[0_0_12px_4px_rgba(52,211,153,0.55)]"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: e.dotDelay }}
                    >
                      {/* Outer pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-emerald-400/80"
                        animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: e.dotDelay }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    className="h-full"
                  >
                    <Card className="flex h-full flex-col border-zinc-200/80 bg-white/70 shadow-lg shadow-zinc-900/5 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.35)] dark:border-zinc-800/80 dark:bg-zinc-950/40">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-400">
                            <FiBookOpen />
                          </div>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50 sm:text-lg">
                                {e.title}
                              </p>
                              {isCurrent ? <Badge>Current</Badge> : null}
                            </div>
                            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                              {e.org}
                            </p>
                          </div>
                        </div>
                        <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          <FiCalendar className="text-sm" />
                          {isCurrent ? 'Current' : year || 'Completed'}
                        </span>
                      </div>

                      <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="inline-flex items-center gap-2">
                          <FiMapPin className="opacity-70" />
                          {e.location}
                        </span>
                        {e.scoreBadge ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold text-emerald-600 ring-1 ring-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/25">
                            <FiStar className="text-[0.8rem]" />
                            {e.scoreBadge}
                          </span>
                        ) : null}
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

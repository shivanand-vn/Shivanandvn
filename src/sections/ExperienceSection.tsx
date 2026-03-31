import { motion } from 'framer-motion'
import { FiBriefcase, FiClock, FiCode, FiTrendingUp } from 'react-icons/fi'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const techStack = ['HTML', 'CSS', 'JavaScript', 'Python'] as const

const impactPoints = [
  'Improved website UI and overall user experience.',
  'Helped identify and fix bugs affecting usability and stability.',
  'Assisted in successful feature updates and enhancements.',
  'Collaborated closely with the development team to ship changes reliably.',
] as const

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on Internship Experience"
          description="Real-world work experience in web development, UI improvement, bug fixing, and feature implementation."
        />

        <div className="grid gap-5">
          {portfolio.experience.map((e, idx) => (
            <motion.div
              key={e.org + e.period}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="border-zinc-200/40 bg-white/5 shadow-lg shadow-black/30 ring-1 ring-zinc-200/20 backdrop-blur-xl transition-colors group-hover:border-emerald-400/80 group-hover:ring-emerald-400/40 dark:border-zinc-800/70 dark:bg-zinc-950/40 dark:shadow-black/60">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/90 to-sky-500/90 text-white shadow-lg shadow-emerald-500/40">
                      <FiBriefcase />
                    </div>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2">
                        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                          {e.role}
                        </p>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/40">
                          Internship
                        </span>
                      </div>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {e.org}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <FiClock className="hidden text-sm text-zinc-400 sm:block" />
                    <span className="inline-flex items-center rounded-full bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700/70">
                      {e.period}
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      <FiCode className="text-sm" />
                      Responsibilities
                    </p>
                    <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        <FiTrendingUp className="text-sm" />
                        Impact
                      </p>
                      <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                        {impactPoints.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-fuchsia-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        Tech stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-100 ring-1 ring-zinc-700/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiCheck, FiCode, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const techStack = ['HTML', 'CSS', 'JavaScript', 'Python'] as const

const impactPoints = [
  'Improved website UI accessibility and overall user interaction rates.',
  'Helped identify and fix production-level bugs affecting stability.',
  'Assisted in successful feature updates and incremental hotfixes.',
  'Collaborated closely with cross-functional development teams to deploy changes.',
] as const

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute right-[5%] bottom-[10%] -z-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-[80px]" />
      
      <div className="container-shell">
        <SectionHeading
          eyebrow="My Journey"
          title="Professional Experience"
          description="Real-world industry work in web architectures, interface updates, and product feature tests."
        />

        <div className="relative border-l-2 border-zinc-200/80 dark:border-zinc-800/80 ml-4 pl-6 sm:pl-10 space-y-12">
          {portfolio.experience.map((e, idx) => (
            <motion.div
              key={e.org + e.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border-2 border-emerald-500 shadow-sm shadow-emerald-500/30">
                <FiBriefcase className="h-3 w-3 text-emerald-500" />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                        {e.role}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Internship
                      </span>
                    </div>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {e.org}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/40 px-3 py-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400 self-start sm:self-auto">
                    <FiCalendar className="h-3.5 w-3.5" />
                    <span>{e.period}</span>
                  </div>
                </div>

                <hr className="my-6 border-zinc-200/60 dark:border-zinc-800/40" />

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Responsibilities Column */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      <FiCode className="h-4 w-4" />
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact & Tech Column */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        <FiTrendingUp className="h-4 w-4" />
                        Contributions & Impact
                      </h4>
                      <ul className="space-y-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {impactPoints.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        Tech Stack Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/40 px-2.5 py-1 text-[10px] font-bold text-zinc-600 dark:text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


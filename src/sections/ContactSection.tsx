import { motion } from 'framer-motion'
import { FiCopy, FiMail, FiPhone, FiCheck, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { portfolio } from '../data/portfolio'

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-200/60 bg-white/50 px-4 py-3 dark:border-zinc-800/40 dark:bg-zinc-900/30">
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {label}
        </p>
        <p className="mt-1 truncate text-xs font-bold text-zinc-800 dark:text-zinc-200">
          {value}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 shadow-sm backdrop-blur transition-all hover:bg-zinc-100 hover:border-emerald-500/20 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
        aria-label={`Copy ${label}`}
        title={copied ? 'Copied!' : 'Copy'}
      >
        {copied ? (
          <span className="text-[10px] font-bold text-emerald-500">Done</span>
        ) : (
          <FiCopy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden">
      {/* Background soft ambient wash */}
      <div className="absolute right-[-10%] top-[40%] -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />
      
      <div className="container-shell">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Build Something Together"
          description="If you have an internship, job opportunity, or automation project in mind, I'd love to connect."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column: Direct Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
          >
            <div className="glass-card glass-card-hover rounded-[2rem] p-6 sm:p-8 h-full flex flex-col justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  Reach Me Directly
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Email is the best way for detailed messages. You can also quickly call me or connect on social platforms.
                </p>
              </div>

              <div className="flex justify-start">
                <SocialLinks
                  github={portfolio.links.github}
                  linkedin={portfolio.links.linkedin}
                  email={portfolio.email}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <CopyRow label="Official Email" value={portfolio.email} />
                <CopyRow label="Phone Number" value={portfolio.phone} />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row border-t border-zinc-200/60 dark:border-zinc-800/40 pt-6">
                <Button
                  href={`mailto:${portfolio.email}`}
                  className="w-full sm:w-auto text-xs px-5 py-2 shadow-lg shadow-emerald-500/10 dark:shadow-none"
                >
                  <FiMail className="h-4 w-4 animate-pulse" />
                  Send Email Message
                </Button>
                <Button
                  href={`tel:${portfolio.phone.replaceAll(' ', '')}`}
                  variant="secondary"
                  className="w-full sm:w-auto text-xs px-5 py-2"
                >
                  <FiPhone className="h-4 w-4" />
                  Make Direct Call
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strengths & Objective */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="glass-card glass-card-hover rounded-[2rem] p-6 sm:p-8 h-full flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  What I'm Looking For
                </h3>
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  A software development role where I can apply my skills in full-stack engineering and Python programming to build practical, error-free applications, collaborate with engineering teams, and solve critical production problems.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3.5">
                <div className="rounded-2xl border border-zinc-200/60 bg-white/50 p-4 dark:border-zinc-800/40 dark:bg-zinc-900/30 flex gap-3.5 items-start">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <FiArrowRight className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Preferred Tech Focus
                    </p>
                    <p className="mt-1 text-xs font-bold text-zinc-800 dark:text-zinc-250 leading-tight">
                      Web Applications, REST APIs, Desktop Automation, Relational / NoSQL Database Structures
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200/60 bg-white/50 p-4 dark:border-zinc-800/40 dark:bg-zinc-900/30 flex gap-3.5 items-start">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Core Strengths
                    </p>
                    <p className="mt-1 text-xs font-bold text-zinc-800 dark:text-zinc-250 leading-tight">
                      Rapid Prototyping, Automated Trip/Billing Document Generation, Clean and User-Friendly UIs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


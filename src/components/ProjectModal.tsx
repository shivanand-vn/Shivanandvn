import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi'
import ProjectPreviewStrip from './ProjectPreviewStrip'
import type { Project } from './FeaturedProject'

type Props = {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleAppreciationClick = (targetId: string) => {
    onClose()
    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        const certSection = document.getElementById('certifications')
        certSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      try {
        window.history.pushState(null, '', `#${targetId}`)
      } catch {
        // safe fallback
      }
      window.dispatchEvent(new CustomEvent('highlight-achievement', { detail: targetId }))
    }, 250)
  }

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white backdrop-blur-md transition-colors shadow-md"
              >
                <FiX className="h-5 w-5" />
              </button>

              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
                {/* Header Information */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 pr-10">
                    {project.tag ? (
                      <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
                        {project.tag}
                      </span>
                    ) : null}

                    {project.appreciationBadge ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (project.appreciationTargetId) {
                            handleAppreciationClick(project.appreciationTargetId)
                          }
                        }}
                        title="Click to view related achievement in Achievements section"
                        className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/15 dark:hover:bg-amber-400/25 dark:text-amber-400 transition-all cursor-pointer"
                      >
                        <span>{project.appreciationBadge}</span>
                        <span className="text-[10px] text-amber-500 dark:text-amber-400 font-bold">↗</span>
                      </button>
                    ) : null}
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h2>
                </div>

                {/* Image Showcase */}
                {project.images?.length ? (
                  <div className="overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 shadow-inner">
                    <ProjectPreviewStrip images={project.images} />
                  </div>
                ) : null}

                {/* Full Description */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                    Project Overview
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights */}
                {project.highlights?.length ? (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
                      Key Highlights & Architecture
                    </h3>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {project.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-start gap-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-zinc-800/40 p-3 text-xs leading-snug text-zinc-700 dark:text-zinc-200"
                        >
                          <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Tech Stack */}
                {project.tech?.length ? (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-mono">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 text-xs font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200/80 dark:border-zinc-800/70 p-4 sm:p-6 bg-zinc-50/90 dark:bg-zinc-900/90">
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.links?.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold px-4 py-2 text-xs shadow-md transition-all active:scale-95"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      <span>Live Demonstration</span>
                    </a>
                  ) : null}

                  {project.links?.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-4 py-2 text-xs border border-zinc-700/60 shadow-md transition-all active:scale-95"
                    >
                      <FiGithub className="h-4 w-4" />
                      <span>Source Code</span>
                    </a>
                  ) : null}

                  {project.links?.linkedin ? (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-4 py-2 text-xs border border-zinc-700/60 shadow-md transition-all active:scale-95"
                    >
                      <FiLinkedin className="h-4 w-4 text-sky-400" />
                      <span>Project Post</span>
                    </a>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-zinc-300 dark:border-zinc-700/80 px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

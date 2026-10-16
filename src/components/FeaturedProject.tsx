import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi'
import ProjectPreviewStrip from './ProjectPreviewStrip'

export type Project = {
  title: string
  tech: readonly string[]
  description: string
  highlights: readonly string[]
  links?: { github?: string; live?: string; linkedin?: string }
  images?: readonly { src: string; alt: string }[]
  appreciationBadge?: string
  appreciationTargetId?: string
  tag?: string
}

type Props = {
  project: Project
  onOpenDetails: () => void
  className?: string
}

export default function FeaturedProject({ project, onOpenDetails, className }: Props) {
  const handleAppreciationClick = (e: React.MouseEvent, targetId: string) => {
    e.stopPropagation()
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
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      onClick={onOpenDetails}
      className={[
        'glass-card group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xl shadow-md sm:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500/40 cursor-pointer',
        className || '',
      ].join(' ')}
    >
      {/* Top Preview Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800/60">
        {project.images?.length ? (
          <ProjectPreviewStrip images={project.images} />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-[10px] sm:text-xs font-semibold text-zinc-500">Preview unavailable</span>
          </div>
        )}

        {/* Top Left Status / Category Badge Overlay */}
        <div className="pointer-events-none absolute top-1.5 left-1.5 sm:top-2.5 sm:left-3 z-10 flex items-center gap-1 sm:gap-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-emerald-500/30 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[7px] xs:text-[7.5px] sm:text-[9.5px] font-bold tracking-tight text-emerald-400 shadow-lg">
          <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-emerald-500" />
          </span>
          <span className="truncate max-w-[54px] xs:max-w-[68px] sm:max-w-none">
            {project.links?.live ? 'Live Demo' : project.tag || 'Project'}
          </span>
        </div>

        {/* Top Right Client Appreciation Badge Overlay */}
        {project.appreciationBadge ? (
          <button
            type="button"
            onClick={(e) => {
              if (project.appreciationTargetId) {
                handleAppreciationClick(e, project.appreciationTargetId)
              } else {
                e.stopPropagation()
                onOpenDetails()
              }
            }}
            title="Click to view related appreciation in Achievements"
            className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-3 z-10 flex items-center gap-0.5 sm:gap-1 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-500/40 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[7px] xs:text-[7.5px] sm:text-[9.5px] font-bold text-amber-300 shadow-lg hover:bg-amber-500/35 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="text-[7.5px] sm:text-[9.5px]">🏆</span>
            <span>
              {project.appreciationBadge.includes('Client Appreciation') ? (
                'Client Appreciation'
              ) : project.appreciationBadge.includes('Best Performer') ? (
                <>
                  <span>Best Performer</span>
                  <span className="hidden md:inline"> – UI MasterLine</span>
                </>
              ) : project.appreciationBadge.includes('INCOMEX') ? (
                <>
                  <span>INCOMEX 2026</span>
                  <span className="hidden md:inline"> & CHE’TECH</span>
                </>
              ) : (
                project.appreciationBadge.replace('🏆', '').trim()
              )}
            </span>
          </button>
        ) : null}
      </div>

      {/* Card Information Body */}
      <div className="flex flex-1 flex-col p-3 sm:p-5 md:p-6">
        {/* Category Eyebrow */}
        <div className="flex items-center justify-between gap-1.5">
          <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] font-extrabold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 truncate">
            {project.tag || 'FULL STACK'}
          </span>
          <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
            Details ↗
          </span>
        </div>

        {/* Project Title: full name displayed completely without truncation */}
        <h3 className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-2.5 sm:mt-3.5 flex flex-wrap gap-1 sm:gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md sm:rounded-lg text-[9px] sm:text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/40 dark:border-zinc-700/40 text-zinc-500 dark:text-zinc-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Bottom Action Buttons: Both Demo and GitHub Repo Buttons */}
        <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-1.5 sm:gap-2.5">
          {/* Demo Button */}
          {project.links?.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs md:text-sm bg-emerald-400 hover:bg-emerald-300 text-zinc-950 shadow-sm sm:shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-[0.98] min-w-0"
            >
              <FiExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
              <span className="truncate">Demo</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenDetails()
              }}
              className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs md:text-sm bg-emerald-400 hover:bg-emerald-300 text-zinc-950 shadow-sm sm:shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all active:scale-[0.98] min-w-0"
            >
              <FiExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
              <span className="truncate">Details</span>
            </button>
          )}

          {/* GitHub Repo Button */}
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View GitHub Repository"
              className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs md:text-sm text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-700/60 shadow-sm transition-all active:scale-[0.98] min-w-0"
            >
              <FiGithub className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
              <span className="truncate">GitHub</span>
            </a>
          ) : project.links?.linkedin ? (
            <a
              href={project.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View on LinkedIn"
              className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs md:text-sm text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-700/60 shadow-sm transition-all active:scale-[0.98] min-w-0"
            >
              <FiLinkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0 text-sky-400" />
              <span className="truncate">LinkedIn</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenDetails()
              }}
              title="View Project Details"
              className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 md:py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs md:text-sm text-zinc-200 hover:text-white bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-700/60 shadow-sm transition-all active:scale-[0.98] min-w-0"
            >
              <span className="truncate">Overview</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

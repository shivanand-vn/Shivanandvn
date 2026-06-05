import { motion } from 'framer-motion'
import { FiCheckCircle, FiExternalLink, FiGithub } from 'react-icons/fi'
import Chip from './Chip'
import Button from './Button'
import ProjectPreviewStrip from './ProjectPreviewStrip'

export type Project = {
  title: string
  tech: readonly string[]
  description: string
  highlights: readonly string[]
  links?: { github?: string; live?: string }
  images?: readonly { src: string; alt: string }[]
  appreciationBadge?: string
}

export default function FeaturedProject({
  project,
  reverse = false,
}: {
  project: Project
  reverse?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.5 }}
      className={[
        'glass-card rounded-[2rem] p-6 lg:p-8 grid gap-8 lg:grid-cols-12 lg:items-center',
        reverse ? 'lg:hover:border-purple-500/30' : 'lg:hover:border-emerald-500/30',
      ].join(' ')}
    >
      {/* Image Preview Side */}
      <div
        className={[
          'relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/40 bg-zinc-100 dark:bg-zinc-900 lg:col-span-7 shadow-inner',
          reverse ? 'lg:order-2' : '',
        ].join(' ')}
      >
        {/* Glow ambient inside image container */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/10 blur-3xl" />
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl">
          {project.images?.length ? (
            <ProjectPreviewStrip images={project.images} />
          ) : (
            <div className="flex h-56 items-center justify-center">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                Preview images unavailable
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Description Info Side */}
      <div className={['lg:col-span-5 flex flex-col justify-center', reverse ? 'lg:order-1' : ''].join(' ')}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-block rounded-md bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Case Study
          </span>
          {project.appreciationBadge ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400">
              {project.appreciationBadge}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Bullet checklist highlights */}
        <ul className="mt-5 space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
          {project.highlights.slice(0, 5).map((h) => (
            <li key={h} className="flex items-start gap-2.5">
              <FiCheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
              <span className="leading-tight">{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {project.links?.github ? (
            <Button
              href={project.links.github}
              variant="secondary"
              ariaLabel="View Source Code on GitHub"
              className="text-xs px-4 py-1.5"
            >
              <FiGithub className="h-3.5 w-3.5" />
              GitHub Repository
            </Button>
          ) : null}
          {project.links?.live ? (
            <Button
              href={project.links.live}
              variant="primary"
              ariaLabel="Launch Live Demo"
              className="text-xs px-4 py-1.5 shadow-md shadow-emerald-500/10 dark:shadow-none"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
              Live Demonstration
            </Button>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}


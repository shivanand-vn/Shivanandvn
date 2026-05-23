import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.45 }}
      className={[
        'grid gap-6 rounded-3xl border border-zinc-200/70 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/20',
        'lg:grid-cols-12 lg:items-start lg:p-6',
      ].join(' ')}
    >
      <div
        className={[
          'relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-zinc-800/70 dark:from-zinc-950 dark:to-zinc-900',
          'lg:col-span-7',
          reverse ? 'lg:order-2' : '',
        ].join(' ')}
      >
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/15 blur-3xl dark:from-indigo-500/25 dark:to-fuchsia-500/20" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/15 to-sky-500/15 blur-3xl dark:from-emerald-500/18 dark:to-sky-500/18" />
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl">
          {project.images?.length ? (
            <>
              <ProjectPreviewStrip images={project.images} />
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="rounded-2xl border border-zinc-200/70 bg-white/60 px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:text-zinc-200">
                Add a project preview image
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={['lg:col-span-5', reverse ? 'lg:order-1' : ''].join(' ')}>
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Featured Project
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        {project.appreciationBadge ? (
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-600 dark:border-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-400">
            {project.appreciationBadge}
          </div>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.links?.github ? (
            <Button href={project.links.github} variant="secondary" ariaLabel="Open GitHub repository">
              <FiGithub />
              GitHub
            </Button>
          ) : null}
          {project.links?.live ? (
            <Button href={project.links.live} variant="ghost" ariaLabel="Open live site">
              <FiExternalLink />
              Live
            </Button>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}


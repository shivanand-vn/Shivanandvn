import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

type Props = {
  title: string
  issuer: string
  year: string
  image: string
  description: string
  badge?: string
  onClick: () => void
}

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  description,
  badge,
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={[
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 shadow-sm backdrop-blur',
        'transition-all hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-950/30 dark:hover:shadow-zinc-900/50',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400/15 to-fuchsia-400/10 blur-2xl dark:from-indigo-500/20 dark:to-fuchsia-500/10" />
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-zinc-900 dark:text-zinc-50">
          <FiAward className="h-5 w-5" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        {badge ? (
          <div className="mb-3 inline-flex self-start rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-yellow-600 dark:border-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-400">
            {badge}
          </div>
        ) : null}
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="line-clamp-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            {year}
          </span>
        </div>
        <p className="mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {issuer}
        </p>
        <p className="line-clamp-3 mt-auto text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

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
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="glass-card glass-card-hover flex cursor-pointer flex-col overflow-hidden rounded-3xl group"
    >
      {/* Aspect Ratio Box for Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/50 dark:border-zinc-800/40">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
        {/* Soft dark vignette on image hover */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Hover Award Icon */}
        <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 opacity-0 shadow-lg border border-zinc-200/50 dark:border-zinc-800/40 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <FiAward className="h-4.5 w-4.5 text-emerald-500" />
        </div>
      </div>

      {/* Content Text Block */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900/60 px-2 py-0.5 rounded-md">
            {issuer}
          </span>
          <span className="inline-flex rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            {year}
          </span>
        </div>

        {badge ? (
          <div className="mb-2.5 inline-flex self-start rounded-full border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 text-[9px] font-bold text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400">
            🏆 {badge}
          </div>
        ) : null}

        <h3 className="line-clamp-2 text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
          {title}
        </h3>
        
        <p className="line-clamp-3 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

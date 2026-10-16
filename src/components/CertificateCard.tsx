import { motion } from 'framer-motion'

type Props = {
  title: string
  issuer: string
  year: string
  image: string
  description: string
  badge?: string
  imageClassName?: string
  isHighlighted?: boolean
  className?: string
  onClick: () => void
}

export default function CertificateCard({
  title,
  issuer,
  year,
  image,
  description,
  badge,
  imageClassName,
  isHighlighted = false,
  className,
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={[
        'glass-card group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xl shadow-md sm:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500/40 cursor-pointer',
        isHighlighted
          ? 'ring-4 ring-amber-400 dark:ring-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.55)] dark:shadow-[0_0_50px_rgba(251,191,36,0.65)] scale-[1.02] border-amber-400/60'
          : '',
        className || '',
      ].join(' ')}
    >
      {/* Aspect Ratio Box for Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/40">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName || 'object-center'}`}
        />
        {/* Soft dark vignette on image hover */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Top Left Status / Year Badge Overlay */}
        <div className="pointer-events-none absolute top-1.5 left-1.5 sm:top-2.5 sm:left-3 z-10 flex items-center gap-1 sm:gap-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-emerald-500/30 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[7px] xs:text-[7.5px] sm:text-[9.5px] font-bold tracking-tight text-emerald-400 shadow-lg">
          <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 bg-emerald-500" />
          </span>
          <span className="truncate">{year}</span>
        </div>

        {/* Top Right Award / Badge */}
        {badge ? (
          <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-3 z-10 flex items-center gap-0.5 sm:gap-1 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-500/40 px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[7px] xs:text-[7.5px] sm:text-[9.5px] font-bold text-amber-300 shadow-lg whitespace-nowrap">
            <span className="text-[7.5px] sm:text-[9.5px]">🏆</span>
            <span>{badge}</span>
          </div>
        ) : null}
      </div>

      {/* Content Text Block */}
      <div className="flex flex-1 flex-col p-3 sm:p-5 md:p-6">
        {/* Category Eyebrow */}
        <div className="flex items-center justify-between gap-1.5">
          <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] font-extrabold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 truncate">
            {issuer}
          </span>
          <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
            View ↗
          </span>
        </div>

        {/* Full Title (complete, not truncated) */}
        <h3 className="mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2 flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

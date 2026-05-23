import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type Img = { src: string; alt: string }

export default function ProjectPreviewStrip({ images }: { images: readonly Img[] }) {
  if (images.length <= 0) return null
  const reduced = useReducedMotion()
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const isProgrammaticRef = useRef(false)
  const [paused, setPaused] = useState(false)
  const [index, setIndex] = useState(0)
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  if (images.length === 1) {
    const img = images[0]
    return (
      <div className="relative h-full w-full">
        <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </div>
    )
  }

  const max = images.length
  const intervalMs = 3000

  useEffect(() => {
    if (reduced || paused || isUserInteracting) return
    const t = window.setInterval(
      () => setIndex((v) => ((v + 1) % max + max) % max),
      intervalMs,
    )
    return () => window.clearInterval(t)
  }, [paused, reduced, isUserInteracting])

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    const w = el.clientWidth
    isProgrammaticRef.current = true
    el.scrollTo({ left: w * i, behavior: 'smooth' })
    window.setTimeout(() => {
      isProgrammaticRef.current = false
    }, 450)
  }

  useEffect(() => {
    scrollToIndex(index)
  }, [index])

  useEffect(() => {
    // no scroll listener; manual control via buttons/dots only
    return
  }, [])

  const goRelative = (delta: number) => {
    setIndex((v) => ((v + delta) % max + max) % max)
    setIsUserInteracting(true)
    window.setTimeout(() => setIsUserInteracting(false), 900)
  }

  return (
    <div
      className="group relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="relative w-full flex-none snap-start overflow-hidden aspect-[16/9]"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      {/* controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={() => goRelative(-1)}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/70 text-zinc-900 shadow-sm backdrop-blur opacity-0 transition-opacity hover:bg-white/80 group-hover:opacity-100 dark:border-zinc-700/40 dark:bg-zinc-950/50 dark:text-zinc-100 dark:hover:bg-zinc-950/70"
          aria-label="Previous preview"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => goRelative(1)}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/70 text-zinc-900 shadow-sm backdrop-blur opacity-0 transition-opacity hover:bg-white/80 group-hover:opacity-100 dark:border-zinc-700/40 dark:bg-zinc-950/50 dark:text-zinc-100 dark:hover:bg-zinc-950/70"
          aria-label="Next preview"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-2 backdrop-blur dark:border-zinc-700/40 dark:bg-zinc-950/40">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setIndex(i)
                setIsUserInteracting(true)
                window.setTimeout(() => setIsUserInteracting(false), 900)
              }}
              className={[
                'h-2 w-2 rounded-full transition',
                i === index
                  ? 'bg-zinc-900 dark:bg-white'
                  : 'bg-zinc-400/60 hover:bg-zinc-500/70 dark:bg-zinc-500/50 dark:hover:bg-zinc-400/70',
              ].join(' ')}
              aria-label={`Go to preview ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}


import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { scrollToId } from '../lib/scroll'
import ThemeToggle from './ThemeToggle'

export type NavItem = { id: string; label: string }

export default function Navbar({
  items,
  theme,
  onToggleTheme,
}: {
  items: NavItem[]
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pillCls = useMemo(
    () =>
      [
        'mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full border px-4 sm:px-6 transition-all duration-300',
        scrolled
          ? 'border-zinc-200/80 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-zinc-800/40 dark:bg-zinc-950/40 dark:shadow-none'
          : 'border-zinc-200/30 bg-white/20 dark:border-zinc-800/20 dark:bg-zinc-950/10 backdrop-blur-sm',
      ].join(' '),
    [scrolled],
  )

  const go = (id: string) => {
    setOpen(false)
    setTimeout(() => {
      scrollToId(id)
    }, 50)
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className={pillCls}>
        <button
          type="button"
          onClick={() => go('top')}
          className="group inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:bg-zinc-100/50 dark:text-zinc-50 dark:hover:bg-zinc-900/50"
          aria-label="Go to top"
        >
          <span className="inline-flex items-baseline gap-0.5">
            <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400">&lt;</span>
            <span className="font-semibold">Shivanand VN</span>
            <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400">/&gt;</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => go(it.id)}
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-600 transition-all hover:bg-zinc-100/50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-zinc-50"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/70 text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 dark:border-zinc-800/80 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-900 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-3 shadow-lg backdrop-blur-md dark:border-zinc-800/40 dark:bg-zinc-950/80 md:hidden"
          >
            <div className="grid gap-1">
              {items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => go(it.id)}
                  className="rounded-2xl px-4 py-2.5 text-left text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100/50 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
                >
                  {it.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}


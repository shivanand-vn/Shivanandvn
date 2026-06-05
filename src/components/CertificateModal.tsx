import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'

type Props = {
  isOpen: boolean
  onClose: () => void
  certificate: {
    title: string
    issuer: string
    year: string
    image: string
    description: string
    badge?: string
  } | null
}

export default function CertificateModal({ isOpen, onClose, certificate }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800/60 bg-white/95 dark:bg-zinc-900/95 shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-25 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white backdrop-blur-md transition-colors"
              >
                <FiX className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex-1 overflow-y-auto w-full flex items-center justify-center bg-zinc-100/50 p-6 dark:bg-zinc-950/30 min-h-[40vh]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  decoding="async"
                  className="max-h-[60vh] w-auto max-w-full rounded-xl border border-zinc-200/80 object-contain shadow-md dark:border-zinc-800/60"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-zinc-200/50 p-6 dark:border-zinc-800/40 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                    {certificate.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                    {certificate.issuer} • {certificate.year}
                  </p>
                </div>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 px-5 py-2 text-xs font-bold text-white transition-colors"
                >
                  {certificate.badge ? 'View Letter' : 'View Full Certificate'}
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

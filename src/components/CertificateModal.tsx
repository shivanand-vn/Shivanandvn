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
              className="pointer-events-auto relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
              >
                <FiX className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex-1 overflow-y-auto w-full flex flex-col items-center justify-center bg-zinc-100 p-4 dark:bg-zinc-950 min-h-[50vh]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  decoding="async"
                  className="max-h-[80vh] w-auto max-w-full rounded border border-zinc-200 object-contain shadow-sm dark:border-zinc-800"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-zinc-200 p-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {certificate.issuer} • {certificate.year}
                  </p>
                </div>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {certificate.badge ? 'View Letter' : 'View Full Certificate'}
                  <FiExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

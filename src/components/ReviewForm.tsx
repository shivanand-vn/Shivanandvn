import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import Button from './Button'
import Card from './Card'
import StarRating from './StarRating'

export default function ReviewForm() {
  const form = useRef<HTMLFormElement>(null)
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    // Placeholder credentials — user should replace these
    const SERVICE_ID = 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.warn('EmailJS credentials are not set.')
      // Simulate success for demo purposes if not set
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setStatus('success')
        form.current?.reset()
        setRating(5)
        setTimeout(() => setStatus('idle'), 5000)
      }, 1500)
      return
    }

    setIsSubmitting(true)

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then(
        () => {
          setIsSubmitting(false)
          setStatus('success')
          form.current?.reset()
          setRating(5)
          setTimeout(() => setStatus('idle'), 5000)
        },
        (error) => {
          console.error('EmailJS error:', error)
          setIsSubmitting(false)
          setStatus('error')
          setTimeout(() => setStatus('idle'), 5000)
        }
      )
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 dark:focus:border-emerald-500/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 dark:focus:border-emerald-500/50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Rating</label>
          <StarRating value={rating} onChange={setRating} />
          {/* Hidden input for EmailJS to pick up the rating value */}
          <input type="hidden" name="rating" value={rating} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Message / Feedback
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            placeholder="What do you think about my portfolio?"
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white/50 px-4 py-2.5 text-sm outline-none transition-all focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 dark:focus:border-emerald-500/50"
          ></textarea>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-[140px]"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-100" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FiSend />
                Submit Review
              </div>
            )}
          </Button>

          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
              >
                <FiCheckCircle />
                Sent Successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400"
              >
                <FiAlertCircle />
                Error sending.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </Card>
  )
}

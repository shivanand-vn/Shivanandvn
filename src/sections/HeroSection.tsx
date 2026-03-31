import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/scroll'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

export default function HeroSection() {
  return (
    <section id="top" className="section-shell pt-28 sm:pt-32">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text side (left) */}
          <div className="order-2 flex flex-col items-start lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-1">
                <span className="text-5xl font-semibold leading-none text-indigo-400/90 dark:text-indigo-300/90 sm:text-6xl md:text-7xl">
                  &lt;
                </span>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
                  {portfolio.name}
                </h1>
                <span className="text-5xl font-semibold leading-none text-indigo-400/90 dark:text-indigo-300/90 sm:text-6xl md:text-7xl">
                  /&gt;
                </span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.02 }}
                className="mt-3 text-center text-base font-medium text-zinc-500 dark:text-zinc-300 sm:text-lg"
              >
                {portfolio.role}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04 }}
              className="mt-8 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl"
            >
              Building reliable apps with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 dark:from-indigo-400 dark:to-fuchsia-400">
                Python
              </span>
              ,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                React
              </span>{' '}
              & modern web tech.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.06 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300"
            >
              I’m an MCA student focused on full stack development and desktop automation. I enjoy
              turning real-world workflows into clean, user-friendly products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                onClick={() => scrollToId('contact')}
                className="w-full sm:w-auto"
                ariaLabel="Scroll to contact"
              >
                <FiMail />
                Contact
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToId('projects')}
                className="w-full sm:w-auto"
                ariaLabel="Scroll to projects"
              >
                <FiArrowDown />
                View projects
              </Button>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mt-7 flex items-center justify-between gap-6"
            >
              <SocialLinks
                github={portfolio.links.github}
                linkedin={portfolio.links.linkedin}
                email={portfolio.email}
                phone={portfolio.phone}
              />
            </motion.div>
          </div>

          {/* Profile image (right) */}
          <div className="order-1 flex justify-center lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="relative h-72 w-72 sm:h-96 sm:w-96"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-emerald-500/20 blur-2xl dark:from-indigo-500/35 dark:via-fuchsia-500/25 dark:to-emerald-500/25" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/80 bg-zinc-900 shadow-xl shadow-black/30 dark:border-zinc-900">
                <img
                  src="/profile-shivanand.png"
                  alt={portfolio.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}


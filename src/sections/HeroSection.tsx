import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/scroll'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

export default function HeroSection() {
  return (
    <section id="top" className="relative section-shell pt-32 sm:pt-40 flex min-h-[92vh] flex-col justify-center">
      <div className="container-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Left Text & Stats Column */}
          <div className="order-2 flex flex-col items-start lg:col-span-7 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                ✨ MCA Scholar & Software Developer
              </div>
              
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1]">
                Turning Workflows Into{' '}
                <span className="text-gradient-emerald">
                  Reliable
                </span>{' '}
                &{' '}
                <span className="text-gradient-purple">
                  Elegant
                </span>{' '}
                Products
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg"
              >
                I'm <strong className="font-semibold text-zinc-900 dark:text-zinc-50">{portfolio.name}</strong>. 
                I specialize in full-stack engineering and desktop automation, converting manual real-world operations into fast, clean, user-friendly digital systems.
              </motion.p>

              {/* Horizontal primary stack tags */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Primary Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'React', 'Node.js', 'Express', 'MySQL', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/70 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/40 px-3 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-350"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Buttons & Social Hub */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 w-full sm:w-auto sm:flex-row sm:items-center"
            >
              <Button
                onClick={() => scrollToId('contact')}
                className="w-full sm:w-auto shadow-lg shadow-emerald-500/15 dark:shadow-none"
                ariaLabel="Scroll to contact"
              >
                <FiMail className="text-base" />
                Let's Connect
              </Button>
              <Button
                variant="secondary"
                onClick={() => scrollToId('projects')}
                className="w-full sm:w-auto"
                ariaLabel="Scroll to projects"
              >
                <FiArrowDown className="text-base animate-bounce" />
                Explore Projects
              </Button>

              <div className="flex justify-center sm:ml-4">
                <SocialLinks
                  github={portfolio.links.github}
                  linkedin={portfolio.links.linkedin}
                  email={portfolio.email}
                  phone={portfolio.phone}
                />
              </div>
            </motion.div>

            {/* Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-6 w-full border-t border-zinc-200/60 pt-8 dark:border-zinc-800/40"
            >
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  8.45
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  BSc CGPA
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  2
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Client Apps
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  5+
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Certifications
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Premium Profile Photo */}
          <div className="order-1 flex justify-center lg:col-span-5 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex items-center justify-center h-72 w-72 sm:h-96 sm:w-96 select-none"
            >
              {/* Outer pulsing glow ring */}
              <div className="absolute inset-[-10px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-purple-500/10 to-transparent blur-2xl animate-pulse-slow" />
              
              {/* Spinning outline tracks */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-6px] rounded-full border border-dashed border-zinc-300 dark:border-zinc-800"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-14px] rounded-full border border-dashed border-emerald-500/20 dark:border-emerald-400/10"
              />

              {/* Main Circular Portrait Container (Large Size) */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-950 shadow-2xl shadow-zinc-950/20 dark:shadow-black/60">
                <img
                  src="/profile-shivanand.webp"
                  alt={portfolio.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-103"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollToId('about')}>
        <div className="h-8 w-5 rounded-full border-2 border-zinc-400/60 p-1 flex justify-center dark:border-zinc-700/60">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-zinc-600 dark:bg-zinc-400"
          />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
          Scroll
        </span>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/scroll'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'

export default function HeroSection() {
  return (
    <section id="top" className="relative section-shell pt-24 sm:pt-32 pb-4 sm:pb-6 flex min-h-[92vh] flex-col justify-center">
      <div className="container-shell relative z-10">
        
        {/* Water-Drop Glassmorphism Container Card */}
        <div className="water-drop-glass relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-2xl">
          {/* Inside card glows */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            
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
                  Hi, I am{' '}
                  <span className="text-gradient-emerald">
                    Shivanand
                  </span>
                  .
                  <br />
                  Turning Problems Into{' '}
                  <span className="text-gradient-purple">
                    Products
                  </span>{' '}
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-350 sm:text-lg"
                >
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

                {/* Main Circular Portrait Container (Water-Drop Glass Style) */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white/65 dark:border-zinc-800/45 bg-white/20 dark:bg-zinc-950/30 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),0_15px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_45px_rgba(0,0,0,0.55)]">
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
      </div>
    </section>
  )
}


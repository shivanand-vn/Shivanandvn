import { motion } from 'framer-motion'
import { FiBookOpen, FiCode, FiCpu, FiShield } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

export default function AboutSection() {
  const [first, ...rest] = portfolio.about

  const roles = [
    {
      title: 'MCA Student',
      desc: 'Pursuing Post-Graduation in Computer Applications, blending advanced theory with practical application.',
      icon: FiBookOpen,
      colorClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Full Stack Developer',
      desc: 'Developing dynamic web applications with React, Node.js, Express, and relational/NoSQL databases.',
      icon: FiCpu,
      colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Software Engineer',
      desc: 'Building optimized Python automation scripts, Tkinter desktop tools, and computer vision utilities.',
      icon: FiCode,
      colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Problem Solver',
      desc: 'Analyzing legacy workflows and coding custom automations to eliminate friction and human errors.',
      icon: FiShield,
      colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
  ]

  return (
    <section id="about" className="section-shell pt-6 sm:pt-8 relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute right-[10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[80px]" />
      
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Me"
          title="A Developer Focused on Practical Code & Automation"
          description="Crafting high-quality software that makes workflows simpler, load faster, and perform flawlessly."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Personal Story */}
          <div className="space-y-6 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              className="relative border-l-4 border-emerald-500/80 pl-6 dark:border-emerald-400/80"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Bridging academic knowledge with real-world builds
              </h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-200">
                {first}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4 pl-7 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
            >
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                Whether it is building multi-tier web platforms for pharmaceutical operations or programming automated shipping dashboards, I enjoy resolving immediate constraints with clean engineering.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Roles Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {roles.map((role, idx) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card glass-card-hover group p-5 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${role.colorClass}`}>
                    <role.icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                    {role.title}
                  </h4>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {role.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiBox, FiCode, FiCpu, FiDatabase, FiLayout, FiTool } from 'react-icons/fi'
import {
  SiC,
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: '#3776AB' },
  C: { icon: SiC, color: '#A8B9CC' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#1572B6' },
  React: { icon: SiReact, color: '#61DAFB' },
  TailwindCSS: { icon: SiTailwindcss, color: '#06B6D4' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Express: { icon: SiExpress, color: '#000000' }, // Monochrome
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  GitHub: { icon: SiGithub, color: '#181717' },
  'VS Code': { icon: VscVscode, color: '#007ACC' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  'MySQL Workbench': { icon: SiMysql, color: '#4479A1' },
  'MongoDB Compass': { icon: SiMongodb, color: '#47A248' },
  CustomTkinter: { icon: FiLayout, color: '#4F46E5' },
  ReportLab: { icon: FiTool, color: '#10B981' },
  'REST APIs': { icon: FiTool, color: '#F59E0B' },
  OOP: { icon: FiBox, color: '#EC4899' },
  'Data Structures': { icon: FiBox, color: '#8B5CF6' },
  'AI/ML': { icon: FiCpu, color: '#EF4444' },
}

const groups = [
  {
    key: 'languages',
    label: 'Languages',
    icon: FiCode,
    desc: 'Core languages I use to write algorithms, data structures, and automation scripts.',
    colorClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    key: 'frontend',
    label: 'Frontend Development',
    icon: FiLayout,
    desc: 'Crafting responsive user interfaces, modular components, and accessible layouts.',
    colorClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    key: 'backend',
    label: 'Backend & APIs',
    icon: FiCpu,
    desc: 'Building server-side application logic, routing systems, and RESTful web services.',
    colorClass: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    key: 'databases',
    label: 'Database Systems',
    icon: FiDatabase,
    desc: 'Structuring structured schemas, writing raw queries, and indexing document stores.',
    colorClass: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
  },
  {
    key: 'tools',
    label: 'Developer Utilities',
    icon: FiTool,
    desc: 'Version control, interactive source debuggers, and visual data management suites.',
    colorClass: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
  },
  {
    key: 'other',
    label: 'Specializations',
    icon: FiBox,
    desc: 'Desktop GUI kits, printable report generation, OOP designs, and machine learning models.',
    colorClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
] as const

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute left-[5%] top-[40%] -z-10 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />
      
      <div className="container-shell">
        <SectionHeading
          eyebrow="My Toolbox"
          title="Technologies I Build With"
          description="A balanced stack optimized for desktop productivity, secure databases, and responsive web products."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => {
            const list = portfolio.skills[g.key]
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card glass-card-hover flex flex-col p-6 rounded-3xl"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${g.colorClass}`}>
                      <g.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                      {g.label}
                    </h3>
                  </div>
                </div>

                {/* Layer Description */}
                <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {g.desc}
                </p>

                {/* Subgrid of Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {list.map((s) => {
                    const skillObj = skillIcons[s] || { icon: FiBox, color: '' }
                    const Icon = skillObj.icon
                    const iconColor = skillObj.color

                    return (
                      <motion.div
                        key={s}
                        whileHover={{ 
                          y: -2, 
                          scale: 1.02,
                          boxShadow: `0 4px 15px -3px ${iconColor}25`,
                          borderColor: `${iconColor}50`
                        }}
                        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                        className="flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-white/50 px-3 py-2 text-zinc-700 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:text-zinc-300 dark:shadow-none transition-colors"
                      >
                        <span
                          className="text-base flex items-center justify-center transition-transform"
                          style={iconColor ? { color: iconColor } : {}}
                        >
                          <Icon className={!iconColor ? 'text-zinc-600 dark:text-zinc-400' : ''} />
                        </span>
                        <span className="text-[11px] font-semibold tracking-wide">
                          {s}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


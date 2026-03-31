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
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: '#3776AB' },
  C: { icon: SiC, color: '#A8B9CC' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss, color: '#1572B6' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Express: { icon: SiExpress, color: '' }, // Keep monochrome for dark mode
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  GitHub: { icon: SiGithub, color: '' }, // Keep monochrome
  'VS Code': { icon: VscVscode, color: '#007ACC' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  'MySQL Workbench': { icon: SiMysql, color: '#4479A1' },
  'MongoDB Compass': { icon: SiMongodb, color: '#47A248' },
  Tkinter: { icon: FiLayout, color: '' },
  ReportLab: { icon: FiTool, color: '' },
  'REST APIs': { icon: FiTool, color: '' },
  OOP: { icon: FiBox, color: '' },
  'Data Structures': { icon: FiBox, color: '' },
  'Basic AI/ML': { icon: FiCpu, color: '' },
}

const groups = [
  { key: 'languages', label: 'Languages', icon: FiCode },
  { key: 'frontend', label: 'Frontend', icon: FiLayout },
  { key: 'backend', label: 'Backend', icon: FiCpu },
  { key: 'databases', label: 'Databases', icon: FiDatabase },
  { key: 'tools', label: 'Tools', icon: FiTool },
  { key: 'other', label: 'Other', icon: FiBox },
] as const

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to build and ship"
          description="A practical stack across web apps, APIs, and desktop automation."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => {
            const list = portfolio.skills[g.key]
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
              >
                <Card className="h-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
                        <g.icon />
                      </div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {g.label}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {list.length}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {list.map((s) => {
                      const skillObj = skillIcons[s] || { icon: FiBox, color: '' }
                      const Icon = skillObj.icon
                      const iconColor = skillObj.color

                      return (
                        <motion.div
                          key={s}
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          className="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-white px-3 py-2 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:shadow-none"
                        >
                          <span
                            className="text-lg flex items-center justify-center transition-transform"
                            style={iconColor ? { color: iconColor } : {}}
                          >
                            <Icon className={!iconColor ? 'text-zinc-700 dark:text-zinc-300' : ''} />
                          </span>
                          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                            {s}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


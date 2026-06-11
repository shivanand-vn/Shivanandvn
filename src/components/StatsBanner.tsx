import { motion } from 'framer-motion'

interface StatItem {
  value: string
  label: string
  colorClass: string
}

const stats: StatItem[] = [
  {
    value: '5+',
    label: 'Projects Built & Deployed',
    colorClass: 'from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300',
  },
  {
    value: '80%',
    label: 'Manual Workflows Automated',
    colorClass: 'from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300',
  },
  {
    value: '100%',
    label: 'Database Integration & Accuracy',
    colorClass: 'from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300',
  },
  {
    value: '99%',
    label: 'Client Satisfaction Rate',
    colorClass: 'from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300',
  },
]

export default function StatsBanner() {
  return (
    <div className="container-shell my-2 sm:my-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden"
      >
        {/* Ambient background light inside the card */}
        <div className="absolute -left-[10%] top-0 -z-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-[50px] dark:bg-emerald-500/10" />
        <div className="absolute -right-[10%] bottom-0 -z-10 h-32 w-32 rounded-full bg-purple-500/5 blur-[50px] dark:bg-purple-500/10" />

        <div className="grid grid-cols-2 gap-y-6 gap-x-2 md:grid-cols-4 md:gap-4 md:divide-x md:divide-zinc-200/50 md:dark:divide-zinc-800/50">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-2 sm:px-4"
            >
              <span className={`bg-gradient-to-r ${stat.colorClass} bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-black text-transparent tracking-tight`}>
                {stat.value}
              </span>
              <span className="mt-1.5 text-[11px] sm:text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-snug max-w-[150px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'

export default function AboutSection() {
  const [first, ...rest] = portfolio.about

  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A developer who ships practical solutions"
          description="I like building products that feel polished, load fast, and make workflows simpler."
        />

        <div className="mx-auto max-w-4xl">
          {/* Decorative quote mark */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 text-7xl font-black leading-none text-emerald-400/30 dark:text-emerald-500/20 select-none"
          >
            "
          </motion.div>

          {/* First paragraph — larger, hero-style */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.3 }}
            className="text-xl font-medium leading-relaxed text-zinc-800 dark:text-zinc-100 sm:text-2xl"
          >
            {first}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="my-8 h-[2px] origin-left rounded-full bg-gradient-to-r from-emerald-400 via-indigo-400 to-transparent"
          />

          {/* Remaining paragraphs */}
          <div className="space-y-5">
            {rest.map((p, i) => (
              <motion.p
                key={p}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 + 0.15 }}
                className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

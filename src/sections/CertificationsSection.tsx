import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import CertificateCard from '../components/CertificateCard'
import CertificateModal from '../components/CertificateModal'
import { portfolio } from '../data/portfolio'

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<
    | (typeof portfolio.certifications)[number]
    | (typeof portfolio.appreciations)[number]
    | null
  >(null)
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    const triggerHighlight = (id: string) => {
      if (timer) clearTimeout(timer)
      setHighlightedId(id)
      timer = setTimeout(() => {
        setHighlightedId((curr) => (curr === id ? null : curr))
      }, 3500)
    }

    const handleHighlightEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      if (customEvent.detail) {
        triggerHighlight(customEvent.detail)
      }
    }

    window.addEventListener('highlight-achievement', handleHighlightEvent)

    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '')
      if (hashId) {
        triggerHighlight(hashId)
      }
    }

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener('highlight-achievement', handleHighlightEvent)
    }
  }, [])

  return (
    <section id="certifications" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & Key Milestones"
          description="Verified technical credentials, client appreciations, and competitive hackathon milestones. Click any card to preview full certificates."
        />

        <div className="mb-14">
          <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-l-2 border-emerald-500 pl-3">
            Professional Recognition & Client Appreciations
          </h3>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
            {portfolio.appreciations.map((app, index) => {
              const isLastSingle =
                index === portfolio.appreciations.length - 1 &&
                portfolio.appreciations.length % 2 === 1
              const isHighlighted = highlightedId === app.id
              return (
                <motion.div
                  id={app.id}
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={[
                    'scroll-mt-28 flex flex-col',
                    isLastSingle
                      ? 'col-span-2 w-full max-w-[calc(50%-5px)] sm:max-w-[calc(50%-0.5rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(50%-1rem)] mx-auto'
                      : '',
                  ].join(' ')}
                >
                  <CertificateCard
                    title={app.title}
                    issuer={app.issuer}
                    year={app.year}
                    image={app.image}
                    description={app.description}
                    badge={app.badge}
                    imageClassName="object-top"
                    isHighlighted={isHighlighted}
                    className="h-full"
                    onClick={() => setSelectedCert(app)}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-l-2 border-purple-500 pl-3">
            Technical Certifications & Hackathons
          </h3>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
            {portfolio.certifications.map((cert, index) => {
              const isLastSingle =
                index === portfolio.certifications.length - 1 &&
                portfolio.certifications.length % 2 === 1
              const certId = 'id' in cert ? (cert as { id: string }).id : undefined
              const isHighlighted = certId ? highlightedId === certId : false

              return (
                <motion.div
                  id={certId}
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={[
                    'scroll-mt-28 flex flex-col',
                    isLastSingle
                      ? 'col-span-2 w-full max-w-[calc(50%-5px)] sm:max-w-[calc(50%-0.5rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(50%-1rem)] mx-auto'
                      : '',
                  ].join(' ')}
                >
                  <CertificateCard
                    title={cert.title}
                    issuer={cert.issuer}
                    year={cert.year}
                    image={cert.image}
                    description={cert.description}
                    badge={'badge' in cert ? (cert as { badge?: string }).badge : undefined}
                    imageClassName={'imageClassName' in cert ? (cert as { imageClassName?: string }).imageClassName : undefined}
                    isHighlighted={isHighlighted}
                    className="h-full"
                    onClick={() => setSelectedCert(cert)}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          certificate={selectedCert}
        />
      </div>
    </section>
  )
}

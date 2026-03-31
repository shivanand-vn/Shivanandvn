import { useState } from 'react'
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

  return (
    <section id="certifications" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & achievements"
          description="Learning milestones and recognition."
        />

        <div className="mb-12">
          <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Professional Recognition (Client Appreciation)
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.appreciations.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CertificateCard
                  title={app.title}
                  issuer={app.issuer}
                  year={app.year}
                  image={app.image}
                  description={app.description}
                  badge={app.badge}
                  onClick={() => setSelectedCert(app)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Technical Certifications & Hackathons
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <CertificateCard
                  title={cert.title}
                  issuer={cert.issuer}
                  year={cert.year}
                  image={cert.image}
                  description={cert.description}
                  onClick={() => setSelectedCert(cert)}
                />
              </motion.div>
            ))}
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


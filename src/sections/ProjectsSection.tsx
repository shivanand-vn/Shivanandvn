import Button from '../components/Button'
import FeaturedProject from '../components/FeaturedProject'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/scroll'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Some of the projects I’ve worked on."
          right={
            <Button variant="secondary" onClick={() => scrollToId('contact')}>
              Let’s work together
            </Button>
          }
        />

        <div className="space-y-12">
          {portfolio.projects.map((p, idx) => (
            <FeaturedProject key={p.title} project={p} reverse={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}


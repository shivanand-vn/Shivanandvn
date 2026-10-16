import { useState } from 'react'
import Button from '../components/Button'
import FeaturedProject, { type Project } from '../components/FeaturedProject'
import ProjectModal from '../components/ProjectModal'
import SectionHeading from '../components/SectionHeading'
import { portfolio } from '../data/portfolio'
import { scrollToId } from '../lib/scroll'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-shell !pt-6 sm:!pt-8">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Some of the projects I’ve worked on. Click any project card to view full details, screenshots, and architecture highlights."
          right={
            <Button variant="secondary" onClick={() => scrollToId('contact')}>
              Let’s work together
            </Button>
          }
        />

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 lg:gap-8">
          {portfolio.projects.map((p, idx) => {
            const isLastSingle =
              idx === portfolio.projects.length - 1 &&
              portfolio.projects.length % 2 === 1

            return (
              <FeaturedProject
                key={p.title}
                project={p}
                onOpenDetails={() => setSelectedProject(p)}
                className={
                  isLastSingle
                    ? 'col-span-2 w-full max-w-[calc(50%-5px)] sm:max-w-[calc(50%-0.5rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(50%-1rem)] mx-auto'
                    : ''
                }
              />
            )
          })}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </div>
    </section>
  )
}

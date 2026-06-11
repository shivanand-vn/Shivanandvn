import { lazy, Suspense } from 'react'
import Navbar, { type NavItem } from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { useTheme } from '../hooks/useTheme'
import HeroSection from '../sections/HeroSection'
import LogoMarquee from '../components/LogoMarquee'
import AboutSection from '../sections/AboutSection'
import StatsBanner from '../components/StatsBanner'

// Lazy loaded below-the-fold sections
const SkillsSection = lazy(() => import('../sections/SkillsSection'))
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'))
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'))
const EducationSection = lazy(() => import('../sections/EducationSection'))
const CertificationsSection = lazy(() => import('../sections/CertificationsSection'))
const ContactSection = lazy(() => import('../sections/ContactSection'))

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

function SectionFallback() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="h-6 w-32 animate-pulse rounded bg-zinc-200/60 dark:bg-zinc-800/40" />
      <div className="mt-4 h-10 w-80 max-w-full animate-pulse rounded bg-zinc-200/60 dark:bg-zinc-800/40" />
      <div className="mt-8 space-y-4">
        <div className="h-36 w-full animate-pulse rounded-3xl bg-zinc-100/50 dark:bg-zinc-900/20" />
      </div>
    </div>
  )
}

export default function HomePage() {
  const { theme, toggle } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />

      <Navbar items={navItems} theme={theme} onToggleTheme={toggle} />

      <main>
        <HeroSection />
        <LogoMarquee />
        <AboutSection />
        
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>

        <StatsBanner />
        
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <CertificationsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}



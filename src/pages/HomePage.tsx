import Navbar, { type NavItem } from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { useTheme } from '../hooks/useTheme'
import AboutSection from '../sections/AboutSection'
import CertificationsSection from '../sections/CertificationsSection'
import ContactSection from '../sections/ContactSection'
import EducationSection from '../sections/EducationSection'
import ExperienceSection from '../sections/ExperienceSection'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ReviewSection from '../sections/ReviewSection'

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
  { id: 'reviews', label: 'Reviews' },
]

export default function HomePage() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen">
      <Background />

      <Navbar items={navItems} theme={theme} onToggleTheme={toggle} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
        <ReviewSection />
      </main>

      <Footer />
    </div>
  )
}


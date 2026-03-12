import { portfolio } from '../data/portfolio'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200/50 py-10 dark:border-zinc-800/50">
      <div className="container-shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold tracking-wide text-zinc-900 dark:text-zinc-100">
            {portfolio.name}
          </p>
          <p className="text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
            {portfolio.role}
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-4 sm:w-auto sm:items-end">
          <SocialLinks
            github={portfolio.links.github}
            linkedin={portfolio.links.linkedin}
            email={portfolio.email}
            phone={portfolio.phone}
            size="sm"
          />
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
            © {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


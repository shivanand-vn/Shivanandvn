import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import type { ReactNode } from 'react'

type Props = {
  github: string
  linkedin: string
  email: string
  phone?: string
  size?: 'sm' | 'md'
}

const sizes: Record<NonNullable<Props['size']>, string> = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10',
}

function IconLink({
  href,
  label,
  children,
  size,
}: {
  href: string
  label: string
  children: ReactNode
  size: NonNullable<Props['size']>
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex ${sizes[size]} items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-800 shadow-sm backdrop-blur transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200 dark:hover:bg-zinc-900`}
    >
      {children}
    </a>
  )
}

export default function SocialLinks({ github, linkedin, email, phone, size = 'md' }: Props) {
  return (
    <div className="flex items-center gap-3">
      <IconLink href={github} label="GitHub" size={size}>
        <FiGithub />
      </IconLink>
      <IconLink href={linkedin} label="LinkedIn" size={size}>
        <FiLinkedin />
      </IconLink>
      <IconLink href={`mailto:${email}`} label="Email" size={size}>
        <FiMail />
      </IconLink>
      {phone && (
        <IconLink href={`tel:${phone}`} label="Phone" size={size}>
          <FiPhone />
        </IconLink>
      )}
    </div>
  )
}


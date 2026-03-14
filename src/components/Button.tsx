import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100',
  secondary:
    'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
  ghost:
    'bg-transparent text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400/60 dark:focus:ring-zinc-600/60'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
  type = 'button',
  disabled = false,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={href.startsWith('#') ? undefined : '_blank'}
        rel={href.startsWith('#') ? undefined : 'noreferrer'}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cls}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}


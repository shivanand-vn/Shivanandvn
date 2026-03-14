import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { useState } from 'react'

type Props = {
  value: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ value, onChange, readonly = false, size = 'md' }: Props) {
  const [hover, setHover] = useState(0)

  const iconSize = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl',
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= (hover || value)

        return (
          <motion.button
            key={star}
            type="button"
            disabled={readonly}
            onMouseEnter={() => !readonly && setHover(star)}
            onMouseLeave={() => !readonly && setHover(0)}
            onClick={() => !readonly && onChange?.(star)}
            whileHover={!readonly ? { scale: 1.2 } : {}}
            whileTap={!readonly ? { scale: 0.9 } : {}}
            className={`transition-colors ${readonly ? 'cursor-default' : 'cursor-pointer'} ${
              isActive
                ? 'text-emerald-500 shadow-emerald-500/20'
                : 'text-zinc-300 dark:text-zinc-700'
            }`}
          >
            <FiStar
              className={`${iconSize[size]} ${isActive ? 'fill-current' : ''}`}
              style={{
                filter: isActive && !readonly ? 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))' : 'none',
              }}
            />
          </motion.button>
        )
      })}
    </div>
  )
}

import { motion } from 'framer-motion'
import Card from './Card'
import StarRating from './StarRating'

type Props = {
  name: string
  rating: number
  message: string
}

export default function TestimonialCard({ name, rating, message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-zinc-900 dark:text-white">{name}</h4>
            <div className="flex">
              <StarRating value={rating} readonly size="sm" />
            </div>
          </div>
          <p className="text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-300">
            "{message}"
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

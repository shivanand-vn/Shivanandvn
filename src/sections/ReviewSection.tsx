import SectionHeading from '../components/SectionHeading'
import ReviewForm from '../components/ReviewForm'
import TestimonialCard from '../components/TestimonialCard'

const testimonials = [
  {
    name: 'Alex Johnson',
    rating: 5,
    message: 'The attention to detail on this portfolio is amazing! Very clean and professional.',
  },
  {
    name: 'Sarah Chen',
    rating: 5,
    message: 'Love the smooth animations and the high-tech background. Great work on the project layouts.',
  },
  {
    name: 'Michael Smith',
    rating: 4,
    message: 'Very intuitive navigation and great project descriptions. Impressive skill set!',
  },
]

export default function ReviewSection() {
  return (
    <section id="reviews" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Reviews"
          title="Share Your Feedback"
          description="I value your thoughts! Leave a review about my work or read what others have to say."
        />

        <div className="flex flex-col gap-16">
          {/* Review Form */}
          <ReviewForm />

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

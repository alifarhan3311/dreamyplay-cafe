import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import reviews from '../data/reviews'

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow fill-yellow' : 'text-gray-200'
        }`}
      />
    ))}
  </div>
)

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Reviews"
          title="Loved by Brantford Families"
        />

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow fill-yellow" />
              ))}
            </div>
            <div className="text-left">
              <span className="font-bold text-primary">4.7 / 5</span>
              <span className="text-secondary text-sm ml-1">· Based on 37 Google reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-secondary leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lavender/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-lavender">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{review.name}</p>
                    <p className="text-xs text-secondary">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Dreamy+Play+Cafe+%26+Co/@43.1394,-80.2644,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-lavender/20 text-primary font-semibold rounded-full hover:border-lavender/40 hover:bg-lavender/5 transition-all"
          >
            See More Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews

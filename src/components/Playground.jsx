import { motion } from 'framer-motion'
import { CircleDot, ArrowUpRight, Blocks, Palette } from 'lucide-react'
import SectionHeading from './SectionHeading'

const playAreas = [
  {
    icon: CircleDot,
    title: 'Ball Pit',
    description: 'Dive into a sea of colorful balls for endless fun and laughter.',
    image: '/images/ball_pit.jpg',
    color: 'peach',
  },
  {
    icon: ArrowUpRight,
    title: 'Slides',
    description: 'Exciting slides designed for safe thrills and big smiles.',
    image: '/images/slide.jpg',
    color: 'sky',
  },
  {
    icon: Blocks,
    title: 'Climbing & Adventure',
    description: 'Explore climbing structures that build confidence and coordination.',
    image: '/images/climbing.jpg',
    color: 'yellow',
  },
  {
    icon: Palette,
    title: 'Imaginative Play',
    description: 'Creative corners where little minds can dream and pretend.',
    image: '/images/imaginative.jpg',
    color: 'lavender',
  },
]

const colorMap = {
  peach: { bg: 'bg-peach/15', text: 'text-peach', border: 'border-peach/20' },
  sky: { bg: 'bg-sky/15', text: 'text-sky', border: 'border-sky/20' },
  yellow: { bg: 'bg-yellow/15', text: 'text-yellow', border: 'border-yellow/20' },
  lavender: { bg: 'bg-lavender/15', text: 'text-lavender', border: 'border-lavender/20' },
}

const Playground = ({ hideHeading = false }) => {
  return (
    <section id="playground" className="py-20 md:py-28 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            badge="Our Playground"
            title="Let Them Play, Explore & Imagine"
            subtitle="A thoughtfully designed play space where every corner sparks joy and adventure."
          />
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playAreas.map((area, index) => {
            const colors = colorMap[area.color]
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100/60 transition-shadow duration-300 cursor-default"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm`}>
                    <area.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {area.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Playground

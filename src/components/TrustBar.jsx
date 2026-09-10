import { motion } from 'framer-motion'
import { Star, Landmark, Cake, Heart } from 'lucide-react'

const trustItems = [
  {
    icon: Star,
    title: '4.7 Google Rating',
    description: '37+ Reviews',
    color: 'yellow',
    bgColor: 'bg-yellow/15',
    iconColor: 'text-yellow',
  },
  {
    icon: Landmark,
    title: 'Indoor Playground',
    description: 'Safe & Fun',
    color: 'sky',
    bgColor: 'bg-sky/15',
    iconColor: 'text-sky',
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Stress-Free Celebrations',
    color: 'peach',
    bgColor: 'bg-peach/15',
    iconColor: 'text-peach',
  },
  {
    icon: Heart,
    title: 'Family Friendly',
    description: 'Made for Little Ones',
    color: 'lavender',
    bgColor: 'bg-lavender/15',
    iconColor: 'text-lavender',
  },
]

const TrustBar = () => {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl shadow-lavender/10 border border-white p-4 md:p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-50"
              >
                <div className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base text-primary leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm text-secondary mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBar

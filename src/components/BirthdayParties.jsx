import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PartyPopper, Sparkles, Coffee, ArrowRight, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: PartyPopper,
    title: 'Play',
    description: 'Let the little guests enjoy our indoor playground.',
    color: 'bg-peach/15',
    iconColor: 'text-peach',
  },
  {
    icon: Sparkles,
    title: 'Celebrate',
    description: 'A fun and welcoming space for birthday memories.',
    color: 'bg-lavender/15',
    iconColor: 'text-lavender',
  },
  {
    icon: Coffee,
    title: 'Relax',
    description: 'Spend less time worrying about setup and more time enjoying the celebration.',
    color: 'bg-sky/15',
    iconColor: 'text-sky',
  },
]

const BirthdayParties = ({ hideHeading = false }) => {
  const navigate = useNavigate()

  return (
    <section id="birthday" className="py-20 md:py-28 bg-gradient-to-b from-cream-cool to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            badge="Birthday Parties"
            title="Make Their Birthday Extra Dreamy 🎂"
            subtitle="From playtime to party time, we help families create a birthday celebration their little ones will remember."
          />
        )}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-gray-100/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center shrink-0`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Highlighted message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-lavender/10 via-white/50 to-peach/10 rounded-3xl border border-lavender/20 shadow-sm"
            >
              <p className="text-primary font-medium text-center text-lg">
                ✨ Just shoot us a message and we could handle everything for you!
              </p>
            </motion.div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 bg-gradient-to-r from-lavender to-lavender-dark text-white font-bold rounded-full hover:shadow-xl hover:shadow-lavender/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Plan a Birthday Party
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white border-2 border-lavender/20 text-primary font-bold rounded-full hover:border-lavender/40 hover:bg-lavender/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/birthday.jpg"
                alt="Birthday party celebration with decorations and balloons"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow/30 rounded-2xl rotate-12 flex items-center justify-center"
            >
              <span className="text-2xl">🎈</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-14 h-14 bg-peach/30 rounded-full flex items-center justify-center"
            >
              <span className="text-xl">🎂</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BirthdayParties

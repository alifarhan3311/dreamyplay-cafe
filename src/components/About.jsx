import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Heart, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  { icon: ShieldCheck, text: 'Clean & Safe Environment' },
  { icon: Heart, text: 'Welcoming Atmosphere' },
  { icon: Users, text: 'Family-Friendly Experience' },
  { icon: Sparkles, text: 'Birthday Celebrations' },
]

const About = ({ hideHeading = false }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            badge="About Us"
            title="Play. Explore. Celebrate."
            subtitle="Dreamy Play Cafe & Co is a welcoming indoor play space in Brantford designed for little explorers and their families."
          />
        )}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/about.jpg"
                alt="Kids playing in a safe indoor playground environment"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-5 border border-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-lavender/15 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-lavender fill-lavender/20" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">4.7 / 5</p>
                  <p className="text-sm text-secondary">Loved by families</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              A Place Where Families Love to Spend Time
            </h3>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                At Dreamy Play Cafe & Co, we've created a warm and inviting indoor
                space where children can explore, imagine and play safely while
                parents relax and enjoy quality family time.
              </p>
              <p>
                Located in the heart of Brantford, our play cafe offers a clean,
                thoughtfully designed environment perfect for everyday play
                adventures and special birthday celebrations.
              </p>
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-gray-100/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <feature.icon className="w-5 h-5 text-lavender shrink-0" />
                  <span className="text-sm font-bold text-primary">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Why families love us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-lavender/10 via-white/50 to-peach/10 rounded-3xl border border-lavender/20 shadow-sm"
            >
              <p className="font-bold text-primary mb-2 text-lg">
                💛 Why families love Dreamy
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                From the clean play areas to the welcoming atmosphere, families
                appreciate the care and attention we put into creating a space
                where both kids and parents feel at home.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

import { motion } from 'framer-motion'
import { ShieldCheck, Users, Sparkles, Cake } from 'lucide-react'
import SectionHeading from './SectionHeading'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Safe & Clean',
    description: 'Designed with families and little explorers in mind.',
    color: 'bg-sky/15',
    iconColor: 'text-sky',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'A welcoming environment for kids and parents.',
    color: 'bg-peach/15',
    iconColor: 'text-peach',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Play Space',
    description: 'A thoughtfully designed indoor environment.',
    color: 'bg-lavender/15',
    iconColor: 'text-lavender',
  },
  {
    icon: Cake,
    title: 'Birthday Ready',
    description: 'A memorable place to celebrate special days.',
    color: 'bg-yellow/15',
    iconColor: 'text-yellow',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Dreamy"
          title="Why Families Choose Us"
          subtitle="Here's what makes Dreamy Play Cafe a favourite for Brantford families."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mx-auto mb-5`}>
                <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-secondary leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

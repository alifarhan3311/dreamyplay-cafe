import { motion } from 'framer-motion'

const SectionHeading = ({ badge, title, subtitle, center = true, light = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
          light
            ? 'bg-white/20 text-white'
            : 'bg-lavender/15 text-lavender-dark'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/80' : 'text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading

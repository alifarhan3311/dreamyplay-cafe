import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'

const FloatingDot = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
)

const FinalCTA = () => {
  const navigate = useNavigate()

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-lavender via-lavender-dark to-lavender overflow-hidden">
      {/* Floating shapes */}
      <FloatingDot className="top-10 left-[10%] w-4 h-4 bg-white/20 rounded-full" delay={0} />
      <FloatingDot className="top-20 right-[15%] w-6 h-6 bg-white/10 rounded-lg rotate-45" delay={1} />
      <FloatingDot className="bottom-16 left-[20%] w-5 h-5 bg-peach/30 rounded-full" delay={2} />
      <FloatingDot className="bottom-10 right-[25%] w-3 h-3 bg-yellow/30 rounded-full" delay={0.5} />
      <FloatingDot className="top-1/2 left-[5%] w-8 h-8 bg-white/5 rounded-2xl rotate-12" delay={1.5} />
      <FloatingDot className="top-1/3 right-[8%] w-4 h-4 bg-sky/20 rounded-full" delay={3} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium">Dreamy Play Cafe & Co</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Make Their Day Dreamy?
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Planning a birthday or looking for a fun place for your little one to
            play? We'd love to welcome your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 bg-white text-lavender-dark font-bold rounded-full hover:bg-cream hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Birthday Party
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <a
              href="tel:+14375335650"
              className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +1 437-533-5650
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

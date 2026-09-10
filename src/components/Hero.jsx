import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Phone, Star, ArrowRight, Sparkles, CloudSun } from 'lucide-react'

const FloatingShape = ({ className, delay = 0, duration = 6, children }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-warm to-cream-cool pt-20 md:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lavender/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-lavender/10 border border-lavender/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-lavender" />
              <span className="text-sm font-medium text-lavender-dark">
                Brantford's Family-Friendly Play Space
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-primary leading-[1.1] mb-6">
              Where Little Adventures{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-peach">
                Become Big Memories
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              An indoor play space where kids can explore, play and celebrate
              while families relax and make memories together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => navigate('/birthday-parties')}
                className="group px-8 py-4 bg-gradient-to-r from-lavender to-lavender-dark text-white font-bold rounded-full hover:shadow-xl hover:shadow-lavender/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Birthday Party
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/playground')}
                className="px-8 py-4 bg-white border-2 border-lavender/20 text-primary font-semibold rounded-full hover:border-lavender/40 hover:bg-lavender/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore the Playground
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <a
                href="tel:+14375335650"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-peach/15 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-peach" />
                </div>
                <span className="text-sm font-medium">437-533-5650</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow fill-yellow"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-primary">4.7</span>
                  <span className="text-secondary"> · 37+ happy reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lavender/10">
                <img
                  src="/images/hero.jpg"
                  alt="Indoor playground at Dreamy Play Cafe with colorful play structures"
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating decorative elements */}
              <FloatingShape className="-top-6 -right-4 md:-right-6" delay={0} duration={5}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow/30 rounded-2xl rotate-12 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-yellow" />
                </div>
              </FloatingShape>

              <FloatingShape className="-bottom-4 -left-4 md:-left-6" delay={1} duration={7}>
                <div className="w-14 h-14 md:w-18 md:h-18 bg-peach/25 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-peach rounded-full" />
                </div>
              </FloatingShape>

              <FloatingShape className="top-1/3 -left-6 md:-left-10" delay={2} duration={6}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sky/25 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <CloudSun className="w-5 h-5 text-sky" />
                </div>
              </FloatingShape>

              <FloatingShape className="-top-4 left-1/4" delay={1.5} duration={8}>
                <div className="w-6 h-6 bg-lavender/30 rounded-full" />
              </FloatingShape>

              <FloatingShape className="bottom-1/4 -right-4" delay={0.5} duration={5}>
                <div className="w-8 h-8 bg-yellow/20 rounded-lg rotate-45" />
              </FloatingShape>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

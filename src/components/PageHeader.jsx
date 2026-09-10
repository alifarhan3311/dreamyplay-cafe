import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, badge, image }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-cream-cool via-cream to-cream-warm overflow-hidden border-b border-lavender/10">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-lavender/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-peach/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {image ? (
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {badge && (
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-lavender/15 text-lavender-dark">
                  {badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-base md:text-lg text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-lavender/15 border-4 border-white">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              {/* Subtle floating decorative elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow/30 rounded-2xl rotate-12 backdrop-blur-sm hidden sm:block"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 w-10 h-10 bg-peach/30 rounded-full backdrop-blur-sm hidden sm:block"
              />
            </motion.div>
          </div>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {badge && (
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-lavender/15 text-lavender-dark">
                  {badge}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHeader

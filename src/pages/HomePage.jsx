import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Cake, Camera, ShieldCheck, Users, Sparkles, Heart } from 'lucide-react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import WhyChooseUs from '../components/WhyChooseUs'
import FinalCTA from '../components/FinalCTA'
import SectionHeading from '../components/SectionHeading'

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About Us"
            title="Play. Explore. Celebrate."
            subtitle="Dreamy Play Cafe & Co is a welcoming indoor play space in Brantford designed for little explorers and their families."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/about.jpg"
                alt="Children playing in a safe and fun indoor environment"
                className="w-full h-[350px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-secondary leading-relaxed text-lg mb-6">
                At Dreamy Play Cafe & Co, we've created a warm and inviting indoor
                space where children can explore, imagine and play safely while
                parents relax and enjoy quality family time.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: ShieldCheck, text: 'Clean & Safe' },
                  { icon: Users, text: 'Family Friendly' },
                  { icon: Sparkles, text: 'Birthday Parties' },
                  { icon: Star, text: '4.7★ Rated' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 p-3 rounded-xl bg-cream-warm">
                    <item.icon className="w-5 h-5 text-lavender" />
                    <span className="text-sm font-medium text-primary">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-lavender-dark font-semibold hover:gap-3 transition-all"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="Fun for Every Little Explorer"
            subtitle="From everyday play adventures to unforgettable birthday celebrations."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Indoor Playground',
                description: 'A safe and exciting play space with slides, ball pit, climbing structures and imaginative play corners.',
                image: '/images/hero.jpg',
                link: '/playground',
                icon: Star,
              },
              {
                title: 'Birthday Parties',
                description: 'Celebrate their special day in a fun, stress-free environment they\'ll always remember.',
                image: '/images/birthday.jpg',
                link: '/birthday-parties',
                icon: Cake,
              },
              {
                title: 'Photo Gallery',
                description: 'Take a peek inside our play space and see what makes Dreamy Play Cafe special.',
                image: '/images/imaginative.jpg',
                link: '/gallery',
                icon: Camera,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Link to={item.link} className="group block h-full">
                  <div className="bg-white rounded-3xl h-full overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 border border-gray-100/60 transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-lavender-dark transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-lavender-dark group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Reviews Preview */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Reviews"
            title="Loved by Brantford Families"
          />
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
              <span className="font-bold text-primary">4.7 / 5</span>
              <span className="text-secondary text-sm">· 37+ Google reviews</span>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', text: 'Families love the beautiful and welcoming atmosphere. A wonderful place for kids to play and explore safely.', rating: 5 },
              { name: 'Jessica T.', text: 'Kids enjoy the playground and ball pit. We hosted a birthday party here and it was absolutely wonderful.', rating: 5 },
              { name: 'Amanda R.', text: 'Families appreciate the friendly owners and staff. A great space for children to have fun while parents relax.', rating: 4 },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow fill-yellow' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-secondary leading-relaxed mb-6 flex-grow text-[1.05rem]">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lavender/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-lavender">{review.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-semibold text-primary">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-lavender/20 text-primary font-semibold rounded-full hover:border-lavender/40 hover:bg-lavender/5 transition-all"
            >
              See All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

export default HomePage

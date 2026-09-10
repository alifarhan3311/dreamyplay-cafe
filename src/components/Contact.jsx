import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Visit Us"
          title="Come Play With Us"
          subtitle="We'd love to welcome your family to Dreamy Play Cafe & Co."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-sm border border-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-primary mb-8">Dreamy Play Cafe & Co</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lavender/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6 text-lavender" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Address</p>
                    <p className="text-secondary mt-1">
                      13 Queen St, Unit 102<br />
                      Brantford, ON N3T 3B1<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-peach/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-6 h-6 text-peach" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Phone</p>
                    <a
                      href="tel:+14375335650"
                      className="text-secondary hover:text-lavender transition-colors mt-1 inline-block"
                    >
                      +1 437-533-5650
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-6 h-6 text-sky" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Email</p>
                    <a
                      href="mailto:tharaniscb@gmail.com"
                      className="text-secondary hover:text-sky transition-colors mt-1 inline-block"
                    >
                      tharaniscb@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid sm:grid-cols-3 gap-3 mt-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dreamy+Play+Cafe+%26+Co+13+Queen+St+Unit+102+Brantford+ON+N3T+3B1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-lavender to-lavender-dark text-white font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
                <a
                  href="tel:+14375335650"
                  className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-lavender/20 text-primary font-bold rounded-full hover:border-lavender/40 hover:bg-lavender/5 hover:-translate-y-1 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="mailto:tharaniscb@gmail.com"
                  className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-lavender/20 text-primary font-bold rounded-full hover:border-lavender/40 hover:bg-lavender/5 hover:-translate-y-1 transition-all text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-full min-h-[400px]">
              <iframe
                title="Dreamy Play Cafe & Co location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.8!2d-80.2644!3d43.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s13+Queen+St+Unit+102+Brantford+ON!5e0!3m2!1sen!2sca!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

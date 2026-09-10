import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Playground', to: '/playground' },
  { name: 'Birthday Parties', to: '/birthday-parties' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Contact', to: '/contact' },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-1 inline-block shadow-sm">
                <img 
                  src="/images/logo.png" 
                  alt="Dreamy Play Cafe Logo" 
                  className="h-12 w-12 object-cover rounded-full"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Play. Explore. Celebrate.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/photo/?fbid=122094854744921770&set=a.122094854756921770"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-lavender hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/dreamyplaycafenco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-lavender hover:-translate-y-1 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lavender-light shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  13 Queen St, Unit 102<br />Brantford, ON N3T 3B1
                </span>
              </li>
              <li>
                <a
                  href="tel:+14375335650"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-peach-light shrink-0" />
                  +1 437-533-5650
                </a>
              </li>
              <li>
                <a
                  href="mailto:tharaniscb@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-sky-light shrink-0" />
                  tharaniscb@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Visit Us
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Dreamy Play Cafe & Co is located in the heart of Brantford, Ontario.
              Come play, explore and celebrate with us!
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dreamy+Play+Cafe+%26+Co+13+Queen+St+Unit+102+Brantford+ON+N3T+3B1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-lavender/20 hover:bg-lavender/30 text-white text-sm font-medium rounded-full transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Dreamy Play Cafe & Co. All rights reserved.
            </p>
            <p className="text-white/30 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-peach" /> in Brantford, Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

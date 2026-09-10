import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Playground', to: '/playground' },
  { name: 'Birthday Parties', to: '/birthday-parties' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-lavender/10'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/logo.png" 
                alt="Dreamy Play Cafe & Co. Logo" 
                className="h-12 md:h-16 w-12 md:w-16 object-cover rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[0.95rem] font-bold rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-lavender-dark bg-lavender/15 shadow-sm'
                        : 'text-secondary hover:text-primary hover:bg-lavender/10'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+14375335650"
                className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-primary transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">437-533-5650</span>
              </a>
              <Link
                to="/birthday-parties"
                className="px-6 py-2.5 bg-gradient-to-r from-lavender to-lavender-dark text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-lavender/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Party
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-lavender/10 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img 
                    src="/images/logo.png" 
                    alt="Dreamy Play Cafe Logo" 
                    className="h-10 w-10 object-cover rounded-full shadow-sm"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                          isActive
                            ? 'text-lavender-dark bg-lavender/10'
                            : 'text-secondary hover:text-primary hover:bg-lavender/10'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+14375335650"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-lavender/30 text-lavender-dark font-semibold rounded-full hover:bg-lavender/5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  437-533-5650
                </a>
                <Link
                  to="/birthday-parties"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-lavender text-white font-semibold rounded-full hover:bg-lavender-dark transition-colors"
                >
                  Book a Party
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

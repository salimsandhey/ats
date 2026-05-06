import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../data/constants'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isPolicyPage = location.pathname !== '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`
    } else {
      scrollToSection(id)
    }
  }

  const handleContactClick = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact-section'
    } else {
      scrollToSection('contact-section')
    }
  }

  const light = scrolled || isPolicyPage

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${light ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-black/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer shrink-0 group"
        >
          <div className="relative">
            <img
              src="/assets/logo/ATS-logo.png"
              alt="ATS Logo"
              className={`h-10 w-auto transition-all duration-500 group-hover:scale-105 ${light ? '' : 'brightness-0 invert'}`}
            />
            <div className="absolute -inset-2 bg-brand-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-[11px] font-black uppercase tracking-[0.15em] transition-all cursor-pointer group py-2 ${light ? 'text-brand-primary/60 hover:text-brand-primary' : 'text-white/80 hover:text-white drop-shadow-sm'}`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${light ? 'bg-brand-primary' : 'bg-white'}`} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleContactClick}
            className={`relative overflow-hidden h-11 px-8 font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all active:scale-95 cursor-pointer group ${light ? 'bg-brand-primary text-white hover:shadow-[0_10px_20px_rgba(15,60,100,0.2)]' : 'bg-white text-brand-primary hover:bg-brand-primary hover:text-white drop-shadow-lg'}`}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </nav>
  )
}

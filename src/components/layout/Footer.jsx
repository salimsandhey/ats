import { Link } from 'react-router-dom'

const POLICY_LINKS = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Shipping & Refund', path: '/shipping-refund' },
]

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-50 text-center space-y-12">
      <div className="flex justify-center">
        <img
          src="/assets/logo/ATS-logo.png"
          alt="ATS Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {POLICY_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-brand-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-[10px] font-bold uppercase text-black/20 tracking-[0.5em] text-center">
        © 2026 Ats Automation. All Rights Reserved.
      </div>
    </footer>
  )
}

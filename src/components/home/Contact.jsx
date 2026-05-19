import { useState } from 'react'

const INFO_ITEMS = [
  {
    label: 'Corporate Office',
    sub: 'G-04, Ground Floor, D-141, Industrial Area, Phase 7, Sector 73, S.A.S. Nagar, Mohali-160055 (Punjab) INDIA',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: '+91 98559 55959, +91 172 462 5959',
    sub: 'Contact Numbers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'info@atsindia.org',
    sub: 'Email Address',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you shortly.')
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setSubmitMessage('Failed to submit form. Please check your network connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-section" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </div>
              <h2 className="text-5xl font-black text-black">Get In Touch</h2>
              <div className="space-y-1">
                <p className="text-lg font-black text-brand-primary">ATS</p>
                <p className="text-lg text-black/60 font-medium leading-relaxed max-w-sm">
                  Ready to transform your mobility infrastructure? Contact our team for a consultation.
                </p>
                <div className="pt-2">
                  <a
                    href="/ATS Brochure in English.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3.5 font-black text-sm rounded-xl hover:bg-black transition-all shadow-lg shadow-brand-primary/20 active:scale-95"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary shrink-0">
                    {item.icon}
                  </div>
                  <div className="max-w-[320px]">
                    <div className="font-black text-brand-primary">{item.label}</div>
                    <div className="text-[11px] font-bold text-black/40 uppercase tracking-widest mt-1 leading-relaxed">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gray-50/50 p-10 md:p-16 rounded-[40px] border border-gray-100 min-h-[400px] flex flex-col justify-center">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                    <svg className="w-10 h-10 animate-scaleIn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-black">Enquiry Submitted!</h3>
                    <p className="text-sm font-medium text-black/60 max-w-sm leading-relaxed">
                      {submitMessage}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-brand-primary text-white px-8 py-3.5 font-black text-sm rounded-xl hover:bg-black transition-all cursor-pointer shadow-lg shadow-brand-primary/20 active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <input type="hidden" name="access_key" value="bc48f30c-7d97-4af4-a6bf-b87d0e131259" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Full Name</label>
                      <input type="text" name="name" required className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Phone Number</label>
                      <input type="tel" name="phone" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter phone number" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Email Address</label>
                      <input type="email" name="email" required className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="name@organization.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Organization / Agency</label>
                      <input type="text" name="organization" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">City / Region</label>
                    <input type="text" name="city" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="e.g. New Delhi, India" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Your Message / Requirement</label>
                    <textarea rows="4" name="message" required className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black resize-none focus:border-brand-primary transition-all" placeholder="Tell us about your project requirements..."></textarea>
                  </div>
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl font-bold text-sm border border-red-100 flex items-center gap-3">
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{submitMessage}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-primary text-white px-12 py-5 font-black rounded-xl hover:bg-black transition-all cursor-pointer shadow-xl shadow-brand-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

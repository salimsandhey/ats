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
            <div className="bg-gray-50/50 p-10 md:p-16 rounded-[40px] border border-gray-100">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="name@organization.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Organization / Agency</label>
                    <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Company name" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-primary uppercase tracking-widest">City / Region</label>
                  <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="e.g. New Delhi, India" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Your Message / Requirement</label>
                  <textarea rows="4" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black resize-none focus:border-brand-primary transition-all" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <button className="bg-brand-primary text-white px-12 py-5 font-black rounded-xl hover:bg-black transition-all cursor-pointer shadow-xl shadow-brand-primary/20 active:scale-95">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

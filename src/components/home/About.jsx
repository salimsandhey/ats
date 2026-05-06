export default function About() {
  return (
    <section id="about-section" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="rounded-[40px] overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
          <img src="/assets/images/about-ver.jpeg" alt="About Ats" className="w-full h-auto" />
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About ATS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-primary">Automated Testing System (ATS)</h2>
          <p className="text-lg leading-relaxed text-black/70 font-medium">
            India's ATS is revolutionising vehicle fitness checks — replacing manual inspections with automated technology that certifies vehicles in under 10 minutes with near-100% accuracy, fully integrated with the VAHAN portal.
          </p>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-black/60">
              With rising road accidents, stricter scrappage and emissions norms, ATS is now a core part of every state's transport infrastructure. Our end-to-end support — from ARAI/ICAT-approved installation to operations — is custom-built for Indian conditions. With very few licences available, entering early gives you a lasting competitive edge.
            </p>
          </div>
          <div className="pt-6 border-t border-gray-100 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-black font-tech tracking-tighter">15+ Protocol</div>
              <div className="text-[10px] font-bold text-black/40 uppercase mt-1 tracking-widest">MoRTH Regulated</div>
            </div>
            <div className="w-px h-12 bg-black/5" />
            <img src="/assets/logo/ATS-logo.png" alt="ATS Logo" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

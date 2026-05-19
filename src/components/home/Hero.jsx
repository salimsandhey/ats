function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/assets/videos/hero-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-primary/85" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl pt-20">
              Build Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">ATS Empire</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed text-white/80 drop-shadow-md">
              Step into a policy-driven, high-growth sector with guaranteed demand. Set up a fully compliant Automated Testing Station and lead India's vehicle fitness revolution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about-section')}
              className="bg-white text-brand-primary h-20 px-12 font-black text-xl rounded-full hover:bg-brand-primary hover:text-white border border-transparent hover:border-white/20 transition-all shadow-2xl shadow-black/20 active:scale-95 w-full sm:w-auto"
            >
              Start Your Journey
            </button>
            <a
              href="/ATS Brochure in English.pdf"
              download
              className="bg-transparent border border-white/30 text-white h-20 px-12 font-black text-xl rounded-full hover:bg-white hover:text-brand-primary transition-all flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/10 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-tech">100%</div>
              <div className="text-[10px] font-bold text-white/40 uppercase mt-2 tracking-widest">Compliance</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-tech">24/7</div>
              <div className="text-[10px] font-bold text-white/40 uppercase mt-2 tracking-widest">Support</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white font-tech">PAN</div>
              <div className="text-[10px] font-bold text-white/40 uppercase mt-2 tracking-widest">Execution</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}

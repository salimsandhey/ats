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

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('about-section')}
              className="bg-white text-brand-primary h-20 px-12 font-black text-xl rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-2xl shadow-black/20 active:scale-95"
            >
              Start Your Journey
            </button>
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

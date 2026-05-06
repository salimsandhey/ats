import { FEATURES } from '../../data/constants'

export default function Features() {
  return (
    <section id="features-section" className="py-24 px-6 bg-brand-accent border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto space-y-20">
        <div className="flex justify-between items-end border-b border-gray-100 pb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Key Features of ATS Machinery.</h2>
          <div className="text-black/40 font-bold text-[10px] uppercase tracking-widest pb-3">Precision v2026</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feat, i) => (
            <div key={i} className="relative overflow-hidden p-8 rounded-[32px] border border-gray-50 bg-white shadow-lg shadow-black/5 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20">
              {/* Background Fill Overlay */}
              <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-brand-primary group-hover:text-white/50 transition-colors duration-500 font-black text-[10px] tracking-widest mb-6">
                  TECH — {i + 100}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-black group-hover:text-white transition-colors duration-500 leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-black/50 group-hover:text-white/70 transition-colors duration-500 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

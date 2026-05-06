const GLOBAL_POINTS = [
  'Complete access to advanced ATS technologies that are globally accepted and are highly used in automotive markets.',
  'ATS is thoughtfully designed keeping International Testing Standards into consideration and is further adapted for Indian Conditions.',
  'It is integrated with precision engineering, automation and smart diagnostics systems.',
]

const WHY_POINTS = [
  { heading: 'Higher Accuracy & Reliability', sub: 'International-grade testing precision' },
  { heading: 'Future-Proof Investment', sub: 'Ready for upcoming regulatory upgrades' },
  { heading: 'Faster Approvals', sub: 'Designed as per compliance-ready frameworks' },
  { heading: 'Operational Efficiency', sub: 'Reduced downtime with smart automation' },
  { heading: 'Higher ROI', sub: 'Better throughput and optimized performance' },
]

export default function Partnerships() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Partnerships
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Global Technology. Local Execution.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-16 rounded-[50px] bg-white border border-gray-100 shadow-2xl shadow-black/5 space-y-8">
            <h3 className="text-3xl font-bold text-brand-primary">Global Technology Advantage</h3>
            <div className="space-y-6">
              {GLOBAL_POINTS.map((pt, i) => (
                <div key={i} className="flex gap-4 font-medium">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2.5 shrink-0" />
                  <p className="text-black/70 leading-relaxed text-lg">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-16 rounded-[50px] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 space-y-8">
            <h3 className="text-3xl font-bold italic">Why Our Global Partnerships Matter</h3>
            <div className="space-y-6">
              {WHY_POINTS.map((item, i) => (
                <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="font-bold uppercase text-[11px] tracking-widest text-white/90">{item.heading}</div>
                  <div className="text-white/60 text-sm mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { COMPLIANCE_PDFS } from '../../data/constants'

export default function Compliance() {
  return (
    <section id="compliance-section" className="py-24 px-6 bg-brand-accent border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-primary">Regulatory Framework We Operate Under:</h2>
          <p className="text-lg text-black/70">Simplified documentation for seamless regulatory approvals across all regions.</p>
          <p className="text-lg font-semibold text-brand-primary italic">Fully compliant and approval-ready—your ATS centre launches without delays.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_PDFS.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-gray-50 bg-white shadow-lg shadow-black/5 hover:border-brand-primary transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl font-bold text-black group-hover:text-brand-primary transition-colors">{item.policy}</span>
                  <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">MoRTH</span>
                </div>
                <p className="text-sm text-black/60 leading-relaxed mb-8">{item.desc}</p>
              </div>
              <a
                href={item.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all w-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

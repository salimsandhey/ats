import { useState } from 'react'

const CARDS = [
  {
    t: 'Government-Driven Mandatory Ecosystem',
    d: 'The government mandated that all vehicles will require fitness testing performed by an approved provider, ensuring that this will create guaranteed demand.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    t: 'High Demand-Scrappage Policy & Fitness Norms',
    d: 'The number of vehicles needing a fitness certification will only grow as the average age of vehicles increases and as urban areas increase emissions standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    t: 'Limited Licenses-First Mover Advantage',
    d: 'The total number of approved licenses by state is very limited. Entering this sector early will allow you to position your business well relative to competitors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12V5a2 2 0 012-2h2a2 2 0 012 2v7m-6 0a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m-6 0h6" />
      </svg>
    ),
  },
  {
    t: 'Recurring Revenue Model',
    d: 'Vehicles will continue to visit the ATS center for periodic retesting creating ongoing revenue, with additional opportunities for sources of revenue.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    t: 'State Transport Dept Partnerships',
    d: 'Streamlining of these processes provide a relatively easy avenue in converting a complicated system into a scalable business opportunity.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function WhyInvest() {
  const [expanded, setExpanded] = useState({})

  return (
    <section id="why-invest-section" className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto space-y-20">
        <div className="max-w-2xl space-y-6 text-center mx-auto">
          <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Opportunities
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Why Invest In ATS?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {CARDS.map((card, i) => (
            <div key={i} className="group p-8 rounded-[30px] bg-white border border-gray-100 shadow-xl shadow-black/5 hover:shadow-brand-primary/10 hover:border-brand-primary transition-all flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <div className="text-2xl font-black text-black/5">0{i + 1}</div>
              </div>
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-lg font-black leading-tight text-black group-hover:text-brand-primary transition-colors">{card.t}</h3>
                <div className="relative flex-1">
                  <p className={`text-sm text-black/60 leading-relaxed transition-all duration-500 ${!expanded[i] ? 'line-clamp-4' : ''}`}>
                    {card.d}
                  </p>
                </div>
                <button
                  onClick={() => setExpanded(prev => ({ ...prev, [i]: !prev[i] }))}
                  className="text-xs font-black text-brand-primary uppercase tracking-widest mt-4 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                >
                  {expanded[i] ? 'Read Less' : 'Read More'}
                  <svg className={`w-3 h-3 transition-transform ${expanded[i] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-semibold text-brand-primary italic">
          Step into ATS success—your smart move for steady, government-fueled growth starts here.
        </p>
      </div>
    </section>
  )
}

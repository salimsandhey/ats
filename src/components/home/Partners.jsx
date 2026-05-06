import { PARTNERS } from '../../data/constants'

export default function Partners() {
  return (
    <section className="py-20 border-y border-gray-50 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-12 flex items-center gap-4">
        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] whitespace-nowrap">Partners</span>
        <div className="h-px bg-gray-100 flex-1"></div>
      </div>
      <div className="flex gap-20 animate-[scroll_6s_linear_infinite] md:animate-[scroll_10s_linear_infinite] whitespace-nowrap items-center">
        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div key={i} className="flex items-center group cursor-pointer transition-all duration-500 shrink-0">
            <div className="h-16 w-auto flex items-center justify-center p-4 rounded-2xl bg-gray-50/50 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-black/5 transition-all">
              <img
                src={`/partners/${partner.img}`}
                alt={partner.name}
                className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

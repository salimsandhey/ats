import { useRef } from 'react'
import { SLIDER_IMAGES } from '../../data/constants'

export default function Slider({ setSelectedImage }) {
  const sliderRef = useRef(null)

  return (
    <section className="py-12 bg-white relative group/setup">
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 opacity-0 group-hover/setup:opacity-100 transition-opacity">
        <button
          onClick={() => sliderRef.current?.scrollBy({ left: -474, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 opacity-0 group-hover/setup:opacity-100 transition-opacity">
        <button
          onClick={() => sliderRef.current?.scrollBy({ left: 474, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div ref={sliderRef} className="overflow-x-auto hide-scrollbar scroll-smooth">
        <div className="flex gap-6 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] py-4 px-6">
          {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((img, i) => (
            <div
              key={i}
              className="w-[450px] h-[300px] rounded-[30px] overflow-hidden shadow-2xl shrink-0 group cursor-zoom-in"
              onClick={() => setSelectedImage(`/assets/images/slider/${img}`)}
            >
              <img
                src={`/assets/images/slider/${img}`}
                alt={`Slider ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

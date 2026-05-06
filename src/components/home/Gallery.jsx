import { useRef } from 'react'
import { GALLERY_IMAGES } from '../../data/constants'

export default function Gallery({ setSelectedImage }) {
  const galleryRef = useRef(null)

  return (
    <section className="py-24 bg-brand-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-brand-primary/5 hidden lg:block" />
      <div className="px-6 max-w-[1200px] mx-auto mb-16">
        <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Facility Showcase
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">ATS Facility Gallery.</h2>
      </div>

      <div className="relative group/gallery max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-30 transition-all duration-300">
          <button
            onClick={() => galleryRef.current?.scrollBy({ left: -424, behavior: 'smooth' })}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90 border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-30 transition-all duration-300">
          <button
            onClick={() => galleryRef.current?.scrollBy({ left: 424, behavior: 'smooth' })}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90 border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div ref={galleryRef} className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth">
          <div className="flex gap-6 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(`/assets/images/gallery/image ${img}.jpg`)}
                className="w-[400px] h-[300px] rounded-[30px] bg-gray-50 overflow-hidden shrink-0 shadow-lg cursor-zoom-in group/item"
              >
                <img
                  src={`/assets/images/gallery/image ${img}.jpg`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

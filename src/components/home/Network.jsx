import { useState, useEffect, useRef } from 'react'
import { centers } from '../../centers'

export default function Network() {
  const normalizeState = (s) => {
    if (!s) return ''
    const state = s.trim()
    const mapping = {
      'Himchal Pradesh': 'Himachal Pradesh',
      'Jharkand': 'Jharkhand',
      'Jammu kashmir': 'Jammu Kashmir',
      'New Delhi': 'Delhi',
      'Ladak': 'Ladakh',
      'Odisha': 'Orissa'
    }
    return mapping[state] || state
  }

  const allStates = ['All States', ...new Set(centers.map(c => normalizeState(c.state)))].sort()
  const [activeState, setActiveState] = useState('All States')

  const filteredCenters = activeState === 'All States'
    ? centers
    : centers.filter(c => normalizeState(c.state) === activeState)

  const sliderRef = useRef(null)
  const statesRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const isDraggingStates = useRef(false)
  const startXStates = useRef(0)
  const scrollLeftStates = useRef(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    let animationFrameId

    const step = () => {
      if (!isDragging.current) {
        slider.scrollLeft += 1
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
          slider.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [activeState])

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
  }
  const handleMouseLeave = () => { isDragging.current = false }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    sliderRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 2
  }

  const handleStatesMouseDown = (e) => {
    isDraggingStates.current = true
    startXStates.current = e.pageX - statesRef.current.offsetLeft
    scrollLeftStates.current = statesRef.current.scrollLeft
  }
  const handleStatesMouseLeave = () => { isDraggingStates.current = false }
  const handleStatesMouseUp = () => { isDraggingStates.current = false }
  const handleStatesMouseMove = (e) => {
    if (!isDraggingStates.current) return
    e.preventDefault()
    const x = e.pageX - statesRef.current.offsetLeft
    statesRef.current.scrollLeft = scrollLeftStates.current - (x - startXStates.current) * 2
  }

  return (
    <section id="projects-section" className="py-24 px-6 bg-brand-accent border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            National Footprint
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">ATS Network.</h2>
          <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto">Explore government-approved vehicle fitness certification centers across India.</p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest whitespace-nowrap">Filter by State</span>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>
          <div
            ref={statesRef}
            onMouseDown={handleStatesMouseDown}
            onMouseLeave={handleStatesMouseLeave}
            onMouseUp={handleStatesMouseUp}
            onMouseMove={handleStatesMouseMove}
            className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 cursor-grab active:cursor-grabbing select-none"
          >
            {allStates.map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={`px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all whitespace-nowrap border cursor-pointer ${activeState === state ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' : 'bg-white text-black/40 border-gray-100 hover:border-brand-primary hover:text-brand-primary'}`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar cursor-grab active:cursor-grabbing transition-all duration-500 select-none"
          >
            {filteredCenters.map((center, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-[30px] border border-gray-50 shadow-xl shadow-black/5 hover:border-brand-primary transition-all flex-shrink-0">
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-[0.15em] ${center.status === 'Implemented' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    {center.status === 'Implemented' ? 'Live Center' : 'Coming Soon'}
                  </div>
                  <div className="text-[10px] font-bold text-black/20 uppercase tracking-widest">#{i + 1}</div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-brand-primary transition-colors">{center.name}</h3>
                <div className="pt-6 border-t border-gray-50 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-black/20 uppercase tracking-widest">Location</div>
                      <div className="text-sm font-bold text-black">{center.district ? `${center.district}, ` : ''}{normalizeState(center.state)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-brand-accent to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-brand-accent to-transparent pointer-events-none"></div>
        </div>

        <div className="pt-10 text-center">
          <a
            href="https://vahan.parivahan.gov.in/AFMS/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary text-white px-12 py-6 font-bold rounded-full hover:bg-black transition-all shadow-lg shadow-brand-primary/20 text-lg"
          >
            Book Your Test Slot
          </a>
        </div>
      </div>
    </section>
  )
}

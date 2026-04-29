import { useState, useEffect, useRef } from 'react'
import { centers } from './centers'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeState, setActiveState] = useState('All States')

  // Group centers by state for the filter list
  const allStates = ['All States', ...new Set(centers.map(c => c.state.trim()))].sort()

  const filteredCenters = activeState === 'All States'
    ? centers
    : centers.filter(c => c.state.trim() === activeState)

  const sliderRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // AUTO SCROLL
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationFrameId
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
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

  // DRAG TO SCROLL
  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX.current) * 2 // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft.current - walk
  }

  // STATES DRAG LOGIC
  const statesRef = useRef(null)
  const isDraggingStates = useRef(false)
  const startXStates = useRef(0)
  const scrollLeftStates = useRef(0)

  const handleStatesMouseDown = (e) => {
    isDraggingStates.current = true
    startXStates.current = e.pageX - statesRef.current.offsetLeft
    scrollLeftStates.current = statesRef.current.scrollLeft
  }

  const handleStatesMouseLeave = () => {
    isDraggingStates.current = false
  }

  const handleStatesMouseUp = () => {
    isDraggingStates.current = false
  }

  const handleStatesMouseMove = (e) => {
    if (!isDraggingStates.current) return
    e.preventDefault()
    const x = e.pageX - statesRef.current.offsetLeft
    const walk = (x - startXStates.current) * 2
    statesRef.current.scrollLeft = scrollLeftStates.current - walk
  }

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-primary/10 overflow-x-hidden">

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 py-4 bg-white/95 backdrop-blur-sm shadow-xl shadow-black/5">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer shrink-0"
          >
            <img src="/assets/logo/ATS-logo.png" alt="ATS Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'About ATS', id: 'about-section' },
              { label: 'Why Invest', id: 'why-invest-section' },
              { label: 'Compliance', id: 'compliance-section' },
              { label: 'Setup Support', id: 'setup-section' },
              { label: 'Features', id: 'features-section' },
              { label: 'Projects', id: 'projects-section' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[11px] font-bold uppercase tracking-widest text-black/50 hover:text-brand-primary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="bg-brand-primary text-white h-10 px-6 font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-black transition-all cursor-pointer shrink-0"
          >
            Get Started
          </button>
        </div>
      </nav>

      <main>

        {/* SECTION 1 — HERO */}
        <section className="min-h-screen flex items-center pt-20 px-6">
          <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-brand-primary">
                  Build a Government-Approved<br />ATS Centre
                  <span className="block text-2xl md:text-3xl font-semibold text-black/50 mt-2">A High-Growth Infrastructure Opportunity</span>
                </h1>
                <p className="text-xl font-medium max-w-lg leading-relaxed text-black/70">
                  Step into a policy-driven, high-demand sector with limited competition and recurring revenue potential. Set up a fully compliant Automated Testing Station and position your business at the forefront of India's vehicle fitness and compliance ecosystem.
                </p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => scrollToSection('contact-section')} className="bg-brand-primary text-white h-16 px-10 font-bold text-lg rounded-full hover:bg-black transition-all shadow-lg shadow-brand-primary/20">
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl shadow-black/10">
                <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1000" alt="Precision Engineering" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR — PARTNER LOGOS */}
        <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 mb-8 flex items-center gap-4">
            <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] whitespace-nowrap">Regulatory & Tech Partners</span>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>
          <div className="flex gap-20 animate-[scroll_40s_linear_infinite] whitespace-nowrap items-center">
            {[
              { name: 'AVL', img: 'avl.png' },
              { name: 'Bosch', img: 'bosch.png' },
              { name: 'ELGI', img: 'elgi.png' },
              { name: 'Karcher', img: 'karcher.png' },
              { name: 'Microsoft', img: 'microsoft.png' },
              { name: 'Dell', img: 'dell.png' },
              { name: 'Lenovo', img: 'lenovo.png' }
            ].map((partner, i) => (
              <div key={i} className="flex items-center group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                <div className="h-16 w-auto flex items-center justify-center p-4 rounded-2xl bg-gray-50/50 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-black/5 transition-all">
                  <img
                    src={`/partners/${partner.img}`}
                    alt={partner.name}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {[
              { name: 'AVL', img: 'avl.png' },
              { name: 'Bosch', img: 'bosch.png' },
              { name: 'ELGI', img: 'elgi.png' },
              { name: 'Karcher', img: 'karcher.png' },
              { name: 'Microsoft', img: 'microsoft.png' },
              { name: 'Dell', img: 'dell.png' },
              { name: 'Lenovo', img: 'lenovo.png' }
            ].map((partner, i) => (
              <div key={`dup-${i}`} className="flex items-center group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                <div className="h-16 w-auto flex items-center justify-center p-4 rounded-2xl bg-gray-50/50 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-black/5 transition-all">
                  <img
                    src={`/partners/${partner.img}`}
                    alt={partner.name}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 — ABOUT ATS */}
        <section id="about-section" className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="aspect-video rounded-[40px] overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Analysis" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">About ATS</div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-primary">Automated Testing System (ATS)</h2>
              <p className="text-lg leading-relaxed text-black/70">
                India's ATS is revolutionising vehicle fitness checks — replacing manual inspections with automated technology that certifies vehicles in under 10 minutes with near-100% accuracy, fully integrated with the VAHAN portal.
              </p>
              <p className="text-lg leading-relaxed text-black/70">
                With rising road accidents, stricter scrappage and emissions norms, ATS is now a core part of every state's transport infrastructure. Our end-to-end support — from ARAI/ICAT-approved installation to operations — is custom-built for Indian conditions. With very few licences available, entering early gives you a lasting competitive edge.
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-black font-tech tracking-tighter">15+ Protocol</div>
                  <div className="text-[10px] font-bold text-black/40 uppercase mt-1 tracking-widest">MoRTH Regulated</div>
                </div>
                <div className="w-px h-12 bg-black/5" />
                <img src="/assets/logo/ATS-logo.png" alt="ATS Logo" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY INVEST IN ATS */}
        <section id="why-invest-section" className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto space-y-20">
            <div className="max-w-2xl space-y-6 text-center mx-auto">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">Opportunities</div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Why Invest In ATS?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  t: "Government-Driven Mandatory Ecosystem",
                  d: "The government mandated that all vehicles will require fitness testing performed by an approved provider, ensuring that this will create guaranteed demand and provide your business with ongoing stability."
                },
                {
                  t: "High Demand-Scrappage Policy & Fitness Norms",
                  d: "The number of vehicles needing a fitness certification will only grow as the average age of vehicles increases and as urban areas increase their emissions and air quality standards."
                },
                {
                  t: "Limited Licenses-First Mover Advantage",
                  d: "The total number of approved licenses by state is very limited and it is very difficult to obtain an approval to open an ATS center. Entering this sector early will allow you to position your business well relative to competitors."
                },
                {
                  t: "Recurring Revenue Model",
                  d: "This revenue model will not be limited to one-time projects. Vehicles will continue to visit the ATS center for periodic retesting creating ongoing revenue, with additional opportunities for sources of revenue."
                },
                {
                  t: "State Transport Department Partnerships",
                  d: "You will not be all alone in navigating the approval process with the various departments that approve ATS centers. Streamlining of these processes provide a relatively easy avenue in converting a complicated system into a scalable business opportunity."
                }
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-[30px] border border-gray-50 bg-white shadow-xl shadow-black/5 hover:shadow-brand-primary/10 hover:border-brand-primary transition-all group">
                  <div className="text-2xl font-bold text-brand-primary mb-6">0{i + 1}</div>
                  <h3 className="text-lg font-bold mb-4 text-black group-hover:text-brand-primary transition-colors">{card.t}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-brand-primary italic">
              Step into ATS success—your smart move for steady, government-fueled growth starts here.
            </p>
          </div>
        </section>

        {/* SECTION 4 — REGULATORY FRAMEWORK */}
        <section id="compliance-section" className="py-24 px-6 bg-brand-accent border-y border-gray-100 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto space-y-16">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">Compliance</div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-primary">Regulatory Framework We Operate Under:</h2>
              <p className="text-lg text-black/70">Simplified documentation for seamless regulatory approvals across all regions.</p>
              <p className="text-lg font-semibold text-brand-primary italic">Fully compliant and approval-ready—your ATS centre launches without delays.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  policy: "GSR 195 (E)",
                  desc: "The current regulation, GSR 195 (E), requires you to have approved equipment with QR codes for tracking and full digital reporting. It also helps to support the scrappage policy and limits the amount of licences available.",
                  pdf: "/gsr-pdfs/GSR 195(E) ATS Amendments.pdf"
                },
                {
                  policy: "GSR 652 (E)",
                  desc: "The foundation of ATS in India is the GSR 652 (E) rule. It establishes the need for automated testing around several areas (brakes, lights, emissions etc.) with integration into VAHAN.",
                  pdf: "/gsr-pdfs/GSR 652 (E) Rules for recognition, regulation and control of Automated Testing Stations.pdf"
                },
                {
                  policy: "GSR 797 (E)",
                  desc: "The GSR 797 (E) regulation has turned ATS into a more thorough and efficient testing solution. With better calibration and real-time data, along with the ability to test multiple lanes.",
                  pdf: "/gsr-pdfs/GSR 797(E) ATS Amendments.pdf"
                },
                {
                  policy: "GSR 272 (E)",
                  desc: "Mandatory fitness of transport vehicles through Automated Testing Stations. This regulation streamlines the mandatory inspection process for commercial vehicles.",
                  pdf: "/gsr-pdfs/GSR 272(E) Mandatory fitness of transport vehicles ATS.pdf"
                }
              ].map((item, i) => (
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

        {/* SECTION 5 — END-TO-END SETUP SUPPORT */}
        <section id="setup-section" className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto text-center space-y-20">
            <div className="space-y-6">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">Handholding</div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Our End-to-End ATS Setup Support</h2>
              <p className="text-xl text-black/60 font-medium">Complete turnkey solution — from concept to commissioning</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-4">
              {[
                {
                  step: "01",
                  title: "Infrastructure Development",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  points: ["Site planning & layout design according to Government Norms", "Civil work guidance and execution support along with lane design"]
                },
                {
                  step: "02",
                  title: "Advanced Equipment Installation",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  points: ["Supply & installation of automated testing machinery", "Calibration and system integration along with software & system integration"]
                },
                {
                  step: "03",
                  title: "Regulatory Approvals",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  points: ["Documentation & liaison support along with compliance audits and validation", "Assistance in obtaining ATS license approvals"]
                },
                {
                  step: "04",
                  title: "Training & Capacity Building",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  points: ["Operator & technician training along with certification assistance", "Continuous skill upgrade programs"]
                },
                {
                  step: "05",
                  title: "Operations & Maintenance",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  points: ["AMC & preventive maintenance along with real-time technical support", "24–28 hours service turnaround (Pan India)"]
                },
                {
                  step: "06",
                  title: "Business & Operational Support",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  points: ["Revenue model guidance SOPs for smooth operations", "Marketing & branding support"]
                }
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[40px] bg-white border border-gray-50 shadow-xl shadow-black/5 hover:bg-brand-primary group transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-brand-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-brand-primary text-xs font-bold group-hover:text-white/40">STEP {item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-sm text-black/60 group-hover:text-white/80 leading-relaxed transition-colors">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-white shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — KEY FEATURES OF ATS MACHINERY */}
        <section id="features-section" className="py-24 px-6 bg-brand-accent border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto space-y-20">
            <div className="flex justify-between items-end border-b border-gray-100 pb-10">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Key Features of ATS Machinery.</h2>
              <div className="text-black/40 font-bold text-[10px] uppercase tracking-widest pb-3">Precision v2026</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Made in India Excellence",
                  desc: "This excellent state of the art facility is designed thoughtfully for Indian road and vehicle conditions."
                },
                {
                  title: "Smart OEE Monitoring System",
                  desc: "Unmatched real-time performance tracking along with preventive SMS alerts and maintenance planning."
                },
                {
                  title: "Advanced CAN-Based Communication",
                  desc: "Simple and seamless device-to-server communication without any complex wiring."
                },
                {
                  title: "QR Code Enabled Equipment",
                  desc: "Instant access to manuals, maintenance logs, and service history."
                },
                {
                  title: "Proven OEM Integration",
                  desc: "Installed across leading automobile manufacturing plants."
                },
                {
                  title: "Energy Efficient Technology (up to 70% savings)",
                  desc: "ABB & Siemens regenerative motors deliver up to 70% power saving."
                },
                {
                  title: "Durable Engineering (35,000+ hours lifespan)",
                  desc: "Hot-dip galvanized rollers, ceramic bearings & lifespan of over 45,000 hours."
                },
                {
                  title: "Fully Government Compliant (GSR 195 E)",
                  desc: "Among the few compliant ATS providers in India, approved under GSR 195 (E)."
                }
              ].map((feat, i) => (
                <div key={i} className="p-8 rounded-3xl border border-gray-50 bg-white shadow-lg shadow-black/5 flex flex-col justify-between hover:shadow-brand-primary/10 transition-all group">
                  <div className="text-brand-primary font-bold text-xs mb-4">TECH-{i + 100}</div>
                  <h3 className="text-base font-bold text-black group-hover:text-brand-primary transition-colors mb-3">{feat.title}</h3>
                  <p className="text-sm text-black/55 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — GLOBAL TECHNOLOGY. LOCAL EXECUTION. */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">Partnerships</div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Global Technology. Local Execution.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-16 rounded-[50px] bg-white border border-gray-100 shadow-2xl shadow-black/5 space-y-8">
                <h3 className="text-3xl font-bold text-brand-primary">Global Technology Advantage</h3>
                <div className="space-y-6">
                  {[
                    "Complete access to advanced ATS technologies that are globally accepted and are highly used in automotive markets.",
                    "ATS is thoughtfully designed keeping International Testing Standards into consideration and is further adapted for Indian Conditions.",
                    "It is integrated with precision engineering, automation and smart diagnostics systems."
                  ].map((pt, i) => (
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
                  {[
                    { heading: "Higher Accuracy & Reliability", sub: "International-grade testing precision" },
                    { heading: "Future-Proof Investment", sub: "Ready for upcoming regulatory upgrades" },
                    { heading: "Faster Approvals", sub: "Designed as per compliance-ready frameworks" },
                    { heading: "Operational Efficiency", sub: "Reduced downtime with smart automation" },
                    { heading: "Higher ROI", sub: "Better throughput and optimized performance" }
                  ].map((item, i) => (
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

        {/* GALLERY SECTION */}
        <section className="py-24 bg-brand-accent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full border-l border-brand-primary/5 hidden lg:block" />
          <div className="px-6 max-w-[1200px] mx-auto mb-16">
            <div className="text-brand-primary font-bold uppercase text-xs tracking-widest mb-4">Facility Showcase</div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">ATS Facility Gallery.</h2>
          </div>
          <div className="flex gap-6 animate-[scroll_40s_linear_infinite]">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div key={img} className="w-[400px] h-[300px] rounded-[30px] bg-gray-50 overflow-hidden shrink-0 shadow-lg">
                <img src={`https://images.unsplash.com/photo-${img === 1 ? '1541888941259-77270e30349c' : img === 2 ? '1516937941344-00b4e0337589' : '1581091226825-a6a2a5aee158'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div key={`dup-${img}`} className="w-[400px] h-[300px] rounded-[30px] bg-gray-50 overflow-hidden shrink-0 shadow-lg">
                <img src={`https://images.unsplash.com/photo-${img === 1 ? '1541888941259-77270e30349c' : img === 2 ? '1516937941344-00b4e0337589' : '1581091226825-a6a2a5aee158'}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9 — OUR ATS NETWORK */}
        <section id="projects-section" className="py-24 px-6 bg-brand-accent border-t border-gray-100 overflow-hidden">
          <div className="max-w-[1200px] mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="text-brand-primary font-bold uppercase text-xs tracking-widest">National Footprint</div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">ATS Network.</h2>
              <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto">Explore our government-approved vehicle fitness certification centers across India.</p>
            </div>

            {/* STATE FILTER - HORIZONTAL SCROLL */}
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

            {/* SLIDER WRAPPER */}
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
                          <div className="text-sm font-bold text-black">{center.district ? `${center.district}, ` : ''}{center.state}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* GRADIENT OVERLAYS */}
              <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-brand-accent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-brand-accent to-transparent pointer-events-none"></div>
            </div>

            <div className="pt-10 text-center">
              <button
                onClick={() => scrollToSection('contact-section')}
                className="bg-brand-primary text-white px-12 py-6 font-bold rounded-full hover:bg-black transition-all shadow-lg shadow-brand-primary/20 text-lg"
              >
                Setup Your Own ATS Center
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-24 px-6 bg-white border-t border-gray-50 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <h2 className="text-6xl md:text-8xl font-extrabold leading-none text-brand-primary">Let's <br /> <span className="text-black/5">Build.</span></h2>
              <div className="space-y-6">
                <p className="text-xl font-bold uppercase tracking-tight text-black">iAUTO Ventures Private Limited</p>
                <p className="text-sm font-medium text-black/50 leading-relaxed max-w-sm">
                  G-04, Ground Floor, D-141 Industrial Area,<br />Phase 7, SAS Nagar - 160055
                </p>
                <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-brand-primary">
                  <a href="mailto:contact@e-vahan.com" className="hover:text-black transition-colors underline decoration-2 underline-offset-8">Email Us</a>
                  <a href="tel:+910000000000" className="hover:text-black transition-colors underline decoration-2 underline-offset-8">Call Now</a>
                </div>
              </div>
            </div>
            <div className="bg-brand-accent p-12 rounded-[50px] text-brand-primary shadow-2xl shadow-black/5 border border-brand-primary/5 relative">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-black/40 tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white border border-white rounded-2xl p-4 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-black/40 tracking-widest">Phone</label>
                    <input type="tel" className="w-full bg-white border border-white rounded-2xl p-4 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-black/40 tracking-widest">Message</label>
                  <textarea rows="3" className="w-full bg-white border border-gray-100 rounded-2xl p-4 font-bold outline-none text-black resize-none focus:border-brand-primary transition-all" placeholder="Project Details..."></textarea>
                </div>
                <button className="w-full h-16 bg-brand-primary text-white font-bold rounded-full hover:bg-black transition-all cursor-pointer shadow-lg shadow-brand-primary/20">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-20 bg-white border-t border-gray-50 text-center space-y-8">
          <div className="flex justify-center">
            <img
              src="/assets/logo/ATS-logo.png"
              alt="ATS Logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
          <div className="text-[10px] font-bold uppercase text-black/20 tracking-[0.5em]">ATS © 2026 — Advanced Infrastructure Authority</div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }} />

    </div>
  )
}

export default App

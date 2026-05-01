import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { centers } from './centers'
import { PrivacyPolicy, TermsConditions, ShippingRefundPolicy } from './Policies'

function Home({ scrolled, scrollToSection, setIsLoaded, setSelectedImage, selectedImage, expandedInvest, setExpandedInvest, activeState, setActiveState, allStates, filteredCenters, sliderRef, galleryRef, setupSliderRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove, statesRef, handleStatesMouseDown, handleStatesMouseLeave, handleStatesMouseUp, handleStatesMouseMove }) {
  return (
    <main>

        {/* SECTION 1 — HERO (REDESIGNED) */}
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
          {/* BACKGROUND VIDEO WITH OVERLAY */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
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
                  onClick={() => scrollToSection('contact-section')}
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

          {/* SCROLL INDICATOR */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </section>

        {/* SECTION 2 — ABOUT ATS */}
        <section id="about-section" className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="rounded-[40px] overflow-hidden bg-gray-100 shadow-xl shadow-black/5">
              <img src="/assets/images/about-ver.jpeg" alt="About Ats" className="w-full h-auto" />
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About ATS
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-primary">Automated Testing System (ATS)</h2>
              <p className="text-lg leading-relaxed text-black/70 font-medium">
                India's ATS is revolutionising vehicle fitness checks — replacing manual inspections with automated technology that certifies vehicles in under 10 minutes with near-100% accuracy, fully integrated with the VAHAN portal.
              </p>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-black/60">
                  With rising road accidents, stricter scrappage and emissions norms, ATS is now a core part of every state's transport infrastructure. Our end-to-end support — from ARAI/ICAT-approved installation to operations — is custom-built for Indian conditions. With very few licences available, entering early gives you a lasting competitive edge.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 flex items-center gap-8">
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
              <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Opportunities
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">Why Invest In ATS?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  t: "Government-Driven Mandatory Ecosystem",
                  d: "The government mandated that all vehicles will require fitness testing performed by an approved provider, ensuring that this will create guaranteed demand.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  t: "High Demand-Scrappage Policy & Fitness Norms",
                  d: "The number of vehicles needing a fitness certification will only grow as the average age of vehicles increases and as urban areas increase emissions standards.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  t: "Limited Licenses-First Mover Advantage",
                  d: "The total number of approved licenses by state is very limited. Entering this sector early will allow you to position your business well relative to competitors.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12V5a2 2 0 012-2h2a2 2 0 012 2v7m-6 0a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m-6 0h6" />
                    </svg>
                  )
                },
                {
                  t: "Recurring Revenue Model",
                  d: "Vehicles will continue to visit the ATS center for periodic retesting creating ongoing revenue, with additional opportunities for sources of revenue.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  t: "State Transport Dept Partnerships",
                  d: "Streamlining of these processes provide a relatively easy avenue in converting a complicated system into a scalable business opportunity.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((card, i) => (
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
                      <p className={`text-sm text-black/60 leading-relaxed transition-all duration-500 ${!expandedInvest[i] ? 'line-clamp-4' : ''}`}>
                        {card.d}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedInvest(prev => ({ ...prev, [i]: !prev[i] }))}
                      className="text-xs font-black text-brand-primary uppercase tracking-widest mt-4 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                    >
                      {expandedInvest[i] ? 'Read Less' : 'Read More'}
                      <svg className={`w-3 h-3 transition-transform ${expandedInvest[i] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* SECTION 4 — REGULATORY FRAMEWORK */}
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

        {/* IMAGE SLIDER SECTION */}
        <section className="py-12 bg-white relative group/setup">
          {/* NAVIGATION BUTTONS */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 opacity-0 group-hover/setup:opacity-100 transition-opacity">
            <button
              onClick={() => {
                if (setupSliderRef.current) setupSliderRef.current.scrollBy({ left: -474, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 opacity-0 group-hover/setup:opacity-100 transition-opacity">
            <button
              onClick={() => {
                if (setupSliderRef.current) setupSliderRef.current.scrollBy({ left: 474, behavior: 'smooth' });
              }}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div
            ref={setupSliderRef}
            className="overflow-x-auto hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] py-4 px-6">
              {[
                "1.jpg", "ATS 2.jpg", "ATS 3.jpg", "ATS 4.jpg", "ATS 5.jpg", "ATS 6.jpg", "ATS 7.jpg", "ATS 8.jpg"
              ].map((img, i) => (
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
              {/* Duplicate for infinite scroll */}
              {[
                "1.jpg", "ATS 2.jpg", "ATS 3.jpg", "ATS 4.jpg", "ATS 5.jpg", "ATS 6.jpg", "ATS 7.jpg", "ATS 8.jpg"
              ].map((img, i) => (
                <div
                  key={`dup-${i}`}
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

        {/* SECTION 5 — END-TO-END SETUP SUPPORT */}
        <section id="setup-section" className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto text-center space-y-20">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Handholding
              </div>
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
            <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Facility Showcase
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-primary">ATS Facility Gallery.</h2>
          </div>
          <div className="relative group/gallery max-w-[1400px] mx-auto px-4 md:px-10">
            {/* NAVIGATION BUTTONS */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-30 transition-all duration-300">
              <button
                onClick={() => {
                  if (galleryRef.current) galleryRef.current.scrollBy({ left: -424, behavior: 'smooth' });
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90 border border-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-30 transition-all duration-300">
              <button
                onClick={() => {
                  if (galleryRef.current) galleryRef.current.scrollBy({ left: 424, behavior: 'smooth' });
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all active:scale-90 border border-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
            >
              <div className="flex gap-6 animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] py-4">
                {[3, 4, 5, 6, 7, 9].map((img) => (
                  <div
                    key={img}
                    onClick={() => setSelectedImage(`/assets/images/gallery/image ${img}.jpg`)}
                    className="w-[400px] h-[300px] rounded-[30px] bg-gray-50 overflow-hidden shrink-0 shadow-lg cursor-zoom-in group/item"
                  >
                    <img src={`/assets/images/gallery/image ${img}.jpg`} className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110" />
                  </div>
                ))}
                {[3, 4, 5, 6, 7, 9].map((img) => (
                  <div
                    key={`dup-${img}`}
                    onClick={() => setSelectedImage(`/assets/images/gallery/image ${img}.jpg`)}
                    className="w-[400px] h-[300px] rounded-[30px] bg-gray-50 overflow-hidden shrink-0 shadow-lg cursor-zoom-in group/item"
                  >
                    <img src={`/assets/images/gallery/image ${img}.jpg`} className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — OUR ATS NETWORK */}
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
              <a
                href="https://vahan.parivahan.gov.in/AFMS/#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-primary text-white px-12 py-6 font-bold rounded-full hover:bg-black transition-all shadow-lg shadow-brand-primary/20 text-lg"
              >
                Book Your Fitness Test
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (REDESIGNED) */}
        <section id="contact-section" className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              {/* LEFT SIDE: INFO */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </div>
                  <h2 className="text-5xl font-black text-black">Get In Touch</h2>
                  <div className="space-y-1">
                    <p className="text-lg font-black text-brand-primary">Ats</p>
                    <p className="text-lg text-black/60 font-medium leading-relaxed max-w-sm">
                      Ready to transform your mobility infrastructure? Contact our team for a consultation.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Info Items */}
                  {[
                    {
                      label: "Corporate Office",
                      sub: "G-04, Ground Floor, D-141, Industrial Area, Phase 7, Sector 73, S.A.S. Nagar, Mohali-160055 (Punjab) INDIA",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )
                    },
                    {
                      label: "+91 98559 55959, +91 172 462 5959",
                      sub: "Contact Numbers",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )
                    },
                    {
                      label: "contact@e-vahan.com",
                      sub: "Email Address",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary shrink-0">
                        {item.icon}
                      </div>
                      <div className="max-w-[320px]">
                        <div className="font-black text-brand-primary">{item.label}</div>
                        <div className="text-[11px] font-bold text-black/40 uppercase tracking-widest mt-1 leading-relaxed">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: FORM */}
              <div className="lg:col-span-7">
                <div className="bg-gray-50/50 p-10 md:p-16 rounded-[40px] border border-gray-100">
                  <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Full Name</label>
                        <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Phone Number</label>
                        <input type="tel" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Email Address</label>
                        <input type="email" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="name@organization.com" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Organization / Agency</label>
                        <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">City / Region</label>
                      <input type="text" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black focus:border-brand-primary transition-all" placeholder="e.g. New Delhi, India" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-brand-primary uppercase tracking-widest">Your Message / Requirement</label>
                      <textarea rows="4" className="w-full bg-white border border-gray-100 rounded-xl p-5 font-bold outline-none text-black resize-none focus:border-brand-primary transition-all" placeholder="Tell us about your project requirements..."></textarea>
                    </div>
                    <button className="bg-brand-primary text-white px-12 py-5 font-black rounded-xl hover:bg-black transition-all cursor-pointer shadow-xl shadow-brand-primary/20 active:scale-95">
                      Send Enquiry
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST BAR — PARTNER LOGOS */}
        <section className="py-20 border-y border-gray-50 bg-white overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 mb-12 flex items-center gap-4">
            <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] whitespace-nowrap">Partners</span>
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
              <div key={`dup-${i}`} className="flex items-center group cursor-pointer transition-all duration-500 shrink-0">
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



        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-10 right-10 text-white hover:text-brand-primary transition-colors cursor-pointer group"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              className="relative max-w-5xl max-h-full overflow-hidden rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Gallery Full View" className="w-full h-auto object-contain" />
            </div>
          </div>
        )}
    </main>
  )
}

function App() {
  const location = useLocation()
  const isPolicyPage = location.pathname !== '/'

  const [isLoaded, setIsLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeState, setActiveState] = useState('All States')
  const [selectedImage, setSelectedImage] = useState(null)
  const [expandedInvest, setExpandedInvest] = useState({})

  // Group centers by state for the filter list
  const allStates = ['All States', ...new Set(centers.map(c => c.state.trim()))].sort()

  const filteredCenters = activeState === 'All States'
    ? centers
    : centers.filter(c => c.state.trim() === activeState)

  const sliderRef = useRef(null)
  const galleryRef = useRef(null)
  const setupSliderRef = useRef(null)
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

  const homeProps = {
    scrolled, scrollToSection, setIsLoaded, setSelectedImage, selectedImage, 
    expandedInvest, setExpandedInvest, activeState, setActiveState, allStates, 
    filteredCenters, sliderRef, galleryRef, setupSliderRef, handleMouseDown, 
    handleMouseLeave, handleMouseUp, handleMouseMove, statesRef, handleStatesMouseDown, 
    handleStatesMouseLeave, handleStatesMouseUp, handleStatesMouseMove
  }

  return (
      <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-primary/10 overflow-x-hidden">
        {/* SHARED NAV */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isPolicyPage
          ? 'py-4 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-black/5'
          : 'py-8 bg-transparent'
          }`}>
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center cursor-pointer shrink-0 group"
            >
              <div className="relative">
                <img src="/assets/logo/ATS-logo.png" alt="ATS Logo" className={`h-10 w-auto transition-all duration-500 group-hover:scale-105 ${(scrolled || isPolicyPage) ? '' : 'brightness-0 invert'}`} />
                <div className="absolute -inset-2 bg-brand-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'About', id: 'about-section' },
                { label: 'Why Invest', id: 'why-invest-section' },
                { label: 'Compliance', id: 'compliance-section' },
                { label: 'Setup', id: 'setup-section' },
                { label: 'Features', id: 'features-section' },
                { label: 'Projects', id: 'projects-section' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = `/#${link.id}`;
                    } else {
                      scrollToSection(link.id);
                    }
                  }}
                  className={`relative text-[11px] font-black uppercase tracking-[0.15em] transition-all cursor-pointer group py-2 ${scrolled || isPolicyPage
                    ? 'text-brand-primary/60 hover:text-brand-primary'
                    : 'text-white/80 hover:text-white drop-shadow-sm'
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled || isPolicyPage ? 'bg-brand-primary' : 'bg-white'}`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact-section';
                  } else {
                    scrollToSection('contact-section');
                  }
                }}
                className={`relative overflow-hidden h-11 px-8 font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all active:scale-95 cursor-pointer group ${scrolled || isPolicyPage
                  ? 'bg-brand-primary text-white hover:shadow-[0_10px_20px_rgba(15,60,100,0.2)]'
                  : 'bg-white text-brand-primary hover:bg-brand-primary hover:text-white drop-shadow-lg'
                  }`}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-brand-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home {...homeProps} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping-refund" element={<ShippingRefundPolicy />} />
        </Routes>

        <footer className="py-20 bg-white border-t border-gray-50 text-center space-y-12">
          <div className="flex justify-center">
            <img
              src="/assets/logo/ATS-logo.png"
              alt="ATS Logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="h-12 w-auto opacity-100 transition-all hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Terms & Conditions', path: '/terms-conditions' },
              { label: 'Shipping & Refund', path: '/shipping-refund' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-brand-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-[10px] font-bold uppercase text-black/20 tracking-[0.5em] text-center">
            © 2026 Ats Automation. All Rights Reserved.
          </div>
        </footer>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
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

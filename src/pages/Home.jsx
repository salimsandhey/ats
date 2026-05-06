import { useState } from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import WhyInvest from '../components/home/WhyInvest'
import Compliance from '../components/home/Compliance'
import Slider from '../components/home/Slider'
import SetupSupport from '../components/home/SetupSupport'
import Features from '../components/home/Features'
import Partnerships from '../components/home/Partnerships'
import Gallery from '../components/home/Gallery'
import Network from '../components/home/Network'
import Contact from '../components/home/Contact'
import Partners from '../components/home/Partners'
import Lightbox from '../components/shared/Lightbox'

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main>
      <Hero />
      <About />
      <WhyInvest />
      <Compliance />
      <Slider setSelectedImage={setSelectedImage} />
      <SetupSupport />
      <Features />
      <Partnerships />
      <Gallery setSelectedImage={setSelectedImage} />
      <Network />
      <Contact />
      <Partners />
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  )
}

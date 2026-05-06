import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { PrivacyPolicy, TermsConditions, ShippingRefundPolicy } from './Policies'

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-primary/10 overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-refund" element={<ShippingRefundPolicy />} />
      </Routes>
      <Footer />
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
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  )
}

export default App

import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PolicyLayout = ({ title, children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-primary/10 pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase text-[10px] tracking-widest mb-12 hover:gap-3 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-12">{title}</h1>
        <div className="prose prose-lg max-w-none space-y-8 text-black/70 font-medium leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export const PrivacyPolicy = () => (
  <PolicyLayout title="Privacy Policy – Ats">
    <p>At Ats, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
    
    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Personal Information: Name, email address, phone number, company details</li>
        <li>Technical Data: IP address, browser type, device information</li>
        <li>Usage Data: Pages visited, time spent, interactions</li>
        <li>Transaction Data: Billing details, payment information (if applicable)</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide and improve our services</li>
        <li>Process inquiries and transactions</li>
        <li>Communicate updates, offers, and support</li>
        <li>Ensure website security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">3. Data Sharing</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Trusted service providers (hosting, analytics, payment gateways)</li>
        <li>Legal authorities if required by law</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">4. Cookies Policy</h2>
      <p>We use cookies to enhance user experience, track website performance, and personalize content. Users can control cookie preferences through browser settings.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">5. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data. However, no online system is 100% secure.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">6. User Rights</h2>
      <p>You have the right to access, update, or delete your data, withdraw consent at any time, and opt-out of marketing communications.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">7. Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">8. Updates to Policy</h2>
      <p>We may update this policy periodically. Changes will be posted on this page.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">9. Contact Us</h2>
      <div className="bg-brand-accent p-8 rounded-3xl space-y-2">
        <p><strong>Email:</strong> info@atsindia.org</p>
        <p><strong>Phone:</strong> +91 98559 55959, +91 172 462 5959</p>
        <p><strong>Address:</strong> G-04, Ground Floor, D-141, Industrial Area, Phase 7, Sector 73, S.A.S. Nagar, Mohali-160055 (Punjab) INDIA</p>
      </div>
    </section>
  </PolicyLayout>
)

export const TermsConditions = () => (
  <PolicyLayout title="Terms & Conditions – Ats">
    <p>By accessing or using the Ats website, you agree to comply with these Terms & Conditions.</p>
    
    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">1. Use of Website</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The content is for informational and commercial purposes.</li>
        <li>You agree not to misuse the website for illegal or unauthorized purposes.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">2. Intellectual Property</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>All content, logos, designs, and materials are owned by Ats.</li>
        <li>Unauthorized use or reproduction is strictly prohibited.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">3. Services</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ats provides automated testing solutions and related services.</li>
        <li>Service availability and pricing may change without prior notice.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">4. User Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide accurate information</li>
        <li>Maintain confidentiality of account credentials</li>
        <li>Avoid activities that harm website functionality</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">5. Limitation of Liability</h2>
      <p>Ats shall not be liable for any indirect or consequential damages, or loss of data, revenue, or business opportunities.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">6. Third-Party Services</h2>
      <p>We may integrate third-party tools/services. We are not responsible for their performance or policies.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">7. Termination</h2>
      <p>We reserve the right to suspend or terminate access for violations of these terms.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">8. Governing Law</h2>
      <p>These terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of SAS Nagar, Mohali.</p>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">9. Modifications</h2>
      <p>We reserve the right to update these terms at any time.</p>
    </section>
  </PolicyLayout>
)

export const ShippingRefundPolicy = () => (
  <PolicyLayout title="Shipping & Refund Policy – Ats">
    <p>This policy applies to all purchases made through Ats.</p>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">1. Shipping Policy</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Orders are processed within 7-10 business days</li>
        <li>Delivery timelines depend on location and logistics partner</li>
        <li>Shipping charges (if applicable) will be displayed at checkout</li>
        <li>Tracking details will be shared upon dispatch</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">2. Delivery Issues</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Delays may occur due to unforeseen circumstances</li>
        <li>Customers must ensure accurate delivery details</li>
        <li>Failed deliveries due to incorrect information may incur additional charges</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">3. Refund Policy</h2>
      <p>Refunds may be applicable under the following conditions:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Defective or damaged product</li>
        <li>Incorrect item delivered</li>
        <li>Service not delivered as agreed</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">4. Non-Refundable Cases</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Change of mind after purchase</li>
        <li>Used or tampered products</li>
        <li>Services already rendered</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">5. Refund Process</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Raise a request within 7 days of delivery</li>
        <li>Submit proof (images/videos, invoice)</li>
        <li>Refunds will be processed within 7–10 business days after approval</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">6. Cancellation Policy</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Orders can be cancelled before dispatch</li>
        <li>Once shipped, cancellation may not be possible</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-black text-black">7. Contact for Support</h2>
      <div className="bg-brand-accent p-8 rounded-3xl space-y-2">
        <p><strong>Email:</strong> info@atsindia.org</p>
        <p><strong>Phone:</strong> +91 98559 55959, +91 172 462 5959</p>
      </div>
    </section>
  </PolicyLayout>
)

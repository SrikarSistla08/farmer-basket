"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="terms" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/patterns/farm-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-800 opacity-10 rounded-3xl" />
        <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using FarmerBasket's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">2. Account Registration</h2>
              <p className="text-gray-700 mb-4">
                To use certain features of our service, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">3. Product Information</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product information, but we cannot guarantee that all information is complete or error-free. Product images are for illustrative purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">4. Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                All prices are in US dollars and are subject to change without notice. We reserve the right to refuse or cancel any order at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">5. Shipping and Delivery</h2>
              <p className="text-gray-700 mb-4">
                We aim to process and ship orders promptly, but delivery times may vary. We are not responsible for delays caused by circumstances beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">6. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                Our return policy is as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Returns must be initiated within 7 days of delivery</li>
                <li>Products must be in original condition</li>
                <li>Refunds will be processed within 5-7 business days</li>
                <li>Shipping costs are non-refundable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on our website, including text, graphics, logos, and images, is the property of FarmerBasket and is protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                FarmerBasket shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">9. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: legal@farmerbasket.com<br />
                Phone: (443) 636-7777<br />
                Address: 123 Farm Road, Green Valley, CA 90210
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
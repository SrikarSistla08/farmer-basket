"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="privacy" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/patterns/farm-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-800 opacity-10 rounded-3xl" />
        <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-green max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                At FarmerBasket, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service providers who help us operate our business</li>
                <li>Payment processors</li>
                <li>Shipping partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 mb-4">6. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@farmerbasket.com<br />
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
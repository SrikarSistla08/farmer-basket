"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import TypingAnimation from "@/components/TypingAnimation";
import Footer from "@/components/Footer";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Header currentPage="ourstory" />

      {/* Hero Section with Video Background */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/ourstory.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            <TypingAnimation
              texts={["Our", "The"]}
              staticText="Story"
              speed={100}
              className="text-white text-2xl sm:text-3xl md:text-4xl"
              staticTextClassName="text-5xl sm:text-6xl md:text-8xl font-extrabold"
              loop={true}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">
            From vision to reality - the journey of FarmerBasket
          </p>
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-300">
          Proudly Presented by TheValleyCo.❤
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Inspirations Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="md:w-1/2 w-full">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pictures/Valley.jpg"
                  alt="Our Inspiration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Our Inspiration</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                The idea for FarmerBasket was born from a simple observation: the disconnect between local farmers and consumers in our community. We saw an opportunity to bridge this gap while promoting sustainable agriculture and supporting local businesses.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Our founder, Srikar Sistla, envisioned a platform that would make farm-fresh produce accessible to everyone while ensuring fair compensation for our hardworking farmers. This vision became the foundation of FarmerBasket.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="md:w-1/2 w-full">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pictures/community.jpg"
                  alt="Our Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Our Solutions</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                FarmerBasket addresses several key challenges in the agricultural supply chain:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
                <li>Direct connection between farmers and consumers</li>
                <li>Reduced food miles and carbon footprint</li>
                <li>Fair pricing for both farmers and customers</li>
                <li>Quality assurance and traceability</li>
                <li>Support for sustainable farming practices</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Aspirations Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="md:w-1/2 w-full">
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pictures/farm.jpg"
                  alt="Technical Aspirations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Technical Aspirations</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                We&apos;re constantly innovating to improve our platform and services:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
                <li>Advanced supply chain optimization</li>
                <li>AI-powered demand forecasting</li>
                <li>Blockchain-based traceability</li>
                <li>Smart farming integration</li>
                <li>Mobile-first customer experience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">Join Our Journey</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/farmers"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              Become a Partner Farmer
            </Link>
            <Link
              href="/shop"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl border-2 border-green-600"
            >
              Shop Our Products
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 
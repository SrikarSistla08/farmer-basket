"use client"
import Link from "next/link";
import ProductSlideshow from "@/components/ProductSlideshow";
import Image from "next/image";
import FarmersMap from "@/components/FarmersMap";
import Header from "@/components/Header";
import TypingAnimation from "@/components/TypingAnimation";
import Footer from "@/components/Footer";

// Smooth scroll utility
const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section with Video Background */}
      <header className="relative h-screen w-full flex items-center justify-center">
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
            <source src="/FarmVideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            <TypingAnimation 
              texts={["Welcome to", "Shop at"]}
              staticText="FarmerBasket"
              speed={100}
              className="text-white text-2xl sm:text-3xl md:text-4xl"
              staticTextClassName="text-5xl sm:text-6xl md:text-8xl font-extrabold"
              loop={true}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">Fresh from the farm to your table</p>
          <Link
            href="/shop"
            className="inline-block bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl"
          >
            Shop Fresh Products
          </Link>
        </div>
          <div className="absolute bottom-4 right-4 text-sm text-gray-300">
            Proudly Presented by TheValleyCo.❤
          </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Our Story */}
        <section id="our-story" className="relative mx-auto mb-12 sm:mb-16">
          {/* Pattern Background */}
          <div className="absolute inset-0 bg-[url('/pictures/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-800 opacity-10 rounded-3xl" />
          <div className="relative p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-800">Our Story</h2>

            {/* First Subsection */}
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-20 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="md:w-1/2 w-full">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/pictures/farm.jpg"
                    alt="Our Farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">From Farm to Table</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                  At <strong>FarmerBasket</strong>, we believe in the power of local agriculture. Our journey began in 2025 when <strong>Srikar Sistla</strong>, founder and aspiring entrepreneur of <strong>TheValleyCo</strong> came together with a shared vision: to bring fresh, sustainable produce directly to your table.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  We work closely with local farmers who share our commitment to sustainable farming practices. Each product in our basket tells a story of dedication, care, and respect for the land.
                </p>
              </div>
            </div>

            {/* Second Subsection */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="md:w-1/2 w-full">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/pictures/community.jpg"
                    alt="Our Community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">Building Community</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                  Our mission goes beyond just selling produce. We&apos;re building a community that values quality, sustainability, and the connection between farmers and consumers.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  <strong>When you choose FarmerBasket</strong>, you&apos;re not just buying food - you&apos;re supporting local farmers, reducing food miles, and contributing to a more sustainable future for our community.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Learn More About TheValleyCo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Workflow Infographic */}
        <section className="relative mx-auto mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-[url('/pictures/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-300 opacity-5 rounded-3xl" />
          <div className="relative p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-800">How We Work</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {/* Step 1: Farm Selection */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Farm Selection</h3>
                <p className="text-sm sm:text-base text-gray-700">We carefully select local farms that meet our high standards for sustainable and ethical farming practices.</p>
              </div>

              {/* Step 2: Quality Check */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Quality Check</h3>
                <p className="text-sm sm:text-base text-gray-700">Each product undergoes rigorous quality checks to ensure freshness and meet our premium standards.</p>
              </div>

              {/* Step 3: Direct Delivery */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Direct Delivery</h3>
                <p className="text-sm sm:text-base text-gray-700">Products are delivered directly from farms to your doorstep, minimizing handling and ensuring freshness.</p>
              </div>

              {/* Step 4: Customer Satisfaction */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Customer Satisfaction</h3>
                <p className="text-sm sm:text-base text-gray-700">We maintain close relationships with our customers, ensuring their needs are met and feedback is valued.</p>
              </div>
            </div>

            {/* Interactive Map Section */}
            <div className="mt-12 sm:mt-16">
              <FarmersMap />
            </div>
          </div>
        </section>

        {/* Featured Categories with Slideshow */}
        <section id="categories" className="relative mx-auto text-center mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-[url('/pictures/shop-pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-800 opacity-10 rounded-3xl" />
          <div className="relative p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">Shop by Category</h2>
            {/* Product Slideshow */}
            <ProductSlideshow />

            {/* Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { 
                  name: 'Vegetables', 
                  image: '/pictures/vegetables.jpg',
                  description: 'Fresh, organic vegetables'
                },
                { 
                  name: 'Fruits', 
                  image: '/pictures/fruits.jpg',
                  description: 'Seasonal, ripe fruits'
                },
                { 
                  name: 'Dairy', 
                  image: '/pictures/dairy.jpg',
                  description: 'Farm-fresh dairy products'
                },
                { 
                  name: 'Meat', 
                  image: '/pictures/meat.jpg',
                  description: 'Premium quality meats'
                }
              ].map((category) => (
                <Link
                  key={category.name}
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100 hover:border-green-200 group"
                >
                  <div className="h-32 sm:h-48 relative rounded-md mb-3 sm:mb-4 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 sm:p-8 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Ready to Shop?</h2>
          <p className="text-base sm:text-lg text-white mb-4 sm:mb-6">Browse our selection of fresh, local products</p>
          <Link
            href="/shop"
            className="inline-block bg-white text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            Start Shopping
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

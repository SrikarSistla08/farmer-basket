"use client"
import Link from "next/link";
import ProductSlideshow from "@/components/ProductSlideshow";
import Image from "next/image";
import FarmersMap from "@/components/FarmersMap";
import Header from "@/components/Header";
import TypingAnimation from "@/components/TypingAnimation";

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
      <header className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
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
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Our Story */}
        <section id="os" className="relative mx-auto mb-12 sm:mb-16">
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
                  When you choose FarmerBasket, you&apos;re not just buying food - you&apos;re supporting local farmers, reducing food miles, and contributing to a more sustainable future for our community.
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
      <footer className="relative min-h-screen bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pictures/shop-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-300 opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div id="contact" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 mr-3 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Corporate Office</h4>
                    <p className="text-sm sm:text-base text-gray-600">123 Farm Road<br />Green Valley, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 mr-3 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Customer Service</h4>
                    <p className="text-sm sm:text-base text-gray-600">(443) 636-7777</p>
                    <p className="text-xs sm:text-sm text-gray-500">Mon-Fri: 8AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 mr-3 sm:mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-sm sm:text-base text-gray-600">support@farmerbasket.com</p>
                    <p className="text-xs sm:text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Business Hours</h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm sm:text-base text-gray-700">{schedule.day}</span>
                    <span className="text-sm sm:text-base text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Delivery Schedule</h4>
                <p className="text-sm sm:text-base text-gray-600">Orders placed before 2PM are delivered next business day</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Quick Links</h3>
              <div className="space-y-3 sm:space-y-4">
                <Link href="/shop" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                  Shop Products
                </Link>
                <Link href="/about" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                  About TheValleyCo
                </Link>
                <a 
                  href="#os" 
                  onClick={(e) => smoothScroll(e, 'os')}
                  className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors"
                >
                  Our Story
                </a>
                <Link href="/privacy" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/faq" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm sm:text-base text-gray-600">© {new Date().getFullYear()} FarmerBasket, a subsidiary of TheValleyCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

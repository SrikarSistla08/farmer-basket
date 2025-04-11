"use client";

import Link from "next/link";

// Smooth scroll utility
// const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
//   e.preventDefault();
//   const element = document.getElementById(targetId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };

export default function Footer() {
  return (
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
              <Link href="/ourstory" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors">
                Our Story
              </Link>
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
  );
} 
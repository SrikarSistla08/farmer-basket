"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";

// Sample farm data
const farms = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "San Francisco, CA",
    description: "Specializing in organic vegetables and fruits",
    image: "/pictures/farm.jpg",
    coverImage: "/pictures/valley.jpg",
    logo: "/pictures/pattern.svg",
    type: "vegetable",
    rating: 4.8,
    products: ["Vegetables", "Fruits"],
    coordinates: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 2,
    name: "Sunny Acres",
    location: "Oakland, CA",
    description: "Premium dairy products and eggs",
    image: "/pictures/community.jpg",
    coverImage: "/pictures/Valley.jpg",
    logo: "/pictures/shop-pattern.svg",
    type: "dairy",
    rating: 4.6,
    products: ["Dairy", "Eggs"],
    coordinates: { lat: 37.7833, lng: -122.4167 }
  },
  {
    id: 3,
    name: "Mountain View Farm",
    location: "San Jose, CA",
    description: "Grass-fed meats and honey",
    image: "/pictures/farm.jpg",
    coverImage: "/pictures/valley.jpg",
    logo: "/pictures/pattern.svg",
    type: "meat",
    rating: 4.9,
    products: ["Meat", "Honey"],
    coordinates: { lat: 37.7750, lng: -122.4184 }
  }
];

// Sample product data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 2.99,
    image: "/pictures/tomato.jpg",
    category: "vegetables",
    description: "Fresh, vine-ripened organic tomatoes",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true,
    isBestSeller: true,
    farmId: 1
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    price: 4.99,
    image: "/pictures/eggs.jpg",
    category: "dairy",
    description: "Free-range eggs from happy chickens",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    farmId: 2
  },
  {
    id: 3,
    name: "Honey",
    price: 8.99,
    image: "/pictures/honey.jpg",
    category: "pantry",
    description: "Pure, raw honey from local bees",
    rating: 4.9,
    reviews: 56,
    inStock: true,
    isNew: true,
    isBestSeller: false,
    farmId: 3
  },
  {
    id: 4,
    name: "Grass-fed Beef",
    price: 12.99,
    image: "/pictures/beef.jpg",
    category: "meat",
    description: "Premium grass-fed beef cuts",
    rating: 4.7,
    reviews: 78,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    farmId: 3
  },
  {
    id: 5,
    name: "Organic Apples",
    price: 3.99,
    image: "/pictures/apple.jpg",
    category: "fruits",
    description: "Crisp, organic apples from our orchard",
    rating: 4.5,
    reviews: 92,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    farmId: 1
  },
  {
    id: 6,
    name: "Fresh Milk",
    price: 4.49,
    image: "/pictures/milk.jpg",
    category: "dairy",
    description: "Fresh, whole milk from our dairy",
    rating: 4.4,
    reviews: 67,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    farmId: 2
  }
];

// Smooth scroll utility
const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedFarm, setSelectedFarm] = useState<number | null>(null);

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .filter(product => !selectedFarm || product.farmId === selectedFarm)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const selectedFarmData = selectedFarm ? farms.find(farm => farm.id === selectedFarm) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Header currentPage="shop" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">Fresh from our farm to your table</p>
        </header>

        {/* Farm Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Select a Farm</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {farms.map((farm) => (
              <button
                key={farm.id}
                onClick={() => setSelectedFarm(farm.id)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedFarm === farm.id
                    ? 'bg-green-100 border-2 border-green-600'
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={farm.image}
                      alt={farm.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{farm.name}</h3>
                    <p className="text-sm text-gray-600">{farm.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Farm Info */}
        {selectedFarmData && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={selectedFarmData.logo}
                  alt={`${selectedFarmData.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Viewing {selectedFarmData.name}
                </h2>
                <p className="text-gray-600">{selectedFarmData.location}</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(selectedFarmData.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {selectedFarmData.rating} rating
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src={selectedFarmData.coverImage}
                alt={`${selectedFarmData.name} cover`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="text-gray-600 mb-4">{selectedFarmData.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Specialties:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedFarmData.products.map((product, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedFarm(null)}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View All Farms
            </button>
          </div>
        )}

        {/* Shop Controls */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {['All Products', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Pantry'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All Products' ? 'all' : category.toLowerCase())}
                className={`px-4 py-2 rounded-full transition-colors ${
                  (category === 'All Products' && selectedCategory === 'all') || 
                  category.toLowerCase() === selectedCategory
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <label htmlFor="sort-select" className="text-gray-600">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Sort products by"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="price-range" className="text-gray-600">Price Range</label>
            <span className="text-green-600 font-medium">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <input
            id="price-range"
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            aria-label="Price range filter"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <div className="h-64 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
                    Best Seller
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <button 
                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                      product.inStock
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories Legend */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Vegetables', image: '/pictures/vegetables.jpg' },
              { name: 'Fruits', image: '/pictures/fruits.jpg' },
              { name: 'Dairy', image: '/pictures/dairy.jpg' },
              { name: 'Meat', image: '/pictures/meat.jpg' }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100 hover:border-green-200 group"
              >
                <div className="h-32 relative rounded-md mb-4 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative min-h-screen bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pictures/shop-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-300 opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div id="contact" className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Corporate Office</h4>
                    <p className="text-gray-600">123 Farm Road<br />Green Valley, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Customer Service</h4>
                    <p className="text-gray-600">(443) 636-7777</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">support@farmerbasket.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Delivery Schedule</h4>
                <p className="text-gray-600">Orders placed before 2PM are delivered next business day</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Links</h3>
              <div className="space-y-4">
                <Link href="/shop" className="block text-gray-600 hover:text-green-600 transition-colors">
                  Shop Products
                </Link>
                <Link href="/about" className="block text-gray-600 hover:text-green-600 transition-colors">
                  About TheValleyCo
                </Link>
                <a 
                  href="#os" 
                  onClick={(e) => smoothScroll(e, 'os')}
                  className="block text-gray-600 hover:text-green-600 transition-colors"
                >
                  Our Story
                </a>
                <Link href="/privacy" className="block text-gray-600 hover:text-green-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-600 hover:text-green-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/faq" className="block text-gray-600 hover:text-green-600 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-600">© {new Date().getFullYear()} FarmerBasket, a subsidiary of TheValleyCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Sample product data for the slideshow
const slideshowProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    image: "/pictures/tomato.jpg",
    description: "Fresh, vine-ripened organic tomatoes from our local farms"
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    image: "/pictures/eggs.jpg",
    description: "Free-range eggs from happy chickens"
  },
  {
    id: 3,
    name: "Honey",
    image: "/pictures/honey.jpg",
    description: "Pure, raw honey from local bees"
  },
  {
    id: 4,
    name: "Grass-fed Beef",
    image: "/pictures/beef.jpg",
    description: "Premium grass-fed beef cuts"
  }
];

export default function ProductSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowProducts.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setCurrentSlide((prev) => (prev - 1 + slideshowProducts.length) % slideshowProducts.length);
    } else if (e.key === 'ArrowRight') {
      setCurrentSlide((prev) => (prev + 1) % slideshowProducts.length);
    }
  };

  return (
    <div 
      className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl mb-8"
      role="region"
      aria-label="Product Slideshow"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {slideshowProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/30" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-left">
              <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg">{product.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slideshowProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1} of ${slideshowProducts.length}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>

      {/* Previous/Next Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slideshowProducts.length) % slideshowProducts.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slideshowProducts.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
} 
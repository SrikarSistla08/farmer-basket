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

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl mb-8">
      {slideshowProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
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
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 
'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set initial loading state
    setIsLoading(true);

    // Show loading screen for at least 3 seconds
    const showTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Start fade out animation
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
        setIsLoading(false);
      }, 1000); // Fade out duration

      return () => clearTimeout(fadeOutTimer);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-opacity duration-1500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      aria-busy={isLoading}
      role="status"
      aria-label="Loading"
    >
      <div className="animate-bounce mb-4">
        <Image
          src="/cowboy.svg"
          alt="Loading..."
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>
      <div className="text-green-600 text-xl font-bold animate-pulse">Loading...</div>
    </div>
  );
} 
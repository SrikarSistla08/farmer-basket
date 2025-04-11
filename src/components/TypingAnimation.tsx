import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  staticText?: string;
  speed?: number;
  className?: string;
  loop?: boolean;
  staticTextClassName?: string;
}

export default function TypingAnimation({ 
  texts, 
  staticText = '', 
  speed = 100, 
  className = '', 
  loop = true,
  staticTextClassName = ''
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < texts[currentTextIndex].length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + texts[currentTextIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex > 0 && isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2);

      return () => clearTimeout(timeout);
    } else if (currentIndex === texts[currentTextIndex].length && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2 seconds before starting to delete

      return () => clearTimeout(timeout);
    } else if (currentIndex === 0 && isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 500); // Wait 0.5 seconds before starting to type again

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, texts, currentTextIndex, speed, isDeleting, loop]);

  return (
    <div className="flex flex-col items-center">
      <span className={`${className} mb-2`}>
        {displayedText}
      </span>
      {staticText && (
        <span className={`text-white ${staticTextClassName}`}>
          {staticText}
        </span>
      )}
    </div>
  );
} 
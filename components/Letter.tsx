import React, { useState, useEffect } from 'react';
import { SparkleIcon } from './SparkleIcon';

interface LetterProps {
  onBack: () => void;
  onNext: () => void;
}

export const Letter: React.FC<LetterProps> = ({ onBack, onNext }) => {
  const fullText = "I just want to remind you how special you are to me. May your life shine as bright as your smile, and may chocolates always find their way to you 🍫✨";
  const [animatedText, setAnimatedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setAnimatedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, 1000); 

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-md flex-grow justify-center animate-[fadeInUp_0.5s_ease-out]">
      <main className="relative w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
        <img
          src="img/shinchan.png"
          alt="Shinchan character"
          className="absolute -top-12 -right-4 sm:-right-6 w-24 h-auto opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]"
        />
        
        <header className="opacity-0 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          <p className="text-gray-500 tracking-[0.2em] text-sm">A LETTER</p>
          <div className="flex items-center justify-center gap-3 mt-1">
            <h1 className="text-3xl sm:text-4xl text-[#E98FA9] font-playfair tracking-[0.1em]">FROM YOUR BHAI</h1>
            <SparkleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E98FA9]" />
          </div>
        </header>

        <section className="mt-8 text-gray-700">
          <p className="font-dancing text-3xl text-[#E98FA9] opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
            Dear moon <span className="inline-block text-2xl">💖</span>
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed min-h-[100px] sm:min-h-[72px]">
            {animatedText}
            {showCursor && <span className="animate-blink-caret" />}
          </p>
        </section>

        <div className="relative mt-8 flex items-center justify-center opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]">
            <img 
                src="img/stamp.png"
                alt="Happy Bhai Dooj Stamp"
                className="absolute left-0 -bottom-4 w-24 h-auto transform -rotate-12"
            />
            <p className="text-gray-600 italic ml-16">
                — With love, your brother 💌
            </p>
        </div>
      </main>

      <footer className="w-full max-w-md flex justify-between items-center mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_1.2s_ease-out_forwards]">
        <button
          onClick={onBack}
          className="bg-white text-gray-700 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#FCE8ED] text-gray-700 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-[#F9D4E0] transition-colors duration-300 animate-pulse-btn"
        >
          Next →
        </button>
      </footer>
    </div>
  );
};

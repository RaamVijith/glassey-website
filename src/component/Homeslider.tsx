import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Slide {
  image: string;
  heading: string;
}

const slides: Slide[] = [
  {
    image: "https://img.freepik.com/free-photo/cool-guy-having-fun-vacation-wearing-straw-hat-sunglasses-looking-aside-sassy-standing-blu_1258-164149.jpg",
    heading: "New Trending Goggles For Men",
  },
  {
    image: "https://mcroons.com/cdn/shop/files/Main_Banner.png?v=1736268116&width=1780",
    heading: "New Trending Goggles For Women",
  },
];

const HomeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide}`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Overlay */}
      
      {/* Animated Text */}
      <div className="relative text-start w-[35vw] ml-[40vw] text-gray-800 px-4">
        <h1 className="font-normal text-xl mb-5">Big Summer Sale 30% Discount</h1>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide} // Unique key to trigger animation
            initial={{ opacity: 0, y: 30 }} // Start hidden and below
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            exit={{ opacity: 0, y: -30 }} // Fade out and move up
            transition={{ duration: 0.6 }} // Smooth animation
            className="text-4xl md:text-6xl font-semibold"
          >
            {slides[currentSlide].heading}
          </motion.h1>
        </AnimatePresence>
        <h1 className="font-normal text-2xl my-5">Start Only At $50.00</h1>

        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-3 px-8 font-semibold ">
          SHOP NOW
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 font-bold text-4xl p-2 text-white bg-gray-800 bg-opacity-50 rounded-full"
      >
                <IoIosArrowBack />

      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 font-bold text-4xl p-2 text-white transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full"
      >
        <IoIosArrowForward />

      </button>
    </div>
  );
};

export default HomeSlider;

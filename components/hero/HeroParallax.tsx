'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define types for snack/beverage items
interface ProductItem {
  title: string;
  image: string;
  category: string;
}

/**
 * Enhanced HeroParallax component serving as main hero section
 * Features scrolling background images of vending machine products
 * Implements Raiders-inspired color scheme for accessibility
 */
const HeroParallax = () => {
  // Ref for the scrolling container
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Product items to display in the parallax grid
  const products: ProductItem[] = [
    {
      title: "Coke",
      image: "/images/beverages/coke.jpg",
      category: "Beverage"
    },
    {
      title: "Red Bull",
      image: "/images/beverages/RedBull.jpg",
      category: "Energy Drink"
    },
    {
      title: "Lays Chips",
      image: "/images/snacks/lays.jpg", 
      category: "Snack"
    },
    {
      title: "Doritos",
      image: "/images/snacks/doritos.jpg",
      category: "Snack"
    },
    {
      title: "Monster",
      image: "/images/beverages/monster.jpg",
      category: "Energy Drink"
    },
    {
      title: "Just Water",
      image: "/images/beverages/justwater.jpg",
      category: "Beverage"
    },
    {
      title: "M&Ms",
      image: "/images/snacks/mms.jpg",
      category: "Candy"
    },
    {
      title: "Snickers",
      image: "/images/snacks/snickers.jpg",
      category: "Candy"
    },
    {
      title: "Gatorade",
      image: "/images/beverages/gatorade.jpg",
      category: "Sports Drink"
    },
    {
      title: "Cheetos",
      image: "/images/snacks/cheetos.jpg",
      category: "Snack"
    },
    {
      title: "Skittles",
      image: "/images/snacks/skittles.jpg",
      category: "Snack"
    },
    {
      title: "Dr Pepper",
      image: "/images/beverages/drpepper.jpg",
      category: "Beverage"
    },
  ];

  // Note: For some images that might not exist in your public folder,
  // the component will use placeholder images until you add the real ones

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-40" ref={containerRef}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#000000]/60 z-10" aria-hidden="true"></div>
      
      {/* Products grid with parallax effect */}
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4 z-0">
        {products.map((product, index) => {
          // Calculate parallax offset based on index and scroll position
          const offset = Math.min(scrollY * 0.1 * (index % 6 + 1) * 0.2, 100);
          const opacity = Math.max(0.3, 1 - (scrollY * 0.001));
          
          return (
            <div 
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden"
              style={{ 
                transform: `translateY(${offset}px)`,
                transition: 'transform 0.3s ease-out',
                opacity
              }}
              aria-hidden="true"
            >
              {/* Fallback for images that may not exist yet */}
              <div className="absolute inset-0 bg-[#4d4d4d] flex items-center justify-center">
                <div className="text-[#A5ACAF] text-xs">
                  {product.title}
                </div>
              </div>
              
              {/* This would be replaced with actual images */}
              <div className="absolute inset-0">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Category badge */}
              <div className="absolute top-2 left-2 z-20">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#FD5A1E] text-[#F5F5F5]">
                  {product.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 drop-shadow-lg">
          Workplace Vending Solutions <br /> 
          <span className="text-[#FD5A1E]">Zero Upfront Cost</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#F5F5F5] mb-8 drop-shadow-md max-w-3xl mx-auto">
          Enhance your workplace with state-of-the-art vending machines offering 
          50+ snack options and a 5% revenue share.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/proposal"
            className="px-8 py-4 bg-[#FD5A1E] text-[#F5F5F5] font-medium rounded-lg shadow-lg hover:bg-[#F5F5F5] hover:text-[#000000] transition-colors"
            aria-label="View our vending machine proposal"
          >
            View Proposal
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-[#F5F5F5] text-[#F5F5F5] font-medium rounded-lg hover:bg-[#FD5A1E] hover:border-[#FD5A1E] transition-colors"
            aria-label="Contact us about vending machines"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroParallax;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VendingMachineGallery = () => {
  // State for active view/feature
  const [activeView, setActiveView] = useState('main');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoaded, setIsLoaded] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use intersection observer to trigger animations when in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Define feature information for details panel
  const featureInfo = {
    touchscreen: {
      title: "Touchscreen Interface",
      description: "Advanced 21.5\" HD touchscreen interface with intuitive navigation, product information, and promotional capabilities.",
      details: [
        "Full HD 1080p resolution for crisp product images",
        "Capacitive touchscreen with anti-glare coating",
        "Support for promotional videos and advertisements",
        "Multi-language support for diverse environments"
      ]
    },
    payment: {
      title: "Payment System",
      description: "Multi-payment system accepting credit/debit cards, mobile payments, cash, and coins for maximum convenience.",
      details: [
        "Credit/debit card reader with tap, swipe, and insert options",
        "Mobile payment compatibility (Apple Pay, Google Pay, Samsung Pay)",
        "High-capacity bill validator accepting $1-$20 bills",
        "Coin mechanism with auto-sorting and change dispensing"
      ]
    },
    refrigeration: {
      title: "Temperature Control",
      description: "Dual temperature zones maintain proper cooling for beverages and temperature-sensitive items.",
      details: [
        "Energy-efficient cooling system with eco-friendly refrigerant",
        "Adjustable temperature settings from 34°F to 41°F",
        "Automatic defrost cycle to prevent ice buildup",
        "Insulated glass door to maintain temperature while displaying products"
      ]
    },
    storage: {
      title: "Product Storage",
      description: "Adjustable shelving system with individual spiral motors for reliable product delivery.",
      details: [
        "Up to 6 adjustable shelves with customizable spacing",
        "Individual motors for each spiral ensure reliable dispensing",
        "Anti-theft drop sensor confirms successful delivery",
        "Capacity for up to 500 items depending on configuration"
      ]
    },
    monitoring: {
      title: "Remote Monitoring",
      description: "Cloud-based system for remote inventory tracking, sales analytics, and maintenance alerts.",
      details: [
        "Real-time inventory monitoring to prevent stock-outs",
        "Sales data analytics for product optimization",
        "Automated maintenance alerts and diagnostics",
        "Remote price and setting adjustments via secure connection"
      ]
    }
  };

  // Define all image paths organized by feature/view
  const imagePaths = {
    main: '/images/vending-machines/front-Bg-Transparent.png',
    touchscreen: '/images/vending-machines/vending-touchscreen.jpg',
    payment: '/images/vending-machines/payment-system.jpg',
    refrigeration: '/images/vending-machines/refrigeration-unit.jpg',
    storage: '/images/vending-machines/storage-config.jpg',
    monitoring: '/images/vending-machines/remote-monitoring.jpg',
    
    // Product images shown inside the machine
    products: [
      '/images/products/snacks.jpg',
      '/images/products/beverages.jpg',
      '/images/products/healthy-options.jpg',
    ],
    
    // Side views and additional angles
    angles: [
      '/images/vending-machines/front-Bg-Transparent.png',
      '/images/vending-machines/refrigerated-model.png',
      '/images/vending-machines/open-door.jpg',
      '/images/vending-machines/side-view.jpg',
    ],
    
    // Thumbnails for gallery navigation (using same images for now, would be replaced with actual thumbnails)
    thumbnails: [
      { src: '/images/vending-machines/front-Bg-Transparent.png', view: 'main', label: 'Front View' },
      { src: '/images/vending-machines/vending-touchscreen.jpg', view: 'touchscreen', label: 'Touchscreen' },
      { src: '/images/vending-machines/payment-system.jpg', view: 'payment', label: 'Payment System' },
      { src: '/images/vending-machines/refrigerated-model.png', view: 'refrigeration', label: 'Cooling System' },
    ]
  };

  // Preload critical images
  useEffect(() => {
    const preloadImages = async () => {
      const criticalImages = [
        imagePaths.main,
        ...imagePaths.thumbnails.map(t => t.src)
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setIsLoaded(prev => ({...prev, [src]: true}));
        };
      });
    };
    
    preloadImages();
  }, []);

  // Handle feature highlight click
  const handleFeatureClick = (feature: string) => {
    setActiveView(feature);
  };

  // Handle zoom toggle
  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  // Get current image based on active view
  const getCurrentImage = () => {
    // If we have a specific image for this view, use it
    if (imagePaths[activeView as keyof typeof imagePaths] && 
        typeof imagePaths[activeView as keyof typeof imagePaths] === 'string') {
      return imagePaths[activeView as keyof typeof imagePaths] as string;
    }
    
    // Default to main view
    return imagePaths.main;
  };

  // Determine highlight positions based on the current view
  const getHighlightPositions = (feature: string) => {
    // Positions are different based on which view is currently active
    if (activeView === 'main') {
      switch(feature) {
        case 'touchscreen': return { top: '22%', left: '50%', width: '60%', height: '15%' };
        case 'payment': return { bottom: '35%', left: '50%', width: '60%', height: '12%' };
        case 'refrigeration': return { top: '45%', left: '50%', width: '60%', height: '20%' };
        case 'storage': return { top: '35%', right: '25%', width: '15%', height: '40%' };
        case 'monitoring': return { top: '10%', right: '20%', width: '10%', height: '10%' };
        default: return {};
      }
    }
    
    // Positions for other views would be defined similarly
    return {};
  };

  return (
    <div ref={ref} className="relative">
      {/* Main image container with responsive aspect ratio */}
      <div 
        ref={containerRef}
        className={`relative w-full ${
          isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
        }`}
        onClick={handleZoomToggle}
      >
        {/* Responsive container maintains aspect ratio */}
        <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-xl bg-[#4d4d4d]/20 border border-[#A5ACAF]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              scale: isZoomed ? 1.2 : 1
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Skeletal loader while image loads */}
            {!isLoaded[getCurrentImage()] && (
              <div className="absolute inset-0 bg-[#4d4d4d] animate-pulse" />
            )}
            
            {/* Main image with fill position */}
            <Image
              src={getCurrentImage()}
              alt={`KoolMore vending machine ${activeView} view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className={`object-contain transition-opacity duration-500 ${
                isLoaded[getCurrentImage()] ? 'opacity-100' : 'opacity-0'
              }`}
              priority={activeView === 'main'}
              onLoad={() => setIsLoaded(prev => ({...prev, [getCurrentImage()]: true}))}
            />
            
            {/* Feature highlight overlays - only shown on main view */}
            <AnimatePresence>
              {activeView === 'main' && Object.keys(featureInfo).map(feature => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  className="absolute bg-[#FD5A1E]/20 border border-[#FD5A1E]/40 rounded-md flex items-center justify-center cursor-pointer"
                  style={{
                    ...getHighlightPositions(feature),
                    transform: feature === 'touchscreen' || feature === 'payment' ? 'translateX(-50%)' : undefined
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeatureClick(feature);
                  }}
                >
                  <div className="text-center p-2">
                    <div className="text-xs md:text-sm font-medium text-[#F5F5F5] drop-shadow-md">
                      {feature.charAt(0).toUpperCase() + feature.slice(1)}
                    </div>
                  </div>
                  
                  {/* Pulsing dot to draw attention */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FD5A1E] rounded-full">
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#FD5A1E]/70"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* Zoom indicator */}
        <div className="absolute bottom-3 right-3 bg-[#000000]/70 text-[#F5F5F5] text-xs px-2 py-1 rounded-md">
          {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
        </div>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
        {imagePaths.thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
              activeView === thumb.view 
                ? 'border-[#FD5A1E] scale-105' 
                : 'border-[#A5ACAF] opacity-70 hover:opacity-100'
            }`}
            onClick={() => setActiveView(thumb.view)}
            aria-label={`View ${thumb.label}`}
          >
            {/* Thumbnail image */}
            <Image
              src={thumb.src}
              alt={`${thumb.label} thumbnail`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Feature detail section - shows when a feature is selected */}
      <AnimatePresence>
        {activeView !== 'main' && featureInfo[activeView as keyof typeof featureInfo] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 bg-[#000000] border border-[#A5ACAF] rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#FD5A1E]">
                {featureInfo[activeView as keyof typeof featureInfo].title}
              </h3>
              <button
                className="text-[#A5ACAF] hover:text-[#F5F5F5] p-2 rounded-full hover:bg-[#4d4d4d]/30 transition-colors"
                onClick={() => setActiveView('main')}
                aria-label="Return to main view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature description and details */}
              <div>
                <p className="text-[#A5ACAF] mb-4">
                  {featureInfo[activeView as keyof typeof featureInfo].description}
                </p>
                
                <ul className="space-y-2 text-[#A5ACAF]">
                  {featureInfo[activeView as keyof typeof featureInfo].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#FD5A1E] mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Detail image */}
              <div className="relative rounded-lg overflow-hidden aspect-video md:aspect-square bg-[#4d4d4d]/20 border border-[#A5ACAF]">
                <Image
                  src={getCurrentImage()}
                  alt={`${featureInfo[activeView as keyof typeof featureInfo].title} detail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product showcase carousel */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Available Products</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "Snacks & Chips", image: "/api/placeholder/160/160" },
            { name: "Cold Beverages", image: "/api/placeholder/160/160" },
            { name: "Healthy Options", image: "/api/placeholder/160/160" }
          ].map((product, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden bg-[#4d4d4d]/20 border border-[#A5ACAF]">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 160px"
                  className="object-cover"
                />
              </div>
              <div className="p-2 bg-[#000000]/80 text-center">
                <p className="text-sm text-[#F5F5F5]">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 360-degree view indicator - for future interactive feature */}
      <div className="mt-8 bg-[#4d4d4d]/30 rounded-lg p-4 text-center border border-[#A5ACAF]">
        <p className="text-[#A5ACAF] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FD5A1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Coming soon: 360° Interactive View
        </p>
      </div>
    </div>
  );
};

export default VendingMachineGallery;
'use client';

import React from 'react';
import VendingMachineGallery from './VendingMachineGallery';
import Link from 'next/link';

/**
 * VendingMachineDisplay Component
 * 
 * A container component that wraps the VendingMachineGallery with additional
 * information, specifications and call-to-action elements
 */
const VendingMachineDisplay = () => {
  // Machine specifications
  const specifications = [
    { name: 'Model', value: 'KoolMore KM-VMNT-50-B' },
    { name: 'Dimensions', value: '72"H x 39"W x 33"D' },
    { name: 'Capacity', value: 'Up to 500 items' },
    { name: 'Weight', value: '680 lbs' },
    { name: 'Power', value: '110-120V, 60Hz' },
    { name: 'Display', value: '21.5" HD Touchscreen' }
  ];
  
  // Benefit highlights
  const benefits = [
    {
      title: 'Zero Upfront Cost',
      description: 'No equipment purchase, installation fees, or maintenance expenses.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Passive Revenue',
      description: '5% of gross sales returned to your business monthly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Full Maintenance',
      description: 'Regular restocking, cleaning and repairs handled by our team.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#FD5A1E] text-[#F5F5F5] text-sm font-medium rounded-full mb-4">
            Featured Model
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            KoolMore KM-VMNT-50-B
          </h2>
          <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
            Explore our premium non-refrigerated vending machine with advanced features and zero upfront cost
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Machine Gallery - Takes 7 columns on large screens */}
          <div className="lg:col-span-7">
            <VendingMachineGallery />
          </div>

          {/* Machine Details - Takes 5 columns on large screens */}
          <div className="lg:col-span-5">
            {/* Specifications Card */}
            <div className="bg-[#4d4d4d] border border-[#A5ACAF] rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="bg-[#000000] p-4 border-b border-[#A5ACAF]">
                <h3 className="text-xl font-bold text-[#F5F5F5]">Machine Specifications</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="border-b border-[#A5ACAF]/20 pb-2">
                      <span className="text-xs text-[#A5ACAF] block">{spec.name}</span>
                      <span className="font-medium text-[#F5F5F5]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Zero Cost Model Highlight */}
            <div className="bg-gradient-to-r from-[#000000] to-[#4d4d4d] border border-[#A5ACAF] rounded-xl p-6 shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#FD5A1E]/20 text-[#FD5A1E] rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5F5]">Zero-Cost Model</h3>
                  <p className="text-[#A5ACAF]">No upfront investment required</p>
                </div>
              </div>
              <p className="text-[#A5ACAF] mb-4">
                We provide the vending machine, handle installation, maintenance, and stocking - all at zero cost to you. In return, your business receives 5% of gross sales as passive income.
              </p>
              <div className="bg-[#000000]/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-[#A5ACAF]">Average Monthly Revenue:</span>
                  <span className="text-[#F5F5F5] font-medium">$500-$800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A5ACAF]">Your Monthly Share (5%):</span>
                  <span className="text-[#FD5A1E] font-bold">$25-$40</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#4d4d4d] border border-[#A5ACAF] rounded-lg p-4 flex items-start">
                  <div className="text-[#FD5A1E] mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#F5F5F5] mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#A5ACAF]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col space-y-4">
              <Link 
                href="/contact" 
                className="w-full bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] text-center py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
              >
                Request this Machine
              </Link>
              <Link 
                href="/vending-machines" 
                className="w-full bg-transparent border border-[#A5ACAF] hover:bg-[#4d4d4d] text-[#F5F5F5] text-center py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Explore All Models
              </Link>
              <a 
                href="https://www.amazon.com/KoolMore-KM-VMNT-50-B-Vending-Acceptor-Non-Refrigerated/dp/B0CWMZTPBP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-transparent border border-[#FD5A1E] hover:bg-[#FD5A1E]/10 text-[#FD5A1E] text-center py-3 px-6 rounded-lg font-medium transition-colors"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendingMachineDisplay
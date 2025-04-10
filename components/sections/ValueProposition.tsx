'use client';

import React from 'react';
import Link from 'next/link';


const ValueProposition = () => {
  // Value proposition data
  const businessValues = [
    {
      title: "Zero Upfront Investment",
      description: "We handle all costs for machine installation, maintenance, and stocking. There's absolutely no financial barrier to start earning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Passive Revenue Stream",
      description: "Earn 5% of gross vending sales without any effort. The more machines you add, the greater your monthly passive income.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Enhanced Workplace Experience",
      description: "Boost employee and customer satisfaction with convenient 24/7 access to a variety of snacks, drinks, and refreshments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Gradient transition element */}
      <div className="h-32 bg-gradient-to-b from-transparent to-[#000000] -mt-32 relative z-20"></div>
      
      {/* Value Proposition Section */}
      <section id="value-proposition" className="py-16 bg-[#000000] relative z-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Transform Your Workplace at <span className="text-[#FD5A1E]">Zero Cost</span>
            </h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Enhance your workplace environment while generating passive income with our premium vending solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessValues.map((value, index) => (
              <div 
                key={index}
                className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-[#FD5A1E] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">{value.title}</h3>
                <p className="text-[#A5ACAF]">{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Call to Action Button */}
          <div className="text-center mt-10">
            <Link
              href="/proposal"
              className="px-6 py-3 bg-[#FD5A1E] text-[#F5F5F5] font-medium rounded-lg shadow-lg hover:bg-[#FD5A1E]/90 transition-colors inline-flex items-center"
            >
              See How It Works
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueProposition;
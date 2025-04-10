'use client';

import useVendingMachines from '@/hooks/useVendingMachines';
import Link from 'next/link';
import Image from 'next/image';
import React, { JSX, useState } from 'react';


function VendingMachinesPage(): JSX.Element {
  const { machinesByCategory } = useVendingMachines();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // All category options
  const categoryOptions = [
    { value: 'all', label: 'All Machines' },
    { value: 'snack', label: 'Snack Machines' },
    { value: 'beverage', label: 'Beverage Machines' },
    { value: 'combo', label: 'Combo Machines' },
    { value: 'food', label: 'Food Machines' }
  ];
  
  // Get machines based on selected category
  const displayedMachines = activeCategory === 'all'
    ? Object.values(machinesByCategory).flat()
    : machinesByCategory[activeCategory as keyof typeof machinesByCategory] || [];
  
  return (
    <div className="py-16 bg-[#000000]" id="vending-machine-options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">Vending Machine Solutions</h1>
          <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
            Explore our range of state-of-the-art vending machines, designed to enhance the workplace experience without any upfront cost.
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 space-x-1 bg-[#4d4d4d] rounded-xl mb-8">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#FD5A1E] ring-[#FD5A1E] ring-opacity-60
                    ${
                  activeCategory === category.value
                    ? 'bg-[#FD5A1E] shadow text-[#F5F5F5]'
                    : 'text-[#F5F5F5] hover:bg-[#a4acac]/20 hover:text-[#FD5A1E]'
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Machines grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMachines.map((machine) => (
            <div key={machine.id} className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative aspect-w-4 aspect-h-3 bg-[#000000]">
                {machine.imageUrl ? (
                  <Image
                    src={machine.imageUrl}
                    alt={machine.name}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full p-4"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#A5ACAF]">
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                  </div>
                )}
                
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    machine.category === 'snack' ? 'bg-[#FD5A1E]/20 text-[#FD5A1E]' :
                    machine.category === 'beverage' ? 'bg-blue-500/20 text-blue-400' :
                    machine.category === 'combo' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {machine.category.charAt(0).toUpperCase() + machine.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">{machine.name}</h2>
                <p className="mt-3 text-[#A5ACAF] line-clamp-3">{machine.description}</p>
                
                {/* Machine specs if available */}
                {(machine.dimensions || machine.capacity) && (
                  <div className="mt-4 text-sm text-[#a4acac] space-y-1">
                    {machine.dimensions && <p>Dimensions: {machine.dimensions}</p>}
                    {machine.capacity && <p>Capacity: {machine.capacity}</p>}
                  </div>
                )}
                
                {/* Feature highlights */}
                {machine.features && machine.features.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-[#F5F5F5] mb-2">Key Features:</h3>
                    <ul className="text-sm text-[#A5ACAF] space-y-1">
                      {machine.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-4 w-4 text-[#FD5A1E] mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-6 space-y-2">
                  <Link
                    href={`/vending-machines/${machine.id}`}
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-lg shadow-md text-sm font-medium text-[#F5F5F5] bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD5A1E]"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/contact?machine=${machine.id}`}
                    className="block w-full text-center px-4 py-2 border border-[#a4acac] rounded-lg shadow-md text-sm font-medium text-[#F5F5F5] bg-[#000000] hover:bg-[#4d4d4d] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a4acac]"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state when no machines match filter */}
        {displayedMachines.length === 0 && (
          <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg p-12 text-center max-w-3xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#A5ACAF] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-[#F5F5F5] mb-2">No machines found</h3>
            <p className="text-[#A5ACAF] mb-6">We couldn't find any machines in the selected category.</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-[#F5F5F5] bg-[#FD5A1E] hover:bg-[#FD5A1E]/90"
            >
              View All Machines
            </button>
          </div>
        )}
        
        {/* Call to action */}
        <div className="mt-16 bg-[#000000] border border-[#a4acac] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">Find the Perfect Vending Solution</h2>
          <p className="text-[#A5ACAF] max-w-3xl mx-auto mb-8">
            Not sure which machine is right for your needs? Our team can help you find the perfect solution for your facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-lg text-base font-medium text-[#F5F5F5] bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD5A1E]"
            >
              Contact Our Team
            </Link>
            <Link 
              href="/proposal" 
              className="inline-flex items-center px-6 py-3 border border-[#a4acac] rounded-lg shadow-lg text-base font-medium text-[#F5F5F5] bg-[#4d4d4d] hover:bg-[#4d4d4d]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a4acac]"
            >
              View Proposal
            </Link>
          </div>
        </div>
        
        {/* Benefits section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4">Why Choose Our Vending Solutions</h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Enhance the workplace experience with our modern and user-friendly vending machines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Zero Upfront Costs',
                description: 'We cover all expenses related to machine installation, maintenance, and stock replenishment.',
                icon: (
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Advanced Technology',
                description: '21.5" touchscreen interface with diverse payment options including credit card, mobile, and cash.',
                icon: (
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Custom Selection',
                description: 'Over 50 snack and drink options tailored to employee preferences to maximize satisfaction.',
                icon: (
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#4d4d4d] p-8 rounded-lg border border-[#a4acac] shadow-lg transition-transform hover:transform hover:scale-105">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#FD5A1E]/20 text-[#FD5A1E] mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{benefit.title}</h3>
                <p className="text-[#A5ACAF]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Common questions about our vending machine solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-[#a4acac]">
            {[
              {
                question: 'What are the upfront costs for installing vending machines?',
                answer: 'There are no upfront costs! We cover all expenses related to machine installation, maintenance, and stock replenishment. The only cost to your facility is the minimal utility expense for machine operation.'
              },
              {
                question: 'How are the machines maintained and restocked?',
                answer: 'Our team handles all aspects of maintenance and restocking. We monitor inventory levels and schedule regular visits to ensure the machines are always well-stocked and in perfect working order.'
              },
              {
                question: 'What types of payment are accepted?',
                answer: 'Our vending machines support multiple payment options, including credit/debit cards, mobile payments (Apple Pay, Google Pay, Samsung Pay), cash, and coins. We can also integrate with employee ID/badge systems upon request.'
              },
              {
                question: 'Can we customize the products offered?',
                answer: 'Absolutely! We offer a customizable selection of over 50 snack and drink options. We work with you to ensure the vending machines cater to your employees\' preferences and dietary needs.'
              },
              {
                question: 'How does the profit-sharing model work?',
                answer: 'Building owners receive a 5% share of gross revenue from each vending machine. This passive income comes with no responsibilities for management or maintenance.'
              }
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <dt className="text-lg font-medium text-[#F5F5F5]">{faq.question}</dt>
                <dd className="mt-2 text-[#A5ACAF]">{faq.answer}</dd>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-[#A5ACAF] mb-4">Have more questions about our vending machine solutions?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#F5F5F5] bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD5A1E]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendingMachinesPage;
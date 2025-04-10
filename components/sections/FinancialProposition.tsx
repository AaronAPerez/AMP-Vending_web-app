'use client';

import React from 'react';
import { motion } from 'framer-motion';


const FinancialProposition = () => {
  // Financial benefit items
  const financialBenefits = [
    {
      title: 'Revenue Sharing',
      description: 'Your business receives a 5% share of gross revenue from each vending machine with monthly passive income.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'No Upfront Costs',
      description: 'Our company covers all expenses related to machine installation, maintenance, and stock replenishment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Operational Cost Coverage',
      description: 'All operational expenses, including machine upkeep, restocking, and repairs, are fully absorbed by our company.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-[#000000]" id="financial-proposition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#FD5A1E] text-[#F5F5F5] text-sm font-medium rounded-full mb-4">
            Financial Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Financial Proposition
          </h2>
          <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
            Our vending machine solution offers a compelling financial proposition, combining zero-cost implementation with quality services and revenue generation.
          </p>
        </div>

        {/* Financial Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {financialBenefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-[#4d4d4d] border border-[#A5ACAF] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#FD5A1E] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">{benefit.title}</h3>
              <p className="text-[#A5ACAF]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="mb-16 bg-[#4d4d4d] rounded-xl border border-[#A5ACAF] overflow-hidden shadow-xl">
          <div className="bg-[#000000] p-6 border-b border-[#A5ACAF]">
            <h3 className="text-2xl font-bold text-[#F5F5F5]">Cost-Benefit Analysis</h3>
            <p className="text-[#A5ACAF] mt-2">See how our solution compares to traditional vending machine approaches</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#000000]/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#F5F5F5]">Cost/Benefit Item</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#F5F5F5]">Traditional Approach</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-[#F5F5F5]">AMP Vending Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A5ACAF]/30">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#F5F5F5]">Initial Equipment Cost</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#A5ACAF]">$2,000 - $5,000 per machine</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#FD5A1E] font-medium">$0 (Fully covered)</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#F5F5F5]">Maintenance & Repairs</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#A5ACAF]">$100 - $300 monthly</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#FD5A1E] font-medium">$0 (Fully covered)</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#F5F5F5]">Stocking & Inventory</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#A5ACAF]">Staff time + product cost</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#FD5A1E] font-medium">$0 (Fully managed)</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-[#F5F5F5]">Revenue Share</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#A5ACAF]">All profits (minus expenses)</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-[#FD5A1E] font-medium">5% of gross revenue, hassle-free</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Scenario Chart */}
        <div className="bg-gradient-to-r from-[#000000] to-[#4d4d4d] p-8 rounded-xl border border-[#A5ACAF] shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">Zero Risk, Passive Income</h3>
              <p className="text-[#A5ACAF] mb-4">
                By partnering with us, your business gains a new stream of passive income without any capital outlay or ongoing responsibilities. Our financial model aligns our interests with yours, creating a win-win scenario.
              </p>
              <div className="bg-[#000000]/50 p-4 rounded-md mt-4 text-[#F5F5F5]">
                <p className="font-medium">
                  The combination of revenue sharing, zero upfront costs, and hands-off operations makes our vending solution an attractive proposition for enhancing workplace amenities while contributing positively to your bottom line.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-[#000000] rounded-lg p-6 text-center">
              <div className="text-xl text-[#A5ACAF] mb-2">Average Monthly Revenue</div>
              <div className="text-4xl font-bold text-[#FD5A1E] mb-3">$300-$800</div>
              <div className="text-sm text-[#A5ACAF]">per machine</div>
              <div className="w-full h-px bg-[#A5ACAF]/20 my-4"></div>
              <div className="text-xl text-[#A5ACAF] mb-2">Your Share</div>
              <div className="text-4xl font-bold text-[#FD5A1E] mb-3">5%</div>
              <div className="text-sm text-[#A5ACAF]">of gross revenue</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProposition;
'use client';

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


const RevenueVisualization = () => {
  // State for machine count selection
  const [machineCount, setMachineCount] = useState(1);
  
  // Calculate monthly and annual revenue based on machine count
  const monthlyRevenue = machineCount * 25;
  const annualRevenue = machineCount * 300;
  
  return (
    <section id="revenue-visualization" className="py-16 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Your <span className="text-[#FD5A1E]">Passive Income</span> Potential
          </h2>
          <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
            Generate additional revenue for your business with our 5% revenue-sharing model at <span className="text-[#FD5A1E] font-bold">ZERO cost</span> to you.
          </p>
        </div>
        
        <div className="bg-[#4d4d4d] rounded-xl p-8 border border-[#a4acac] max-w-5xl mx-auto shadow-xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Annual Revenue Showcase */}
            <motion.div 
              className="flex flex-col items-center justify-center order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full max-w-md bg-[#000000] p-8 rounded-xl border border-[#a4acac] relative overflow-hidden shadow-lg">
                {/* "Zero Cost" badge */}
                <div className="absolute -top-4 -right-4 bg-[#FD5A1E] text-[#F5F5F5] px-4 py-2 rounded-full transform rotate-12 font-bold shadow-lg">
                  <div className="text-xs">At</div>
                  <div className="text-xl">$0 COST</div>
                </div>
                
                {/* Revenue display */}
                <div className="text-center mb-8">
                  <motion.div 
                    className="text-6xl md:text-8xl font-bold text-[#FD5A1E] mb-2 tracking-tight"
                    key={annualRevenue}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    ${annualRevenue}
                  </motion.div>
                  <div className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-1">Annual Passive Income</div>
                  <div className="text-[#A5ACAF]">with {machineCount} vending machine{machineCount > 1 ? 's' : ''}</div>
                </div>
                
                {/* Machine selector */}
                <div className="mb-8">
                  <div className="text-[#A5ACAF] text-center mb-3">Adjust number of machines:</div>
                  <div className="flex items-center justify-center space-x-4">
                    <button 
                      onClick={() => setMachineCount(Math.max(1, machineCount - 1))}
                      className="w-10 h-10 rounded-full bg-[#4d4d4d] text-[#F5F5F5] flex items-center justify-center font-bold text-xl hover:bg-[#a4acac] transition-colors"
                      disabled={machineCount <= 1}
                      aria-label="Decrease machine count"
                    >
                      -
                    </button>
                    <div className="w-16 h-16 rounded-full bg-[#FD5A1E] text-[#F5F5F5] flex items-center justify-center font-bold text-2xl shadow-lg">
                      {machineCount}
                    </div>
                    <button 
                      onClick={() => setMachineCount(machineCount + 1)}
                      className="w-10 h-10 rounded-full bg-[#4d4d4d] text-[#F5F5F5] flex items-center justify-center font-bold text-xl hover:bg-[#a4acac] transition-colors"
                      aria-label="Increase machine count"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Quick calculation display */}
                <div className="bg-[#4d4d4d]/50 rounded-lg p-4 mb-4">
                  <div className="text-center text-[#F5F5F5] font-bold mb-2">Your Revenue Breakdown</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-[#A5ACAF]">Monthly revenue per machine:</span>
                      <span className="text-[#F5F5F5]">$25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A5ACAF]">Annual revenue per machine:</span>
                      <span className="text-[#F5F5F5]">$300</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#a4acac]">
                      <span className="text-[#A5ACAF]">Total monthly revenue:</span>
                      <span className="text-[#FD5A1E] font-bold">${monthlyRevenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A5ACAF]">Total annual revenue:</span>
                      <span className="text-[#FD5A1E] font-bold">${annualRevenue}</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href="/calculator"
                  className="block w-full text-center bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
                >
                  Calculate Detailed Earnings
                </Link>
              </div>
            </motion.div>
            
            {/* Revenue Details and Explanation */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
                Start Earning <span className="text-[#FD5A1E]">Without Spending</span>
              </h3>
              
              <div className="space-y-6">
                {/* Common scenarios */}
                <div className="bg-[#000000] rounded-lg p-6 border border-[#a4acac] shadow-lg">
                  <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Popular Configurations</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
                        1x
                      </div>
                      <div className="flex-1">
                        <div className="text-[#F5F5F5] font-medium">Single Machine</div>
                        <div className="text-[#A5ACAF] text-sm">$25/month × 12 months = <span className="text-[#FD5A1E] font-bold">$300/year</span></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
                        3x
                      </div>
                      <div className="flex-1">
                        <div className="text-[#F5F5F5] font-medium">Triple Machine Setup</div>
                        <div className="text-[#A5ACAF] text-sm">$25/month × 3 machines × 12 months = <span className="text-[#FD5A1E] font-bold">$900/year</span></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
                        5x
                      </div>
                      <div className="flex-1">
                        <div className="text-[#F5F5F5] font-medium">Enterprise Solution</div>
                        <div className="text-[#A5ACAF] text-sm">$25/month × 5 machines × 12 months = <span className="text-[#FD5A1E] font-bold">$1,500/year</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Savings and benefits */}
                <div className="bg-[#000000] rounded-lg p-6 border border-[#a4acac] shadow-lg">
                  <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Zero Cost, Full Service</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#F5F5F5] font-medium">Free Installation</div>
                        <div className="text-[#A5ACAF] text-xs">$0 setup costs</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#F5F5F5] font-medium">No Maintenance Fees</div>
                        <div className="text-[#A5ACAF] text-xs">We handle all service</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#F5F5F5] font-medium">Free Restocking</div>
                        <div className="text-[#A5ACAF] text-xs">Regular product refills</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#F5F5F5] font-medium">Free Repairs</div>
                        <div className="text-[#A5ACAF] text-xs">24-hour service response</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA button */}
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
                  >
                    Start Earning Today
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Adding a comparison testimonial */}
        <div className="mt-12 text-center">
          <blockquote className="max-w-3xl mx-auto italic text-[#A5ACAF]">
            "We installed three AMP vending machines across our office locations, and now we're earning almost $1,000 a year in passive income with zero effort on our part. It's a no-brainer for any business."
          </blockquote>
          <div className="mt-2 font-medium text-[#F5F5F5]">- Michael Rodriguez, Capital Medical Group</div>
        </div>
      </div>
    </section>
  );
};

export default RevenueVisualization;
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// /**
//  * RevenueVisualization Component
//  * 
//  * A visually enhanced section highlighting the passive income potential
//  * with AMP Vending's revenue-sharing model at zero cost.
//  */
// const RevenueVisualization = () => {
//   // State for machine count selection
//   const [machineCount, setMachineCount] = useState(1);
  
//   // Calculate monthly and annual revenue based on machine count
//   const monthlyRevenue = machineCount * 25;
//   const annualRevenue = machineCount * 300;
  
//   return (
//     <section id="revenue-visualization" className="py-16 bg-[#000000]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
//             Your <span className="text-[#FD5A1E]">Passive Income</span> Potential
//           </h2>
//           <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
//             Generate additional revenue for your business with our 5% revenue-sharing model at <span className="text-[#FD5A1E] font-bold">ZERO cost</span> to you.
//           </p>
//         </div>
        
//         <div className="bg-[#4d4d4d] rounded-xl p-8 border border-[#a4acac] max-w-5xl mx-auto shadow-xl">
//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Annual Revenue Showcase */}
//             <motion.div 
//               className="flex flex-col items-center justify-center order-2 md:order-1"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <div className="w-full max-w-md bg-[#000000] p-8 rounded-xl border border-[#a4acac] relative overflow-hidden shadow-lg">
//                 {/* "Zero Cost" badge */}
//                 <div className="absolute -top-4 -right-4 bg-[#FD5A1E] text-[#F5F5F5] px-4 py-2 rounded-full transform rotate-12 font-bold shadow-lg">
//                   <div className="text-xs">At</div>
//                   <div className="text-xl">$0 COST</div>
//                 </div>
                
//                 {/* Revenue display */}
//                 <div className="text-center mb-8">
//                   <motion.div 
//                     className="text-6xl md:text-8xl font-bold text-[#FD5A1E] mb-2 tracking-tight"
//                     key={annualRevenue}
//                     initial={{ scale: 1 }}
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     ${annualRevenue}
//                   </motion.div>
//                   <div className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-1">Annual Passive Income</div>
//                   <div className="text-[#A5ACAF]">with {machineCount} vending machine{machineCount > 1 ? 's' : ''}</div>
//                 </div>
                
//                 {/* Machine selector */}
//                 <div className="mb-8">
//                   <div className="text-[#A5ACAF] text-center mb-3">Adjust number of machines:</div>
//                   <div className="flex items-center justify-center space-x-4">
//                     <button 
//                       onClick={() => setMachineCount(Math.max(1, machineCount - 1))}
//                       className="w-10 h-10 rounded-full bg-[#4d4d4d] text-[#F5F5F5] flex items-center justify-center font-bold text-xl hover:bg-[#a4acac] transition-colors"
//                       disabled={machineCount <= 1}
//                       aria-label="Decrease machine count"
//                     >
//                       -
//                     </button>
//                     <div className="w-16 h-16 rounded-full bg-[#FD5A1E] text-[#F5F5F5] flex items-center justify-center font-bold text-2xl shadow-lg">
//                       {machineCount}
//                     </div>
//                     <button 
//                       onClick={() => setMachineCount(machineCount + 1)}
//                       className="w-10 h-10 rounded-full bg-[#4d4d4d] text-[#F5F5F5] flex items-center justify-center font-bold text-xl hover:bg-[#a4acac] transition-colors"
//                       aria-label="Increase machine count"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Quick calculation display */}
//                 <div className="bg-[#4d4d4d]/50 rounded-lg p-4 mb-4">
//                   <div className="text-center text-[#F5F5F5] font-bold mb-2">Your Revenue Breakdown</div>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between items-center">
//                       <span className="text-[#A5ACAF]">Monthly revenue per machine:</span>
//                       <span className="text-[#F5F5F5]">$25</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-[#A5ACAF]">Annual revenue per machine:</span>
//                       <span className="text-[#F5F5F5]">$300</span>
//                     </div>
//                     <div className="flex justify-between items-center pt-2 border-t border-[#a4acac]">
//                       <span className="text-[#A5ACAF]">Total monthly revenue:</span>
//                       <span className="text-[#FD5A1E] font-bold">${monthlyRevenue}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-[#A5ACAF]">Total annual revenue:</span>
//                       <span className="text-[#FD5A1E] font-bold">${annualRevenue}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <Link
//                   href="/calculator"
//                   className="block w-full text-center bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
//                 >
//                   Calculate Detailed Earnings
//                 </Link>
//               </div>
//             </motion.div>
            
//             {/* Revenue Details and Explanation */}
//             <div className="order-1 md:order-2">
//               <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
//                 Start Earning <span className="text-[#FD5A1E]">Without Spending</span>
//               </h3>
              
//               <div className="space-y-6">
//                 {/* Common scenarios */}
//                 <div className="bg-[#000000] rounded-lg p-6 border border-[#a4acac] shadow-lg">
//                   <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Popular Configurations</h4>
                  
//                   <div className="space-y-4">
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
//                         1x
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[#F5F5F5] font-medium">Single Machine</div>
//                         <div className="text-[#A5ACAF] text-sm">$25/month × 12 months = <span className="text-[#FD5A1E] font-bold">$300/year</span></div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
//                         3x
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[#F5F5F5] font-medium">Triple Machine Setup</div>
//                         <div className="text-[#A5ACAF] text-sm">$25/month × 3 machines × 12 months = <span className="text-[#FD5A1E] font-bold">$900/year</span></div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 bg-[#FD5A1E]/20 rounded-full flex items-center justify-center text-[#FD5A1E] font-bold mr-4">
//                         5x
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[#F5F5F5] font-medium">Enterprise Solution</div>
//                         <div className="text-[#A5ACAF] text-sm">$25/month × 5 machines × 12 months = <span className="text-[#FD5A1E] font-bold">$1,500/year</span></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Savings and benefits */}
//                 <div className="bg-[#000000] rounded-lg p-6 border border-[#a4acac] shadow-lg">
//                   <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Zero Cost, Full Service</h4>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-start">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <div>
//                         <div className="text-[#F5F5F5] font-medium">Free Installation</div>
//                         <div className="text-[#A5ACAF] text-xs">$0 setup costs</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <div>
//                         <div className="text-[#F5F5F5] font-medium">No Maintenance Fees</div>
//                         <div className="text-[#A5ACAF] text-xs">We handle all service</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <div>
//                         <div className="text-[#F5F5F5] font-medium">Free Restocking</div>
//                         <div className="text-[#A5ACAF] text-xs">Regular product refills</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <div>
//                         <div className="text-[#F5F5F5] font-medium">Free Repairs</div>
//                         <div className="text-[#A5ACAF] text-xs">24-hour service response</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* CTA button */}
//                 <div className="mt-6">
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] py-3 px-6 rounded-lg font-medium transition-colors shadow-lg"
//                   >
//                     Start Earning Today
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Adding a comparison testimonial */}
//         <div className="mt-12 text-center">
//           <blockquote className="max-w-3xl mx-auto italic text-[#A5ACAF]">
//             "We installed three AMP vending machines across our office locations, and now we're earning almost $1,000 a year in passive income with zero effort on our part. It's a no-brainer for any business."
//           </blockquote>
//           <div className="mt-2 font-medium text-[#F5F5F5]">- Michael Rodriguez, Capital Medical Group</div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RevenueVisualization;
import React from 'react';
import HeroParallax from '@/components/hero/HeroParallax';
import WorkplaceBenefits from '@/components/sections/WorkplaceBenefits';
import ContactForm from '@/components/sections/ContactForm';
import KoolMoreVendingShowcase from '@/components/sections/KoolMoreVendingShowcase';
import Link from 'next/link';
import ValueProposition from '@/components/sections/ValueProposition';
import VendingSolution from '@/components/vending/VendingSolution';
import dynamic from 'next/dynamic';
import LoadingComponent from '@/components/ui/LoadingComponent';



/**
 * Homepage component with improved information flow to highlight business benefits
 * Implements accessibility-compliant Raiders-inspired color scheme
 */
// Define the correct params type
interface PageParams {
  params: {
    id: string;
  };
}

// Define the metadata generation function with correct params
// export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
//   return {
//     title: `AMP Vending Solutions | Zero-Cost Workplace Vending Machines`,
//     description: `Enhance your workplace with premium vending machines at zero upfront cost. Earn 5% revenue share while providing employee refreshments.`,
//   };
// }

export default function Home() {


  // Business value points used in multiple sections
  const businessValues = [
    {
      title: "Boost Employee Satisfaction",
      description: "Provide 24/7 access to refreshments, improving workplace morale and productivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Generate Passive Income",
      description: "Earn 5% of vending machine revenue with zero investment or maintenance responsibilities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "Zero Maintenance Hassle",
      description: "We handle all stocking, repairs, and maintenance, ensuring 24/7 availability without burdening your staff.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    }
  ];

  // Testimonials from satisfied clients
  const testimonials = [
    {
      quote: "Since installing AMP vending machines, our employees are happier and more productive. We've even generated enough revenue to fund our monthly team lunches.",
      author: "Sarah Johnson",
      position: "Office Manager",
      company: "TechNova Solutions"
    },
    {
      quote: "The zero-cost model was what initially attracted us, but the quality of service and product selection has been outstanding. Our staff loves having 24/7 access to refreshments.",
      author: "Michael Rodriguez",
      position: "HR Director",
      company: "Capital Medical Group"
    }
  ];

// Dynamic imports for below-the-fold components
const RevenueVisualization = dynamic(
  () => import('@/components/sections/RevenueVisualization'),
  { ssr: true, loading: () => <LoadingComponent /> }
);

const FinancialProposition = dynamic(
  () => import('@/components/sections/FinancialProposition'),
  { ssr: true, loading: () => <LoadingComponent /> }
);

const VendingMachineDisplay = dynamic(
  () => import('@/components//vending/VendingMachineDisplay'),
  { ssr: true, loading: () => <LoadingComponent />, }
);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with semi-transparent background */}
      <section id="hero" className="relative min-h-screen bg-black/50">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[#000000]/60 z-10" aria-hidden="true"></div>
        <HeroParallax />
      </section>

      {/* Transition element */}
      <div className="h-32 bg-gradient-to-b from-transparent to-[#000000] -mt-32 relative z-20"></div>

     {/* Value Proposition Section with integrated transition gradient */}
     <ValueProposition />

{/* Vending Machine Solution Section */}
<VendingSolution />

{/* Revenue Visualization Section */}
<RevenueVisualization />

{/* Financial Proposition Section */}
<FinancialProposition />

{/* Featured Vending Machine Display */}
<VendingMachineDisplay />

{/* Call to Action Section */}
<section className="py-16 bg-[#000000]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6">
      Ready to Transform Your Workplace?
    </h2>
    <p className="text-xl text-[#A5ACAF] mb-8 max-w-2xl mx-auto">
      Join our growing network of satisfied clients and start generating passive income with our premium vending solutions today.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link 
        href="/contact" 
        className="bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] px-8 py-3 rounded-lg font-medium shadow-lg transition-colors"
      >
        Request a Quote
      </Link>
      <Link 
        href="/proposal"
        className="bg-transparent border border-[#A5ACAF] hover:bg-[#4d4d4d] text-[#F5F5F5] px-8 py-3 rounded-lg font-medium transition-colors"
      >
        View Full Proposal
      </Link>
    </div>
  </div>
</section>

      {/* Value Proposition - Clear and immediate benefits */}
      {/* <section id="value-proposition" className="py-16 bg-[#000000] relative z-25"> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div> */}
          
          {/* Call to Action Button */}
          {/* <div className="text-center mt-10">
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
        </div> */}
      {/* </section> */}

      {/* Benefits Section - Detailed workplace advantages */}
      {/* <section id="benefits" className="relative z-25 bg-gradient-to-b from-[#000000] to-[#4d4d4d]/20">
        <WorkplaceBenefits />
      </section> */}

      {/* Featured Vending Machine - Show what they're getting */}
      {/* <section id="vending-machine-display">
        <KoolMoreVendingShowcase />
      </section> */}

      {/* <VendingMachineGallery/> */}
      
      {/* Revenue Calculator - Simple visualization of financial benefit */}
      {/* <section id="revenue-visualization" className="py-16 bg-[#000000]">
        <RevenueVisualization/> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Your Passive Income Potential
            </h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              See how much additional revenue your business can generate with our 5% revenue-sharing model.
            </p>
          </div>
          
          <div className="bg-[#4d4d4d] rounded-lg p-8 border border-[#a4acac] max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Monthly Revenue Estimate</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[#a4acac]">
                    <span className="text-[#A5ACAF]">Average Monthly Sales:</span>
                    <span className="text-[#F5F5F5] font-bold">$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#a4acac]">
                    <span className="text-[#A5ACAF]">Your 5% Share:</span>
                    <span className="text-[#FD5A1E] font-bold">$25/month</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#a4acac]">
                    <span className="text-[#A5ACAF]">Annual Passive Income:</span>
                    <span className="text-[#FD5A1E] font-bold">$300/year</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-[#A5ACAF]">Multiple Machines (x3):</span>
                    <span className="text-[#FD5A1E] font-bold">$900/year</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    href="/calculator"
                    className="text-[#FD5A1E] hover:text-[#FD5A1E]/80 font-medium inline-flex items-center"
                  >
                    Calculate your exact earnings
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl font-bold text-[#FD5A1E] mb-2">$0</div>
                  <div className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-1">Upfront Cost</div>
                  <div className="text-[#A5ACAF]">No installation or maintenance fees</div>
                  
                  <div className="mt-8 pt-8 border-t border-[#a4acac]">
                    <div className="text-2xl font-bold text-[#F5F5F5] mb-1">We Handle Everything:</div>
                    <ul className="text-[#A5ACAF] space-y-1">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Installation
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Maintenance
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Restocking
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FD5A1E] mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Repairs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      //   </div> 
      // </section>

      {/* Testimonials - Social proof */}
      {/* <section id="testimonials" className="py-16 bg-gradient-to-b from-[#000000] to-[#4d4d4d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Hear from businesses already benefiting from our vending solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 shadow-lg relative">
                <div className="absolute top-6 left-6 text-6xl text-[#FD5A1E]/20 -z-0">"</div>
                <div className="relative z-10 pt-8">
                  <p className="text-[#F5F5F5] mb-6">{testimonial.quote}</p>
                  <div className="border-t border-[#a4acac] pt-4">
                    <div className="font-bold text-[#F5F5F5]">{testimonial.author}</div>
                    <div className="text-sm text-[#A5ACAF]">{testimonial.position}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Machine Options - Multiple solutions for different needs */}
      {/* <section id="vending-machine-options">
        <VendingMachineOptions />
      </section> */}

      {/* Product Showcase - What's available in the machines */}
      {/* <section id="product-section">
        <ProductSection />
      </section> */}

      {/* Process Overview - How it works */}
      <section id="process-overview" className="py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Getting Started Is Easy
            </h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Our streamlined process gets your vending machines up and running with minimal effort from your team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#FD5A1E] text-[#F5F5F5] font-bold flex items-center justify-center">1</div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mt-2 mb-3">Request a Consultation</h3>
              <p className="text-[#A5ACAF]">Schedule a quick call to discuss your workplace needs and machine options.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#FD5A1E] text-[#F5F5F5] font-bold flex items-center justify-center">2</div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mt-2 mb-3">Site Assessment</h3>
              <p className="text-[#A5ACAF]">We'll visit your location to identify the optimal placement for your machines.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#FD5A1E] text-[#F5F5F5] font-bold flex items-center justify-center">3</div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mt-2 mb-3">Installation</h3>
              <p className="text-[#A5ACAF]">Our team handles the complete setup with zero disruption to your workplace.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6 relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#FD5A1E] text-[#F5F5F5] font-bold flex items-center justify-center">4</div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mt-2 mb-3">Ongoing Support</h3>
              <p className="text-[#A5ACAF]">We manage all maintenance and restocking while you collect your monthly revenue share.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#FD5A1E] text-[#F5F5F5] font-medium rounded-lg shadow-lg hover:bg-[#FD5A1E]/90 transition-colors"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Answer common questions */}
      <section id="faq" className="py-16 bg-gradient-to-b from-[#000000] to-[#4d4d4d]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#A5ACAF] max-w-3xl mx-auto">
              Get answers to common questions about our vending solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">Is there really no cost to my business?</h3>
              <p className="text-[#A5ACAF]">Absolutely! We cover all costs related to the machines, installation, maintenance, and restocking. You simply provide the space.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">How do we receive our revenue share?</h3>
              <p className="text-[#A5ACAF]">We provide monthly electronic payments along with detailed sales reports so you can track your earnings.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">How often are machines restocked?</h3>
              <p className="text-[#A5ACAF]">We monitor inventory levels remotely and typically restock weekly, though high-traffic locations may receive more frequent service.</p>
            </div>
            
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">Can we request specific products?</h3>
              <p className="text-[#A5ACAF]">Yes! We customize the product selection based on your employees' preferences and can adjust offerings based on feedback.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[#FD5A1E] hover:text-[#FD5A1E]/80 font-medium inline-flex items-center"
            >
              View all FAQs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Final push to contact */}
      <section className="py-16 bg-[#FD5A1E] text-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enhance Your Workplace?
          </h2>
          <p className="text-xl text-[#F5F5F5] max-w-3xl mx-auto mb-8">
            Join the growing number of businesses benefiting from our zero-cost vending solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#F5F5F5] text-[#000000] font-medium rounded-full shadow-lg hover:bg-[#000000] hover:text-[#F5F5F5] hover:border-[#F5F5F5] border border-transparent transition-colors"
              aria-label="Get started with our vending machine solutions"
            >
              Get Started
            </Link>
            <Link
              href="/proposal"
              className="px-8 py-4 border-2 border-[#F5F5F5] text-[#F5F5F5] font-medium rounded-full hover:bg-[#000000] transition-colors"
              aria-label="View our vending machine proposal"
            >
              View Proposal
            </Link>
          </div>
        </div>
      </section>


      <section id='contact-form'>
        <ContactForm/>
      </section>
    </div>
  );
}
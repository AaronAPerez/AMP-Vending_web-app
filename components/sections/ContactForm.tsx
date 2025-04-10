'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { contactFormSchema, ContactFormData } from '@/lib/schema/contactFormSchema';

/**
 * Contact Form component
 * Allows visitors to submit their information and vending machine interest
 */
const ContactForm = () => {
  // Form state with react-hook-form and zod validation
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
   resolver: zodResolver(contactFormSchema)
  });
  
  // State for form submission status
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Available vending machine options
  const vendingMachines = [
    { id: 'km-vmrt-50-br', name: 'KoolMore KM-VMRT-50-BR (Refrigerated Combo)' },
    { id: 'km-vmnt-50-b', name: 'KoolMore KM-VMNT-50-B (Snack Machine)' },
    { id: 'ams-35-snack', name: 'AMS 35 Snack Machine' },
    { id: 'royal-650-beverage', name: 'Royal 650 Beverage Machine' },
    { id: 'ams-combi-39', name: 'AMS Combi 39 Machine' },
    { id: 'unsure', name: 'Not sure - I need recommendations' }
  ];

  // Employee count ranges
  const employeeCountRanges = [
    '1-10',
    '11-50',
    '51-100',
    '101-250',
    '251-500',
    '500+'
  ];

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Set status to submitting
      setSubmissionStatus('idle');
      setErrorMessage('');
      
      // Send data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Parse the response
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Success! Clear form and show success message
      setSubmissionStatus('success');
      reset();
      
      // After 5 seconds, reset the submission status
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      setErrorMessage((error as Error).message || 'An unexpected error occurred. Please try again.');
      
      // After 5 seconds, reset the error status
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-[#000000] text-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Contact AMP Vending</h1>
          <p className="text-[#A5ACAF] max-w-2xl mx-auto">
            Tell us about your workplace, and we'll get back to you with a customized vending solution.
          </p>
        </div>
        
        {/* Submission status messages */}
        {submissionStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
            <p className="font-medium">Thank you for your interest!</p>
            <p>We've received your information and will contact you shortly to discuss vending solutions for your workplace.</p>
          </div>
        )}
        
        {submissionStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
            <p className="font-medium">Something went wrong.</p>
            <p>{errorMessage || "We couldn't process your submission. Please try again or contact us directly at info@ampvending.com"}</p>
          </div>
        )}
        
        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-[#4d4d4d] rounded-lg border border-[#a4acac] p-6 md:p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information Section */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-[#F5F5F5] border-b border-[#a4acac] pb-2">
                Personal Information
              </h2>
            </div>
            
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-[#F5F5F5] mb-1">
                First Name <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className={`w-full rounded-md bg-[#000000] border ${errors.firstName ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('firstName')}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.firstName.message}</p>
              )}
            </div>
            
            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-[#F5F5F5] mb-1">
                Last Name <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className={`w-full rounded-md bg-[#000000] border ${errors.lastName ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('lastName')}
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              {errors.lastName && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.lastName.message}</p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#F5F5F5] mb-1">
                Email <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`w-full rounded-md bg-[#000000] border ${errors.email ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.email.message}</p>
              )}
            </div>
            
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[#F5F5F5] mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full rounded-md bg-[#000000] border ${errors.phone ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('phone')}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.phone.message}</p>
              )}
            </div>
            
            {/* Preferred Contact Method */}
            <div className="md:col-span-2">
              <label className="block text-[#F5F5F5] mb-1">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="email"
                    className="text-[#FD5A1E] focus:ring-[#FD5A1E]"
                    {...register('preferredContact')}
                    defaultChecked
                  />
                  <span className="ml-2 text-[#F5F5F5]">Email</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="phone"
                    className="text-[#FD5A1E] focus:ring-[#FD5A1E]"
                    {...register('preferredContact')}
                  />
                  <span className="ml-2 text-[#F5F5F5]">Phone</span>
                </label>
              </div>
            </div>
            
            {/* Rest of the form (company information, address, etc.) */}
            {/* ... (same as in the original component) ... */}
            
            {/* Company Information Section */}
            <div className="md:col-span-2 mt-4">
              <h2 className="text-xl font-semibold mb-4 text-[#F5F5F5] border-b border-[#a4acac] pb-2">
                Company Information
              </h2>
            </div>
            
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-[#F5F5F5] mb-1">
                Company Name <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                className={`w-full rounded-md bg-[#000000] border ${errors.companyName ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('companyName')}
                aria-invalid={errors.companyName ? 'true' : 'false'}
              />
              {errors.companyName && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.companyName.message}</p>
              )}
            </div>
            
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-[#F5F5F5] mb-1">
                Your Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                className="w-full rounded-md bg-[#000000] border border-[#a4acac] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]"
                {...register('jobTitle')}
              />
            </div>
            
            {/* Employee Count */}
            <div>
              <label htmlFor="employeeCount" className="block text-[#F5F5F5] mb-1">
                Number of Employees <span className="text-[#FD5A1E]">*</span>
              </label>
              <select
                id="employeeCount"
                className={`w-full rounded-md bg-[#000000] border ${errors.employeeCount ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('employeeCount')}
                aria-invalid={errors.employeeCount ? 'true' : 'false'}
              >
                <option value="">Select range</option>
                {employeeCountRanges.map(range => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              {errors.employeeCount && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.employeeCount.message}</p>
              )}
            </div>
            
            {/* Address Section */}
            <div className="md:col-span-2 mt-4">
              <h2 className="text-xl font-semibold mb-4 text-[#F5F5F5] border-b border-[#a4acac] pb-2">
                Workplace Address
              </h2>
            </div>
            
            {/* Street Address */}
            <div className="md:col-span-2">
              <label htmlFor="streetAddress" className="block text-[#F5F5F5] mb-1">
                Street Address <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="streetAddress"
                type="text"
                className={`w-full rounded-md bg-[#000000] border ${errors.streetAddress ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('streetAddress')}
                aria-invalid={errors.streetAddress ? 'true' : 'false'}
              />
              {errors.streetAddress && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.streetAddress.message}</p>
              )}
            </div>
            
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-[#F5F5F5] mb-1">
                City <span className="text-[#FD5A1E]">*</span>
              </label>
              <input
                id="city"
                type="text"
                className={`w-full rounded-md bg-[#000000] border ${errors.city ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('city')}
                aria-invalid={errors.city ? 'true' : 'false'}
              />
              {errors.city && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.city.message}</p>
              )}
            </div>
            
            {/* State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-[#F5F5F5] mb-1">
                  State <span className="text-[#FD5A1E]">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  className={`w-full rounded-md bg-[#000000] border ${errors.state ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                  {...register('state')}
                  aria-invalid={errors.state ? 'true' : 'false'}
                />
                {errors.state && (
                  <p className="mt-1 text-red-500 text-sm" role="alert">{errors.state.message}</p>
                )}
              </div>
              
              {/* Zip Code */}
              <div>
                <label htmlFor="zipCode" className="block text-[#F5F5F5] mb-1">
                  ZIP Code <span className="text-[#FD5A1E]">*</span>
                </label>
                <input
                  id="zipCode"
                  type="text"
                  className={`w-full rounded-md bg-[#000000] border ${errors.zipCode ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                  {...register('zipCode')}
                  aria-invalid={errors.zipCode ? 'true' : 'false'}
                />
                {errors.zipCode && (
                  <p className="mt-1 text-red-500 text-sm" role="alert">{errors.zipCode.message}</p>
                )}
              </div>
            </div>
            
            {/* Vending Machine Interest Section */}
            <div className="md:col-span-2 mt-4">
              <h2 className="text-xl font-semibold mb-4 text-[#F5F5F5] border-b border-[#a4acac] pb-2">
                Vending Machine Interest
              </h2>
            </div>
            
            {/* Machine Selection */}
            <div className="md:col-span-2">
              <label htmlFor="interestedMachine" className="block text-[#F5F5F5] mb-1">
                Which vending machine are you interested in? <span className="text-[#FD5A1E]">*</span>
              </label>
              <select
                id="interestedMachine"
                className={`w-full rounded-md bg-[#000000] border ${errors.interestedMachine ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                {...register('interestedMachine')}
                aria-invalid={errors.interestedMachine ? 'true' : 'false'}
              >
                <option value="">Select a vending machine</option>
                {vendingMachines.map(machine => (
                  <option key={machine.id} value={machine.id}>
                    {machine.name}
                  </option>
                ))}
              </select>
              {errors.interestedMachine && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.interestedMachine.message}</p>
              )}
              <p className="mt-2 text-[#A5ACAF] text-sm">
                Not familiar with our options? Select "Not sure" and we'll provide recommendations.
              </p>
            </div>
            
            {/* Additional Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-[#F5F5F5] mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md bg-[#000000] border border-[#a4acac] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]"
                placeholder="Tell us about any specific requirements or questions you have..."
                {...register('message')}
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[#FD5A1E] text-[#F5F5F5] rounded-lg font-medium hover:bg-[#FD5A1E]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD5A1E] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Request'}
              </button>
            </div>
            
            {/* Privacy Note */}
            <div className="md:col-span-2 mt-4 text-center text-[#A5ACAF] text-sm">
              By submitting this form, you agree to our{' '}
              <Link href="/privacy-policy" className="text-[#FD5A1E] hover:underline">
                Privacy Policy
              </Link>.
              We'll use your information only to respond to your inquiry.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
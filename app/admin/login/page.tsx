'use client';

import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define login form schema with zod
const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Admin Login Page
 * Secure login for AMP Vending administrators to access the management dashboard
 */
export default function AdminLogin() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  
  // Form state with React Hook Form and Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });
  
  // Get error message from URL if available
  const [error, setError] = useState<string>('');
  
  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (status === 'authenticated') {
      router.push('/admin/dashboard');
    }
    
    // Check for error message in URL
    const errorMessage = searchParams.get('error');
    if (errorMessage) {
      switch (errorMessage) {
        case 'CredentialsSignin':
          setError('Invalid email or password');
          break;
        default:
          setError('An error occurred during authentication');
      }
    }
  }, [status, router, searchParams]);
  
  // Handle form submission
  const onSubmit = async (data: LoginFormData) => {
    setError('');
    
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      
      if (result?.error) {
        setError('Invalid email or password');
        return;
      }
      
      // Redirect to admin dashboard upon successful login
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };
  
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FD5A1E]"></div>
          <p className="mt-4 text-[#F5F5F5]">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg shadow-lg p-8">
          {/* Logo and Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 relative mb-4">
              <Image 
                src="/images/logo.svg" 
                alt="AMP Vending Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#F5F5F5]">AMP Vending Admin</h1>
            <p className="text-[#A5ACAF] mt-2 text-center">
              Sign in to access the vending machine management dashboard
            </p>
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm" role="alert">{error}</p>
            </div>
          )}
          
          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#F5F5F5] mb-1">
                Email Address
              </label>
              <input 
                id="email"
                type="email" 
                className={`w-full rounded-md bg-[#000000] border ${errors.email ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                placeholder="admin@ampvending.com"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.email.message}</p>
              )}
            </div>
            
            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-[#F5F5F5] mb-1">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                className={`w-full rounded-md bg-[#000000] border ${errors.password ? 'border-red-500' : 'border-[#a4acac]'} px-4 py-2 text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#FD5A1E]`}
                placeholder="••••••••"
                {...register('password')}
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm" role="alert">{errors.password.message}</p>
              )}
            </div>
            
            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-6">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-[#FD5A1E] focus:ring-[#FD5A1E] border-[#a4acac] rounded"
                {...register('rememberMe')}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-[#A5ACAF]">
                Remember me for 30 days
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#F5F5F5] bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD5A1E] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          
          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <a 
              href="/admin/forgot-password" 
              className="text-sm text-[#FD5A1E] hover:text-[#FD5A1E]/80"
            >
              Forgot your password?
            </a>
          </div>
          
          {/* Security Note */}
          <div className="mt-8 pt-6 border-t border-[#a4acac] text-center">
            <div className="flex items-center justify-center text-[#A5ACAF] text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure login with 256-bit encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);
  
  // Show loading state while checking auth
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
  
  // Only render children if authenticated
  return status === 'authenticated' ? (
    <div>{children}</div>
  ) : null;
}
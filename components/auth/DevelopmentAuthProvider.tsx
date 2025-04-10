// components/auth/DevelopmentAuthProvider.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

// Mock session data for development
const mockSession = {
  user: {
    id: "dev-user",
    name: "Development User",
    email: "dev@example.com",
    role: "admin"
  },
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
};

interface AuthProviderProps {
  children: ReactNode;
}

export default function DevelopmentAuthProvider({ children }: AuthProviderProps) {
  // In development, use a mock session
  if (process.env.NODE_ENV === 'development') {
    return (
      <SessionProvider session={mockSession}>
        {children}
      </SessionProvider>
    );
  }
  
  // In production, use the real provider
  return <SessionProvider>{children}</SessionProvider>;
}
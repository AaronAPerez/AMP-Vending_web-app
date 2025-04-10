import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface AdminSidebarProps {
  activePage: string;
}

export default function AdminSidebar({ activePage }: AdminSidebarProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'locations',
      label: 'Locations',
      href: '/admin/locations',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    // Add more navigation items as needed
  ];
  
  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' });
  };
  
  return (
    <div className="h-screen w-64 bg-[#000000] border-r border-[#a4acac] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#a4acac]">
        <Link href="/admin/dashboard" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="AMP Vending Logo" 
            width={40}
            height={40}
            className="mr-3"
          />
          <div>
            <span className="text-xl font-bold text-[#F5F5F5]">AMP</span>
            <span className="text-sm text-[#A5ACAF] block">Admin Portal</span>
          </div>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activePage === item.id 
                    ? 'bg-[#FD5A1E] text-[#F5F5F5]' 
                    : 'text-[#A5ACAF] hover:bg-[#4d4d4d] hover:text-[#F5F5F5]'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Sign Out Button */}
      <div className="p-4 border-t border-[#a4acac]">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center justify-center px-4 py-2 bg-[#000000] hover:bg-[#4d4d4d] text-[#A5ACAF] hover:text-[#F5F5F5] rounded-lg border border-[#a4acac]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 2h10v10H4V5zm4.293 2.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L9.586 12H7a1 1 0 110-2h2.586L8.293 8.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  );
}


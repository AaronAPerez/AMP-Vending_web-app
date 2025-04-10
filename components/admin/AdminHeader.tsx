import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AdminHeaderProps {
  title: string;
  userName: string;
}

export default function AdminHeader({ title, userName }: AdminHeaderProps) {
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };
  
  const closeUserMenu = () => {
    setShowUserMenu(false);
  };
  
  return (
    <header className="bg-[#000000] border-b border-[#a4acac] py-4 px-6 flex justify-between items-center">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#F5F5F5]">{title}</h1>
      
      {/* User Menu */}
      <div className="relative">
        <button
          onClick={toggleUserMenu}
          className="flex items-center space-x-2 text-[#F5F5F5] focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-[#FD5A1E] flex items-center justify-center">
            <span className="font-medium text-[#F5F5F5]">{userName.charAt(0)}</span>
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium">{userName}</div>
            <div className="text-xs text-[#A5ACAF]">Administrator</div>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform ${showUserMenu ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        {showUserMenu && (
          <>
            <div 
              className="fixed inset-0 z-10"
              onClick={closeUserMenu}
            ></div>
            
            <div className="absolute right-0 mt-2 w-48 bg-[#4d4d4d] rounded-lg shadow-lg border border-[#a4acac] z-20 py-1">
              <button
                onClick={() => router.push('/admin/profile')}
                className="block w-full text-left px-4 py-2 text-sm text-[#F5F5F5] hover:bg-[#000000]"
              >
                Profile Settings
              </button>
              <div className="border-t border-[#a4acac] my-1"></div>
              <button
                onClick={() => router.push('/admin/login')}
                className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#000000]"
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
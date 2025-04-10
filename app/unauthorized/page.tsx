import Link from 'next/link';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#4d4d4d] rounded-lg shadow-xl p-8 border border-[#a4acac]">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 text-red-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-[#F5F5F5] mb-2">Unauthorized Access</h1>
          <p className="text-[#A5ACAF] mb-6">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#FD5A1E] text-[#F5F5F5] rounded-lg hover:bg-[#FD5A1E]/90 transition-colors"
            >
              Return to Home
            </Link>
            <Link
              href="/admin/login"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-transparent border border-[#A5ACAF] text-[#F5F5F5] rounded-lg hover:bg-[#4d4d4d] transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
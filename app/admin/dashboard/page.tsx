'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';


// Simple dashboard stats type
interface DashboardStats {
  totalLocations: number;
  totalMachines: number;
  activeClients: number;
  pendingLeads: number;
  revenueThisMonth: number;
  maintenanceRequests: number;
}

// Simple location type
interface Location {
  id: string;
  name: string;
  address: string;
  machines: number;
  contactName: string;
  contactEmail: string;
  lastRestocked: string;
  status: 'active' | 'service_needed' | 'inactive';
  salesThisMonth: number;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [locations, setLocations] = useState<Location[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalLocations: 0,
    totalMachines: 0,
    activeClients: 0,
    pendingLeads: 0,
    revenueThisMonth: 0,
    maintenanceRequests: 0
  });

  // Dummy data for demonstration
  const dummyLocations: Location[] = [
    {
      id: 'loc-001',
      name: 'TechNova Solutions',
      address: '123 Innovation Way, San Francisco, CA 94107',
      machines: 2,
      contactName: 'Sarah Johnson',
      contactEmail: 'sjohnson@technova.com',
      lastRestocked: '2025-03-28',
      status: 'active',
      salesThisMonth: 742.50
    },
    {
      id: 'loc-002',
      name: 'Capital Medical Group',
      address: '456 Healthcare Ave, Sacramento, CA 95814',
      machines: 3,
      contactName: 'Michael Rodriguez',
      contactEmail: 'mrodriguez@capitalmg.com',
      lastRestocked: '2025-04-02',
      status: 'active',
      salesThisMonth: 1203.75
    },
    // Add more locations as needed
  ];

  // Load dashboard data
  useEffect(() => {
    const loadData = async () => {
      // Simulating API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLocations(dummyLocations);
      
      // Calculate stats from locations
      const totalMachines = dummyLocations.reduce((sum, loc) => sum + loc.machines, 0);
      const activeClients = dummyLocations.filter(loc => loc.status === 'active').length;
      const maintenanceRequests = dummyLocations.filter(loc => loc.status === 'service_needed').length;
      const totalRevenue = dummyLocations.reduce((sum, loc) => sum + loc.salesThisMonth, 0);
      
      setStats({
        totalLocations: dummyLocations.length,
        totalMachines,
        activeClients,
        pendingLeads: 3, // Dummy value
        revenueThisMonth: totalRevenue,
        maintenanceRequests
      });
      
      setIsLoading(false);
    };
    
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FD5A1E]"></div>
          <p className="mt-4 text-[#F5F5F5]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] flex">
      {/* Admin Sidebar */}
      <AdminSidebar activePage="dashboard" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader title="Dashboard" userName={session?.user?.name || 'Admin'} />
        
        <main className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Card: Total Locations */}
            <div className="bg-[#4d4d4d] rounded-lg border border-[#a4acac] p-6 shadow-lg">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-[#FD5A1E]/20 text-[#FD5A1E] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#A5ACAF] text-sm">Total Locations</p>
                  <h3 className="text-[#F5F5F5] text-2xl font-bold">{stats.totalLocations}</h3>
                </div>
              </div>
            </div>
            
            {/* Add more stat cards using the same pattern */}
          </div>
          
          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/admin/locations/new" 
                className="bg-[#FD5A1E] hover:bg-[#FD5A1E]/90 text-[#F5F5F5] px-4 py-2 rounded-lg inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add New Location
              </Link>
              
              {/* Add more action buttons */}
            </div>
          </div>
          
          {/* Locations Table */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#F5F5F5]">Locations</h2>
              <Link 
                href="/admin/locations" 
                className="text-[#FD5A1E] hover:text-[#FD5A1E]/80 text-sm inline-flex items-center"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-[#4d4d4d] border border-[#a4acac] rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-[#000000]">
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Location Name
                    // app/admin/dashboard/page.tsx (continued)
                    </th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Address</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Machines</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Contact</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Last Restocked</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Status</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Sales</th>
                    <th className="py-3 px-4 text-left text-[#F5F5F5] font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location) => (
                    <tr key={location.id} className="border-t border-[#a4acac] hover:bg-[#4d4d4d]">
                      <td className="py-3 px-4 text-[#F5F5F5]">{location.name}</td>
                      <td className="py-3 px-4 text-[#A5ACAF]">{location.address}</td>
                      <td className="py-3 px-4 text-[#F5F5F5] text-center">{location.machines}</td>
                      <td className="py-3 px-4">
                        <div className="text-[#F5F5F5]">{location.contactName}</div>
                        <div className="text-[#A5ACAF] text-sm">{location.contactEmail}</div>
                      </td>
                      <td className="py-3 px-4 text-[#A5ACAF]">{location.lastRestocked}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          location.status === 'active' ? 'bg-green-500/20 text-green-400' : 
                          location.status === 'service_needed' ? 'bg-yellow-500/20 text-yellow-400' : 
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {location.status === 'active' ? 'Active' : 
                           location.status === 'service_needed' ? 'Service Needed' : 
                           'Inactive'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#FD5A1E] font-medium">${location.salesThisMonth.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Link 
                            href={`/admin/locations/${location.id}`}
                            className="p-1 bg-[#FD5A1E]/10 text-[#FD5A1E] rounded hover:bg-[#FD5A1E]/20"
                            title="View details"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          <Link 
                            href={`/admin/locations/${location.id}/edit`}
                            className="p-1 bg-blue-500/10 text-blue-400 rounded hover:bg-blue-500/20"
                            title="Edit location"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </Link>
                          <Link 
                            href={`/admin/locations/${location.id}/schedule`}
                            className="p-1 bg-purple-500/10 text-purple-400 rounded hover:bg-purple-500/20"
                            title="Schedule service"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Empty State */}
            {locations.length === 0 && (
              <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#A5ACAF] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-[#F5F5F5] text-lg font-medium mb-2">No Locations Yet</p>
                <p className="text-[#A5ACAF] mb-6">Get started by adding your first location.</p>
                <Link
                  href="/admin/locations/new"
                  className="inline-flex items-center px-4 py-2 bg-[#FD5A1E] text-[#F5F5F5] rounded-lg hover:bg-[#FD5A1E]/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Location
                </Link>
              </div>
            )}
          </div>
          
          {/* Recent Activity Section (Optional) */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Recent Activity</h2>
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg shadow-lg p-4">
              <ul className="divide-y divide-[#a4acac]">
                <li className="py-3 flex items-start">
                  <div className="bg-green-500/20 text-green-400 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5]">
                      <span className="font-medium">TechNova Solutions</span> restocked successfully
                    </p>
                    <p className="text-[#A5ACAF] text-sm">Today, 10:30 AM</p>
                  </div>
                </li>
                <li className="py-3 flex items-start">
                  <div className="bg-yellow-500/20 text-yellow-400 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5]">
                      <span className="font-medium">Innovate Workspace</span> maintenance request submitted
                    </p>
                    <p className="text-[#A5ACAF] text-sm">Yesterday, 2:15 PM</p>
                  </div>
                </li>
                <li className="py-3 flex items-start">
                  <div className="bg-blue-500/20 text-blue-400 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F5F5F5]">
                      New lead from <span className="font-medium">Sierra Vista Medical Center</span>
                    </p>
                    <p className="text-[#A5ACAF] text-sm">April 2, 2025</p>
                  </div>
                </li>
              </ul>
              <div className="text-center mt-4">
                <button className="text-[#FD5A1E] hover:text-[#FD5A1E]/80 text-sm">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
          
          {/* Revenue Chart Section (Placeholder) */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-4">Revenue Overview</h2>
            <div className="bg-[#4d4d4d] border border-[#a4acac] rounded-lg shadow-lg p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#A5ACAF] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-[#F5F5F5] text-lg font-medium mb-2">Revenue Chart Coming Soon</p>
                <p className="text-[#A5ACAF]">Chart visualization will be available in the next update.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
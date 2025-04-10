// lib/services/dashboardService.ts

/**
 * Types for dashboard data
 */
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  machines: number;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  lastRestocked: string;
  status: "active" | "inactive" | "service_needed";
  salesThisMonth: number;
  revenue?: number;
  employeeCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Machine {
  id: string;
  name: string;
  model: string;
  type: "snack" | "beverage" | "combo" | "food";
  locationId: string;
  locationName: string;
  status: "active" | "inactive" | "maintenance";
  lastRestocked: string;
  lastMaintenance: string;
  inventoryLevel: number; // Percentage of capacity filled
  salesThisMonth: number;
  revenue?: number;
  errorCodes?: string[];
  notes?: string;
}

export interface Lead {
  id: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  employeeCount: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  interestedProduct: string;
  message?: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "closed" | "lost";
  assignedTo?: string;
  createdAt: string;
}

export interface DashboardStats {
  totalLocations: number;
  totalMachines: number;
  activeClients: number;
  pendingLeads: number;
  revenueThisMonth: number;
  maintenanceRequests: number;
}

/**
 * Dashboard service class
 * For production, replace with actual API calls to your backend
 */
export class DashboardService {
  /**
   * Get dashboard statistics
   */
  async getStats(): Promise<DashboardStats> {
    // In production, replace with actual API call
    // This is mock data for development

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      totalLocations: 5,
      totalMachines: 12,
      activeClients: 4,
      pendingLeads: 3,
      revenueThisMonth: 4921.0,
      maintenanceRequests: 1,
    };
  }

  /**
   * Get all locations
   */
  async getLocations(): Promise<Location[]> {
    // In production, replace with actual API call
    // This is mock data for development

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return [
      {
        id: "loc-001",
        name: "TechNova Solutions",
        address: "123 Innovation Way",
        city: "San Francisco",
        state: "CA",
        zipCode: "94107",
        machines: 2,
        contactName: "Sarah Johnson",
        contactEmail: "sjohnson@technova.com",
        contactPhone: "(415) 555-1234",
        lastRestocked: "2025-03-28",
        status: "active",
        salesThisMonth: 742.5,
        createdAt: "2024-12-15T08:00:00Z",
        updatedAt: "2025-03-28T14:30:00Z",
      },
      {
        id: "loc-002",
        name: "Capital Medical Group",
        address: "456 Healthcare Ave",
        city: "Sacramento",
        state: "CA",
        zipCode: "95814",
        machines: 3,
        contactName: "Michael Rodriguez",
        contactEmail: "mrodriguez@capitalmg.com",
        contactPhone: "(916) 555-7890",
        lastRestocked: "2025-04-02",
        status: "active",
        salesThisMonth: 1203.75,
        createdAt: "2025-01-05T10:15:00Z",
        updatedAt: "2025-04-02T09:45:00Z",
      },
      {
        id: "loc-003",
        name: "Modesto Transit Center",
        address: "1001 9th Street",
        city: "Modesto",
        state: "CA",
        zipCode: "95354",
        machines: 1,
        contactName: "Adam Barth",
        contactEmail: "abarth@stanrta.org",
        contactPhone: "(209) 555-4321",
        lastRestocked: "2025-04-05",
        status: "active",
        salesThisMonth: 486.25,
        createdAt: "2025-02-20T14:30:00Z",
        updatedAt: "2025-04-05T11:20:00Z",
      },
      {
        id: "loc-004",
        name: "Innovate Workspace",
        address: "789 Collaboration Lane",
        city: "San Jose",
        state: "CA",
        zipCode: "95112",
        machines: 2,
        contactName: "Jessica Wong",
        contactEmail: "jwong@innovatespace.com",
        contactPhone: "(408) 555-9876",
        lastRestocked: "2025-03-30",
        status: "service_needed",
        salesThisMonth: 612.0,
        createdAt: "2025-02-10T09:00:00Z",
        updatedAt: "2025-03-30T16:15:00Z",
      },
      {
        id: "loc-005",
        name: "Blue River Community College",
        address: "555 Education Blvd",
        city: "Oakland",
        state: "CA",
        zipCode: "94607",
        machines: 4,
        contactName: "David Thompson",
        contactEmail: "dthompson",
        contactPhone: "(408) 555-9876",
        lastRestocked: "2025-03-30",
        status: "service_needed",
        salesThisMonth: 612.0,
        createdAt: "2025-02-10T09:00:00Z",
        updatedAt: "2025-03-30T16:15:00Z",
      },
    ];
  }
}

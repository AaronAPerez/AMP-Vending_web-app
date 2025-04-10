import React from 'react';
import VendingMachineDetail from '@/components/vending/VendingMachineDetail';
import { Metadata } from 'next';
import { PageParams } from '@/lib/types';

// Define the correct params type
interface ClientPageParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: string }: ClientPageParams): Promise<Metadata> {
  // You could fetch the machine data here to get the name
  const machineName = "Vending Machine"; // Replace with actual name if you have it
  
  return {
    title: `${machineName} | AMP Vending Solutions`,
    description: `Details and specifications for the ${machineName} from AMP Vending Solutions`,
  };
}

// Make sure to use the same params type for the page component
export default function VendingMachinePage({ params }: PageParams) {
  return <VendingMachineDetail id={params.id} />;
}
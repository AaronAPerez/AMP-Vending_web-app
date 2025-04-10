import VendingMachineDetail from '@/components/vending/VendingMachineDetail';
import { PageParams } from '@/lib/types';

export default function VendingMachinePage({ params }: PageParams) {
  return <VendingMachineDetail id={params.id} />;
}
import Control from '@/sections/home/control/control';
import Dispatch from '@/sections/home/dispatch/dispatch';
import Hero from '@/sections/home/hero/hero';
import MaintenanceAndRepair from '@/sections/home/maintenance-and-repair/maintenance-and-repair';

export default function Home() {
  return (
    <>
      <Hero />
      <Dispatch />
      <MaintenanceAndRepair />
      <Control />
    </>
  );
}

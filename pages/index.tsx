import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroParallax from "@/components/hero/HeroParallax";
import WorkplaceBenefits from "@/components/sections/WorkplaceBenefits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      
<section id="hero" className="bg-black/50 pt-16">
  <HeroParallax/>
     </section>


     {/* Transition element */}
      <div className="h-32 bg-gradient-to-b from-transparent to-[#000000] -mt-32 relative z-20"></div>

      {/* Benefits Section with higher z-index */}
      <section id="benefits" className="relative z-30">
        <WorkplaceBenefits />
      </section>


    </div>
  );
}

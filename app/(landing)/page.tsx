import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LandingNagrik } from "@/components/landing-nagrik";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingNagrik />
      <LandingContent />
    </div>
    
  );
};

export default LandingPage;

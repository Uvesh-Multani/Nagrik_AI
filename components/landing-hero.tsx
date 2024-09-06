"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-800 font-bold py-36 space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Indian Citizens with
        </h1>
        <div className="flex justify-center items-center">
          <div className="bg-custom-gradient bg-clip-text text-transparent"> {/* bg-gradient-to-r from-amber-500 to-orange-400 */}
            <h1>AI-Generated Answers</h1>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-xl text-center font-light text-zinc-400">
        Nagrik AI - AI-Powered Insights on Laws, Rights, and Regulations in India
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Exploring for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

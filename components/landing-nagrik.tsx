import { ShieldCheck, BookOpen, Globe } from "lucide-react";



export const LandingNagrik = () => {
  return (
    <div className="my-7 w-full max-w-4xl mx-auto space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="h-12 w-12 text-amber-500" />
          <h2 className="text-xl font-semibold mt-4">
            Trustworthy Information
          </h2>
          <p className="text-sm mx-3 text-center text-zinc-400 mt-2">
            Accurate and up-to-date legal and civic data, ensuring that you stay
            informed with reliable content.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <BookOpen className="h-12 w-12 text-orange-400" />
          <h2 className="text-xl font-semibold mt-4">Comprehensive Coverage</h2>
          <p className="text-sm mx-3 text-center text-zinc-400 mt-2">
            Extensive information on laws, rights, and government schemes, all
            in one place.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Globe className="h-12 w-12 text-amber-500" />
          <h2 className="text-xl font-semibold mt-4">Nationwide Reach</h2>
          <p className="text-sm mx-3 text-center text-zinc-400 mt-2">
            Serving citizens across India with region-specific information
            tailored to your needs.
          </p>
        </div>
      </div>

      <div className="bg-[#fefefe] shadow-sm p-8 rounded-lg text-black">
        <h2 className="text-2xl font-bold text-center mb-4">Why NAGRIK AI?</h2>
        <p className="text-center text-sm md:text-base">
          Nagrik AI leverages cutting-edge AI technology to bring you the most
          accurate, personalized, and timely civic information. Whether you need
          details on legal rights, government policies, or constitutional acts,
          NAGRIK AI is your go-to resource.
        </p>
      </div>

      <div className="text-center mx-3 text-sm md:text-base text-zinc-400">
        Trusted by thousands of users across India. Join the community and stay
        informed.
      </div>
    </div>
  );
};

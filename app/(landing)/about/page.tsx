import { LandingNavbar } from "@/components/landing-navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <LandingNavbar />
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">About Nagrik AI</h1>
              <p className="text-gray-600">
                NAGRIK AI is a specialized platform designed to empower Indian citizens by providing accurate and up-to-date information on laws, regulations, government schemes, constitutional rights, and legislative acts. Our mission is to make legal and civic information accessible to everyone, enabling citizens to make informed decisions and participate actively in the democratic process.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4 text-center">
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="text-blue-500">30+</span>
                </h2>
                <p className="text-gray-600 mt-2">Citizens Empowered</p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="text-green-500">200+</span>
                </h2>
                <p className="text-gray-600 mt-2">Information Queries</p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="text-yellow-500">5K+</span>
                </h2>
                <p className="text-gray-600 mt-2">Resources Available</p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800">
                  <span className="text-red-500">200+</span>
                </h2>
                <p className="text-gray-600 mt-2">Positive Feedback</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-4">
                At NAGRIK AI, we started with a single goal: to empower every Indian citizen by providing easy access to crucial information. We believe that knowledge is power, and through our platform, we aim to bridge the gap between citizens and the information they need to exercise their rights and fulfill their civic duties.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative">
                <Image 
                  className="w-full h-72 object-cover rounded-lg shadow-lg" 
                  src="/a1.png" 
                  alt="Empowering Citizens" 
                  width={500}  // Replace with actual width
                  height={288} // Replace with actual height
                />
              </div>
              <div className="relative">
                <Image 
                  className="w-full h-72 object-cover rounded-lg shadow-lg" 
                  src="/a2.png" 
                  alt="Information at Fingertips" 
                  width={500}  // Replace with actual width
                  height={288} // Replace with actual height
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Core Values</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Accessibility</h4>
                <p className="text-gray-600 mt-2">
                  Ensuring that every citizen has easy access to vital information, regardless of their background or location.
                </p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Empowerment</h4>
                <p className="text-gray-600 mt-2">
                  Empowering individuals with the knowledge they need to exercise their rights and contribute to society.
                </p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Innovation</h4>
                <p className="text-gray-600 mt-2">
                  Continuously evolving to provide the most accurate and relevant information through cutting-edge technology.
                </p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Excellence</h4>
                <p className="text-gray-600 mt-2">
                  Committing to the highest standards in providing information and user experience.
                </p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Collaboration</h4>
                <p className="text-gray-600 mt-2">
                  Working together with citizens, government, and partners to enhance the platform&apos;s reach and impact.
                </p>
              </div>
              <div className="rounded-lg p-8 bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-xl">
                <h4 className="text-xl font-bold text-gray-800">Responsibility</h4>
                <p className="text-gray-600 mt-2">
                  Upholding the highest ethical standards in delivering trustworthy information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto my-12">
              <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
              <p className="text-gray-600 mt-4">
                Our team is dedicated to making Nagrik AI the go-to platform for civic information in India.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              <div className="flex flex-col items-center mt-8">
                <Image 
                  className="rounded-full h-28 w-28 shadow-lg" 
                  src="/Uvesh.png" 
                  alt="Uvesh Multani" 
                  width={112}  // Replace with actual width
                  height={112} // Replace with actual height
                />
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold text-gray-800">Uvesh Multani</h5>
                  <p className="text-gray-600">Team Member</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-8">
                <Image 
                  className="rounded-full h-28 w-28 shadow-lg" 
                  src="/Ansh.jpg" 
                  alt="Ansh Patel" 
                  width={112}  // Replace with actual width
                  height={112} // Replace with actual height
                />
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold text-gray-800">Ansh Patel</h5>
                  <p className="text-gray-600">Team Member</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-8">
                <Image 
                  className="rounded-full h-28 w-28 shadow-lg" 
                  src="/Jemil.jpg" 
                  alt="Jemil Desai" 
                  width={112}  
                  height={112} 
                />
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold text-gray-800">Jemil Desai</h5>
                  <p className="text-gray-600">Team Member</p>
                </div>
              </div>
              <div className="flex flex-col items-center mt-8">
                <Image 
                  className="rounded-full h-28 w-28 shadow-lg" 
                  src="/1.png" 
                  alt="Arsh Memon" 
                  width={112}  
                  height={112} 
                />
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold text-gray-800">Arsh Memon</h5>
                  <p className="text-gray-600">Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

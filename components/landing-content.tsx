"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image';
import { Button } from "./ui/button";

const Testimonials = [
  {
    name: "Ravi Kumar",
    avatar: "/1.png",
    title: "Government Employee",
    description: "As a government employee, I often need to stay updated on new regulations and procedures. This application has been invaluable in providing accurate and timely information. The user-friendly interface and comprehensive coverage of laws and regulations have made it easier for me to perform my duties efficiently. It has become an essential tool for navigating the complexities of government work.",
  },
  {
    name: "Aarti Sharma",
    avatar: "/2.png",
    title: "Small Business Owner",
    description: "Running a small business comes with numerous legal and regulatory challenges. This application has simplified compliance by offering clear and accessible information on various business regulations. The guidance provided has helped me ensure that my business adheres to all legal requirements, which has saved me time and reduced the risk of non-compliance.",
  },
  {
    name: "Rajesh Patel",
    avatar: "/3.png",
    title: "College Student",
    description: "As a college student, I often need to understand my rights and responsibilities, especially when it comes to student-related issues. This application has been a great resource for learning about my rights and accessing relevant information quickly. The detailed explanations and examples have helped me make informed decisions and better understand my position in various situations.",
  },
  {
    name: "Sneha Iyer",
    avatar: "/4.png",
    title: "Social Activist",
    description: "In my work as a social activist, having access to accurate and detailed information on laws and regulations is crucial. This application has provided me with essential insights into legal frameworks and social justice issues. Its comprehensive resources have supported my advocacy efforts and enabled me to educate others effectively about their rights and legal options.",
  },
];


export const LandingContent = () => {
  return (
    <div className="px-10 py-20">
      <h2 className="text-center text-4xl text-gray-600 font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#f6f5f5] border text-gray-800 hover:bg-[#f0ebeb] shadow-2xl"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="relative w-10 h-10">
                  <Image
                    className="object-cover rounded-full"
                    src={item.avatar}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="px-3">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-500 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 font-light text-gray-700 justify-center">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>

     
    </div>
  );
};

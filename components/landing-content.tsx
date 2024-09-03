"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from 'next/image';

const Testimonials = [
  {
    name: "Uvesh Multani",
    avatar: "/Uvesh.png",
    title: "Data Analyst",
    description: "As a Data Analyst, I've tried numerous tools to analyze and visualize data. However, this application stands out for its intuitive interface and powerful features. The data visualization options are incredibly versatile, allowing me to create detailed and insightful reports with ease. It has significantly boosted my productivity and provided actionable insights that have driven better decision-making in our projects. I highly recommend it to anyone in the data field who values efficiency and depth in data analysis.",
  },
  {
    name: "Ansh Patel",
    avatar: "/2.png",
    title: "Web Developer",
    description: "As a Web Developer, I’m always on the lookout for tools that can streamline my workflow and enhance my coding efficiency. This application has become an essential part of my development toolkit. Its seamless integration with various development environments and its range of customization options have made it easier to manage projects and collaborate with my team. The user interface is sleek and modern, and the application’s performance is top-notch. It has certainly raised the bar for what I expect from development tools.",
  },
  {
    name: "Jemil Desai",
    avatar: "/3.png",
    title: "Full Stack Developer",
    description: "Being a Full Stack Developer, I appreciate tools that can support both front-end and back-end development seamlessly. This application has proven to be a game-changer with its comprehensive feature set that covers all aspects of development. From robust debugging tools to efficient deployment options, it has streamlined many of my development processes. The customer support team is also highly responsive, which adds great value to the overall experience. If you're a developer looking for a versatile and reliable tool, this is it!",
  },
  {
    name: "Param Desai",
    avatar: "/4.png",
    title: "Data Analyst",
    description: "This application has been a revelation for me as a Data Analyst. It offers advanced analytics features that are both powerful and user-friendly. The real-time data processing capabilities have allowed me to perform complex analyses and generate comprehensive reports without any hassle. The application's ability to handle large datasets efficiently has saved me countless hours of work. It’s a must-have for any professional looking to take their data analysis to the next level.",
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

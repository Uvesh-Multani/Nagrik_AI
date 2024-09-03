"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    color: "text-[#8B4513]",
    bgColor: "text-[#8B4513]",
    href: "/conversation",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
    <div className="px-4 md:px-20 lg:px-32 py-8">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Welcome to Nagrik AI Dashboard
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Discover powerful AI tools and features tailored to enhance your experience. Get started by exploring the options below.
        </p>
      </div>
      
      <div className="space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-10 h-10", tool.color)} />
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold">{tool.label}</div>
                <p className="text-sm text-gray-500 mt-1">
                  Explore the advanced features of {tool.label}. Click to dive deeper into this tool.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </Card>
        ))}
      </div>
  
      <div className="mt-28 text-gray-400 space-y-6 ">
        <h3 className="text-xl md:text-2xl font-semibold text-center">Latest Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-gray-400">New Feature: AI Insights</h4>
            <p className="text-sm text-gray-300 mt-2">
              We’ve added AI Insights to help you understand the impact of your interactions. Check it out and see how it can benefit you!
            </p>
          </Card>
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg text-gray-400">
            <h4 className="text-lg font-semibold text-gray-400">Performance Enhancements</h4>
            <p className="text-sm text-gray-300 mt-2">
              We’ve optimized the performance to ensure a smoother and faster experience. Enjoy the improved speed and efficiency.
            </p>
          </Card>
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-gray-400">User Interface Improvements</h4>
            <p className="text-sm text-gray-300 mt-2">
              Our user interface has been refreshed for better usability. Explore the new design and let us know your feedback!
            </p>
          </Card>
        </div>
      </div>
  
      <div className="mt-12 space-y-6">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-400">What Our Users Say</h3>
        <div className="space-y-4">
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 text-gray-400">
            <p className="text-sm text-gray-400">
              &quot;Nagrik AI has transformed the way I interact with technology. The tools are incredibly intuitive and powerful.&quot;
            </p>
            <div className="mt-2 text-right font-semibold">- Uvesh Multani</div>
          </Card>
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg text-gray-400">
            <p className="text-sm text-gray-400 hover:bg-gray-100">
              &quot;The new features are fantastic! I especially love the AI Insights. It’s been a game-changer for me.&quot;
            </p>
            <div className="mt-2 text-right font-semibold">- Ansh Patel</div>
          </Card>
          <Card className="p-4 border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100 text-gray-400">
            <p className="text-sm text-gray-400">
              &quot;Great updates and improvements! The performance enhancements are noticeable, and the UI looks great.&quot;
            </p>
            <div className="mt-2 text-right font-semibold">- Jemil Desai</div>
          </Card>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        <div className="mb-4">
          <Link href="/privacy" className="hover:underline hover:text-gray-600">
            Privacy Policy
          </Link>
          <span className="mx-2">•</span>
          <Link href="/term" className="hover:underline hover:text-gray-600">
            Terms of Service
          </Link>
        </div>
        <div className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} <a href="/" ><span className="hover:underline hover:text-gray-600">Nagrik AI</span>™</a>. All rights reserved.
        </div>
      </div>
    </div>
  </>
  
  );
};

export default DashboardPage;

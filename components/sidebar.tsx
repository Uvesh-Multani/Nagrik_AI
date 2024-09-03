"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {  
  LayoutDashboard, 
  MessageSquare, 
  SettingsIcon, 
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-teal-600",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-[#8B4513]", 
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#f8f2f2] text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative mt-5 w-10 h-10 mr-4">
            <Image fill alt="Logo" src="/logo.png" layout="fill" /> {/* Ensured layout="fill" */}
          </div>
          <h1 className={cn("text-2xl mt-5 font-bold", montserrat.className)}>Nagrik AI</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link 
              href={route.href} 
              key={route.href} 
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition", 
                pathname === route.href ? "text-white bg-gray-600" : "text-gray-700 hover:bg-gray-200 hover:text-gray-900" // Updated hover and active state colors
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color || "text-gray-500")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <Link 
          href="/settings"
          className={cn(
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition", 
            pathname === "/settings" ? "text-white bg-gray-600" : "text-gray-700 hover:bg-gray-200 hover:text-gray-900" // Updated hover and active state colors
          )}
        >
          <div className="flex items-center flex-1">
            <SettingsIcon className="h-7 w-5 mr-3 text-gray-400" />
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

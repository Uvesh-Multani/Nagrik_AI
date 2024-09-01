"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { 
  CodeIcon, 
  ImageIcon, 
  LayoutDashboard, 
  MessageSquare, 
  MusicIcon, 
  SettingsIcon, 
  VideoIcon 
} from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },

];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#111827] text-white">
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
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400" // Conditional styling
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
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
            pathname === "/settings" ? "text-white bg-white/10" : "text-zinc-400" // Conditional styling
          )}
        >
          <div className="flex items-center flex-1">
            <SettingsIcon className="h-7 w-5 mr-3 text-gray-500" />
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

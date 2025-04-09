"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Users,
  Headphones,
  BarChart3,
  Calendar,
  Image,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const routes = [
    { icon: <Home className="h-5 w-5" />, path: "/", label: "Dashboard" },
    {
      icon: <Users className="h-5 w-5" />,
      path: "dashboard/agents",
      label: "Agents",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      path: "/calls",
      label: "Calls",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      path: "/reports",
      label: "Reports",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      path: "/schedule",
      label: "Schedule",
    },
    { icon: <Image className="h-5 w-5" />, path: "/media", label: "Media" },
    {
      icon: <Settings className="h-5 w-5" />,
      path: "/settings",
      label: "Settings",
    },
  ];

  return (
    <aside className="w-16 bg-white flex flex-col items-center py-6 hidden md:flex">
      <div className="flex flex-col items-center space-y-6">
        {routes.map((route) => (
          <Link href={route.path} key={route.path}>
            <div
              className={`p-2.5 rounded-xl cursor-pointer relative group transition-all duration-200 ${
                pathname === route.path
                  ? "text-blue-500 bg-blue-50"
                  : "text-gray-500 hover:text-blue-500 hover:bg-blue-50"
              }`}
              title={route.label}
            >
              {route.icon}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap z-50">
                {route.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-auto mb-6">
        <Link href="/help">
          <div
            className={`p-2.5 rounded-xl cursor-pointer relative group transition-all duration-200 ${
              pathname === "/help"
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:text-blue-500 hover:bg-blue-50"
            }`}
            title="Help & Support"
          >
            <HelpCircle className="h-5 w-5" />
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap z-50">
              Help & Support
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}

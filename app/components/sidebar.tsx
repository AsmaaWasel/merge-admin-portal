"use client";

import type React from "react";

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
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const routes = [
    { icon: <Home className="h-6 w-6" />, path: "/", label: "Dashboard" },
    {
      icon: <Users className="h-6 w-6" />,
      path: "/dashboard/agents",
      label: "Agents",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      path: "/dashboard/calls",
      label: "Calls",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      path: "/dashboard/reports",
      label: "Reports",
    },

    {
      icon: <Calendar className="h-6 w-6" />,
      path: "/dashboard/schedule",
      label: "Schedule",
    },
    {
      icon: <Image className="h-6 w-6" />,
      path: "dashboard/media",
      label: "Media",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      path: "/dashboard/settings",
      label: "Settings",
    },
  ];

  return (
    <aside className="w-16 bg-white border-r flex flex-col items-center py-4 hidden md:flex">
      <div className="flex flex-col items-center space-y-6">
        {routes.map((route) => (
          <SidebarIcon
            key={route.path}
            icon={route.icon}
            path={route.path}
            label={route.label}
            active={pathname === route.path}
          />
        ))}
      </div>
    </aside>
  );
}

interface SidebarIconProps {
  icon: React.ReactNode;
  path: string;
  label: string;
  active?: boolean;
}

function SidebarIcon({ icon, path, label, active = false }: SidebarIconProps) {
  return (
    <Link href={path}>
      <div
        className={`p-2 rounded-lg cursor-pointer relative group ${
          active
            ? "text-blue-600 bg-blue-100"
            : "text-gray-500 hover:bg-gray-100"
        }`}
        title={label}
      >
        {icon}
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
          {label}
        </div>
      </div>
    </Link>
  );
}

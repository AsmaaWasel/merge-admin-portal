import type React from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
  textColor?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  bgColor,
  textColor = "text-gray-700",
}: StatCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`mr-4 p-3 rounded-lg ${bgColor}`}>{icon}</div>
          <div>
            <div className={`text-2xl font-semibold ${textColor}`}>{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

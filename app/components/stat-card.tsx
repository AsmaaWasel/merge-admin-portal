import type React from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
}

export default function StatCard({
  icon,
  value,
  label,
  bgColor,
}: StatCardProps) {
  return (
    <Card className={`${bgColor} text-white overflow-hidden`}>
      <div className="p-4 flex items-center">
        <div className="mr-4">{icon}</div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm">{label}</div>
        </div>
      </div>
    </Card>
  );
}

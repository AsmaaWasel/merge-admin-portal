"use client";

import { useState } from "react";
import {
  Phone,
  BarChart3,
  Clock,
  User,
  Users,
  AlertCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import StatCard from "./stat-card";
import AgentCard from "./agent-card";
import CallTable from "./call-table";
import QueueMonitor from "./queue-monitor";

export default function Dashboard() {
  const [agents] = useState([
    {
      id: 1,
      name: "Rogaia Ali",
      status: "signin",
      image: "/placeholder.svg?height=40&width=40",
      checkIn: "Checkin",
      time: "6/20/2024, 8:15:11 AM",
      breaks: 0,
      allCalls: 0,
      talkDuration: "00:00:00",
      acd: "00:00:00",
    },
    {
      id: 2,
      name: "Ahmed Samy",
      status: "online",
      image: "/placeholder.svg?height=40&width=40",
      checkIn: "Checkin",
      time: "6/20/2024, 8:15:11 AM",
      breaks: 0,
      allCalls: 7,
      talkDuration: "00:00:24",
      acd: "00:00:03",
    },
    {
      id: 3,
      name: "Mohamed Ibrahim",
      status: "online",
      image: "/placeholder.svg?height=40&width=40",
      checkIn: "Checkin",
      time: "4/6/2024, 8:45:51 AM",
      breaks: 0,
      allCalls: 12,
      talkDuration: "00:01:22",
      acd: "00:00:06",
    },
    {
      id: 4,
      name: "Mohamed Abdullah",
      status: "online",
      image: "/placeholder.svg?height=40&width=40",
      checkIn: "Checkin",
      time: "2/15/2024, 4:01:01 PM",
      breaks: 0,
      allCalls: 71,
      talkDuration: "01:03:21",
      acd: "00:00:53",
    },
    {
      id: 5,
      name: "Marwa Nasser",
      status: "online",
      image: "/placeholder.svg?height=40&width=40",
      checkIn: "Checkin",
      time: "8/3/2024, 8:13:25 AM",
      breaks: 0,
      allCalls: 0,
      talkDuration: "00:00:00",
      acd: "00:00:00",
    },
  ]);

  const [calls] = useState([
    {
      id: 1,
      serviceName: "New Dual IVR",
      callDuration: "00:00:15",
      status: "Success",
      callerName: "Mohamed Tealab",
      androidVersion: "--",
      platform: "linux",
      agentName: "Aya Samir",
      agentAnswered: "Aya Samir",
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={<Users className="h-5 w-5 text-blue-500" />}
          value="0"
          label="Dialers in Queue"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<User className="h-5 w-5 text-blue-500" />}
          value="1"
          label="Callers"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Users className="h-5 w-5 text-blue-500" />}
          value="1"
          label="All Calls"
          bgColor="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={<Phone className="h-5 w-5 text-green-500" />}
          value="1"
          label="Success Calls"
          bgColor="bg-green-50"
        />
        <StatCard
          icon={<Phone className="h-5 w-5 text-orange-500" />}
          value="0"
          label="Cancelled"
          bgColor="bg-orange-50"
        />
        <StatCard
          icon={<Phone className="h-5 w-5 text-red-500" />}
          value="0"
          label="Missed"
          bgColor="bg-red-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
          value="100.00 %"
          label="ASR"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
          value="0.00 %"
          label="FCR"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
          value="100.00 %"
          label="SL"
          bgColor="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard
          icon={<AlertCircle className="h-5 w-5 text-blue-500" />}
          value="0.00 %"
          label="Abandoned"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Clock className="h-5 w-5 text-blue-500" />}
          value="00:00:00"
          label="ACD"
          bgColor="bg-blue-50"
        />
        <StatCard
          icon={<Clock className="h-5 w-5 text-blue-500" />}
          value="00:00:00"
          label="Total Duration"
          bgColor="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card className="p-5 shadow-sm">
            <QueueMonitor />
            <CallTable calls={calls} />
          </Card>
        </div>
        <div className="lg:col-span-1">
          <div className="space-y-5">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

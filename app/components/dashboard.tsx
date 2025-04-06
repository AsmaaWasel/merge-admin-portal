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
    <div className="flex-1 overflow-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatCard
          icon={<Users className="h-8 w-8 text-white" />}
          value="0"
          label="Dialers in Queue"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<User className="h-8 w-8 text-white" />}
          value="1"
          label="Callers"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<Users className="h-8 w-8 text-white" />}
          value="1"
          label="All Calls"
          bgColor="bg-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatCard
          icon={<Phone className="h-8 w-8 text-white" />}
          value="1"
          label="Success Calls"
          bgColor="bg-green-500"
        />
        <StatCard
          icon={<Phone className="h-8 w-8 text-white" />}
          value="0"
          label="Cancelled"
          bgColor="bg-orange-500"
        />
        <StatCard
          icon={<Phone className="h-8 w-8 text-white" />}
          value="0"
          label="Missed"
          bgColor="bg-red-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatCard
          icon={<BarChart3 className="h-8 w-8 text-white" />}
          value="100.00 %"
          label="ASR"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<BarChart3 className="h-8 w-8 text-white" />}
          value="0.00 %"
          label="FCR"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<BarChart3 className="h-8 w-8 text-white" />}
          value="100.00 %"
          label="SL"
          bgColor="bg-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatCard
          icon={<AlertCircle className="h-8 w-8 text-white" />}
          value="0.00 %"
          label="Abandoned"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<Clock className="h-8 w-8 text-white" />}
          value="00:00:00"
          label="ACD"
          bgColor="bg-blue-600"
        />
        <StatCard
          icon={<Clock className="h-8 w-8 text-white" />}
          value="00:00:00"
          label="Total Duration"
          bgColor="bg-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2">
          <Card className="p-4">
            <QueueMonitor />
            <CallTable calls={calls} />
          </Card>
        </div>
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface AgentProps {
  id: number;
  name: string;
  status: string;
  image: string;
  checkIn: string;
  time: string;
  breaks: number;
  allCalls: number;
  talkDuration: string;
  acd: string;
}

interface AgentCardProps {
  agent: AgentProps;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm">
      <div className="flex items-center p-3 bg-gray-50">
        <Image
          src={agent.image || "/placeholder.svg"}
          alt={agent.name}
          width={28}
          height={28}
          className="rounded-full mr-2"
        />
        <div className="font-medium text-gray-800">{agent.name}</div>
        <div className="ml-auto">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              agent.status === "online"
                ? "bg-green-50 text-green-600"
                : agent.status === "signin"
                ? "bg-blue-50 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {agent.status}
          </span>
        </div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 text-xs border-b py-1.5">
          <div className="font-medium text-gray-700">{agent.checkIn}</div>
          <div className="col-span-2 text-right text-gray-500">Time</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1.5">
          <div></div>
          <div className="col-span-2 text-right text-gray-600">
            {agent.time}
          </div>
        </div>

        <div className="grid grid-cols-3 text-xs border-b py-1.5">
          <div className="font-medium text-gray-700">Breaks</div>
          <div className="text-center text-gray-500">Times</div>
          <div className="text-right text-gray-500">Duration</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1.5">
          <div></div>
          <div className="text-center text-gray-600">{agent.breaks}</div>
          <div className="text-right text-gray-600">00:00:00</div>
        </div>

        <div className="grid grid-cols-3 text-xs border-b py-1.5">
          <div className="font-medium text-gray-700">All Calls</div>
          <div className="text-center text-gray-500">T D</div>
          <div className="text-right text-gray-500">ACD</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1.5">
          <div className="text-gray-600">{agent.allCalls}</div>
          <div className="text-center text-gray-600">{agent.talkDuration}</div>
          <div className="text-right text-gray-600">{agent.acd}</div>
        </div>
      </div>
    </Card>
  );
}

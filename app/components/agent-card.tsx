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
    <Card className="overflow-hidden">
      <div className="flex items-center p-2 bg-gray-50 border-b">
        <Image
          src={agent.image || "/placeholder.svg"}
          alt={agent.name}
          width={24}
          height={24}
          className="rounded-full mr-2"
        />
        <div className="font-medium">{agent.name}</div>
        <div className="ml-auto">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              agent.status === "online"
                ? "bg-green-100 text-green-800"
                : agent.status === "signin"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {agent.status}
          </span>
        </div>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-3 text-xs border-b py-1">
          <div className="font-medium">{agent.checkIn}</div>
          <div className="col-span-2 text-right">Time</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1">
          <div></div>
          <div className="col-span-2 text-right text-gray-600">
            {agent.time}
          </div>
        </div>

        <div className="grid grid-cols-3 text-xs border-b py-1">
          <div className="font-medium">Breaks</div>
          <div className="text-center">Times</div>
          <div className="text-right">Duration</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1">
          <div></div>
          <div className="text-center">{agent.breaks}</div>
          <div className="text-right">00:00:00</div>
        </div>

        <div className="grid grid-cols-3 text-xs border-b py-1">
          <div className="font-medium">All Calls</div>
          <div className="text-center">T D</div>
          <div className="text-right">ACD</div>
        </div>
        <div className="grid grid-cols-3 text-xs py-1">
          <div>{agent.allCalls}</div>
          <div className="text-center">{agent.talkDuration}</div>
          <div className="text-right">{agent.acd}</div>
        </div>
      </div>
    </Card>
  );
}

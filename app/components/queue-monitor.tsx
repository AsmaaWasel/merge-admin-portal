import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function QueueMonitor() {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Live Queue Monitor</h2>
        <Badge variant="outline" className="bg-blue-100">
          4 Queue/s
        </Badge>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="font-medium mr-2">Q: test</span>
          <Badge variant="outline" className="bg-blue-100">
            1 Agent/s
          </Badge>
        </div>
        <div className="flex">
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            <User className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">abdelrhmanelsayed72</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-2">
          <span className="font-medium mr-2">Q: SIP Group</span>
          <Badge variant="outline" className="bg-blue-100">
            3 Agent/s
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            <User className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">Mohamed Abdullah</span>
          </div>
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            <User className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">Aya Samir</span>
          </div>
          <div className="flex items-center bg-gray-100 rounded-md p-2">
            <User className="h-4 w-4 mr-2 text-blue-600" />
            <span className="text-sm">Marwa Nasser</span>
          </div>
        </div>
      </div>
    </div>
  );
}

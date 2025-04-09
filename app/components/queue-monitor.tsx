import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function QueueMonitor() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">
          Live Queue Monitor
        </h3>
        <Badge variant="outline" className="bg-blue-50 text-blue-600">
          4 Queue/s
        </Badge>
      </div>

      <div className="mb-5 p-4 rounded-lg bg-gray-50">
        <div className="flex items-center mb-3">
          <span className="font-medium text-gray-700 mr-2">Q: test</span>
          <Badge variant="outline" className="bg-blue-50 text-blue-600">
            1 Agent/s
          </Badge>
        </div>
        <div className="flex">
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm text-gray-700">abdelrhmanelsayed72</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-gray-50">
        <div className="flex items-center mb-3">
          <span className="font-medium text-gray-700 mr-2">Q: SIP Group</span>
          <Badge variant="outline" className="bg-blue-50 text-blue-600">
            3 Agent/s
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm text-gray-700">Mohamed Abdullah</span>
          </div>
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm text-gray-700">Aya Samir</span>
          </div>
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm">
            <User className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm text-gray-700">Marwa Nasser</span>
          </div>
        </div>
      </div>
    </div>
  );
}

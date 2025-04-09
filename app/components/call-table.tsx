import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

interface CallProps {
  id: number;
  serviceName: string;
  callDuration: string;
  status: string;
  callerName: string;
  androidVersion: string;
  platform: string;
  agentName: string;
  agentAnswered: string;
}

interface CallTableProps {
  calls: CallProps[];
}

export default function CallTable({ calls }: CallTableProps) {
  return (
    <div className="mt-5">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Recent Calls</h3>
      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-600 font-medium">
                Service Name
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Call Duration
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Status
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Caller Name
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Android Version
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Platform
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Agent Name
              </TableHead>
              <TableHead className="text-gray-600 font-medium">
                Agent Answered
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calls.map((call) => (
              <TableRow key={call.id} className="hover:bg-gray-50">
                <TableCell className="text-gray-700">
                  {call.serviceName}
                </TableCell>
                <TableCell className="text-gray-700">
                  {call.callDuration}
                </TableCell>
                <TableCell>
                  {call.status === "Success" ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Success
                    </span>
                  ) : (
                    call.status
                  )}
                </TableCell>
                <TableCell className="text-gray-700">
                  {call.callerName}
                </TableCell>
                <TableCell className="text-gray-700">
                  {call.androidVersion}
                </TableCell>
                <TableCell className="text-gray-700">{call.platform}</TableCell>
                <TableCell className="text-gray-700">
                  {call.agentName}
                </TableCell>
                <TableCell className="text-gray-700">
                  {call.agentAnswered}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>
          Records per page:
          <select className="ml-2 rounded p-1 text-sm">
            <option>5</option>
            <option>10</option>
            <option>25</option>
          </select>
        </div>
        <div>1-1 of 1</div>
      </div>
    </div>
  );
}

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
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Call Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Caller Name</TableHead>
            <TableHead>Android Version</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Agent Name</TableHead>
            <TableHead>Agent Answered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.serviceName}</TableCell>
              <TableCell>{call.callDuration}</TableCell>
              <TableCell>
                {call.status === "Success" ? (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Success
                  </span>
                ) : (
                  call.status
                )}
              </TableCell>
              <TableCell>{call.callerName}</TableCell>
              <TableCell>{call.androidVersion}</TableCell>
              <TableCell>{call.platform}</TableCell>
              <TableCell>{call.agentName}</TableCell>
              <TableCell>{call.agentAnswered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4 text-sm">
        <div>
          Records per page:
          <select className="ml-2 border rounded p-1">
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

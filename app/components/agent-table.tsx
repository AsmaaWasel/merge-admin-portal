"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Agent } from "../types/agent";

interface AgentTableProps {
  agents: Agent[];
  onEdit: (agent: Agent) => void;
  onDelete: (id: number) => void;
}

export default function AgentTable({
  agents,
  onEdit,
  onDelete,
}: AgentTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination
  const totalPages = Math.ceil(agents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAgents = agents.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12"></TableHead>
              <TableHead className="font-medium text-gray-600">Name</TableHead>
              <TableHead className="font-medium text-gray-600">Role</TableHead>
              <TableHead className="font-medium text-gray-600">
                Username
              </TableHead>
              <TableHead className="font-medium text-gray-600">Email</TableHead>
              <TableHead className="font-medium text-gray-600">
                Status
              </TableHead>
              <TableHead className="font-medium text-gray-600 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAgents.length > 0 ? (
              paginatedAgents.map((agent) => (
                <TableRow key={agent.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Image
                      src={agent.avatar || "/placeholder.svg"}
                      alt={agent.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-gray-700">
                    {agent.name}
                  </TableCell>
                  <TableCell className="text-gray-600">{agent.role}</TableCell>
                  <TableCell className="text-gray-600">
                    {agent.username}
                  </TableCell>
                  <TableCell className="text-gray-600">{agent.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${
                        agent.active
                          ? "bg-green-50 text-green-600 border-green-200"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {agent.active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(agent)}
                        className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(agent.id)}
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-8 text-gray-500"
                >
                  No agents found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {agents.length > 0 && (
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-gray-500">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, agents.length)} of{" "}
            {agents.length} agents
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={`h-8 w-8 ${
                  currentPage === page ? "bg-blue-500 hover:bg-blue-600" : ""
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

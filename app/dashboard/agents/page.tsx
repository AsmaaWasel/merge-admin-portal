"use client";

import { useState } from "react";
import Layout from "@/app/components/layout";
import AgentTable from "@/app/components/agent-table";
import AgentForm from "@/app/components/agent-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import type { Agent, NewAgent } from "@/app/types/agent";

export default function AgentsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null);

  // Sample data for agents
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
      username: "johndoe",
      email: "john.doe@example.com",
      active: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Agent",
      username: "janesmith",
      email: "jane.smith@example.com",
      active: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Supervisor",
      username: "robertj",
      email: "robert.j@example.com",
      active: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Agent",
      username: "emilyd",
      email: "emily.d@example.com",
      active: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "Agent",
      username: "michaelw",
      email: "michael.w@example.com",
      active: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]);

  // Filter agents based on search query
  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle creating a new agent
  const handleCreateAgent = (newAgent: NewAgent) => {
    setAgents([
      ...agents,
      {
        ...newAgent,
        id: agents.length + 1,
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ]);
    setIsFormOpen(false);
  };

  // Handle editing an agent
  const handleEditAgent = (updatedAgent: Agent) => {
    setAgents(
      agents.map((agent) =>
        agent.id === updatedAgent.id ? updatedAgent : agent
      )
    );
    setEditingAgent(null);
    setIsFormOpen(false);
  };

  // Handle deleting an agent
  const handleDeleteAgent = (id: number) => {
    setAgents(agents.filter((agent) => agent.id !== id));
  };

  // Open form for editing
  const openEditForm = (agent: Agent) => {
    setEditingAgent(agent);
    setIsFormOpen(true);
  };

  // Handle form submission (create or edit)
  const handleFormSubmit = (agent: Agent | NewAgent) => {
    if (editingAgent) {
      handleEditAgent(agent as Agent);
    } else {
      handleCreateAgent(agent as NewAgent);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Agents Management
        </h1>

        {/* Search and Add Agent */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, role, username, or email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              setIsFormOpen(true);
              setEditingAgent(null);
            }}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Agent
          </Button>
        </div>

        {/* Agents Table */}
        <AgentTable
          agents={filteredAgents}
          onEdit={openEditForm}
          onDelete={handleDeleteAgent}
        />

        {/* Agent Form Modal */}
        {isFormOpen && (
          <AgentForm
            onClose={() => {
              setIsFormOpen(false);
              setEditingAgent(null);
            }}
            onSubmit={handleFormSubmit}
            agent={editingAgent}
          />
        )}
      </div>
    </Layout>
  );
}

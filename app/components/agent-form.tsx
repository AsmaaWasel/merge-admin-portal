"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { Agent, NewAgent } from "../types/agent";

interface AgentFormProps {
  onClose: () => void;
  onSubmit: (agent: Agent | NewAgent) => void;
  agent: Agent | null;
}

export default function AgentForm({
  onClose,
  onSubmit,
  agent,
}: AgentFormProps) {
  const [formData, setFormData] = useState<NewAgent & Partial<Agent>>({
    name: "",
    role: "Agent",
    username: "",
    email: "",
    active: true,
    sib: "",
    user: "",
    pass: "",
  });

  // If editing, populate form with agent data
  useEffect(() => {
    if (agent) {
      setFormData({
        ...agent,
        sib: agent.sib || "",
        user: agent.user || "",
        pass: agent.pass || "",
      });
    }
  }, [agent]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle role selection
  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  // Handle active status toggle
  const handleActiveChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, active: checked }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            {agent ? "Edit Agent" : "Create New Agent"}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={handleRoleChange}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Supervisor">Supervisor</SelectItem>
                <SelectItem value="Agent">Agent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Avatar */}
          <div className="space-y-2">
            <Label>Avatar</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mt-1">
                SVG, PNG, JPG (max. 2MB)
              </p>
            </div>
          </div>

          {/* SIB */}
          <div className="space-y-2">
            <Label htmlFor="sib">SIB</Label>
            <Input
              id="sib"
              name="sib"
              value={formData.sib}
              onChange={handleChange}
              placeholder="ID"
            />
          </div>

          {/* USER */}
          <div className="space-y-2">
            <Label htmlFor="user">USER</Label>
            <Input
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              placeholder="USER"
            />
          </div>

          {/* PASS */}
          <div className="space-y-2">
            <Label htmlFor="pass">PASS</Label>
            <Input
              id="pass"
              name="pass"
              type="password"
              value={formData.pass}
              onChange={handleChange}
              placeholder="PASS"
            />
          </div>

          {/* Active Status */}
          <div className="flex items-center justify-between">
            <Label htmlFor="active" className="cursor-pointer">
              Active Status
            </Label>
            <Switch
              id="active"
              checked={formData.active}
              onCheckedChange={handleActiveChange}
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              {agent ? "Update Agent" : "Create Agent"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

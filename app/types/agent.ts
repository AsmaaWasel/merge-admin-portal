export interface Agent {
  id: number;
  name: string;
  role: string;
  username: string;
  email: string;
  active: boolean;
  avatar: string;
  sib?: string;
  user?: string;
  pass?: string;
}

export type NewAgent = Omit<Agent, "id" | "avatar">;

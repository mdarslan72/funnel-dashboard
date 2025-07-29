export interface Funnel {
  id: string;
  name: string;
  status: "Draft" | "Published";
  steps: number;
  lastUpdated: string;
  folderId?: string; // Optional folder assignment
}

export interface Folder {
  id: string;
  name: string;
  createdAt: string;
  funnelCount: number;
}

export interface Template {
  id: string;
  name: string;
  image: string;
  category: string;
}

export type CreateType = "blank" | "template";

export type ViewMode = "list" | "time";

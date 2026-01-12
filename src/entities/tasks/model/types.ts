export interface ITask {
  id: string;
  projectId: string;
  name: string;
  completed: boolean;
  createdAt: number;
}

export const TASKS_SORTED = [
  { value: "newest", label: "Сначала новые" },
  { value: "oldest", label: "Сначала старые" },
  { value: "active", label: "Сначала активные" },
  { value: "completed", label: "Сначала завершенные" },
];

export type TASKS_SORTED = "newest" | "oldest" | "active" | "completed";

export type TASKS_FILTERS = "all" | "active" | "completed";

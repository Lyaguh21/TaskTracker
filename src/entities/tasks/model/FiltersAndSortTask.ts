import { ITask, TASKS_FILTERS, TASKS_SORTED } from "./types";

export function normalizeText(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export const sortFn = (sort: TASKS_SORTED) => (a: ITask, b: ITask) => {
  switch (sort) {
    case "oldest":
      return a.createdAt - b.createdAt;

    case "newest":
      return b.createdAt - a.createdAt;

    case "active":
      return Number(a.completed) - Number(b.completed);

    case "completed":
      return Number(b.completed) - Number(a.completed);

    default:
      return 0;
  }
};

export const sortedTasks = (tasks: ITask[], sort: TASKS_SORTED) => {
  return [...tasks].sort(sortFn(sort));
};

export const filteredTasks = (
  tasks: ITask[],
  filter: TASKS_FILTERS,
  search: string
) => {
  switch (filter) {
    case "active":
      return tasks.filter(
        (task) => !task.completed && normalizeText(task.name).includes(search)
      );
    case "completed":
      return tasks.filter(
        (task) => task.completed && normalizeText(task.name).includes(search)
      );
    case "all":
      return tasks.filter((task) => normalizeText(task.name).includes(search));
    default:
      return tasks.filter((task) => normalizeText(task.name).includes(search));
  }
};

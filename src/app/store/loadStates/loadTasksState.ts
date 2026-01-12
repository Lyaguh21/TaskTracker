import {
  tasksAdapter,
  tasksInitialState,
} from "../../../entities/tasks/model/tasksSlice";

export function loadTasksState() {
  try {
    return JSON.parse(
      localStorage.getItem("tasks") ||
        JSON.stringify(tasksAdapter.getInitialState())
    );
  } catch {
    return tasksInitialState;
  }
}

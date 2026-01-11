import { isAnyOf } from "@reduxjs/toolkit";
import { startAppListening } from "../listenerMiddleware";
import {
  taskAdded,
  taskRemoved,
  taskUpdated,
} from "../../../entities/tasks/model/tasksSlice";

export function taskListeners() {
  startAppListening({
    matcher: isAnyOf(taskAdded, taskUpdated, taskRemoved),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify(listenerApi.getState().tasks)
      );
    },
  });
}

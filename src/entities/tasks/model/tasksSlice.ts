import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ITask } from "./types";
import { projectRemoved } from "../../projects/model/projectsSlice";

export const tasksAdapter = createEntityAdapter<ITask>({
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

export const tasksInitialState = JSON.parse(
  localStorage.getItem("tasks") ||
    JSON.stringify(tasksAdapter.getInitialState())
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    taskAdded: tasksAdapter.addOne,
    taskUpdated: tasksAdapter.updateOne,
    taskRemoved: tasksAdapter.removeOne,
    taskRemovedMany: tasksAdapter.removeMany,
  },

  extraReducers: (builder) => {
    builder.addCase(projectRemoved, (state, action) => {
      const projectId = action.payload;
      const deleteIDS: string[] = [];

      for (const id of state.ids) {
        const task = state.entities[id];
        if (task && task.projectId === projectId) {
          deleteIDS.push(task.id);
        }
      }
      tasksAdapter.removeMany(state, deleteIDS);
    });
  },
});

export default tasksSlice.reducer;
export const { taskAdded, taskUpdated, taskRemoved, taskRemovedMany } =
  tasksSlice.actions;

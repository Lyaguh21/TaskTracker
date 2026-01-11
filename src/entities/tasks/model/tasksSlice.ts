import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ITask } from "./types";

export const tasksAdapter = createEntityAdapter<ITask>({
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const initialState = JSON.parse(
  localStorage.getItem("tasks") ||
    JSON.stringify(tasksAdapter.getInitialState())
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: tasksAdapter.addOne,
    taskUpdated: tasksAdapter.updateOne,
    taskRemoved: tasksAdapter.removeOne,
  },
});

export default tasksSlice.reducer;
export const { taskAdded, taskUpdated, taskRemoved } = tasksSlice.actions;

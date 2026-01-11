import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IProject } from "./types";

export const projectsAdapter = createEntityAdapter<IProject>({
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const initialState =
  JSON.parse(localStorage.getItem("projects") || "null") ||
  projectsAdapter.getInitialState();

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded: projectsAdapter.addOne,
    projectUpdated: projectsAdapter.updateOne,
    projectRemoved: projectsAdapter.removeOne,
  },
});

export default projectsSlice.reducer;
export const { projectAdded, projectUpdated, projectRemoved } =
  projectsSlice.actions;

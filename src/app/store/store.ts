import { configureStore } from "@reduxjs/toolkit";
import { viewSlice } from "../../entities/view/model/viewSlice";
import { projectsSlice } from "../../entities/projects/model/projectsSlice";
import { listenerMiddleware, registerListeners } from "./listenerMiddleware";
import { tasksSlice } from "../../entities/tasks/model/tasksSlice";
import { loadViewState } from "./loadStates/loadViewState";
import { loadProjectsState } from "./loadStates/loadProjectsState";
import { loadTasksState } from "./loadStates/loadTasksState";

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,
    projects: projectsSlice.reducer,
    tasks: tasksSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),

  preloadedState: {
    view: loadViewState(),
    projects: loadProjectsState(),
    tasks: loadTasksState(),
  },
});

registerListeners();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

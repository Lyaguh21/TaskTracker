import { configureStore } from "@reduxjs/toolkit";
import { viewSlice } from "../../entities/view/model/viewSlice";
import { projectsSlice } from "../../entities/projects/model/projectsSlice";
import { listenerMiddleware, registerListeners } from "./listenerMiddleware";

export const store = configureStore({
  reducer: {
    view: viewSlice.reducer,
    projects: projectsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

registerListeners();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

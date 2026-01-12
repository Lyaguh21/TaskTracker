import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { projectListeners } from "./listeners/projectListeners";
import { AppDispatch, RootState } from "./store";
import { taskListeners } from "./listeners/taskListeners";
import { searchListeners } from "./listeners/searchListeners";
import { filtersListeners } from "./listeners/filtersListeners";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  projectListeners();
  taskListeners();
  searchListeners();
  filtersListeners();
}

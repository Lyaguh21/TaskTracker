import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { projectListeners } from "./listeners/projectListeners";
import { AppDispatch, RootState } from "./store";
import { taskListeners } from "./listeners/taskListeners";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  projectListeners();
  taskListeners();
}

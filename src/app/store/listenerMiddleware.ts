import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { projectListeners } from "./listeners/projectListeners";
import { AppDispatch, RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function registerListeners() {
  projectListeners();
}

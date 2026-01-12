import { isAnyOf } from "@reduxjs/toolkit";
import {
  projectAdded,
  projectRemoved,
  projectUpdated,
} from "../../../entities/projects/model/projectsSlice";
import { startAppListening } from "../../store/listenerMiddleware";
export function projectListeners() {
  startAppListening({
    matcher: isAnyOf(projectAdded, projectUpdated, projectRemoved),
    effect: async (action, listenerApi) => {
      localStorage.setItem(
        "projects",
        JSON.stringify(listenerApi.getState().projects)
      );
    },
  });
  startAppListening({
    matcher: isAnyOf(projectRemoved),
    effect: async (action, listenerApi) => {
      localStorage.removeItem("selectedProject");
    },
  });
}

import {
  projectInitialState,
  projectsAdapter,
} from "../../../entities/projects/model/projectsSlice";

export function loadProjectsState() {
  try {
    return (
      JSON.parse(localStorage.getItem("projects") || "null") ||
      projectsAdapter.getInitialState()
    );
  } catch {
    return projectInitialState;
  }
}

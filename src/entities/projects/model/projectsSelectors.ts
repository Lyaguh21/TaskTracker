import { RootState } from "../../../app/store/store";
import { projectsAdapter } from "./projectsSlice";

export const projectsSelectors = projectsAdapter.getSelectors(
  (state: RootState) => state.projects
);

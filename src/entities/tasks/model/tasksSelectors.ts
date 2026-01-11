import { RootState } from "../../../app/store/store";
import { tasksAdapter } from "./tasksSlice";

export const tasksSelectors = tasksAdapter.getSelectors(
  (state: RootState) => state.tasks
);

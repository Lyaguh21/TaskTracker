import { RootState } from "../../../app/store/store";

export const openedCreateProjectModal = (state: RootState) =>
  state.view.ui.openCreateProjectModal;

export const openedCreateTaskModal = (state: RootState) =>
  state.view.ui.openCreateTaskModal;

export const selectProjectId = (state: RootState) => state.view.selectProjectId;

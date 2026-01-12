import { RootState } from "../../../app/store/store";

export const openedCreateProjectModal = (state: RootState) =>
  state.view.ui.openCreateProjectModal;

export const openedCreateTaskModal = (state: RootState) =>
  state.view.ui.openCreateTaskModal;

export const selectProjectId = (state: RootState) => state.view.selectProjectId;

export const selectFilter = (state: RootState) => state.view.filter;

export const selectSort = (state: RootState) => state.view.sort;

export const selectSearch = (state: RootState) => state.view.search;

export const selectApplySearch = (state: RootState) => state.view.searchApply;

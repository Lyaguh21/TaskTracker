import { createSlice } from "@reduxjs/toolkit";
import { TASKS_FILTERS, TASKS_SORTED } from "../../tasks/model/types";

export interface IViewSlice {
  selectProjectId: string | null;
  filter: TASKS_FILTERS;
  sort: TASKS_SORTED;
  search: string;
  searchApply: string;
  ui: {
    openCreateProjectModal: boolean;
    openCreateTaskModal: boolean;
  };
}

export const viewInitialState: IViewSlice = {
  selectProjectId: null,
  filter: "all",
  sort: "newest",
  search: "",
  searchApply: "",
  ui: { openCreateProjectModal: false, openCreateTaskModal: false },
};

export const viewSlice = createSlice({
  name: "view",
  initialState: viewInitialState,
  reducers: {
    setSelectProjectId: (state, action) => {
      state.selectProjectId = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setApplySearch: (state, action) => {
      state.searchApply = action.payload;
    },

    setOpenCreateProjectModal: (state, action) => {
      state.ui.openCreateProjectModal = action.payload;
    },

    setOpenCreateTaskModal: (state, action) => {
      state.ui.openCreateTaskModal = action.payload;
    },
  },
});

export const {
  setOpenCreateProjectModal,
  setOpenCreateTaskModal,
  setSelectProjectId,
  setFilter,
  setSort,
  setSearch,
  setApplySearch,
} = viewSlice.actions;
export default viewSlice.reducer;

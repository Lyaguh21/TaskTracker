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

const initialState: IViewSlice = {
  selectProjectId: localStorage.getItem("selectedProject") || null,
  filter: (localStorage.getItem("filter") as TASKS_FILTERS) || "all",
  sort: (localStorage.getItem("sort") as TASKS_SORTED) || "newest",
  search: (localStorage.getItem("search") as string) || "",
  searchApply: (localStorage.getItem("search") as string) || "",
  ui: {
    openCreateProjectModal: false,
    openCreateTaskModal: false,
  },
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
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

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export interface IViewSlice {
  selectProjectId: string | null;
  filter: string;
  sort: string;
  search: string;
  ui: {
    openCreateProjectModal: boolean;
    openCreateTaskModal: boolean;
  };
}

const initialState: IViewSlice = {
  selectProjectId: localStorage.getItem("selectedProject") || null,
  filter: "all",
  sort: "newest",
  search: "",
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
} = viewSlice.actions;
export default viewSlice.reducer;

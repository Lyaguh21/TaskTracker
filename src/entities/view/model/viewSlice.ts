import { createSlice } from "@reduxjs/toolkit";

export interface IViewSlice {
  selectProjectId: string | null;
  ui: {
    openCreateProjectModal: boolean;
    openCreateTaskModal: boolean;
  };
}

const initialState: IViewSlice = {
  selectProjectId: localStorage.getItem("selectedProject") || null,
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

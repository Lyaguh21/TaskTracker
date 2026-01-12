import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";
import { tasksAdapter } from "./tasksSlice";
import { filteredTasks, sortedTasks } from "./FiltersAndSortTask";

import {
  selectFilter,
  selectProjectId,
  selectSort,
  selectApplySearch,
} from "../../view/model/viewSelectors";

export const tasksSelectors = tasksAdapter.getSelectors(
  (state: RootState) => state.tasks
);

export const selectVisibleTask = createSelector(
  [
    tasksSelectors.selectAll,
    selectFilter,
    selectSort,
    selectProjectId,
    selectApplySearch,
  ],
  (tasks, filter, sort, selectProjectId, search) => {
    return sortedTasks(
      filteredTasks(
        [...tasks].filter((el) => el.projectId === selectProjectId),
        filter,
        search
      ),
      sort
    );
  }
);


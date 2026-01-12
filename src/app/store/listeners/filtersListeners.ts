import { startAppListening } from "../listenerMiddleware";
import { isAnyOf } from "@reduxjs/toolkit";
import {
  setApplySearch,
  setFilter,
  setSort,
} from "../../../entities/view/model/viewSlice";

export function filtersListeners() {
  startAppListening({
    matcher: isAnyOf(setFilter, setSort, setApplySearch),
    effect: async (action, listenerApi) => {
      localStorage.setItem("filter", listenerApi.getState().view.filter);
      localStorage.setItem("sort", listenerApi.getState().view.sort);
      localStorage.setItem("search", listenerApi.getState().view.searchApply);
    },
  });
}

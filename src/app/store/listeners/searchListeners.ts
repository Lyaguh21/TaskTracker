import { isAnyOf } from "@reduxjs/toolkit";
import {
  setApplySearch,
  setSearch,
} from "../../../entities/view/model/viewSlice";
import { startAppListening } from "../listenerMiddleware";

export function searchListeners() {
  startAppListening({
    matcher: isAnyOf(setSearch),
    effect: async (action, listenerApi) => {
      listenerApi.cancelActiveListeners();

      await listenerApi.delay(300);

      const term = listenerApi.getState().view.search;
      listenerApi.dispatch(setApplySearch(term));
    },
  });
}

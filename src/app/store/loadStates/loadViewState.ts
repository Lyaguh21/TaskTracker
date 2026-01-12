import {
  TASKS_FILTERS,
  TASKS_SORTED,
} from "../../../entities/tasks/model/types";
import {
  IViewSlice,
  viewInitialState,
} from "../../../entities/view/model/viewSlice";

export function loadViewState(): IViewSlice {
  try {
    return {
      selectProjectId: localStorage.getItem("selectedProject"),
      filter: (localStorage.getItem("filter") as TASKS_FILTERS) ?? "all",
      sort: (localStorage.getItem("sort") as TASKS_SORTED) ?? "newest",
      search: localStorage.getItem("search") ?? "",
      searchApply: localStorage.getItem("search") ?? "",
      ui: { openCreateProjectModal: false, openCreateTaskModal: false },
    };
  } catch {
    return viewInitialState;
  }
}

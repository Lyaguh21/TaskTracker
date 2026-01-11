import { Box } from "@mantine/core";
import TasksHeader from "../components/TasksHeader";
import TasksList from "../components/TasksList";
import TasksFilter from "../components/TasksFilter";
import { useAppSelector } from "../../../app/store/hooks";
import { selectProjectId } from "../../../entities/view/model/viewSelectors";

export default function TasksSection() {
  const selectedProjectId = useAppSelector(selectProjectId);
  return (
    <Box bg={"#F9FAFB"} w="50%" h="100%">
      <TasksHeader />
      {selectedProjectId && <TasksFilter />}
      <TasksList />
    </Box>
  );
}

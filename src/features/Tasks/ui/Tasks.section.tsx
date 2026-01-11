import { Box } from "@mantine/core";
import TasksHeader from "../components/TasksHeader";
import TasksList from "../components/TasksList";
import TasksFilter from "../components/TasksFilter";

export default function TasksSection() {
  return (
    <Box bg={"#F9FAFB"} w="50%" h="100%">
      <TasksHeader />
      <TasksFilter />
      <TasksList />
    </Box>
  );
}

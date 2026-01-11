import { Flex } from "@mantine/core";
import "@mantine/core/styles.css";
import ProjectsSection from "../features/Projects/ui/Projects.section";
import TasksSection from "../features/Tasks/ui/Tasks.section";
import Modals from "../features/view/ui/Modals";

export default function App() {
  return (
    <>
      <Modals />

      <Flex w="100vw" h="100vh">
        <ProjectsSection />
        <TasksSection />
      </Flex>
    </>
  );
}

import { Box } from "@mantine/core";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsList from "../components/ProjectsList";

export default function ProjectsSection() {
  return (
    <>
      <Box
        bg={"white-color.0"}
        w="50%"
        h="100%"
        style={{ borderRight: "2px solid var(--mantine-color-white-color-1)" }}
      >
        <ProjectsHeader />
        <ProjectsList />
      </Box>
    </>
  );
}

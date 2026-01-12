import { Button, Center, ScrollArea, Stack } from "@mantine/core";
import EmptyBadge from "../../../shared/ui/EmptyBadge";
import { IconFolder } from "@tabler/icons-react";
import { setOpenCreateProjectModal } from "../../../entities/view/model/viewSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { projectsSelectors } from "../../../entities/projects/model/projectsSelectors";
import ProjectTemplate from "./ProjectTemplate";

export default function ProjectsList() {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(projectsSelectors.selectAll);

  if (projects.length === 0)
    return (
      <Center w="100%" h="calc(100% - 70px)">
        <EmptyBadge
          icon={<IconFolder size={28} />}
          title="Проекты отсутствуют"
          description="Создайте новый проект, чтобы начать"
          button={
            <Button
              onClick={() => {
                dispatch(setOpenCreateProjectModal(true));
              }}
            >
              Создать проект
            </Button>
          }
        />
      </Center>
    );

  return (
    <ScrollArea h="calc(100% - 70px)" p={16}>
      <Stack>
        {projects?.map((project) => (
          <ProjectTemplate key={project.id} project={project} />
        ))}
      </Stack>
    </ScrollArea>
  );
}

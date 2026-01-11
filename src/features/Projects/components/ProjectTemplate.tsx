import { ActionIcon, Flex, Group, Stack, Text } from "@mantine/core";
import { IconEdit, IconHttpDelete } from "@tabler/icons-react";
import { IProject } from "../../../entities/projects/model/types";
import { selectProjectId } from "../../../entities/view/model/viewSelectors";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setSelectProjectId } from "../../../entities/view/model/viewSlice";
import ConfirmActionModal from "../../../shared/ui/ConfirmActionModal";
import { useDisclosure } from "@mantine/hooks";
import { projectRemoved } from "../../../entities/projects/model/projectsSlice";
import EditProjectModal from "./Modals/EditProjectModal";

export default function ProjectTemplate({ project }: { project: IProject }) {
  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);
  const dispatch = useAppDispatch();
  const selectedProject = useAppSelector(selectProjectId);

  return (
    <>
      <EditProjectModal opened={openedEditModal} onClose={closeEditModal} />
      <ConfirmActionModal
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
        title="Удалить проект?"
        action={() => {
          dispatch(projectRemoved(project.id));
          dispatch(setSelectProjectId(null));
          closeDeleteModal();
        }}
      />

      <Flex
        w="100%"
        bdrs={8}
        justify="space-between"
        align="center"
        style={{
          border:
            selectedProject === project.id
              ? "2px solid var(--mantine-color-primary-color-5)"
              : "2px solid var(--mantine-color-white-color-1)",
        }}
        p={10}
        onClick={() => {
          dispatch(setSelectProjectId(project.id));
          localStorage.setItem("selectedProject", project.id);
        }}
      >
        <Stack gap={0}>
          <Text size="lg" fw={700}>
            {project.name}
          </Text>
          <Text size="sm" c="gray">
            8 Задач
          </Text>
          <Text size="sm" c="gray">
            {new Date(project.createdAt).toLocaleString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Stack>

        <Group gap={4}>
          <ActionIcon variant="light" size="lg" onClick={openEditModal}>
            <IconEdit />
          </ActionIcon>
          <ActionIcon
            variant="light"
            color="red"
            size="lg"
            onClick={openDeleteModal}
          >
            <IconHttpDelete />
          </ActionIcon>
        </Group>
      </Flex>
    </>
  );
}

import { ActionIcon, Checkbox, Flex, Group, Stack, Text } from "@mantine/core";
import { IconEdit, IconHttpDelete } from "@tabler/icons-react";
import { useAppDispatch } from "../../../app/store/hooks";
import ConfirmActionModal from "../../../shared/ui/ConfirmActionModal";
import { useDisclosure } from "@mantine/hooks";
import EditTaskModal from "./Modals/EditTaskModal";
import {
  taskRemoved,
  taskUpdated,
} from "../../../entities/tasks/model/tasksSlice";
import { useState } from "react";
import { ITask } from "../../../entities/tasks/model/types";

export default function TaskTemplate({ task }: { task: ITask }) {
  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);
  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const [completed, setCompleted] = useState(task?.completed || false);
  const dispatch = useAppDispatch();

  const onCompletedChange = (value: boolean) => {
    setCompleted(value);
    dispatch(
      taskUpdated({
        id: task.id,
        changes: {
          completed: value,
        },
      })
    );
  };

  return (
    <>
      <EditTaskModal
        idTask={task.id}
        opened={openedEditModal}
        onClose={closeEditModal}
      />
      <ConfirmActionModal
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
        title="Удалить задачу?"
        action={() => {
          dispatch(taskRemoved(task.id));
          closeDeleteModal();
        }}
      />

      <Flex
        w="100%"
        bdrs={8}
        justify="space-between"
        align="center"
        style={{
          border: "2px solid var(--mantine-color-white-color-1)",
        }}
        p={10}
      >
        <Stack gap={2}>
          <Group gap={10}>
            <Checkbox
              size="lg"
              checked={completed}
              onChange={(event) =>
                onCompletedChange(event.currentTarget.checked)
              }
            />
            <Text size="lg" fw={700}>
              {task.completed ? <s>{task.name}</s> : task.name}
            </Text>
          </Group>

          <Text size="sm" c="gray">
            {new Date(task.createdAt).toLocaleString("ru-RU", {
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

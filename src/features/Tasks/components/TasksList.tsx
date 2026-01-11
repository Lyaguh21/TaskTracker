import { Center, ScrollArea, Stack } from "@mantine/core";
import EmptyBadge from "../../../shared/ui/EmptyBadge";
import { IconArrowLeft, IconMoodEmpty } from "@tabler/icons-react";
import { useAppSelector } from "../../../app/store/hooks";
import { selectProjectId } from "../../../entities/view/model/viewSelectors";
import { tasksSelectors } from "../../../entities/tasks/model/tasksSelectors";
import TaskTemplate from "./TaskTemplate";

export default function TasksList() {
  const selectedProjectId = useAppSelector(selectProjectId);
  const taskList = useAppSelector(tasksSelectors.selectAll).filter(
    (el) => el.projectId === selectedProjectId
  );

  if (!selectedProjectId)
    return (
      <Center
        w="100%"
        h={
          selectedProjectId
            ? "calc(100% - 70px - 113.6px)"
            : "calc(100% - 70px)"
        }
      >
        <EmptyBadge
          icon={<IconArrowLeft size={28} />}
          title="Выберите проект или создайте новый"
          description="Выберите проект слева или создайте новый, чтобы начать добавлять задачи."
        />
      </Center>
    );

  if (taskList.length === 0)
    return (
      <Center
        w="100%"
        h={
          selectedProjectId
            ? "calc(100% - 70px - 113.6px)"
            : "calc(100% - 70px)"
        }
      >
        <EmptyBadge
          icon={<IconMoodEmpty size={28} />}
          title="Задач пока нет"
          description="Создайте первую задачу в этом проекте."
        />
      </Center>
    );

  return (
    <ScrollArea h="calc(100% - 70px)" p={16}>
      <Stack>
        {taskList.map((task) => (
          <TaskTemplate key={task.id} task={task} />
        ))}
      </Stack>
    </ScrollArea>
  );
}

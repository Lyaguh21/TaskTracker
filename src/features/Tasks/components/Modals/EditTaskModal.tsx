import { Modal, Stack, Input, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { taskUpdated } from "../../../../entities/tasks/model/tasksSlice";
import { tasksSelectors } from "../../../../entities/tasks/model/tasksSelectors";

export default function EditTaskModal({
  opened,
  onClose,
  idTask,
}: {
  idTask: string;
  opened: boolean;
  onClose: () => void;
}) {
  const editedTask = useAppSelector((s) =>
    tasksSelectors.selectById(s, idTask!)
  );
  const [name, setName] = useState(editedTask?.name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setName(editedTask?.name);
  }, [editedTask]);

  const onSubmit = () => {
    dispatch(
      taskUpdated({
        id: idTask,
        changes: {
          name: name,
          createdAt: Date.now(),
        },
      })
    );
    onClose();
    setName("");
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      title="Редактировать задачу"
    >
      <Stack>
        <Input.Wrapper label="Название задачи">
          <Input
            placeholder="Введите название задачи"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input.Wrapper>
        <Button fullWidth variant="filled" onClick={onSubmit}>
          Сохранить изменения
        </Button>
      </Stack>
    </Modal>
  );
}

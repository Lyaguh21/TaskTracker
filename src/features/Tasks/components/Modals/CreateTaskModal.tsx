import { Modal, Stack, Input, Button } from "@mantine/core";

import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { taskAdded } from "../../../../entities/tasks/model/tasksSlice";
import { selectProjectId } from "../../../../entities/view/model/viewSelectors";

export default function CreateTaskModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const projectId = useAppSelector(selectProjectId);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(
      taskAdded({
        id: nanoid(),
        projectId: projectId!,
        name: name,
        createdAt: Date.now(),
        completed: false,
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
      title="Создать новую задачу"
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
          Создать задачу
        </Button>
      </Stack>
    </Modal>
  );
}

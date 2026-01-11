import { Modal, Stack, Input, Button } from "@mantine/core";

import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppDispatch } from "../../../../app/store/hooks";
import { projectAdded } from "../../../../entities/projects/model/projectsSlice";

export default function CreateProjectModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(
      projectAdded({
        id: nanoid(),
        name: name,
        createdAt: Date.now(),
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
      title="Создать новый проект"
    >
      <Stack>
        <Input.Wrapper label="Название проекта">
          <Input
            placeholder="Введите название проекта"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input.Wrapper>
        <Button fullWidth variant="filled" onClick={onSubmit}>
          Создать проект
        </Button>
      </Stack>
    </Modal>
  );
}

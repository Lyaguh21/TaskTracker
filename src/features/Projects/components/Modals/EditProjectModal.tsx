import { Modal, Stack, Input, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks";
import { projectUpdated } from "../../../../entities/projects/model/projectsSlice";
import { selectProjectId } from "../../../../entities/view/model/viewSelectors";
import { projectsSelectors } from "../../../../entities/projects/model/projectsSelectors";

export default function EditProjectModal({
  opened,
  onClose,
}: {
  opened: boolean;
  onClose: () => void;
}) {
  const editedProjectId = useAppSelector(selectProjectId);
  const editedProject = useAppSelector((s) =>
    projectsSelectors.selectById(s, editedProjectId!)
  );
  const [name, setName] = useState(editedProject?.name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setName(editedProject?.name);
  }, [editedProject]);

  const onSubmit = () => {
    dispatch(
      projectUpdated({
        id: editedProjectId!,
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
      title="Редактировать проект"
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
          Сохранить изменения
        </Button>
      </Stack>
    </Modal>
  );
}

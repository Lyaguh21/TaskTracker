import { Flex, Text, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { selectProjectId } from "../../../entities/view/model/viewSelectors";
import { setOpenCreateTaskModal } from "../../../entities/view/model/viewSlice";
import { memo } from "react";

export default memo(function TasksHeader() {
  const dispatch = useAppDispatch();
  const selectedProjectId = useAppSelector(selectProjectId);

  return (
    <Flex
      w="100%"
      justify="space-between"
      align={"center"}
      p={16}
      bg={"white-color.0"}
      style={{ borderBottom: "2px solid var(--mantine-color-white-color-1)" }}
    >
      <Text size="xl" fw={700}>
        Задачи
      </Text>

      <Button
        variant="light"
        leftSection={<IconPlus />}
        disabled={!selectedProjectId}
        onClick={() => {
          dispatch(setOpenCreateTaskModal(true));
        }}
      >
        Создать задачу
      </Button>
    </Flex>
  );
});

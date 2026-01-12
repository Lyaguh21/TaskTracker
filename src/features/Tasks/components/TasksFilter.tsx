import { Button, Flex, Group, Input, Select, Stack } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import {
  selectFilter,
  selectSearch,
  selectSort,
} from "../../../entities/view/model/viewSelectors";
import {
  setFilter,
  setSearch,
  setSort,
} from "../../../entities/view/model/viewSlice";
import { TASKS_SORTED } from "../../../entities/tasks/model/types";

export default function TasksFilter() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const filter = useAppSelector(selectFilter);
  const sort = useAppSelector(selectSort);

  return (
    <Stack
      gap={8}
      p={16}
      bg={"white-color.0"}
      style={{ borderBottom: "2px solid var(--mantine-color-white-color-1)" }}
    >
      <Input
        placeholder="Поиск задач..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        leftSection={<IconSearch size={16} />}
      />

      <Flex gap={4} justify="space-between">
        <Group gap={4}>
          <Button
            color={filter === "all" ? "primary-color" : "black"}
            variant={filter === "all" ? "filled" : "light"}
            onClick={() => dispatch(setFilter("all"))}
            size="sm"
          >
            Все
          </Button>
          <Button
            color={filter === "active" ? "primary-color" : "black"}
            variant={filter === "active" ? "filled" : "light"}
            onClick={() => dispatch(setFilter("active"))}
            size="sm"
          >
            Активные
          </Button>
          <Button
            color={filter === "completed" ? "primary-color" : "black"}
            variant={filter === "completed" ? "filled" : "light"}
            onClick={() => dispatch(setFilter("completed"))}
            size="sm"
          >
            Завершенные
          </Button>
        </Group>

        <Select
          data={TASKS_SORTED}
          value={sort}
          onChange={(value) => dispatch(setSort(value))}
          allowDeselect={false}
          w={150}
          size="sm"
          placeholder="Фильтр по статусу"
        />
      </Flex>
    </Stack>
  );
}

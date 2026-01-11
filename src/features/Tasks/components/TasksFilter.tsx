import { Button, Flex, Group, Input, Select, Stack } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { TASKS_FILTERS } from "../../../entities/tasks/model/Filters";

export default function TasksFilter() {
  return (
    <Stack
      gap={8}
      p={16}
      bg={"white-color.0"}
      style={{ borderBottom: "2px solid var(--mantine-color-white-color-1)" }}
    >
      <Input
        placeholder="Поиск задач..."
        leftSection={<IconSearch size={16} />}
      />

      <Flex gap={4} justify="space-between">
        <Group gap={4}>
          <Button color={"primary-color"} variant="filled" size="sm">
            Все
          </Button>
          <Button color={"black"} variant="light" size="sm">
            Активные
          </Button>
          <Button color={"black"} variant="light" size="sm">
            Завершенные
          </Button>
        </Group>

        <Select
          data={TASKS_FILTERS}
          defaultValue={"newest"}
          allowDeselect={false}
          w={150}
          size="sm"
          placeholder="Фильтр по статусу"
        />
      </Flex>
    </Stack>
  );
}

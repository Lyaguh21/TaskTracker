import { Flex, Text, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function ProjectsHeader() {
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
        Проекты
      </Text>
      <Button variant="light" leftSection={<IconPlus />}>
        Создать проект
      </Button>
    </Flex>
  );
}

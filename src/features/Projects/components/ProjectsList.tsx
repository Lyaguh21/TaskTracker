import { Button, Center, ScrollArea } from "@mantine/core";
import EmptyBadge from "../../../shared/ui/EmptyBadge";
import { IconFolder } from "@tabler/icons-react";

export default function ProjectsList() {
  return (
    <Center w="100%" h="calc(100% - 70px)">
      <EmptyBadge
        icon={<IconFolder size={28} />}
        title="Проекты отсутствуют"
        description="Создайте новый проект, чтобы начать"
        button={<Button>Создать проект</Button>}
      />
    </Center>
  );
  return <ScrollArea h="calc(100% - 70px)" p={16}></ScrollArea>;
}

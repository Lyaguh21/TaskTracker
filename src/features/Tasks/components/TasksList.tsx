import { Center, ScrollArea } from "@mantine/core";
import EmptyBadge from "../../../shared/ui/EmptyBadge";
import { IconArrowLeft } from "@tabler/icons-react";

export default function TasksList() {
  return (
    <Center w="100%" h="calc(100% - 70px - 113.6px)">
      <EmptyBadge
        icon={<IconArrowLeft size={28} />}
        title="Выберите проект или создайте новый"
        description="Выберите проект слева или создайте новый, чтобы начать добавлять задачи."
      />
    </Center>
  );
  return <ScrollArea h="calc(100% - 70px)" p={16}></ScrollArea>;
}

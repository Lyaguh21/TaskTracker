import { ActionIcon, Flex, Text } from "@mantine/core";

type EmptyBadgeProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  button?: React.ReactNode;
};

export default function EmptyBadge(props: EmptyBadgeProps) {
  return (
    <Flex direction="column" align="center" justify="center" gap={10}>
      <ActionIcon
        size={48}
        radius={100}
        variant="filled"
        color="var(--gray-color)"
      >
        {props.icon}
      </ActionIcon>
      <Text size="lg" c="white-color.4" fw={700} ta="center">
        {props.title}
      </Text>
      <Text size="md" c="white-color.3" ta="center">
        {props.description}
      </Text>
      {props.button}
    </Flex>
  );
}

import { Button, Flex, Modal } from "@mantine/core";

export default function ConfirmActionModal({
  onClose,
  opened,
  title,
  action,
}: {
  onClose: () => void;
  opened: boolean;
  title: string;
  action: () => void;
}) {
  return (
    <Modal opened={opened} onClose={onClose} title={title} size={"lg"}>
      <Flex gap={10} justify="space-between">
        <Button w="50%" onClick={action} color="green">
          Подтвердить
        </Button>
        <Button w="50%" onClick={onClose} color="red">
          Отменить
        </Button>
      </Flex>
    </Modal>
  );
}

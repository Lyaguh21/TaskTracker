import {
  openedCreateProjectModal,
  openedCreateTaskModal,
} from "../../../entities/view/model/viewSelectors";
import {
  setOpenCreateProjectModal,
  setOpenCreateTaskModal,
} from "../../../entities/view/model/viewSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import CreateProjectModal from "../../Projects/components/Modals/CreateProjectModal";
import CreateTaskModal from "../../Tasks/components/Modals/CreateTaskModal";

export default function Modals() {
  const dispatch = useAppDispatch();

  const CreateProjectModalOpened = useAppSelector(openedCreateProjectModal);
  const closeCreateProjectModal = () => {
    dispatch(setOpenCreateProjectModal(false));
  };

  const CreateTaskModalOpened = useAppSelector(openedCreateTaskModal);
  const closeCreateTaskModal = () => {
    dispatch(setOpenCreateTaskModal(false));
  };
  return (
    <>
      <CreateProjectModal
        opened={CreateProjectModalOpened}
        onClose={closeCreateProjectModal}
      />

      <CreateTaskModal
        opened={CreateTaskModalOpened}
        onClose={closeCreateTaskModal}
      />
    </>
  );
}

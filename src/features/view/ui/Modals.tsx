import { openedCreateProjectModal } from "../../../entities/view/model/viewSelectors";
import { setOpenCreateProjectModal } from "../../../entities/view/model/viewSlice";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import CreateProjectModal from "../../Projects/components/Modals/CreateProjectModal";

export default function Modals() {
  const dispatch = useAppDispatch();

  const CreateProjectModalOpened = useAppSelector(openedCreateProjectModal);
  const closeCreateProjectModal = () => {
    dispatch(setOpenCreateProjectModal(false));
  };

  return (
    <>
      <CreateProjectModal
        opened={CreateProjectModalOpened}
        onClose={closeCreateProjectModal}
      />
    </>
  );
}

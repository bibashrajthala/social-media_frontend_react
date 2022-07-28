import { Modal, useMantineTheme } from "@mantine/core";

import PostShare from "../PostShare/PostShare";
import "./shareModal.scss";

function ShareModal({ isShareModalOpen, setIsShareModalOpen }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={isShareModalOpen} // this modal only opens when isProfileModalOpen is true
      onClose={() => setIsShareModalOpen(false)} // while closing this modal (when close button is clicked) , set isProfileModalOpen to false
    >
      {/* Modal content */}
      <PostShare />
    </Modal>
  );
}

export default ShareModal;

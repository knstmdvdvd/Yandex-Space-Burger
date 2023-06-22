import React from "react";
import modalOverlayStyles from "./modal-overlay.module.css";

interface Props {
  closeOverlay: () => void;
}

function ModalOverlay({ closeOverlay }: Props) {
  return (
    <div onClick={closeOverlay} className={modalOverlayStyles.overlay}></div>
  );
}

export default ModalOverlay;

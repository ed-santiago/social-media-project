import React, { useEffect, useRef } from "react";

function CommentModal({ openModal, closeModal, name }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      
      <button onClick={closeModal}>
        {name}
      </button>
    </dialog>
  );
}

export default CommentModal;
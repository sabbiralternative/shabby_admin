import { useEffect } from "react";

const UseCloseModal = ({ setModalClose, modalRef }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModalClose(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setModalClose, modalRef]);
};

export default UseCloseModal;

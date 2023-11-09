import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = (props) => {
  const [show, setShow] = useState({ cart: false, confirmation: false, navbar: false });

  const toggleModal = (modal) => {
    setShow((prevState) => ({ [modal]: !prevState[modal] }));
  };

  const keyHideModal = (event) => {
    if ((event?.key === "Escape" && show.cart) || show.confirmation) {
      setShow((prevState) => ({ [modal]: false }));
    }
  };

  const toggleOff = (modal) => {
    setShow({[modal]: false });
  };

  return (
    <div>
      <ModalContext.Provider value={{ show, toggleModal, keyHideModal, toggleOff }}>{props.children}</ModalContext.Provider>
    </div>
  );
};

export { ModalContext, ModalProvider };

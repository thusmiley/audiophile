import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = (props) => {
  const [show, setShow] = useState({ cart: false, confirmation: false, navbar: false });

  const toggleModal = (modal) => {
    setShow((prevState) => ({ [modal]: !prevState[modal] }));
  };

  const hideModal = (e) => {
    if ((e?.key === "Escape" && show.cart) || show.confirmation) {
      setShow((prevState) => ({ [modal]: false }));
    }
  };

  return (
    <div>
      <ModalContext.Provider value={{ show, toggleModal, hideModal }}>{props.children}</ModalContext.Provider>
    </div>
  );
};

export { ModalContext, ModalProvider };

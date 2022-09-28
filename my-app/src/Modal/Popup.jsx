import { useDisclosure, Modal, ModalOverlay } from "@chakra-ui/react";

// import React, { useState } from "react";
import CurrencyAndLang from "./CurrencyAndLang";
import CurrencyButton from "../Components/Button";

function VerticallyCenter({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CurrencyButton text="IND" onOpen={onOpen} />
      <CurrencyButton text="IND" isIcon={true} onOpen={onOpen} />

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl" m="auto">
        <ModalOverlay />
        <CurrencyAndLang name={name} />
      </Modal>
    </>
  );
}

export default VerticallyCenter;

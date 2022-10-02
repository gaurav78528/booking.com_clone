import React from "react";
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import GridData from "./GridData";
import { AllCurrencies, SuggestedCurrency } from "../data/Data"
const CurrencyAndLang = ({ name }) => {
  return (
    <>
      <ModalContent>
        <ModalHeader>Select Your {name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <GridData
            heading="Suggested for you"
            CurrencyAndLang={SuggestedCurrency}
          />
          <GridData heading="All Currencies" CurrencyAndLang={AllCurrencies} />
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default CurrencyAndLang;

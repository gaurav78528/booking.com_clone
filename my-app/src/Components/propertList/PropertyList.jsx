import React from "react";
import "./propertyList.css";

import { Flex } from "@chakra-ui/react";
import PropertyCarasoul from "./PropertyCarasoul";
const PropertyList = () => {
  return (
    <Flex w="70%" m="auto" justify="space-between" gap="15px">
      <PropertyCarasoul />
    </Flex>
  );
};

export default PropertyList;

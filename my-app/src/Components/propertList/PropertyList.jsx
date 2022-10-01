import React from "react";
import "./propertyList.css";
import { propertyData } from "../../data/propertyData";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const PropertyList = () => {
  return (
    <Flex w="70%" m="auto" justify="space-between" gap="15px">
      {propertyData.map((elem) => {
        return (
          <Box
            className="pListItem"
            borderRadius="2px"
            overflow="hidden"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            key={elem.type}
          >
            <img src={elem.image} alt={elem.type} className="pListImg" />
            <Box className="pListTitle" p="2">
              <Heading as="h3" size="sm" mt="20px">
                {elem.type}
              </Heading>
              <Text mt="5px" color="grey">
                {elem.total} {elem.type}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};

export default PropertyList;

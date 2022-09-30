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
    /* <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
          alt="udaipur"
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
          alt="udaipur"
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
          alt="udaipur"
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o="
          alt="udaipur"
          className="pListImg"
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div> */
  );
};

export default PropertyList;

import React from "react";
import "./navbar.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Popup from "../../Modal/Popup";
import { BiHelpCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <Flex p="5" bg="#003580" justify="center">
      <Flex
        color="white"
        align="center"
        w="70%"
        m="auto"
        justify="space-between"
      >
        <Text fontSize="2xl" fontWeight="600">
          <Link to="/"> Booking.com</Link>
        </Text>
        <Flex className="navItems" align="center">
          <Popup />
          <BiHelpCircle
            fontSize="30px"
            fontWeight="300"
            title="Contact Customer Service"
          />
          <Button
            colorScheme="blue"
            bg="#efecec"
            color="blue.500"
            size="md"
            borderRadius="none"
            ml="3"
          >
            <Link to="/register">Register</Link>
          </Button>
          <Button
            colorScheme="blue"
            bg="#efecec"
            color="blue.500"
            size="md"
            borderRadius="none"
            ml="3"
          >
            <Link to="/register">Signin</Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;

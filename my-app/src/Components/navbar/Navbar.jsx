import React from "react";
import "./navbar.css";
import { Button, Flex, Box, Text } from "@chakra-ui/react";

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
          Booking.com
        </Text>
        <Box className="navItems">
          <Button
            colorScheme="blue"
            bg="#efecec"
            color="blue.500"
            size="md"
            borderRadius="none"
            ml="3"
          >
            Register
          </Button>
          <Button
            colorScheme="blue"
            bg="#efecec"
            color="blue.500"
            size="md"
            borderRadius="none"
            ml="3"
          >
            Signin
          </Button>
          {/* <button className="navButton">Register</button>
          <button className="navButton">Login</button> */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;

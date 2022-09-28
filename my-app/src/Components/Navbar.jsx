import React from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import VerticallyCenter from "../Modal/Popup";
import { FiHelpCircle } from "react-icons/fi";
import Tabs from "./Tabs";


const Navbar = () => {
  return (
    <>
      <Box bg="#003580" w="100%" p={4} color="#ffffff">
        <Box w="70%" m="auto">
          <Flex justify="space-between">
            <Heading as="h4" size="lg">
              Booking.com
            </Heading>
            <Flex w="45%" justify="space-between" alignItems="center">
              <VerticallyCenter name="Currency" />
              <FiHelpCircle size="25" />

              <Flex w="90%" justify="space-around">
                <Button
                  colorScheme="#003580"
                  variant="outline"
                  borderRadius="none"
                >
                  List your property
                </Button>
                <Button
                  colorScheme="#003580"
                  variant="solid"
                  bg="#fff"
                  color="#003580"
                  borderRadius="none"
                >
                  Register
                </Button>
                <Button
                  variant="solid"
                  colorScheme="#003580"
                  bg="#fff"
                  color="#003580"
                  borderRadius="none"
                >
                  Sign in
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Tabs />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

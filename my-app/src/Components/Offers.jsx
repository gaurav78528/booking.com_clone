import React from "react";
import { Heading, Box, Text, Image, Button } from "@chakra-ui/react";
const Offers = () => {
  return (
    <>
      <Box w="70%" margin="auto">
        <Heading as="h2" fontSize="2xl" mt="10">
          Offers
        </Heading>
        <Text mt="5" mb="5">
          Promotions, deals and special offers for you
        </Text>
        <Image
          src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png"
          fallbackSrc="https://via.placeholder.com/150"
          w="100%"
          height="60"
          borderRadius="10"
          position="relative"
        />
        <Box position="absolute" top="900px" left="16%" color="white">
          <Heading as="h5" fontSize="lg">
            Escape for a while
          </Heading>
          <Text mt="4">
            Enjoy the freedom of an extended stay on Booking.com
          </Text>
          <Button
            colorScheme="blue"
            variant="solid"
            mt="10"
            borderRadius="none"
          >
            Discover Extended Stays
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Offers;

import React from "react";
import { Image, Box, Heading, Text, Button, Input } from "@chakra-ui/react";

const DiscountBanner = () => {
  return (
    <>
      <Box position="relative">
        <Image
          src="https://q-xx.bstatic.com/xdata/images/xphoto/3000x1033/173281189.jpeg?k=1fd6eb071690e7733c308db125cf842d59b6be95a26a37e7a303483a47a80273&o="
          fallbackSrc="https://via.placeholder.com/150"
          position="relative"
        />
        <Box w="70%" m="auto" border="3px" borderColor="gray.200">
          <Box position="absolute" top="10%" color="white" fontSize="2xl">
            <Text>Available Until 3 Jan 2023</Text>
            <Heading as="h1" fontSize="5xl" w="90%" mt="5" spacing="10">
              Save 15% with Late Escape Deals
            </Heading>
            <Text w="80%" mt="5">
              There’s still time to tick one more destination off your wishlist
            </Text>
            <Button
              colorScheme="blue"
              variant="solid"
              mt="8"
              p="7"
              borderRadius="none"
            >
              Explore Deals
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="64%"
        left="15%"
        w="70%"
        border="2px"
        borderColor="#e79e30"
      >
        <Input
          focusBorderColor="#e79e30"
          placeholder="Here is a sample placeholder"
          bg="#f5f0f0"
          w="40%"
          borderRadius="none"
          p="7"
        />
        <Input
          placeholder="to"
          focusBorderColor="#e79e30"
          size="lg"
          type="datetime-local"
          p="7"
          w="20%"
          bg="#f5f0f0"
          borderRadius="none"
        />
        <Input
          placeholder="to"
          focusBorderColor="#e79e30"
          size="lg"
          type="datetime-local"
          p="7"
          w="20%"
          bg="#f5f0f0"
          borderRadius="none"
        />
      </Box>
    </>
  );
};

export default DiscountBanner;

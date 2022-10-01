import {
  Flex,
  Heading,
  Button,
  Input,
  Text,
  Box,
  Center,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MailList = () => {
  return (
    <>
      <Flex
        direction="column"
        textAlign="center"
        w="100%"
        bg="#00224f"
        color="white"
        py="5%"
      >
        <Heading as="h2" fontSize="2xl" fontWeight="300">
          Save time, save money!
        </Heading>
        <Text py="5px" fontSize="17px" color="gray.500">
          Sign up and we'll send the best deals to you
        </Text>
        <Flex
          className="mailInputContainer"
          w="40%"
          m="auto"
          gap="10px"
          py="10px"
        >
          <Input
            type="email"
            placeholder="Your Email"
            py="30px"
            borderRadius="4px"
            bg="whiteAlpha.900"
            fontSize="20px"
            fontWeight="400"
            focusBorderColor="black"
            color="black"
          />
          <Button
            colorScheme="blue"
            py="30px"
            px="50px"
            borderRadius="4px"
            fontSize="20px"
            fontWeight="400"
          >
            Subscribe
          </Button>
        </Flex>
      </Flex>
      <Center bg="#003580" py="15px">
        <Button
          colorScheme="blue"
          variant="outline"
          borderColor="white"
          color="white"
          fontSize="15px"
          fontWeight="300"
          borderRadius="3px"
          size="xs"
          px="20px"
          py="15px"
        >
          List Your Property
        </Button>
      </Center>
      <Divider />
      <Box bg="#003580" py="13px">
        <Flex
          color="white"
          w="70%"
          m="auto"
          justify="space-around"
          fontSize="15px"
          fontWeight="500"
          textDecoration="underline"
        >
          <Link>Mobile version</Link>
          <Link>Your account</Link>
          <Link>Make changes to your booking online</Link>
          <Link>Customer Service help</Link>
          <Link>Become an affiliate</Link>
          <Link>Booking.com for Business</Link>
        </Flex>
      </Box>
    </>
  );
};

export default MailList;

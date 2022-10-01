import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { homeGuests } from "../../data/homeGuests";
const HomeGuests = () => {
  return (
    <>
      <Heading as="h2" fontSize="25px" w="70%" m="auto" mt="40px" mb="20px">
        Homes guests love
      </Heading>
      <Flex w="70%" m="auto" gap={4} mb="50px">
        {homeGuests.map((elem) => {
          return (
            <Box cursor="pointer" key={elem.id}>
              <Image src={elem.image} h="280px" w="280px" />
              <Text mt="5px">{elem.title}</Text>
              <Text color="gray">{elem.city}</Text>
              <Heading as="h4" size="sm" fontWeight={500} mt="10px">
                Starting from <span> &#x20B9;</span>
                {elem.price}
              </Heading>
              <Flex gap={2} align="center">
                <Text
                  bg="#003580"
                  px="8px"
                  py="6px"
                  borderRadius="10px"
                  color="white"
                  mt="5px"
                >
                  {elem.rating}
                </Text>
                <Text fontWeight="600">{elem.experience} .</Text>
                <Text color="gray" fontSize="13px">
                  {elem.reviews} reviews
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default HomeGuests;

import { Container, Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const CarHire = () => {
  return (
    <Box w="70%" m="auto">
      <Heading as="h2" size="lg" fontWeight="500" my="20px">
        Popular destinations for car hire
      </Heading>
      {/* <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2,1fr)"
        gap={6}
      >
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid> */}
    </Box>
  );
};

export default CarHire;

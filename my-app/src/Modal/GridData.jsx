// import React, { useState } from "react";
import { Heading, Grid, GridItem, Text, Button } from "@chakra-ui/react";

const GridData = ({ heading, CurrencyAndLang }) => {
  // const [country, setCountry] = useState("India");

  return (
    <>
      <Heading as="h2" size="sm" mt="10" mb="10">
        {heading}
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {CurrencyAndLang.map((elem) => {
          return (
            <Button colorScheme="black" variant="ghost">
              <GridItem gap="2" key={elem.id}>
                <Text fontSize="xs">{elem.name}</Text>
                <Text fontSize="xs">{elem.currency.code}</Text>
              </GridItem>
            </Button>
          );
          // <Button colorScheme='teal' variant='ghost'>
        })}
      </Grid>
    </>
  );
};

export default GridData;

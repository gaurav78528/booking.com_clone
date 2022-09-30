import React from "react";
import {
  Stack,
  Flex,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Link,
  SimpleGrid,
  Container,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container>
      <Grid
        w="70%"
        // m="auto"
        border="2px solid red"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        bg="whiteAlpha.800"
        position="absolute"
        bottom="-40%"
        left="15%"
        mt="100px"
      >
        <GridItem w="100%" gap="50%">
          <UnorderedList gap="2" display="flex" flexDirection="column">
            <Link>Countries</Link>
            <Link>Regions</Link>
            <Link>Cities</Link>
            <Link>Districts</Link>
            <Link>Airports</Link>
            <Link>Hotels</Link>
            <Link>Places of interest</Link>
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" gap="50%">
          <UnorderedList gap="2" display="flex" flexDirection="column">
            <Link>Homes</Link>
            <Link>Apartments</Link>
            <Link>Resorts</Link>
            <Link>Villas</Link>
            <Link>Hostels</Link>
            <Link>B&Bs</Link>
            <Link>Guest houses</Link>
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" gap="50%">
          <UnorderedList gap="2" display="flex" flexDirection="column">
            <Link>Unique places to stay</Link>
            <Link>All destinations</Link>
            <Link>Discover</Link>
            <Link>Reviews</Link>
            <Link>Unpacked: Travel articles</Link>
            <Link>Travel Communities</Link>
            <Link>Seasonal and holiday deals</Link>
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" gap="50%">
          <UnorderedList gap="2" display="flex" flexDirection="column">
            <Link>Car hire</Link>
            <Link>Flight finder</Link>
            <Link>Restaurant reservations</Link>
            <Link>Booking.com for Travel Agents</Link>
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" gap="50%">
          <UnorderedList gap="2" display="flex" flexDirection="column">
            <Link>Coronavirus (COVID-19 FAQs)</Link>
            <Link>About Booking.com</Link>
            <Link>Customer Service help</Link>
            <Link>Partner help</Link>
            <Link>Careers</Link>
            <Link>Sustainability</Link>
            <Link>Press centre</Link>
            <Link>Safety resource centre</Link>
            <Link>Investor relations</Link>
            <Link>Terms & Conditions</Link>
            <Link>How we work</Link>
            <Link>Privacy & Cookie Statement</Link>
            <Link>MSA Statement</Link>
            <Link>Corporate contact</Link>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Footer;

import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./home.css";
import Header from "../../Components/header/Header";

import Footer from "../../Components/footer/Footer";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Offers from "../../Components/Offers";
import FeaturedCities from "../../Components/featured/FeaturedCities";
import PropertyList from "../../Components/propertList/PropertyList";
import Cities from "../../Components/cities/Cities";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Flex
        className="homeContainer"
        mt="50px"
        direction="column"
        align="center"
        gap="3"
      >
        <Offers />

        <Heading as="h2" size="md" w="70%" mx="auto" mt="30px">
          Explore India
        </Heading>
        <Text fontSize="md" w="70%" mx="auto" color="grey">
          These popular destinations have a lot to offer
        </Text>
        <FeaturedCities />
        <Heading as="h4" size="lg" w="70%" mx="auto" mt="30px">
          Browse by property type
        </Heading>

        <PropertyList />
      </Flex>
      <Cities />
      <Footer />
    </div>
  );
};

export default Home;

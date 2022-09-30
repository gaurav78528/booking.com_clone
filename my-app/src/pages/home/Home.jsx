import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./home.css";
import Header from "../../Components/header/Header";

// import Footer from "../../Components/footer/Footer";
import { Flex } from "@chakra-ui/react";
// import FeaturedCities from "../../Components/featured/FeaturedCities";
// import PropertyList from "../../Components/propertList/PropertyList";
const Home = () => {
  return (
    <div>
      <Navbar />
       <Header />
     {/* <Flex
        className="homeContainer"
        mt="50px"
        direction="column"
        align="center"
        gap="30"
      >
        <FeaturedCities />
        <h1 className="homeTitle">Explore India</h1>
        <p className="homeTitle">
          These popular destinations have a lot to offer
        </p>
        <PropertyList />
      </Flex> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

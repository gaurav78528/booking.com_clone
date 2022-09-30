import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./home.css";
import Header from "../../Components/header/Header";


const Home = () => {
  return (
    <div>
      <Navbar />
       <Header />

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

    </div>
  );
};

export default Home;

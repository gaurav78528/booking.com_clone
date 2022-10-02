import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./featured.css";
import { cityData } from "../../data/cityData";
const FeaturedCities = () => {
  return (
    <div className="featured">
      {cityData.map((city) => {
        return (
          <div className="featuredItems" key={city.id}>
            <img src={city.image} alt={city.city} className="featuredImg" />
            <div className="featuredTitles">
              <Heading as="h2" size="md">
                {city.city}
              </Heading>
              <Text size="xs">{city.properties} properties</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedCities;

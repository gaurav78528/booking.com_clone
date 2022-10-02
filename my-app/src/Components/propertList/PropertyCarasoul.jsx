import { Heading, Text, Box } from "@chakra-ui/react";

import "../featured/styles.css";

import { propertyData } from "../../data/propertyData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../featured/styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {propertyData.map((elem, idx) => (
          <SwiperSlide key={idx}>
            <Box
              className="pListItem"
              borderRadius="2px"
              overflow="hidden"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            >
              <img src={elem.image} alt={elem.type} className="pListImg" />
              <Box className="pListTitle" p="2">
                <Heading as="h3" size="sm" mt="20px">
                  {elem.type}
                </Heading>
                <Text mt="5px" color="grey">
                  {elem.total} {elem.type}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

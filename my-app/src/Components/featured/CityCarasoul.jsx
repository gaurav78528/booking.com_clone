// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading, Text } from "@chakra-ui/react";

import { cityData as cities } from "../../data/cityData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cities.map((city, idx) => (
          <SwiperSlide key={idx}>
            <div className="featuredItems" key={city.id}>
              <img src={city.image} alt={city.city} className="featuredImg" />
              <div className="featuredTitles">
                <Heading as="h2" size="md">
                  {city.city}
                </Heading>
                <Text size="xs">{city.properties} properties</Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

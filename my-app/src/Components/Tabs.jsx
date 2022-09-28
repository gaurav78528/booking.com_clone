import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineHotel } from "react-icons/md";
import { CgAirplane } from "react-icons/cg";
import { FaHotel } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineAttractions, MdOutlineLocalTaxi } from "react-icons/md";
import { Link } from "@chakra-ui/react";
// import AllRoutes from "../Router/AllRoutes";

const NavTabs = () => {
  return (
    <>
      {/* <AllRoutes /> */}
      <Flex mt="8">
        <Tabs variant="solid-rounded" colorScheme="blue" bg="#003580">
          <TabList>
            <Tab color="white">
              <MdOutlineHotel size="25" />
              Stays
            </Tab>
            <Tab color="white">
              <CgAirplane size="25" />
              Flights
            </Tab>
            <Tab color="white">
              <FaHotel size="25" />
              Flight + Hotel
            </Tab>
            <Tab color="white">
              <AiOutlineCar size="25" />
              <Link to="/car"> Car rentals</Link>
            </Tab>
            <Tab color="white">
              <MdOutlineAttractions size="25" />
              Attractions
            </Tab>
            <Tab color="white">
              <MdOutlineLocalTaxi size="25" />
              Airport taxis
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default NavTabs;

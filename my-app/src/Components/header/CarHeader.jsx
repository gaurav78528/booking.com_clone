import React, { useState } from "react";
import "./header.css";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Input,
  Radio,
  Checkbox,
} from "@chakra-ui/react";
import { IoBedOutline, IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineTravelExplore, MdOutlineAttractions } from "react-icons/md";
import { AiOutlineCar, AiFillCar } from "react-icons/ai";
import { BiTaxi, BiCalendar } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <Flex
        className="header"
        bg="#003580"
        color="#fff"
        justify="center"
        position="relative"
      >
        <Box className="headerContainer" w="70%" m="auto" my="5">
          <Flex className="headerList" gap="10">
            <div className="headerListItem active">
              <IoBedOutline />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <IoAirplaneOutline />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <MdOutlineTravelExplore />
              <span>Flight + Hotel</span>
            </div>
            <div className="headerListItem">
              <AiOutlineCar />
              <Link to="/car">Car rentals</Link>
            </div>
            <div className="headerListItem">
              <MdOutlineAttractions />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <BiTaxi />
              <span>Taxi</span>
            </div>
          </Flex>
        </Box>
      </Flex>
      <Box bg="#f4efeffd" py="5%">
        <Box w="70%" m="auto">
          <Heading as="h2" size="lg" fontWeight="500">
            Car hire for any kind of trip
          </Heading>
          <Text fontSize="15px" my="5px">
            Compare deals from the biggest car hire companies
          </Text>
          <Flex my="18px">
            <Radio colorScheme="blue" value="2">
              Return to same location
            </Radio>
            <Radio colorScheme="blue" value="2" ml="30px">
              Return to different location
            </Radio>
          </Flex>

          <Flex
            className="headerSearch"
            bg="white"
            h="70"
            border="3px solid #febb02"
            align="center"
            // justify="space-around"
            // position="absolute"
            // bottom="-90px"
            // top="100%"
            w="100%"
            // m="auto"
          >
            <Flex
              className="headerSearchItems"
              align="center"
              py="18px"
              border="3px solid #febb02"
              borderRadius="none"
              w="55%"
              px="20px"
            >
              <AiFillCar color="lightgray" fontSize="25px" />
              <Input
                placeholder="Pick-up Location"
                size="md"
                variant="unstyled"
                color="black"
              />
            </Flex>
            <Flex
              className="headerSearchItems"
              align="center"
              w="30%"
              py="18px"
              border="3px solid #febb02"
              borderRadius="none"
              px="20px"
            >
              <BiCalendar color="lightgray" fontSize="25px" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(
                date[0].endDate,
                "dd/mm/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </Flex>

            <Button
              colorScheme="blue"
              borderRadius="none"
              px="7"
              fontWeight="700"
              fontSize="lg"
              my="10"
              w="20%"
              h="full"
              border="3px solid #febb02"
              //   borderRadius="none"
            >
              Search
            </Button>
          </Flex>
        </Box>
        <Flex w="70%" m="auto" my="25px" align="center">
          <Checkbox defaultChecked size="lg" fontWeight="350" mr="10px">
            Driver aged between 30 - 65
          </Checkbox>
          <BsInfoCircle
            fontSize="22px"
            fontWeight="600"
            title="Some companies charge more for younger or older drivers. Before you choose a car, we'll show you exactly who charges what."
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Header;

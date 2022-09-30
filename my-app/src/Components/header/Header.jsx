import React, { useState } from "react";
import "./header.css";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import { IoBedOutline, IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineTravelExplore, MdOutlineAttractions } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { BiTaxi, BiCalendar } from "react-icons/bi";
import { ImUser } from "react-icons/im";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleCounter = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
              <span>Car rentals</span>
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
      <Box>
        <Image
          src="https://q-xx.bstatic.com/xdata/images/xphoto/3000x1033/173281189.jpeg?k=1fd6eb071690e7733c308db125cf842d59b6be95a26a37e7a303483a47a80273&o="
          alt="img"
          height="500px"
          w="100%"
        />
        <Box
          position="absolute"
          top="230px"
          left="15%"
          w="70%"
          m="auto"
          color="white"
          // border="1px solid white"
        >
          <Text fontSize="25px">Available until 3 Jan 2023</Text>
          <Heading as="h2" size="2xl" w="60%" lineHeight="65px">
            Save 15% with Late Escape Deals
          </Heading>
          <Text fontSize="27px" w="55%">
            There’s still time to tick one more destination off your wishlist
          </Text>
          <Button
            colorScheme="blue"
            borderRadius="none"
            px="7"
            py="7"
            fontWeight="700"
            fontSize="lg"
            my="10"
          >
            Explore deals
          </Button>
          {/* </Box> */}
          <Flex
            className="headerSearch"
            bg="white"
            h="70"
            border="3px solid #febb02"
            align="center"
            justify="space-around"
            position="absolute"
            bottom="-90px"
            // top="100%"
            w="100%"
            // m="auto"
          >
            <Flex className="headerSearchItems" align="center">
              <IoBedOutline color="lightgray" fontSize="25px" />
              <Input
                placeholder="Where are you going?"
                size="md"
                variant="unstyled"
                color="black"
              />
            </Flex>
            <Flex className="headerSearchItems" align="center">
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
            <Flex className="headerSearchItems" align="center">
              <ImUser color="lightgray" fontSize="25px" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult - ${options.children} children - ${options.room} - room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("adult", "dec")}
                        disabled={options.adult === 1}
                      >
                        -
                      </Button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("adult", "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("children", "dec")}
                        disabled={options.children === 0}
                      >
                        -
                      </Button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("children", "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("room", "dec")}
                        disabled={options.room === 1}
                      >
                        -
                      </Button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <Button
                        className="optionCounterButton"
                        onClick={() => handleCounter("room", "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Flex>
            <Button
              colorScheme="blue"
              borderRadius="none"
              px="7"
              py="7"
              fontWeight="700"
              fontSize="lg"
              my="10"
            >
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Header;

import React from "react";
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import "./cities.css";
const Cities = () => {
  return (
    <>
      <Flex w="70%" m="auto" gap="15px" mt="30px">
        <div w="50%" className="cityBox">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/RASHTRAPATI_BHAVAN.jpg/450px-RASHTRAPATI_BHAVAN.jpg"
            w="600px"
            h="300px"
          ></Image>
          <Heading
            as="h2"
            size="lg"
            position="absolute"
            top="20px"
            left="20px"
            color="White"
          >
            New Delhi
          </Heading>
        </div>

        <div w="50%" className="cityBox">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mumbai_Skyline_at_Night.jpg/432px-Mumbai_Skyline_at_Night.jpg"
            w="600px"
            h="300px"
          ></Image>
          <Heading
            as="h2"
            size="lg"
            position="absolute"
            top="20px"
            left="20px"
            color="White"
          >
            Mumbai
          </Heading>
        </div>
      </Flex>
      <Flex w="70%" m="auto" gap="15px" mt="30px">
        <div w="33%" className="cityBox">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/395px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
            w="380px"
            h="300px"
          ></Image>
          <Heading
            as="h2"
            size="lg"
            position="absolute"
            top="20px"
            left="20px"
            color="White"
          >
            Agra
          </Heading>
        </div>

        <div w="33%" className="cityBox">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/DubaiCollage.jpg/420px-DubaiCollage.jpg"
            w="380px"
            h="300px"
          ></Image>
          <Heading
            as="h2"
            size="lg"
            position="absolute"
            top="20px"
            left="20px"
            color="White"
          >
            Dubai
          </Heading>
        </div>
        <div w="33%" className="cityBox">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Vidhana_Soudha_2012.jpg/372px-Vidhana_Soudha_2012.jpg"
            w="380px"
            h="300px"
          ></Image>
          <Heading
            as="h2"
            size="lg"
            position="absolute"
            top="20px"
            left="20px"
            color="White"
          >
            Banglore
          </Heading>
        </div>
      </Flex>
    </>
  );
};

export default Cities;

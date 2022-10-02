import {
  Center,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser(e.target.value);
    // console.log(user)
  };
  const handleClick = () => {
    const userLogin = localStorage.getItem("registerData");

    if (user === userLogin) {
      alert("Login Successfully.");
      navigate("/");
      return;
    }

    localStorage.setItem("registerData", user);
    alert("Registered Successfully.");
  };
  // console.log(user);
  return (
    <>
      <Navbar />
      <Center>
        <Box w="25%">
          <Heading as="h4" size="lg" my="60px">
            Sign in or create an account
          </Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              outline="none"
              borderColor="gray"
              borderRadius="4px"
              focusBorderColor="gray"
              size="md"
              onChange={handleChange}
              name="email"
              value={user}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            size="lg"
            w="full"
            fontSize="17px"
            py="28px"
            my="20px"
            borderRadius="4px"
            onClick={handleClick}
          >
            Continue with email
          </Button>
          <Text align="center">or use one of these options</Text>
          <Flex justify="space-around" w="80%" m="auto" py="25px">
            <Box
              border="1px"
              borderColor="gray.200"
              p="25px"
              borderRadius="4px"
              color="blue.600"
              title="Sign in with Facebook"
              cursor="pointer"
            >
              <FaFacebookSquare fontSize="30px" />
            </Box>
            <Box
              border="1px"
              borderColor="gray.200"
              p="25px"
              borderRadius="4px"
              title="Sign in with Google"
              cursor="pointer"
            >
              <FcGoogle fontSize="30px" />
            </Box>
            <Box
              border="1px"
              borderColor="gray.200"
              p="25px"
              borderRadius="4px"
              title="Sign in with your Phone"
              cursor="pointer"
            >
              <BsPhone fontSize="30px" />
            </Box>
          </Flex>
          <Heading as="h3" size="sm" align="center" color="blue.600" mb="25px">
            More ways to sign
          </Heading>
          <Divider />
          <Text fontSize="13px" align="center" my="20px">
            By signing in or creating an account, you agree with our
            <span style={{ color: "blue" }}>
              <Link>Terms & conditions</Link>
            </span>{" "}
            and{" "}
            <span style={{ color: "blue" }}>
              <Link color="blue">Privacy statement</Link>
            </span>
          </Text>
          <Divider />
          <Box align="center" my="20px">
            <Text fontSize="12px">All rights reserved.</Text>
            <Text fontSize="12px">Copyright (2006 - 2022) - Booking.com™</Text>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Register;

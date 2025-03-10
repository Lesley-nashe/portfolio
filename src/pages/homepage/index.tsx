import { Button } from "../../components/ui/button";
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import imgasset from '../../assets/70596.jpg';

const Homepage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="linear-gradient(to right, #d4d4d8, #52525b)"
        py="36"
        px="6"
      >
        <Stack direction={["column", "column", "row", "row"]} gap="6" maxW="lg">
          <Image
            rounded="40%"
            src={imgasset}
            alt="Dan Abramov"
            height="250px"
            width={["350px"]}
          />
          <Stack alignItems='center' justifyContent='center' minW='250px' direction={["column", "column"]}>
            <Text fontSize="lg">Hi, I'm</Text>
            <Text fontSize="lg">Tadiwa Lesley Musekiwa</Text>
            <Text fontSize="lg">Technologist</Text>
            <Flex gap={2} direction="row">
              <Button borderRadius={"20px"} bg="green.500" size="md">
                Download CV
              </Button>
              <Button borderRadius={"20px"} bg="blue.500" size="md">
                Contact Info
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Homepage;

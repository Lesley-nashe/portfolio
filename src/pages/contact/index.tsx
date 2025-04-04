import {
  Box,
  Flex,
  VStack,
  Text,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="linear-gradient(to right, #d4d4d8, #52525b)"
        py="36"
        px="6"
      >
        <VStack>
          <Text>Get in Touch</Text>
          <Text fontSize="4xl" fontWeight="extrabold">
            Contact Me
          </Text>
          <HStack gap={0} mb={3}>
            <Button
              borderLeftRadius={"20px"}
              bg="#888888"
              onClick={() => {}}
              color="white"
              fontSize="16"
              fontWeight="24"
              height="50px"
            >
              lesliemusekiwa@gmail.com
            </Button>
            <Link href="https://www.linkedin.com/in/tech-and-nice-guy-tadiwa/">
              <Button
                borderRightRadius={"20px"}
                colorScheme="green"
                onClick={() => {}}
                fontSize="16"
                fontWeight="24"
                height="50px"
              >
                linkedIn
              </Button>
            </Link>
          </HStack>
          <Flex gap="30px" direction={["column", "column", "row", "row"]}>
            <Text>About</Text>
            <Text>Experience</Text>
            <Text>Contact</Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;

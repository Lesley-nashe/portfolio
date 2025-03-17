import { Button } from "../../components/ui/button";
import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";
import React from "react";
import imgasset from "../../assets/IMG_4072.jpg";


const Homepage = () => {

  const downloadPdf = () => {
    const fileUrl = "/TadiwaLesleyMusekiwaCV.pdf"; // Relative to the public folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "CV.pdf"); // Set download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
        <Stack direction={["column", "column", "row", "row"]} gap="6" maxW="lg" alignItems="center">
          <Image
            borderRadius="full"
            src={imgasset}
            alt="Dan Abramov"
            height="305px"
            width="300px"
          />
          <Stack
            alignItems="center"
            justifyContent="center"
            minW="350px"
            direction={["column", "column"]}
          >
            <Text fontSize="lg">Hi, I'm</Text>
            <Text fontSize="2xl" fontWeight="extrabold">
              Tadiwa Lesley Musekiwa
            </Text>
            <Text fontSize="lg">Technologist</Text>
            <Flex gap={2} direction="row">
              <Button borderRadius={"20px"} onClick={downloadPdf} bg="green.500" size="md">
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

import Listcomponent from "../../components/listcomponent";
import {
  Box,
  Flex,
  Text,
  Stack,
  Card,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircle } from "phosphor-react";
import React from "react";

type expItem = {
  item: string;
  exp: string;
};

const Experience = () => {
  const frontendExperienceItems = [
    {
      item: "HTML",
      exp: "Experienced",
    },
    {
      item: "CSS",
      exp: "Experienced",
    },
    {
      item: "React",
      exp: "Experienced",
    },
    {
      item: "Vuejs",
      exp: "Experienced",
    },
    {
      item: "ChakraUI",
      exp: "Experienced",
    },
    {
      item: "Tailwind",
      exp: "Experienced",
    },
  ] as expItem[];
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="linear-gradient(to right, #d4d4d8, #52525b)"
        py="12"
        px="6"
      >
        <Stack alignItems="center" direction="column">
          <Text>Explore my</Text>
          <Text fontSize="4xl" fontWeight="extrabold">My Experience</Text>

          <Stack direction={["column", "column", "row", "row"]} gapX={8}>
            <Card.Root borderRadius="20px" width="420px">
              <Card.Body gap="2">
                <Card.Description
                  alignItems="center"
                  justifyItems="center"
                  spaceY={4}
                >
                  <Heading>Frontend Development</Heading>
                  <SimpleGrid columns={2} gapX={28} gapY={4}>
                    {frontendExperienceItems.map((item, index) => (
                      <Listcomponent item={item.item} experience={item.exp} />
                    ))}
                  </SimpleGrid>
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root borderRadius="20px" width="420px">
              <Card.Body gap="2">
                <Card.Description
                  alignItems="center"
                  justifyItems="center"
                  spaceY={4}
                >
                  <Heading>Backend Development</Heading>
                  <SimpleGrid columns={2} gapX={28} gapY={4}>
                    {frontendExperienceItems.map((item, index) => (
                      <Listcomponent item={item.item} experience={item.exp} />
                    ))}
                  </SimpleGrid>
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Experience;

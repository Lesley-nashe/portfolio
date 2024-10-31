import { Box, Flex, Text, Stack, Card, Button } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
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
        <Stack alignItems='center' direction="column">
          <Text>Browse My Recent</Text>
          <Text>Projects</Text>

          <Stack direction={["column","column","row","row"]}>
            <Card.Root borderRadius="20px" width="320px">
              <Card.Body gap="2">
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                  Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root borderRadius="20px" width="320px">
              <Card.Body gap="2">
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                  Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root borderRadius="20px" width="320px">
              <Card.Body gap="2">
                <Card.Title mt="2">Nue Camp</Card.Title>
                <Card.Description>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                  Curabitur nec odio vel dui euismod fermentum.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">View</Button>
                <Button>Join</Button>
              </Card.Footer>
            </Card.Root>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Projects;

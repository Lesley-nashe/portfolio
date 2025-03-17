import { Flex, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="header"
      align="center"
      p="4"
      bg="linear-gradient(to right, #d4d4d8, #52525b)"
      color="white"
      top={0}
      position="sticky"
      zIndex={1000}
      direction={["column", "column", "row", "row"]}
    >
      <Flex width={"95%"} justify={"space-between"}>
        <Flex align="center">
          <Text fontSize="30px" fontWeight="bold">
            TL Musekiwa
          </Text>
        </Flex>
        {/* <Flex
          align={["center", "center", "center", "center"]}
          justify={"center"}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          gap={8}
        ></Flex> */}
        <Flex mt={3} gap="30px" direction={["column", "column", "row", "row"]}>
          <Link>
            <Text>About</Text>
          </Link>
          <Link>
            <Text>Experience</Text>
          </Link>
          <Link>
            <Text>Contact</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

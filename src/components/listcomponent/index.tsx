import { Box, Stack, Text } from "@chakra-ui/react";
import { CheckCircle } from "phosphor-react";
import React from "react";

type Props = {
    item: string, 
    experience: string
}

const Listcomponent = ({item, experience} : Props) => {
  return (
    <Stack direction="row">
      <Box>
        <CheckCircle size={18} weight="fill" />
      </Box>
      <Box>
        <Text fontSize="18" fontWeight="bolder">
        {item}
        </Text>
        <Text fontSize="12">{experience}</Text>
      </Box>
    </Stack>
  );
};

export default Listcomponent;

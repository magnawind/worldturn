import React from "react";
import { Box, Text, Center, VStack } from "@chakra-ui/react";

export default function ContactColumn({ title, children }) {
  return (

      <Box alignItems="center" mb="10px">
        <Center mb="24px" textAlign="center">
          <Text
            color="#FFF"
            fontSize={{ base: "26px", md: "22px", lg: "20px" }}
            fontWeight="extrabold"
          >
            {title}
          </Text>
        </Center>
        <Center>
          <VStack>{children}</VStack>
        </Center>
      </Box>

  );
}

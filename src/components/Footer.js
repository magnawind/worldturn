import React from "react";
import { Center, Text } from "@chakra-ui/react";

export default function Footer({ children, href }) {
  return (
    <Center
      h="50px"
      w="100%"

    >
      <Text color="#4F5464" fontSize="12px" fontWeight="semibold">wemuda ApS | CVR: 38275437</Text>
    </Center>
  );
}

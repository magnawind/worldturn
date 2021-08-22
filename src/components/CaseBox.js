import React from "react";
import { VStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function CaseBox({ children, href }) {
  const history = useHistory();
  return (
    <VStack
    textAlign="center"
    justifyContent="center"
      onClick={() => history.push(href)}
      //bg="#1A1D27"
      borderColor="#393737"
      borderWidth="1px"
      w="100%"
      h={{ base: 80, md: 350, lg: 240, xl: 320 }}
      cursor="pointer"

      transition="0.3s"
      _hover={{ borderColor: "#605F5F" }}
    >
      {children}
    </VStack>
  );
}

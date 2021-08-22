import React from "react";
import { Heading, VStack } from "@chakra-ui/react";

export default function CaseTitle({ children, mt, undertitle }) {
  return (
    <VStack style={mt && { marginTop: "30px" }}>
      <Heading fontSize="22px" color="#fff" fontWeight="bold">
        {children}
      </Heading>
      <Heading color="#4F5464" fontSize="16px">
        {undertitle}
      </Heading>
    </VStack>
  );
}

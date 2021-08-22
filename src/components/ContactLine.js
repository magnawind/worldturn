import React from "react";
import { Text } from "@chakra-ui/react";

export default function ContactLine({ children, type }) {
  return (
    <Text
      color="#6C6C6C"
      fontSize={{ base: "18px", md: "14px", lg: "14px" }}
      marginTop="0px"
      fontWeight="extrabold"
      textAlign="center"
      wordBreak="keep-all"
    >
      {children}
    </Text>
  );
}

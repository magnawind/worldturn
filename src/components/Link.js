import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Link({ children, href, noTarget }) {
  return (
    <ChakraLink
      color="#6C6C6C"
      fontSize={{ base: "18px", md: "14px", lg: "14px" }}
      marginTop="0px"
      fontWeight="extrabold"
      textAlign="center"
      _hover={{
        color: "#45CEB3",
      }}
      wordBreak="keep-all"
      href={href}
      target={!noTarget && "_blank"} 
    >
      {children}
    </ChakraLink>
  );
}

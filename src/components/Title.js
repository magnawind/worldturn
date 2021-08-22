import React from "react";
import { VStack, Heading } from "@chakra-ui/react";

export default function Title(props) {
  return (
    <VStack marginBottom="80px">
      {props.underTitle && (
        <Heading
          color="#4F5464"
          as="h2"
          fontWeight="extrabold"
          fontSize={{ base: "16px", md: "18px" }}
          mb="6px"
        >
          {props.underTitle}
        </Heading>
      )}

      <Heading
        width={{ base: "290px", md: "350px", lg: "450px" }}
        fontSize={{ base: "30px", md: "36px", lg: "42px" }}
        textAlign="center"
        color="#FFF"
        fontWeight="extrabold"
        as="h2"
      >
        {props.title}
      </Heading>
    </VStack>
  );
}

import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

export default function Description({ style, title, children, small }) {
  return (
    <VStack mb="80px" style={style}>
      <Box width={{ base: "92%", md: "600px", lg: "780px" }}>
        <Text
          color="#fff"
          fontWeight="extrabold"
					mb="50px"
          lineHeight={
            !small
              ? { base: "40px", md: "40px", lg: "46px" }
              : { base: "36px", md: "36px", lg: "36px" }
          }
          fontSize={
            !small
              ? { base: "30px", md: "36px", lg: "36px" }
              : { base: "24px", md: "20px", lg: "20px" }
          }
        >
					{title}
				</Text>
        {children}
      </Box>
    </VStack>
  );
}

//we design & develop software products by having some more text here so
//the client knows why they should choose us.

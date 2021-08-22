import React from "react";
import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { Fade } from "./index";

export default function Quote({ style, source, children, small }) {
  return (
    <VStack mb="50px" style={style}>
      <Box width={{ base: "92%", md: "600px", lg: "780px" }}>
        <Fade delay={0.15}>
          <Text
            color="#fff"
            fontWeight="extrabold"
						marginBottom="30px"
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
            {children}
          </Text>

          <Heading
            color="#4F5464"
            fontSize={{ base: "16px", md: "18px" }}
          >
            {source}
          </Heading>
        </Fade>
      </Box>
    </VStack>
  );
}

//we design & develop software products by having some more text here so
//the client knows why they should choose us.

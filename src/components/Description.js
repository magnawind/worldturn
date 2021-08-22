import React from "react";
import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { Fade } from "./index";

export default function Description({ style, topic, title, children, small }) {
  return (
    <VStack mb="50px" style={style}>
      <Box width={{ base: "92%", md: "600px", lg: "780px" }}>
        <Heading
          color="#4F5464"
          marginBottom="30px"
          as="h2"
          fontWeight="extrabold"
          fontSize={{ base: "16px", md: "18px" }}
        >
          {topic}
        </Heading>

        <Fade delay={0.05}>
          <Text
            color="#fff"
            fontWeight="extrabold"
            lineHeight={
              !small
                ? { base: "40px", md: "40px", lg: "46px" }
                : { base: "36px", md: "36px", lg: "36px" }
            }
            fontSize={
              !small
                ? { sm: "26px", base: "26px", md: "36px", lg: "36px" }
                : { sm: "20px", base: "20px", md: "20px", lg: "20px" }
            }
          >
            {children}
          </Text>
        </Fade>
      </Box>
    </VStack>
  );
}

//we design & develop software products by having some more text here so
//the client knows why they should choose us.

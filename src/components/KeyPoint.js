import React from "react";
import { VStack, Heading, Text, Box } from "@chakra-ui/react";
import { Fade } from "./index";

export default function Description({ intro, content, small, side }) {
    return (
        <VStack mb="50px" mt="50px" align={"right"}>
            <Box width={{ base: "92%", md: "600px", lg: "500"}}>
                <Heading
                    color="#fff"
                    marginBottom="30px"
                    as="h2"
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
                    {intro}
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
                        {content}
                    </Text>
                </Fade>
            </Box>
        </VStack>
    );
}
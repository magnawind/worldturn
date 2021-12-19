import React from "react";
import {VStack, Heading, Text, Box, HStack} from "@chakra-ui/react";
import { Fade } from "./index";

export default function Description({ intro, content, small, side }) {
    return (

        <VStack mb="50px" mt="50px">
            <Box width={{ base: "92%", md: "400px", lg: "500px" }} display="grid" >
                <Heading
                    color="rgba(255,255,255,1)"
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
                        color="rgba(255,255,255,0.7)"
                        fontWeight="extrabold"
                        lineHeight={
                            !small
                                ? { base: "20px", md: "20px", lg: "23px" }
                                : { base: "18px", md: "18px", lg: "18px" }
                        }
                        fontSize={
                            !small
                                ? { sm: "13px", base: "13px", md: "18px", lg: "18px" }
                                : { sm: "10px", base: "10px", md: "10px", lg: "10px" }
                        }
                    >
                        {content}
                    </Text>
                </Fade>
            </Box>
        </VStack>
    );
}
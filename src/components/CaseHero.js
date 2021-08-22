import React from "react";
import { chakra, VStack, Heading } from "@chakra-ui/react";
import { FadeScale, Fade, Arrow } from "./index";
import { motion } from "framer-motion";

export const MotionBox = motion(chakra.div);

export default function CaseHero({title, description}) {
  return (
    <React.Fragment>
      <VStack
        alignItems="center"
        justifyContent="center"
        height={{ base: "65vh", md: "80vh" }}
      >
      <Fade>
      <Heading
          width={{ base: "350px", md: "500px", lg: "800px" }}
          fontSize={{ base: "30px", md: "40px", lg: "46px" }}
          textAlign="center"
          color="#FFF"
          fontWeight="extrabold"
          as="h1"
          marginBottom="20px"
        >
          {title}
        </Heading>
      </Fade>
        
        <FadeScale delay={0.4}>
          <Heading color="#4F5464" textAlign="center" alignSelf="center" w={{base: "280px", md: "400px", lg: "500px"}} fontSize="20px" >
            {description}
          </Heading>
        </FadeScale>
      </VStack>
      <VStack>
        <Fade delay={0.65}>
          <Arrow />
        </Fade>
      </VStack>
    </React.Fragment>
  );
}

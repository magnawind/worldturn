import React from "react";
import {chakra, VStack, Heading, Text} from "@chakra-ui/react";
import { Fade, Arrow } from "./index";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
import { realshort } from "../assets/images/index";

export const MotionBox = motion(chakra.div);

export default function Hero() {
  return (

    <div>
      <video className='videoTag' autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "5%",
        height: "25%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "0"
      }}>
        <source src={realshort} type='video/mp4' />
      </video>

    <React.Fragment>
      <VStack
        alignItems="center"
        justifyContent="center"
        height={{ base: "65vh", md: "80vh" }}
      >
        <Fade>
          <Text color="#4F5464" fontSize="22px" fontWeight="bold">
            worldturn
          </Text>
        </Fade>
        <Fade style={{ marginBottom: "50px" }} delay={0.20} duration={1}>
          <Heading
            width={{ base: "370px", md: "500px", lg: "750px" }}
            fontSize={{ base: "38px", md: "44px", lg: "50px" }}
            textAlign="center"
            color="#FFF"
            fontWeight="extrabold"
            as="h1"
            marginBottom="30px"
            marginTop="10px"
          >
            <Trans i18nKey="home.hero.title">
              
            </Trans>
          </Heading>
        </Fade>

        {/* <Fade delay={0.6}>
        <Button title="Get in touch" />
      </Fade> */}
      </VStack>
      <VStack>
        <Fade delay={0.40}>
          <Arrow />
        </Fade>
      </VStack>
    </React.Fragment>
    </div>
  );
}

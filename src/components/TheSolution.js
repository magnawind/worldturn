import React from "react";
import {chakra, VStack, Heading, Text} from "@chakra-ui/react";
import { Fade, Arrow } from "./index";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";

export const MotionBox = motion(chakra.div);

export default function Hero() {
  return (

    <React.Fragment>
        <VStack
            height={{ base: "10vh", md: "10vh" }}
        >
        </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        height={{ base: "75vh", md: "75vh" }}
      >
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
                <Trans i18nKey="home.theSolution.education.title">
                </Trans>
              </Heading>
                <Heading
                    width={{ base: "370px", md: "500px", lg: "750px" }}
                    fontSize={{ base: "19px", md: "22px", lg: "25px" }}
                    textAlign="center"
                    color="#FFF"
                    fontWeight="bold"
                    as="h1"
                    marginBottom="30px"
                    marginTop="10px"
                >
                    <Trans i18nKey="home.theSolution.education.proposal">
                    </Trans>
                </Heading>

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
                  <Trans i18nKey="home.theSolution.business.title">
                  </Trans>
              </Heading>
              <Heading
                  width={{ base: "370px", md: "500px", lg: "750px" }}
                  fontSize={{ base: "19px", md: "22px", lg: "25px" }}
                  textAlign="center"
                  color="#FFF"
                  fontWeight="bold"
                  as="h1"
                  marginBottom="30px"
                  marginTop="10px"
              >
                  <Trans i18nKey="home.theSolution.business.proposal">
                  </Trans>
              </Heading>
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
                  <Trans i18nKey="home.theSolution.talents.title">
                  </Trans>
              </Heading>
              <Heading
                  width={{ base: "370px", md: "500px", lg: "750px" }}
                  fontSize={{ base: "19px", md: "22px", lg: "25px" }}
                  textAlign="center"
                  color="#FFF"
                  fontWeight="bold"
                  as="h1"
                  marginBottom="30px"
                  marginTop="10px"
              >
                  <Trans i18nKey="home.theSolution.talents.proposal">
                  </Trans>
              </Heading>
          </Fade>
      </VStack>
        <VStack
            height={{ base: "15vh", md: "15vh" }}
        >
        </VStack>

    </React.Fragment>
  );
}

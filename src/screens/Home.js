import React from "react";
import { Box, Center } from "@chakra-ui/react";
import {
  NavigationBar,
  Hero,
  Cases,
  Description,
  Team,
  Footer
} from "../components/index";
import { Trans } from "react-i18next";

export default function Home() {
  return (
    <Box backgroundColor="#12141C">
      <Box>
        <NavigationBar />
        <Hero />
      </Box>
        <Box mt="80px">
            <Description>
                <Trans i18nKey="home.motivation.mot-1" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-2" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-3" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-4" />
            </Description>
        </Box>

      <Box mt="40px">
        <Cases />
      </Box>
      <Box mt="40vh">
        <Team />
      </Box>
      <Box h="35vh"></Box>
      <Footer/>
    </Box>
  );
}

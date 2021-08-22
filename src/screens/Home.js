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
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar />
      <Hero />
      <Center h="100vh">
        <Description style={{ marginBottom: "40px" }} topic={<Trans i18nKey="global.aboutUs" />}  >
        <Trans i18nKey="home.whatWeDo.title" />
          {/*   <Highlight notExternal href="contact">{<Trans i18nKey="global.getInTouch" />}</Highlight> */}
        </Description>
      </Center>
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

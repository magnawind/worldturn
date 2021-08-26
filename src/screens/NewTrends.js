import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Highlight,
} from "../components/index";
import { Box, Center, VStack, Image } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";
import { pthShowCase } from "../assets/images/index"

export default function NewTrends() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="newTrends.name" />}
        description={<Trans i18nKey="newTrends.intro" />}
      />
      <Center h="100vh">
        <Description>
          <Trans i18nKey="newTrends.d1" />{" "}
          <Highlight href="https://paythehippo.com/index.aspx">
            <Trans i18nKey="newTrends.name" />
          </Highlight>{" "}
          <Trans i18nKey="newTrends.d2" />
        </Description>
      </Center>
      <VStack mb="10vh">
        <Description topic={<Trans i18nKey="newTrends.aboutTitle" />} small>
          <Trans i18nKey="newTrends.about" />
        </Description>
        <Description topic={<Trans i18nKey="newTrends.ourRoleTitle" />} small>
          <Trans i18nKey="newTrends.ourRole" />
        </Description>
      </VStack>
      <Center mb="20vh">
        <Image
          width={{ base: "92%", md: "600px", lg: "780px" }}
          src={pthShowCase}
          alt="app"
        />
      </Center>
    </Box>
  );
}

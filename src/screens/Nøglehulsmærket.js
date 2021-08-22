import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Section,
  Partner
} from "../components/index";
import { Box, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";
import { dtu } from "../assets/images/index";

export default function Nøglehulsmærket() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="nøglehulsmærket.name" />}
        description={<Trans i18nKey="nøglehulsmærket.intro" />}
      />

      <VStack mt="20vh" mb="20vh">
        <Description topic={<Trans i18nKey="nøglehulsmærket.aboutTitle" />} small>
          <Trans i18nKey="nøglehulsmærket.about" />
        </Description>
      </VStack>
      <Section title="partners">
        <Partner
          href="https://www.food.dtu.dk/"
          name={<Trans i18nKey="nøglehulsmærket.partner1" />}
          description={<Trans i18nKey="nøglehulsmærket.partner1Description" />}
          img={dtu}
        />
      </Section>
    </Box>
  );
}

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

export default function Infood() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="infood.name" />}
        description={<Trans i18nKey="infood.intro" />}
      />
      <VStack mt="20vh" mb="20vh">
        <Description topic={<Trans i18nKey="infood.aboutTitle" />} small>
          <Trans i18nKey="infood.about" />
        </Description>
      </VStack>
      <Section title="partners">
        <Partner
          href="https://www.food.dtu.dk/"
          name={<Trans i18nKey="infood.partner" />}
          description={<Trans i18nKey="infood.partnerDescription" />}
          img={dtu}
        />
      </Section>
    </Box>
  );
}

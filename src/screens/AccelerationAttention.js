import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Section,
  Partner,
	Highlight
} from "../components/index";
import { Box, VStack, Center } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";
import { diet } from "../assets/images/index";

export default function AccelerationAttention() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="accelerationAttention.name" />}
        description={<Trans i18nKey="accelerationAttention.intro" />}
      />

      <Center h="100vh">
        <Description topic={<Trans i18nKey="accelerationAttention.aboutTitle" />}>
          <Trans i18nKey="accelerationAttention.about1" />
          <Highlight href="https://diaetisthuset.dk/">
            <Trans i18nKey="accelerationAttention.partner" />
          </Highlight>
          <Trans i18nKey="accelerationAttention.about2" />
        </Description>
      </Center>

      <VStack mb="20vh">
        <Description topic={<Trans i18nKey="accelerationAttention.ourWorkTitle" />} small>
          <Trans i18nKey="accelerationAttention.ourWork" />
        </Description>
      </VStack>
      <Section title="partners">
        <Partner
          href="https://diaetisthuset.dk/"
          name={<Trans i18nKey="accelerationAttention.partner" />}
          description={<Trans i18nKey="accelerationAttention.partnerDescription" />}
          img={diet}
        />
      </Section>
    </Box>
  );
}

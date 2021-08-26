import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Section,
  Partner,
  Quote,
} from "../components/index";
import { Box, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";
import { dtu } from "../assets/images/index";

export default function ConstantChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="constantChange.name" />}
        description={<Trans i18nKey="constantChange.intro" />}
      />

      <VStack mt="20vh" mb="20vh">
        <Description topic={<Trans i18nKey="constantChange.aboutTitle" />} small>
          <Trans i18nKey="constantChange.about" />
        </Description>
        <Quote source={<Trans i18nKey="constantChange.qouteSrc" />} small>
          <Trans i18nKey="constantChange.quote" />
        </Quote>
      </VStack>
      <Section title="partners">
        <Partner
          href="https://www.food.dtu.dk/"
          name={<Trans i18nKey="constantChange.partner" />}
          description={<Trans i18nKey="constantChange.partnerDescription" />}
          img={dtu}
        />
      </Section>
    </Box>
  );
}

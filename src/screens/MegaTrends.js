import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Section,
  Partner,
} from "../components/index";
import { Box, VStack, Image, Center } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";
import { boho, sustain, aarstiderne } from "../assets/images/index";

export default function MegaTrends() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="megaTrends.name" />}
        description={<Trans i18nKey="megaTrends.intro" />}
      />

      <VStack mt="20vh" mb="20vh">
        <Description
          topic={<Trans i18nKey="megaTrends.aboutTitle1" />}
          small
        >
          <Trans i18nKey="megaTrends.about1" />
        </Description>
        <Description
          topic={<Trans i18nKey="megaTrends.aboutTitle2" />}
          small
        >
          <Trans i18nKey="megaTrends.about2" />
        </Description>
      </VStack>
      <Section title="partners">
        <Partner
          href="https://www.aarstiderne.com/"
          name="Aarstiderne"
          description="Danish-wide supplier of organic food to business and private"
          img={aarstiderne}
        />
        <Partner
          href="https://theorganicboho.com/"
          name="Organic Boho"
          description="Vegan restaurant chain based in copenhagen"
          img={boho}
        />
      </Section>
      <VStack mt="10vh" >
        <Description
          topic={<Trans i18nKey="megaTrends.exampleTitle" />}
          small
        >
          <Trans i18nKey="megaTrends.example" />
        </Description>
      </VStack>

      <Center mb="20vh">
        <Image
          width={{ base: "92%", md: "600px", lg: "780px" }}
          src={sustain}
          alt="app"
        />
      </Center>
    </Box>
  );
}

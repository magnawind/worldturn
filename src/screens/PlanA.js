import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
  Description,
  Highlight,
} from "../components/index";
import { Box, Center, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

export default function PlanA() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="planA.name" />}
        description={<Trans i18nKey="planA.intro" />}
      />
      <Center h="100vh">
        <Description>
          <Trans i18nKey="planA.about1" />{" "}
          <Highlight href="https://planaprojects.com/da/?gclid=Cj0KCQjw3f6HBhDHARIsAD_i3D8asJrggdOtkZoe-TtZP_RD7tInCjZhOa9xoA38K-C73YRXdB9rd5EaAsYxEALw_wcB">
            <Trans i18nKey="planA.partner" />
          </Highlight>{" "}
          <Trans i18nKey="planA.about2" />
        </Description>
      </Center>
      <VStack mb="40vh">
        <Description topic={<Trans i18nKey="planA.ourWorkTitle" />} small>
          <Trans i18nKey="planA.ourWork" />
        </Description>
      </VStack>
    </Box>
  );
}

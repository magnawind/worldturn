import React from "react";
import { VStack, Grid } from "@chakra-ui/react";
import { Title, FadeScale, Fade } from "./index";
import {
  PayTheHippo,
  SustainableFoods,
  Dietplan,
  Nøglehulsmærket,
  PlanA,
  WSTP,
  Infood
} from "../cases/index";
import { Trans } from "react-i18next";

export default function NewCases() {
  return (
    <VStack mt="60px" h="fit-content" p="0px 10px 0px 10px">
      <Fade>
        <Title
          title={<Trans i18nKey="home.cases.title" />}
          underTitle={<Trans i18nKey="home.cases.topic" />}
        />
      </Fade>

      <Grid
        maxW="1800px"
        w="94%"
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap="4"
      >
        <FadeScale>
          <SustainableFoods />
        </FadeScale>
        <FadeScale delay={0.1}>
          <PayTheHippo />
        </FadeScale>
        <FadeScale delay={0.15}>
          <Dietplan />
        </FadeScale>
        <FadeScale delay={0.20}>
          <Nøglehulsmærket />
        </FadeScale>
        <FadeScale delay={0.25}>
          <PlanA />
        </FadeScale>
        <FadeScale delay={0.30}>
          <WSTP />
        </FadeScale>
        <FadeScale delay={0.35}>
          <Infood />
        </FadeScale>
      </Grid>
    </VStack>
  );
}

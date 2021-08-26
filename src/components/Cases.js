import React from "react";
import { VStack, Grid } from "@chakra-ui/react";
import { Title, FadeScale, Fade } from "./index";
import {
  NewTrends,
  MegaTrends,
  AccelerationAttention,
  MachinesRise,
  CriticalNature,
  ConstantChange,
  FutureRevolution
} from "../cases/index";
import { Trans } from "react-i18next";

export default function Cases() {
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
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="80px"

      >
        <FadeScale>
          <MegaTrends />
        </FadeScale>
        <FadeScale delay={0.1}>
          <NewTrends />
        </FadeScale>
        <FadeScale delay={0.15}>
          <AccelerationAttention />
        </FadeScale>
        <FadeScale delay={0.20}>
          <MachinesRise />
        </FadeScale>
        <FadeScale delay={0.25}>
          <FutureRevolution />
        </FadeScale>
        <FadeScale delay={0.30}>
          <ConstantChange />
        </FadeScale>
        <FadeScale delay={0.35}>
          <CriticalNature />
        </FadeScale>
        
        
      </Grid>
    </VStack>
  );
}

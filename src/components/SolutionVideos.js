import React from "react";
import {VStack, Grid} from "@chakra-ui/react";
import { FadeScale } from "./index";
import {
  FutureRevolution,
  MachinesRise,
  ConstantChange
} from "../cases/index";
export default function Cases() {
  return (
    <VStack h="fit-content" p="0px 10px 0px 10px">
      <Grid
        maxW="1800px"
        templateRows="repeat(1, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="80px"

      >
        <FadeScale>
          <FutureRevolution />
        </FadeScale>
        <FadeScale delay={0.1}>
          <MachinesRise />
        </FadeScale>
        <FadeScale delay={0.15}>
          <ConstantChange />
        </FadeScale>
      </Grid>
    </VStack>
  );
}

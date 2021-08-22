import React from "react";
import { VStack, Grid, Box } from "@chakra-ui/react";
import { Description, FadeScale, Employee } from "./index";
import { Trans } from "react-i18next"
import { thomas, magnus, rumle, alex } from "../assets/images/index"

export default function Team() {
  return (
    <VStack h="fit-content">
      <Box mb="14vh">
        <Description topic={<Trans i18nKey="home.team.topic" />}>
          <Trans i18nKey="home.team.title" />
        </Description>
      </Box>

      <Grid
        maxW="1800px"
        templateRows="repeat(1, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)"
        }}
        gap="8"
      >
        <FadeScale>
          <Employee
            name="Magnus Winding"
            role={<Trans i18nKey="home.team.magnus" />} 
            linkedin="https://www.linkedin.com/in/magnus-winding-509021a5/"
            src={magnus}
          />
        </FadeScale>
        <FadeScale delay={0.2}>
          <Employee
            name="Thomas Holstein Qvortrup"
            role={<Trans i18nKey="home.team.thomas" />}
            linkedin="https://www.linkedin.com/in/qvortrup/"
            //dribbble
            //behance
            src={thomas}
          />
        </FadeScale>
        <FadeScale delay={0.4}>
          <Employee
            name="Rumle Flanding"
            role={<Trans i18nKey="home.team.rumle" />}
            src={rumle}
            linkedin="https://www.linkedin.com/in/rumle-sakarias-flanding-3501bb172/"
          />
        </FadeScale>
        <FadeScale delay={0.6}>
          <Employee
            name="Alexander Nielsen"
            role={<Trans i18nKey="home.team.alexander" />}
            linkedin="https://www.linkedin.com/in/algn/"
            github="https://github.com/4lgn"
            src={alex}
          />
        </FadeScale>
      </Grid>
    </VStack>
  );
}

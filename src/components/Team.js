import React from "react";
import { VStack, Grid, Box } from "@chakra-ui/react";
import { Description, FadeScale, Employee } from "./index";
import { Trans } from "react-i18next"
import { magnus, jacob } from "../assets/images/index"

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
              name="Jacob Kjærsgaard Bendtzen"
              role={<Trans i18nKey="home.team.jacob" />}
              linkedin="https://www.linkedin.com/in/magnus-winding-509021a5/"
              src={jacob}
          />
      </FadeScale>
        <FadeScale>
          <Employee
            name="Magnus Winding"
            role={<Trans i18nKey="home.team.magnus" />} 
            linkedin="https://www.linkedin.com/in/magnus-winding-509021a5/"
            src={magnus}
          />
        </FadeScale>
      </Grid>
    </VStack>
  );
}

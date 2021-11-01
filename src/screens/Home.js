import React from "react";
import { Box, Center } from "@chakra-ui/react";
import {
  NavigationBar,
  Hero,
  Cases,
  Description,
  KeyPoint,
  Team,
  Footer
} from "../components/index";
import { Trans } from "react-i18next";

export default function Home() {
  return (
    <Box background = "linear-gradient(10deg, rgba(74,155,208,1) 0%, rgba(232,142,67,0.5) 50%, rgba(18,20,28,1) 100%)">
        <Box>
            <NavigationBar />
            <Hero />
        </Box>

        <Box mt="80px">

            <div align="center">
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRrin_Ih9uZMudvzPTT8-XUyQHaDpb47liEb5p-hU9a8UW55EkEhl6e8jio8qcZow/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0" width="900px%" height="543px%" allowFullScreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true">
                </iframe>
            </div>

            <KeyPoint
                intro={<Trans i18nKey="businessModel.intro" />}
                content={<Trans i18nKey="businessModel.content" />}
                side={"right"}
            >
            </KeyPoint>

            <Description>
                <Trans i18nKey="home.motivation.mot-1" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-2" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-3" />
            </Description>
            <Description>
                <Trans i18nKey="home.motivation.mot-4" />
            </Description>
        </Box>

      <Box mt="40px">
        <Cases />
      </Box>
      <Box mt="40vh">
        <Team />
      </Box>
      <Box h="35vh"></Box>
      <Footer/>
    </Box>
  );
}

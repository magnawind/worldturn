import React from "react";
import {
  ContactLine,
  NavigationBar,
  ContactColumn,
  Icon,
  Link,
  Fade,
} from "../components/index";
import { Box, VStack, HStack, Heading, Grid, Center } from "@chakra-ui/react";
import { Trans } from "react-i18next"

export default function Contact() {
  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <Center>
        <VStack
          h={{base: "100vh", md: "80vh"}}
          alignSelf="center"
          justifyContent="center"
          width={{ base: "92%", md: "800px", lg: "1000px" }}
        >
          <Fade>
            <Heading
              color="#FFF"
              as="h1"
              fontWeight="extrabold"
              fontSize={{ base: "40px", md: "40px", lg: "40px" }}
              mb={{ base: "50px", md: "60px", lg: "80px" }}
            >
            <Trans i18nKey="getInTouch.title" />

            </Heading>
          </Fade>

          <Grid
            maxW="1800px"
            gap="8"
            w="94%"
            templateRows="repeat(1, 1fr)"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            <Fade delay={0.2}>
              <ContactColumn title="info ℹ️">
                <ContactLine type="regular">wemuda ApS</ContactLine>
                <Link href="https://www.google.com/maps/dir//Niels+Hemmingsens+Gade+20b,+Copenhagen/@55.6795629,12.5730037,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x46525310c2259133:0xac94369f3db8f929!2m2!1d12.5773811!2d55.679563!3e2">Niels Hemmingsensgade 20B</Link>
                <ContactLine>1153 Copenhagen, Denmark</ContactLine>
                <ContactLine>CVR: 38275437</ContactLine>
              </ContactColumn>
            </Fade>
            <Fade delay={0.3}>
              <ContactColumn title={<Trans i18nKey="getInTouch.sayHi" />}>
                <Link noTarget href="tel:+4527303309">
                  +45 27 30 33 09
                </Link>
                <Link href="mailto:info@wemuda.com">info@wemuda.com</Link>
              </ContactColumn>
            </Fade>
            <Fade delay={0.4}>
              <ContactColumn title={<Trans i18nKey="getInTouch.followUs" />} >
                <HStack>
                  <Icon type="facebook" href="https://www.facebook.com/wemudaofficial"></Icon>
                  <Icon type="instagram" href="https://www.instagram.com/wemudaofficial/"></Icon>
                </HStack>
              </ContactColumn>
            </Fade>
          </Grid>
        </VStack>
      </Center>
    </Box>
  );
}

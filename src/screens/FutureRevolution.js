import React, { useEffect } from "react";
import {
    CaseHero,
    NavigationBar,
    VimeoViewer
} from "../components/index";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

export default function FutureRevolution() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="futureRevolution.name" />}
        description={<Trans i18nKey="futureRevolution.intro" />}
        content={<Trans i18nKey="futureRevolution.content" />}
      />
      <VimeoViewer src={'https://player.vimeo.com/video/244183090?h=289c2a7978'}/>
    </Box>
  );
}

import React, { useEffect } from "react";
import {
  CaseHero,
  NavigationBar,
    VimeoViewer
} from "../components/index";
import {Box} from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

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
        content={<Trans i18nKey="megaTrends.content" />}
      />

        <VimeoViewer
            src={'https://player.vimeo.com/video/245181562?h=7e15a55b0e'}
        />

    </Box>
  );
}

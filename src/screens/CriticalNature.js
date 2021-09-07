import React, { useEffect } from "react";
import {
    CaseHero,
    NavigationBar, VimeoViewer,
} from "../components/index";
import { Box} from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

export default function CriticalNature() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="criticalNature.name" />}
        description={<Trans i18nKey="criticalNature.intro" />}
        content={<Trans i18nKey="criticalNature.content" />}
      />
      <VimeoViewer src={'https://player.vimeo.com/video/244183201?h=bf9102823c'}/>
    </Box>
  );
}

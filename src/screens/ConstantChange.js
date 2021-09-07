import React, { useEffect } from "react";
import {
    CaseHero,
    NavigationBar, VimeoViewer,
} from "../components/index";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

export default function ConstantChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
      <CaseHero
        title={<Trans i18nKey="constantChange.name" />}
        description={<Trans i18nKey="constantChange.intro" />}
        content={<Trans i18nKey="constantChange.content" />}
      />
        <VimeoViewer src={'https://player.vimeo.com/video/244183311?h=cfed5a53a4'}/>
    </Box>
  );
}

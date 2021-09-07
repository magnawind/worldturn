import React, { useEffect } from "react";
import {
    CaseHero,
    NavigationBar, VimeoViewer
} from "../components/index";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { Trans } from "react-i18next";

export default function MachinesRise() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box height="100%" backgroundColor="#12141C">
      <NavigationBar back />
        <CaseHero
        title={<Trans i18nKey="machinesrise.name" />}
        description={<Trans i18nKey="machinesrise.intro" />}
        content={<Trans i18nKey="machinesrise.content" />}
      />
    <VimeoViewer src={'https://player.vimeo.com/video/244183244?h=b6c26374fc'}/>
    </Box>
  );
}

import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { machinesrise } from "../assets/images/cases/index";

export default function MachinesRise() {
  return (
    <Case
      href="nøglehulsmærket"
      title={<Trans i18nKey="machinesrise.name" />}
      img={machinesrise}
      description={<Trans i18nKey="machinesrise.intro" />}
    />
  );
}

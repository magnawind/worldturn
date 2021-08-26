import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { criticalnature } from "../assets/images/cases/index";

export default function CriticalNature() {
  return (

    <Case
      href="plan-a"
      title={<Trans i18nKey="criticalNature.name" />}
      img={criticalnature}
      description={<Trans i18nKey="criticalNature.intro" />}
    />
  );
}
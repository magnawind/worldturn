import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { planA } from "../assets/images/cases/index";

export default function PlanA() {
  return (

    <Case
      href="plan-a"
      title={<Trans i18nKey="planA.name" />}
      img={planA}
      description={<Trans i18nKey="planA.intro" />}
    />
  );
}
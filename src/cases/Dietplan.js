import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { dietplan } from "../assets/images/cases/index";

export default function Dietplan() {
  return (
    <Case
      href="dietplan"
      title={<Trans i18nKey="dietplan.name" />}
      img={dietplan}
      description={<Trans i18nKey="dietplan.intro" />}
    />
  );
}

import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { futurerevolution } from "../assets/images/cases/index";

export default function FutureRevolution() {
  return (
    <Case
      href="infood"
      title={<Trans i18nKey="futureRevolution.name" />}
      img={futurerevolution}
      description={<Trans i18nKey="futureRevolution.intro" />}
    />
  );
}

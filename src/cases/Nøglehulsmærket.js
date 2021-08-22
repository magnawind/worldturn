import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { keyhole } from "../assets/images/cases/index";

export default function Nøglehulsmærket() {
  return (
    <Case
      href="nøglehulsmærket"
      title={<Trans i18nKey="nøglehulsmærket.name" />}
      img={keyhole}
      description={<Trans i18nKey="nøglehulsmærket.intro" />}
    />
  );
}

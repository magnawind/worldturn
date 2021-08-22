import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { infood } from "../assets/images/cases/index";

export default function Infood() {
  return (
    <Case
      href="infood"
      title={<Trans i18nKey="infood.name" />}
      img={infood}
      description={<Trans i18nKey="infood.intro" />}
    />
  );
}

import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { waste } from "../assets/images/cases/index";

export default function WSTP() {
  return (
    <Case
      href="wstp"
      title={<Trans i18nKey="wstp.name" />}
      img={waste}
      description={<Trans i18nKey="wstp.intro" />}
    />
  );
}

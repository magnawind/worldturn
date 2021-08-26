import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { constantchange } from "../assets/images/cases/index";

export default function ConstantChange() {
  return (
    <Case
      href="wstp"
      title={<Trans i18nKey="constantChange.name" />}
      img={constantchange}
      description={<Trans i18nKey="constantChange.intro" />}
    />
  );
}

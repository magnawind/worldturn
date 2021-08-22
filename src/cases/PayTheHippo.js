import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { pth } from "../assets/images/cases/index";

export default function PayTheHippo() {
  return (
    <Case
      href="paythehippo"
      title={<Trans i18nKey="pth.name" />}
      img={pth}
      description={<Trans i18nKey="pth.intro" />}
    />
  );
}

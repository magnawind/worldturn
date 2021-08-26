import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { megatrends } from "../assets/images/cases/index";

export default function MegaTrends() {
  return (
    <Case
      href="sustainable-foods"
      title={<Trans i18nKey="megaTrends.name" />}
      img={megatrends}
      description={<Trans i18nKey="megaTrends.intro" />}
    />
  );
}

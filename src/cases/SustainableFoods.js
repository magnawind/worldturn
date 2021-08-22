import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { boho } from "../assets/images/cases/index";

export default function SustainableFoods() {
  return (
    <Case
      href="sustainable-foods"
      title={<Trans i18nKey="sustainableFoods.name" />}
      img={boho}
      description={<Trans i18nKey="sustainableFoods.intro" />}
    />
  );
}

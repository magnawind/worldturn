import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { accelerationattention } from "../assets/images/cases/index";

export default function AccelerationAttention() {
  return (
    <Case
      href="dietplan"
      title={<Trans i18nKey="accelerationAttention.name" />}
      img={accelerationattention}
      description={<Trans i18nKey="accelerationAttention.intro" />}
    />
  );
}

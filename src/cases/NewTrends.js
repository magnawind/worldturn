import React from "react";
import { Trans } from "react-i18next";
import { Case } from "../components/index";
import { newtrends } from "../assets/images/cases/index";

export default function NewTrends() {
  return (
    <Case
      href="paythehippo"
      title={<Trans i18nKey="newTrends.name" />}
      img={newtrends}
      description={<Trans i18nKey="newTrends.intro" />}
    />
  );
}

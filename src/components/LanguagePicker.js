import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import en from "../assets/en.jpeg";
import da from "../assets/da.jpeg";
import { useTranslation } from "react-i18next";
import { Fade } from "./index";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
      // eslint-disable-next-line
      window.location = window.location;
    }
  };

  return (
    <HStack mr="14px">
      {i18n.language === "da" && (
        <Fade>
          <Image
            mr="4px"
            src={en}
            alt="en"
            width="28px"
            cursor="pointer"
            borderRadius="6px"
            onClick={() => changeLanguage("en")}
          />
        </Fade>
      )}

      {i18n.language === "en" && (
        <Fade>
          <Image
            src={da}
            alt="da"
            width="28px"
            borderRadius="6px"
            cursor="pointer"
            onClick={() => changeLanguage("da")}
          />
        </Fade>
      )}
    </HStack>
  );
}

import React from "react";
import { HStack, Image, Link } from "@chakra-ui/react";
import { Button } from "./index";
import logo from "../assets/logo.png";
import { Trans } from "react-i18next"

export default function NavigationBar({ back }) {
  return (
    <HStack
      backdropBlur="6"
      position="sticky"
      padding="16px"
      zIndex="9999999999"
      top={0}
      style={{ backdropFilter: "blur(4px)" }}
      justifyContent="space-between"
    >
      <Link ml="10px" href="/">
        <Image
          objectFit="fill"
          width="30px"
          zIndex="100000"
          src={logo}
          alt="logo"
        />
      </Link>

      <HStack>
        {back ? (
          <Button title={<Trans i18nKey="global.backButton" />} href="back" />
        ) : (
          <Button title={<Trans i18nKey="global.getInTouch" />} href="/contact" />
        )}
      </HStack>
    </HStack>
  );
}

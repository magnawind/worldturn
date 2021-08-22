import React from "react";
import { Link } from "@chakra-ui/react";

export default function Highlight({
  children,
  color,
  href,
  small,
  notExternal,
}) {
  return (
    <Link
      color={color}
      isExternal={!notExternal}
      outline="none"
      outlineColor="transparent"
      href={href}
      fontWeight="extrabold"
      lineHeight={
        !small
          ? { base: "40px", md: "40px", lg: "46px" }
          : { base: "36px", md: "36px", lg: "36px" }
      }
      fontSize={
        !small
          ? { sm: "26px", base: "26px", md: "36px", lg: "36px" }
          : { sm: "20px", base: "20px", md: "20px", lg: "20px" }
      }
      bg="#2B7168"
      _hover={{
        bg: "#40BBA4",
      }}
    >
      {children}
    </Link>
  );
}

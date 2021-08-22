import React from "react";
import { Center, Link } from "@chakra-ui/react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaGithub
} from "react-icons/fa";

export default function Icon({type, href}) {
  const renderIcon = () => {
    switch (type) {
      case "linkedin":
        return <FaLinkedinIn color="#FFF" size="20px" />;
      case "facebook":
        return <FaFacebookF color="#FFF" size="20px" />;
      case "behance":
        return <FaBehance color="#FFF" size="20px" />;
      case "instagram":
        return <FaInstagram color="#FFF" size="20px" />;
      case "dribbble":
        return <FaDribbble color="#FFF" size="20px" />;
        case "github":
        return <FaGithub color="#FFF" size="20px" />;
      default:
        <div></div>;
    }
  };
  return (
    <Link href={href} target="_blank" outlineColor="#12141C" >
      <Center
        outlineColor="#12141C"
        bg="#242631"
        _hover={{ bg: "#45CEB3"  }} //"#333645"
        transition="all 0.4s"
        cursor="pointer"
        w={{ base: "60px", md: "52px", lg: "48px" }}
        h={{ base: "60px", md: "52px", lg: "48px" }}
        borderRadius="40px"
        onClick={() => console.log("hej")}
      >
        {renderIcon()}
      </Center>
    </Link>
  );
}

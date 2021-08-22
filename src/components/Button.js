import React from "react";
import { Center, Text } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

export default function Button({title, href}) {

  const history = useHistory()
  return (

      <Center
        //w="160px"
        //h="58px"
        w="130px"
        h="48px"
        transition="all 0.4s"
        borderRadius="full"
        
        cursor="pointer"
        shadow
        color="#000"
        //boxShadow="0px 6px 16px #1C3943"
        //bgGradient="linear(to-r, #45CEB3, #3FA0DA)"
        bg="#fff"
        borderWidth="2px"
        userSelect="none"
        borderColor="#fff"
        _hover={{
          color: "#fff",
          bg: "transparent",
          borderWidth: "2px",
          borderColor: "#FFF"
        }}
        // _hover={{
        //   //bgGradient: "linear(to-r, #3DC1A7, #388FC3)",
        //   boxShadow: "0px 12px 22px #1C3943",
        //   transform: "translateY(-2px)",
        // }}
        // _active={{
        //   bgGradient: "linear(to-r, #3DC1A7, #388FC3)",
        //   border: "none",
        // }}
        // _pressed={{
        //   border: "none",
        // }}
        onClick={() => href === "back" ? history.goBack() :  history.push(href)}
      >
        <Text fontWeight="bold" fontSize="13px">{title}</Text>
      </Center>

  );
}

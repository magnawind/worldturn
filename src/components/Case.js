import React from "react";
import { Center, VStack, Box, Image, Text } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";

export default function Case({ title, description, img, href }) {
  const history = useHistory();
  return (
    <VStack
      onClick={() => history.push(href)}
      role="group"
      cursor="pointer"
      w={{ base: "90%", md: "320px" }}
      alignItems="flex-start"
      alignSelf="center"
      margin="0 auto"
    >
      <Center
        w="100%"
        bg="#fff"
        overflow="hidden"
        //style={{ touchAction: "none", msTouchAction: "none" }}
        borderRadius="22px !important"
        position="relative"
        zIndex="999999999"
        mb="8px"
      >
        <Image
          src={img}
          scale="1"
          w="100%"
          borderRadius="22px !important"
          transition="0.7s all"
          _groupHover={{ transform: "scale(1.08)" }}
        />
      </Center>
      <Box pl="4px">
        <Text
          //_groupHover={{ color: "#88BA3D" }}
          fontWeight="extrabold"
          fontSize="30px"
          transition="0.3s all"
          color="#fff"
					lineHeight="40px"
					mb="4px"
        >
          {title}
        </Text>
        <Text
          _groupHover={{
            color: "#FFF",
          }}
					transition="0.4s all"
          fontWeight="extrabold"
          color="#4F5464"
        >
          {description}
        </Text>
      </Box>
    </VStack>
  );
}

import React from "react";
import { VStack, Text, HStack, Image } from "@chakra-ui/react";
import { Icon } from "./index";

export default function Employee({
  name,
  role,
  linkedin,
  dribbble,
  behance,
  github,
  src
}) {
  return (
    <VStack alignItems="center" >
      <Image
        mb="12px"
        boxSize={{ base: "280px", md: "280px", lg: "280px" }}
        src={src}
        borderRadius="21px"
      />
      <Text color="#fff" fontSize="16px" fontWeight="extrabold">
        {name}
      </Text>

      <Text color="#4F5464" fontSize="15px" fontWeight="semibold">
        {role}
      </Text>

      <HStack alignItems="center">
        {linkedin && <Icon type="linkedin" href={linkedin} />}
        {dribbble && <Icon type="dribbble" />}
        {behance && <Icon type="behance" />}
        {github && <Icon type="github" href={github} />}
      </HStack>
    </VStack>
  );
}

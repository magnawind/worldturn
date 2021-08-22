import React from "react";
import { HStack, VStack, Image, Text, Link } from "@chakra-ui/react";

export default function Partner({ img, name, description, href }) {
  return (
    <HStack mb="30px">
      <Image boxSize="80px" borderRadius="full" src={img} mr="10px" />
      {/* <PartnerImage src={img} alt="img" /> */}
      <VStack alignItems="flex-start">
        <Link
          isExternal
          href={href}
          _hover={{
            color: "#45CEB3",
          }}
          color="#fff"
          fontWeight="bold"
        >
          {name}
        </Link>
        <Text color="#4A5262" mt="0px !important" fontWeight="bold">
          {description}
        </Text>
      </VStack>
    </HStack>
  );
}

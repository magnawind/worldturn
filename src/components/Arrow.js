import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Trans } from "react-i18next"

export default function Arrow() {
  return (
    <VStack>
      <Text fontWeight="bold" fontSize="14px" color="#3B3F4E"><Trans i18nKey="home.hero.scroll" /></Text>
      <motion.div
        animate={{
          y: [0, 25],
          scale: [0.8, 1, 1, 1, 1],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.9,
        }}
      >
        <Box h="30px" w="30px">
          <MdKeyboardArrowDown color="#fff" size="28px" />
        </Box>
      </motion.div>
    </VStack>
  );
}

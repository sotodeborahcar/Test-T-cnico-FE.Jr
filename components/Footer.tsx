"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { RxCalendar } from "react-icons/rx";
import { GoHomeFill } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#010316", "gray.800")}
      color={"white"}
      fontFamily={"Roboto, sans-serif"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          spacing={12}
          w={"90%"}
        >
          <Stack
            alignItems={"center"}
            spacing={0.1}
            _hover={{ color: "#3540E8" }}
          >
            <Box
              width={6}
              height={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SocialButton label={"Twitter"} href={"#"}>
                <RxCalendar fontSize={"xl"} />
              </SocialButton>
            </Box>
            <Text fontSize={"xs"}>Calendario</Text>
          </Stack>
          <Stack
            alignItems={"center"}
            spacing={0.1}
            _hover={{ color: "#3540E8" }}
          >
            <Box
              width={6}
              height={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SocialButton label={"YouTube"} href={"#"}>
                <GoHomeFill />
              </SocialButton>
            </Box>
            <Text fontSize={"xs"}>Inicio</Text>
          </Stack>
          <Stack
            alignItems={"center"}
            spacing={0.1}
            _hover={{ color: "#3540E8" }}
          >
            <Box
              width={6}
              height={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SocialButton label={"Instagram"} href={"#"}>
                <BsChat />
              </SocialButton>
            </Box>
            <Text fontSize={"xs"}>Chat</Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

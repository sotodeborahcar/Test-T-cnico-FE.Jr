"use client";

import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Cris",
    content:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy bue...",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Dina",
    content:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy bue...",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Julia",
    content:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy bue...",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Ruben",
    content:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy bue...",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Bruno",
    content:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy bue...",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

interface TestimonialCardProps {
  name: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, content, avatar, index } = props;
  return (
    <Flex
      fontFamily={"Roboto, sans-serif"}
      boxShadow={"lg"}
      maxW={{ base: "640px", md: "full" }}
      direction={{ base: "column", md: "column" }}
      width={"full"}
      rounded={"xl"}
      justifyContent={"space-between"}
      position={"relative"}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} alignItems={"center"}>
          <Avatar
            src={avatar}
            // height={8}
            height={{ base: 8, sm: 20 }}
            // width={8}
            width={{ base: 8, sm: 20 }}
            alignSelf={"center"}
            mr={2}
          />
          <chakra.p fontSize={"md"}>{name}</chakra.p>
        </Box>
        <chakra.p>
          <Button
            fontSize={"xs"}
            w={"90%"}
            bg={"none"}
            color={"#E41AD6"}
            rounded={"md"}
            _hover={{
              boxShadow: "lg",
              bg: "none",
              color: "#3540E8",
            }}
          >
            Responder
          </Button>
        </chakra.p>
      </Flex>
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p fontSize={"sm"} pb={4}>
          {content}
        </chakra.p>
      </Flex>
    </Flex>
  );
}

export default function testimonial() {
  return (
    <Flex
      pt={5}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
      pl={5}
      pr={5}
      fontFamily={"Roboto, sans-serif"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} gridGap={6}>
        <chakra.h3 fontWeight={"bold"} fontSize={"2xl"}>
          Opiniones
        </chakra.h3>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        mt={2}
        mb={2}
        mx={{ base: 1, xl: 2 }}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Stack
        align={"start"}
        spacing={2}
        flexDir={{ base: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "space-around" }}
      >
        <Button
          // w={"full"}
          width={{ base: "full", sm: "40%", lg: "xl" }}
          fontSize={"md"}
          mt={2}
          bgGradient="linear(90deg, #3540E8 0%, #E41AD6 100%)"
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Reservar mesa
        </Button>
        <Button
          // w={"full"}
          width={{ base: "full", sm: "40%", lg: "xl" }}
          fontSize={"md"}
          mt={2}
          border={"1px"}
          borderColor={"linear(90deg, #3540E8 0%, #E41AD6 100%)"}
          color={"white"}
          bg={"none"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Opciones de transporte
        </Button>
      </Stack>
    </Flex>
  );
}

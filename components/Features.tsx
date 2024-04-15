"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcAssistant } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { PhoneIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface CardProps {
  heading: string;
  direction: string;
  tel: number;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, direction, tel, href }: CardProps) => {
  return (
    <Box
      w={"20rem"}
      h={"191px"}
      backgroundColor={"#13132D"}
      borderRadius="lg"
      overflow="hidden"
      fontFamily={"Roboto, sans-serif"}
      p={4}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      mr={"8px"}
    >
      <Heading size="md" noOfLines={1}>
        {heading}
      </Heading>
      <Stack align={"start"} spacing={2} flexDir={"row"} alignItems={"center"}>
        <Flex justify={"center"} mt={2}>
          <Avatar
            size={"md"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Box mt={2}>
          <Stack pt={1} align={"center"} flexDir={"row"}>
            <IoLocationOutline fontSize={"sm"} />
            <Text mt={1} fontSize={"sm"} noOfLines={1}>
              {direction}
            </Text>
          </Stack>
          <Stack pt={1} align={"center"} flexDir={"row"}>
            <PhoneIcon fontSize={"sm"} />
            <Text mt={1} fontSize={"sm"}>
              {tel}
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Stack
        align={"start"}
        spacing={2}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button
          w={"90%"}
          height={8}
          mt={2}
          bgGradient="linear(90deg, #3540E8 0%, #E41AD6 100%)"
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            Ver más
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default function Feature() {
  const [breweries, setBreweries] = useState([]);
  const [breweries2, setBreweries2] = useState([]);

  useEffect(() => {
    async function fetchBreweries() {
      try {
        const response = await fetch(
          "https://api.openbrewerydb.org/breweries?per_page=3"
        );
        const data = await response.json();
        setBreweries(data);
      } catch (error) {
        console.error("Error al obtener las cervecerías:", error);
      }
    }
    fetchBreweries();
  }, []);

  useEffect(() => {
    async function fetchBreweries2() {
      try {
        const response = await fetch(
          "https://api.openbrewerydb.org/v1/breweries?by_state=california&per_page=3"
        );
        const data = await response.json();
        setBreweries2(data);
      } catch (error) {
        console.error("Error al obtener las cervecerías:", error);
      }
    }

    fetchBreweries2();
  }, []);

  return (
    <Box p={4} backgroundColor="#010316" color={"white"} minH={"auto"}>
      <Box>
        <Stack as={Container} maxW={{ base: "3xl", sm: "full" }} p={"1"}>
          <Heading fontSize={{ base: "3xl", sm: "4xl" }} fontWeight={"bold"}>
            Todas las opciones
          </Heading>
        </Stack>

        <Container
          maxW={"5xl"}
          mt={5}
          display={"flex"}
          overflow={"scroll"}
          p={"0"}
        >
          {breweries.map((brewery) => (
            <Flex flexWrap="wrap" gridGap={6} justify="center" key={brewery.id}>
              <Card
                heading={brewery.name}
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                direction={brewery.street}
                tel={brewery.phone}
                href={`/breweries/${brewery.id}`}
              />
            </Flex>
          ))}
        </Container>
      </Box>
      <Box mt={5}>
        <Stack as={Container} maxW={{ base: "3xl", sm: "full" }} p={"1"}>
          <Heading fontSize={{ base: "3xl", sm: "4xl" }} fontWeight={"bold"}>
            Opciones en California
          </Heading>
        </Stack>

        <Container
          maxW={"5xl"}
          mt={5}
          display={"flex"}
          overflowX={"auto"}
          p={"0"}
          mb={6}
        >
          {breweries2.map((brewery2) => (
            <Flex
              flexWrap="wrap"
              gridGap={6}
              justify="center"
              key={brewery2.id}
            >
              <Card
                heading={brewery2.name}
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                direction={brewery2.street}
                tel={brewery2.phone}
                href={`/breweries/${brewery2.id}`}
              />
            </Flex>
          ))}
        </Container>
      </Box>
    </Box>
  );
}

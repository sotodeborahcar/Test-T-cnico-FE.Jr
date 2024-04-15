"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  Flex,
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { PhoneIcon } from "@chakra-ui/icons";
import Testimonial from "@/components/Testimonials";

interface CardProps {
  heading: string;
  direction: string;
  tel: number;
  href: string;
}

const Card = ({ heading, direction, tel }: CardProps) => {
  return (
    <Box
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      fontFamily={"Roboto, sans-serif"}
      pt={5}
      pb={5}
    >
      <Heading fontSize={{ base: "3xl", sm: "4xl" }}>{heading}</Heading>
      <Stack align={"start"} spacing={2} flexDir={"row"} alignItems={"center"}>
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
    </Box>
  );
};

const BreweryDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBreweryDetails = async () => {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries/${id}`
        );
        const data = await response.json();
        setBrewery(data);
      } catch (error) {
        console.error("Error fetching brewery details:", error);
      }
    };

    if (id) {
      fetchBreweryDetails();
    }
  }, [id]);

  if (!brewery) {
    return <div>Loading...</div>;
  }
  return (
    <Flex
      minH={"100vh"}
      backgroundColor={"#040210"}
      color={"white"}
      flexDirection={"column"}
    >
      <Container maxW={"5xl"} mt={1}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={brewery.name}
            direction={brewery.street}
            tel={brewery.phone}
            // href={"#"}
            href={`/breweries/${brewery.id}`}
          />
        </Flex>
        <Stack
          direction="row"
          overflowX={"auto"}
          justifyContent={"space-around"}
        >
          <Image
            boxSize={{ base: "150px", md: "200px", lg: "250px" }}
            objectFit="cover"
            src="https://images.pexels.com/photos/751046/pexels-photo-751046.jpeg?cs=srgb&dl=pexels-hazan-ak%C3%B6z-%C4%B1%C5%9F%C4%B1k-751046.jpg&fm=jpg"
            alt="Dan Abramov"
            borderRadius="md"
            h={"104px"}
          />
          <Image
            boxSize={{ base: "150px", md: "200px", lg: "250px" }}
            objectFit="cover"
            src="https://static.standard.co.uk/2022/07/18/17/newFile-2.jpg?width=1200&height=630&fit=crop"
            alt="Dan Abramov"
            borderRadius="md"
            h={"104px"}
          />
          <Image
            boxSize={{ base: "150px", md: "200px", lg: "250px" }}
            objectFit="cover"
            src="https://www.shutterstock.com/image-photo/young-latin-brunette-prepares-cocktail-260nw-2134763389.jpg"
            alt="Dan Abramov"
            borderRadius="md"
            h={"104px"}
          />
        </Stack>
      </Container>
      <Testimonial />
    </Flex>
  );
};

export default BreweryDetails;

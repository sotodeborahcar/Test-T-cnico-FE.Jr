"use client";
import Feature from "@/components/Features";
import Result from "@/components/Result";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Result />
        <Feature />
      </ChakraProvider>
    </>
  );
}

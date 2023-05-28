import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center padding="0 0 2rem">
      <VStack>
        <Heading color="teal">Image Generator</Heading>
        <Text fontSize="sm">
          Describe the type of images you want to generate or upload an image
          and discover variations of it, the images generated are using OpenAI
          API.
        </Text>
      </VStack>
    </Center>
  );
}

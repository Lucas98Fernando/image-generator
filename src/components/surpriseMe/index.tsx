import { useSurpriseMe } from "@hooks/useSurpriseMe";
import { Button, HStack, Text } from "@chakra-ui/react";

export default function SurpriseMe() {
  const { handleRandomOption } = useSurpriseMe();

  return (
    <HStack padding="0 0 0.5rem">
      <Text fontSize="xs">Start with a detailed description</Text>
      <Button
        size="xs"
        colorScheme="teal"
        variant="outline"
        onClick={handleRandomOption}
      >
        Surprise me
      </Button>
    </HStack>
  );
}

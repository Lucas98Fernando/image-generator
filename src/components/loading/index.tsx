import { Center, Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <Center padding="4rem 0 0">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="md"
      />
    </Center>
  );
}

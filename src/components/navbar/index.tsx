import { Container, HStack, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <Container maxW="container.lg">
      <HStack justifyContent="space-between">
        <Image src="icon.png" width="50px" />
        <FaGithub className="github-icon" />
      </HStack>
    </Container>
  );
}

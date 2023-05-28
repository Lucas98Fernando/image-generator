import { Container, HStack, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <Container maxW="container.lg">
      <HStack justifyContent="space-between">
        <Image src="icon.png" width="50px" />
        <Link
          href="https://github.com/Lucas98Fernando/image-generator"
          isExternal
        >
          <FaGithub className="github-icon" />
        </Link>
      </HStack>
    </Container>
  );
}

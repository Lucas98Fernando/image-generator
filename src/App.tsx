import { Container, VStack } from "@chakra-ui/react";
import SearchInput from "@components/searchInput";
import "@styles/main.css";
import NavBar from "@components/navbar";
import SurpriseMe from "@components/surpriseMe";
import Header from "@components/header";
import { ListImages } from "@components/listImages";
import { ImagesProvider } from "@context/ImagesContext";

export default function App() {
  return (
    <>
      <ImagesProvider>
        <VStack height="100vh" justifyContent="space-between" padding="1rem 0">
          <NavBar />
          <Container maxW="container.lg">
            <Header />
            <SurpriseMe />
            <SearchInput />
            <ListImages />
          </Container>
          <Container />
        </VStack>
      </ImagesProvider>
    </>
  );
}

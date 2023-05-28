import { useGeneratedImages } from "@hooks/useGeneratedImages";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FaSistrix, FaArrowRight } from "react-icons/fa";

export default function SearchInput() {
  const { getImages, inputValue, handleOnChangeInput, isLoading } =
    useGeneratedImages();

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<FaSistrix />} />
      <Input
        value={inputValue}
        rounded="xl"
        placeholder="A beautiful cat with green eyes..."
        onChange={handleOnChangeInput}
      />
      <InputRightElement
        width="6rem"
        children={
          <Button
            size="sm"
            rounded="lg"
            rightIcon={<FaArrowRight />}
            colorScheme="teal"
            isLoading={isLoading}
            onClick={getImages}
          >
            Generate
          </Button>
        }
      />
    </InputGroup>
  );
}

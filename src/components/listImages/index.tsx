import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useGeneratedImages } from "@hooks/useGeneratedImages";
import { Loading } from "@components/loading";

export function ListImages() {
  const { images, inputValue, isLoading } = useGeneratedImages();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid margin="2rem 0 0" templateColumns="repeat(3, 1fr)" gap={6}>
          {images &&
            images.map((image, index) => (
              <GridItem key={index} w="100%">
                <Image
                  src={image.url}
                  alt={`Generated image of ${inputValue}`}
                  rounded="lg"
                />
              </GridItem>
            ))}
        </Grid>
      )}
    </>
  );
}

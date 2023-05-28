import { useContext } from "react";
import { ImagesContext } from "@context/ImagesContext";

export function useGeneratedImages() {
  const images = useContext(ImagesContext);
  return images;
}

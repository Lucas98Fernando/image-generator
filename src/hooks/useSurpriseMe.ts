import { useGeneratedImages } from "@hooks/useGeneratedImages";

export function useSurpriseMe() {
  const { setInputValue } = useGeneratedImages();

  const surpriseOptions = [
    "A cat playing",
    "A dog with blue eyes",
    "Anime characters in an epic combat",
    "White skark with glasses",
  ];

  const handleRandomOption = () => {
    setInputValue(
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
    );
  };

  return { handleRandomOption };
}

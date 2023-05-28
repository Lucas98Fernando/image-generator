import { useShowToast } from "@hooks/useShowToast";
import { createContext, PropsWithChildren, useState, ChangeEvent } from "react";

type GeneratedImage = {
  url: string;
};

type ImagesContextType = {
  images: GeneratedImage[];
  inputValue: string;
  isLoading: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  getImages(): void;
  handleOnChangeInput(event: ChangeEvent<HTMLInputElement>): void;
};

export const ImagesContext = createContext({} as ImagesContextType);

export function ImagesProvider({ children }: PropsWithChildren) {
  const url = import.meta.env.VITE_SERVER_API;
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useShowToast();

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}/images`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputValue,
          n: 3,
          size: "512x512",
        }),
      });
      const data = await response.json();
      setImages(data);
      setIsLoading(false);
      showToast({
        title: "Tudo certo!",
        description: "Imagens geradas com sucesso!",
        type: "success",
      });
    } catch (error) {
      setIsLoading(false);
      showToast({
        title: "Algo errado aconteceu",
        description: "Não foi possível gerar as imagens",
        type: "error",
      });
    }
  };

  return (
    <ImagesContext.Provider
      value={{
        images,
        inputValue,
        isLoading,
        setInputValue,
        getImages,
        handleOnChangeInput,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

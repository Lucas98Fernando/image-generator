import { UseToastOptions, useToast } from "@chakra-ui/react";

type ToastProps = {
  title?: string;
  description?: string;
  type: UseToastOptions["status"];
};

export function useShowToast() {
  const toast = useToast();

  const showToast = ({ title, description, type }: ToastProps) => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 5000,
      isClosable: true,
    });
  };

  return { showToast };
}

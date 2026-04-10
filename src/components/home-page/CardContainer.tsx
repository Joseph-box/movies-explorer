import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      borderRadius="xl"
      overflow="hidden"
      bg="gray.800"
      boxShadow="lg"
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.04) translateY(-4px)",
        boxShadow: "2xl",
        bg: "gray.700",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;

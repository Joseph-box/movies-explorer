import type { MovieDetail } from "@/entities/Movie";
import { HStack, VStack, Text, Badge } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

const MovieStatus = ({ movie }: { movie: MovieDetail }) => {
  return (
    <VStack align="start" gap={1}>
      <HStack color="gray.400">
        <FaInfoCircle />
        <Text fontSize="sm">Status</Text>
      </HStack>
      <Badge
        size="md"
        colorPalette={movie.status === "Released" ? "green" : "orange"}
      >
        {movie.status}
      </Badge>
    </VStack>
  );
};

export default MovieStatus;

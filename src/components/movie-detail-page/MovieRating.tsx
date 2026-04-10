import type { MovieDetail } from "@/entities/Movie";
import { Text, Flex, HStack } from "@chakra-ui/react";
import { FaImdb } from "react-icons/fa";

const MovieRating = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Flex align="center" gap={4} mb={6}>
      <HStack>
        <FaImdb size={24} color="yellow" />
        <Text fontSize="2xl" fontWeight="bold">
          {movie.vote_average.toFixed(1)}
        </Text>
      </HStack>
      <Text fontSize="sm" color="gray.400">
        ({movie.vote_count.toLocaleString()} votes)
      </Text>
    </Flex>
  );
};

export default MovieRating;

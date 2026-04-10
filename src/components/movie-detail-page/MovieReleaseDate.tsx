import type { MovieDetail } from "@/entities/Movie";
import { HStack, VStack, Text } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";

const MovieReleaseDate = ({ movie }: { movie: MovieDetail }) => {
  return (
    <VStack align="start" gap={1}>
      <HStack color="gray.400">
        <FaRegCalendarAlt />
        <Text fontSize="sm">Release Date</Text>
      </HStack>
      <Text fontWeight="medium">
        {new Date(movie.release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
    </VStack>
  );
};

export default MovieReleaseDate;

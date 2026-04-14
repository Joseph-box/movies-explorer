import type { MovieDetail } from "@/entities/Movie";
import { Text, Box, Heading } from "@chakra-ui/react";

const MovieHeading = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Box>
      <Heading size="3xl" mb={2}>
        {movie.title}
      </Heading>
      {movie.title !== movie.original_title && (
        <Heading size="md" color="gray.400" fontWeight="normal">
          {movie.original_title}
        </Heading>
      )}
      {movie.tagline && (
        <Text fontSize="xl" fontStyle="italic" color="gray.300" mt={3}>
          "{movie.tagline}"
        </Text>
      )}
    </Box>
  );
};

export default MovieHeading;

import type { MovieDetail } from "@/entities/Movie";
import { Text, Box, Heading } from "@chakra-ui/react";
import { Activity } from "react";

const MovieHeading = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Box>
      <Heading size="3xl" mb={2}>
        {movie.title}
      </Heading>
      <Activity
        mode={movie.title !== movie.original_title ? "visible" : "hidden"}
      >
        <Heading size="md" color="gray.400" fontWeight="normal">
          {movie.original_title}
        </Heading>
      </Activity>
      <Activity mode={movie.tagline ? "visible" : "hidden"}>
        <Text fontSize="xl" fontStyle="italic" color="gray.300" mt={3}>
          "{movie.tagline}"
        </Text>
      </Activity>
    </Box>
  );
};

export default MovieHeading;

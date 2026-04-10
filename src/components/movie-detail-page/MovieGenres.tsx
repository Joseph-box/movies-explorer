import type { MovieDetail } from "@/entities/Movie";
import { HStack, Badge } from "@chakra-ui/react";

const MovieGenres = ({ movie }: { movie: MovieDetail }) => {
  return (
    <HStack wrap="wrap" gap={2} mb={8}>
      {movie.genres?.map((genre) => (
        <Badge
          key={genre.id}
          colorPalette="purple"
          size="sm"
          px={2}
          py={1}
          borderRadius="full"
        >
          {genre.name}
        </Badge>
      ))}
    </HStack>
  );
};

export default MovieGenres;

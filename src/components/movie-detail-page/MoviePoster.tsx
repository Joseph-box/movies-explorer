import type { MovieDetail } from "@/entities/Movie";
import getCroppedImageUrl from "@/services/image-url";
import { Box, Image } from "@chakra-ui/react";

const MoviePoster = ({ movie }: { movie: MovieDetail }) => {
  const posterUrl = getCroppedImageUrl(movie.poster_path);

  return (
    <Box borderRadius="xl" overflow="hidden" boxShadow="2xl" mb={6}>
      <Image
        src={posterUrl}
        alt={movie.title}
        loading="lazy"
        w="100%"
        objectFit="cover"
      />
    </Box>
  );
};

export default MoviePoster;

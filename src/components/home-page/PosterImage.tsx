import { Image, Text, Box } from "@chakra-ui/react";
import type { MovieBasic } from "@/entities/Movie";
import { useState } from "react";
import getCroppedImageUrl from "@/services/image-url";

const PosterImage = ({ movie }: { movie: MovieBasic }) => {
  const [imageError, setImageError] = useState(false);
  const posterSrc = getCroppedImageUrl(movie.poster_path);
  return (
    <>
      {!imageError ? (
        <Image
          src={posterSrc}
          alt={movie.title}
          w="100%"
          aspectRatio="2/3"
          objectFit="cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <Box
          w="100%"
          aspectRatio="2/3"
          bg="gray.700"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={2}
        >
          <Text color="gray.500" fontSize="lg" textAlign="center">
            No Image
          </Text>
          <Text color="gray.600" fontSize="sm">
            {movie.title}
          </Text>
        </Box>
      )}
    </>
  );
};

export default PosterImage;

import type { MovieDetail } from "@/entities/Movie";
import { HStack, VStack, Text } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";

const MovieOriginCountries = ({ movie }: { movie: MovieDetail }) => {
  return (
    <>
      {movie.origin_country && movie.origin_country.length > 0 && (
        <VStack align="start" gap={2}>
          <HStack color="gray.400">
            <FaGlobe />
            <Text fontSize="sm">Origin Country</Text>
          </HStack>
          <Text fontSize="lg" fontWeight="medium">
            {movie.origin_country.join(", ")}
          </Text>
        </VStack>
      )}
    </>
  );
};

export default MovieOriginCountries;

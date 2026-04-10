import type { MovieDetail } from "@/entities/Movie";
import { HStack, VStack, Text } from "@chakra-ui/react";
import { PiFilmSlateLight } from "react-icons/pi";

const MovieProductionCountries = ({ movie }: { movie: MovieDetail }) => {
  return (
    <>
      {movie.production_countries && movie.production_countries.length > 0 && (
        <VStack align="start" gap={2}>
          <HStack color="gray.400">
            <PiFilmSlateLight />
            <Text fontSize="sm">Production Countries</Text>
          </HStack>
          <Text fontSize="lg" fontWeight="medium">
            {movie.production_countries
              .map((country) => country.name)
              .join(", ")}
          </Text>
        </VStack>
      )}
    </>
  );
};

export default MovieProductionCountries;

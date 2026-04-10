import type { MovieDetail } from "@/entities/Movie";
import { Badge, HStack, VStack, Text } from "@chakra-ui/react";
import { BiCameraMovie } from "react-icons/bi";

const MovieProductionCompanies = ({ movie }: { movie: MovieDetail }) => {
  return (
    <>
      {movie.production_companies && movie.production_companies.length > 0 && (
        <VStack align="start" gap={2} gridColumn={{ md: "span 2" }}>
          <HStack color="gray.400">
            <BiCameraMovie />
            <Text fontSize="sm">Production companies</Text>
          </HStack>
          <HStack wrap="wrap" gap={4}>
            {movie.production_companies.map((company) => (
              <Badge
                key={company.id}
                // variant="outline"
                variant="surface"
                colorPalette="gray"
                px={3}
                py={1}
                fontSize="sm"
              >
                {company.name}
              </Badge>
            ))}
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default MovieProductionCompanies;

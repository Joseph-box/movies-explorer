import type { MovieDetail } from "@/entities/Movie";
import { Badge, HStack, VStack } from "@chakra-ui/react";
import { BiCameraMovie } from "react-icons/bi";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieProductionCompanies = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity
      mode={
        movie.production_companies && movie.production_companies.length > 0
          ? "visible"
          : "hidden"
      }
    >
      <VStack align="start" gridColumn={{ md: "span 2" }}>
        <MovieStat
          icon={<BiCameraMovie />}
          label={"Production companies"}
          props={{ gap: 4 }}
          element={
            <HStack wrap="wrap" gap={4}>
              {movie.production_companies.map((company) => (
                <Badge
                  key={company.id}
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
          }
        />
      </VStack>
    </Activity>
  );
};

export default MovieProductionCompanies;

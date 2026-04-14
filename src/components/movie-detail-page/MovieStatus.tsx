import type { MovieDetail } from "@/entities/Movie";
import { VStack, Badge } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import MovieStat from "./MovieStat";

const MovieStatus = ({ movie }: { movie: MovieDetail }) => {
  return (
    <VStack align="start">
      <MovieStat
        icon={<FaInfoCircle />}
        label={"Status"}
        props={{ gap: 2 }}
        element={
          <Badge
            size="md"
            colorPalette={movie.status === "Released" ? "green" : "orange"}
          >
            {movie.status}
          </Badge>
        }
      />
    </VStack>
  );
};

export default MovieStatus;

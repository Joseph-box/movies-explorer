import type { MovieDetail } from "@/entities/Movie";
import { VStack, Badge } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieStatus = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.status ? "visible" : "hidden"}>
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
    </Activity>
  );
};

export default MovieStatus;

import MovieStat from "./MovieStat";
import type { MovieDetail } from "@/entities/Movie";
import { FormatNumber } from "@chakra-ui/react";
import { GrMoney } from "react-icons/gr";

const MovieBudget = ({ movie }: { movie: MovieDetail }) => {
  if (!movie.budget) return null;

  return (
    <MovieStat
      icon={<GrMoney />}
      label={"Budget"}
      element={
        <FormatNumber value={movie.budget} style="currency" currency="USD" />
      }
    />
  );
};

export default MovieBudget;

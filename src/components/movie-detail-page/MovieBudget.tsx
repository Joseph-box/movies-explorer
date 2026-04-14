import MovieStat from "./MovieStat";
import type { MovieDetail } from "@/entities/Movie";
import { FormatNumber } from "@chakra-ui/react";
import { Activity } from "react";
import { GrMoney } from "react-icons/gr";

const MovieBudget = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.budget ? "visible" : "hidden"}>
      <MovieStat
        icon={<GrMoney />}
        label={"Budget"}
        element={
          <FormatNumber value={movie.budget} style="currency" currency="USD" />
        }
      />
    </Activity>
  );
};

export default MovieBudget;

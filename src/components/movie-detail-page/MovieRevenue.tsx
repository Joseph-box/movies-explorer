import type { MovieDetail } from "@/entities/Movie";
import MovieStat from "./MovieStat";
import { TbMoneybagPlus } from "react-icons/tb";
import { FormatNumber } from "@chakra-ui/react";

const MovieRevenue = ({ movie }: { movie: MovieDetail }) => {
  if (!movie.revenue) return null;

  return (
    <MovieStat
      icon={<TbMoneybagPlus />}
      label={"Revenue"}
      element={
        <FormatNumber value={movie.revenue} style="currency" currency="USD" />
      }
    />
  );
};

export default MovieRevenue;

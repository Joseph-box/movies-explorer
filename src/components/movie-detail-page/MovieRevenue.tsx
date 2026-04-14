import type { MovieDetail } from "@/entities/Movie";
import MovieStat from "./MovieStat";
import { TbMoneybagPlus } from "react-icons/tb";
import { FormatNumber } from "@chakra-ui/react";
import { Activity } from "react";

const MovieRevenue = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.revenue ? "visible" : "hidden"}>
      <MovieStat
        icon={<TbMoneybagPlus />}
        label={"Revenue"}
        element={
          <FormatNumber value={movie.revenue} style="currency" currency="USD" />
        }
      />
    </Activity>
  );
};

export default MovieRevenue;

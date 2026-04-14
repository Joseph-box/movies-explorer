import type { MovieDetail } from "@/entities/Movie";
import { FaGlobe } from "react-icons/fa";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieOriginCountries = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity
      mode={
        movie.origin_country && movie.origin_country.length > 0
          ? "visible"
          : "hidden"
      }
    >
      <MovieStat
        icon={<FaGlobe />}
        label={"Origin Country"}
        value={movie.origin_country.join(", ")}
      />
    </Activity>
  );
};

export default MovieOriginCountries;

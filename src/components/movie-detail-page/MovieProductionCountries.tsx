import type { MovieDetail } from "@/entities/Movie";
import { PiFilmSlateLight } from "react-icons/pi";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieProductionCountries = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity
      mode={
        movie.production_countries && movie.production_countries.length > 0
          ? "visible"
          : "hidden"
      }
    >
      <MovieStat
        icon={<PiFilmSlateLight />}
        label={"Production Countries"}
        value={movie.production_countries
          .map((country) => country.name)
          .join(", ")}
      />
    </Activity>
  );
};

export default MovieProductionCountries;

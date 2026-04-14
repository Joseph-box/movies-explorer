import type { MovieDetail } from "@/entities/Movie";
import { PiFilmSlateLight } from "react-icons/pi";
import MovieStat from "./MovieStat";

const MovieProductionCountries = ({ movie }: { movie: MovieDetail }) => {
  if (!movie.production_countries || movie.production_countries.length === 0)
    return null;

  return (
    <MovieStat
      icon={<PiFilmSlateLight />}
      label={"Production Countries"}
      value={movie.production_countries
        .map((country) => country.name)
        .join(", ")}
    />
  );
};

export default MovieProductionCountries;

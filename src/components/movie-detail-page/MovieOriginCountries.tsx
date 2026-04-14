import type { MovieDetail } from "@/entities/Movie";
import { FaGlobe } from "react-icons/fa";
import MovieStat from "./MovieStat";

const MovieOriginCountries = ({ movie }: { movie: MovieDetail }) => {
  return (
    <>
      {movie.origin_country && movie.origin_country.length > 0 && (
        <MovieStat
          icon={<FaGlobe />}
          label={"Origin Country"}
          value={movie.origin_country.join(", ")}
        />
      )}
    </>
  );
};

export default MovieOriginCountries;

import type { MovieDetail } from "@/entities/Movie";
import { FaRegCalendarAlt } from "react-icons/fa";
import MovieStat from "./MovieStat";

const MovieReleaseDate = ({ movie }: { movie: MovieDetail }) => {
  return (
    <MovieStat
      icon={<FaRegCalendarAlt />}
      label={"Release Date"}
      value={new Date(movie.release_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    />
  );
};

export default MovieReleaseDate;

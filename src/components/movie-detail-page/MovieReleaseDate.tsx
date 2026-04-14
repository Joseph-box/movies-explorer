import type { MovieDetail } from "@/entities/Movie";
import { FaRegCalendarAlt } from "react-icons/fa";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieReleaseDate = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.release_date ? "visible" : "hidden"}>
      <MovieStat
        icon={<FaRegCalendarAlt />}
        label={"Release Date"}
        value={new Date(movie.release_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />
    </Activity>
  );
};

export default MovieReleaseDate;

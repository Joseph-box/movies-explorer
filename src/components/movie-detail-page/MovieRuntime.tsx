import type { MovieDetail } from "@/entities/Movie";
import { IoTimeOutline } from "react-icons/io5";
import MovieStat from "./MovieStat";

const MovieRuntime = ({ movie }: { movie: MovieDetail }) => {
  if (!movie.runtime) return null;

  return (
    <MovieStat
      icon={<IoTimeOutline />}
      label={"Runtime"}
      value={`${movie.runtime} minutes`}
    />
  );
};

export default MovieRuntime;

import type { MovieDetail } from "@/entities/Movie";
import { IoTimeOutline } from "react-icons/io5";
import MovieStat from "./MovieStat";
import { Activity } from "react";

const MovieRuntime = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.runtime ? "visible" : "hidden"}>
      <MovieStat
        icon={<IoTimeOutline />}
        label={"Runtime"}
        value={`${movie.runtime} minutes`}
      />
    </Activity>
  );
};

export default MovieRuntime;

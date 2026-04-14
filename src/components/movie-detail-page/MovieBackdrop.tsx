import type { MovieDetail } from "@/entities/Movie";
import { Box } from "@chakra-ui/react";
import { Activity } from "react";

const MovieBackdrop = ({ movie }: { movie: MovieDetail }) => {
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <Activity mode={backdropUrl ? "visible" : "hidden"}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h={"100%"}
        bgImage={`url(${backdropUrl})`}
        bgSize={"cover"}
        bgPos={"center"}
        opacity={0.2}
        zIndex={0}
      />
    </Activity>
  );
};

export default MovieBackdrop;

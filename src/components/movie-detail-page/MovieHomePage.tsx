import type { MovieDetail } from "@/entities/Movie";
import { Box, Link } from "@chakra-ui/react";
import { Activity } from "react";

const MovieHomePage = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Activity mode={movie.homepage ? "visible" : "hidden"}>
      <Box>
        <Link
          href={movie.homepage}
          target="_blank"
          rel="noopener noreferrer"
          color="purple.400"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
        >
          Visit Official Homepage →
        </Link>
      </Box>
    </Activity>
  );
};

export default MovieHomePage;

import type { MovieDetail } from "@/entities/Movie";
import { Box, Link } from "@chakra-ui/react";

const MovieHomePage = ({ movie }: { movie: MovieDetail }) => {
  if (!movie.homepage) return null;

  return (
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
  );
};

export default MovieHomePage;

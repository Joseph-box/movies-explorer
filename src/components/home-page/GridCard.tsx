import type { MovieBasic } from "@/entities/Movie";
import { Card, Heading, Text, VStack, Box } from "@chakra-ui/react";
import { Link } from "react-router";
import RatingBadge from "./RatingBadge";
import PosterImage from "./PosterImage";

interface Props {
  movie: MovieBasic;
}

const GridCard = ({ movie }: Props) => {
  return (
    <Link to={`movie/${movie.id}`}>
      <Card.Root height="full" bg="transparent" border="none" overflow="hidden">
        {/* Poster */}
        <Box position="relative" bg="gray.800">
          <PosterImage movie={movie} />

          {movie.vote_average && movie.vote_average > 0 ? (
            <RatingBadge movie={movie} />
          ) : null}
        </Box>

        {/* Body */}
        <Card.Body p={4}>
          <VStack align="stretch" gap={2}>
            <Heading size="md" maxLines={2} lineHeight="tight">
              {movie.title}
            </Heading>

            {movie.release_date && (
              <Text fontSize="sm" color="gray.400">
                {new Date(movie.release_date).getFullYear()}
              </Text>
            )}
          </VStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default GridCard;

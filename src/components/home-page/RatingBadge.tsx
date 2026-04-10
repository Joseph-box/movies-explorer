import type { MovieBasic } from "@/entities/Movie";
import { Badge } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const RatingBadge = ({ movie }: { movie: MovieBasic }) => {
  return (
    <Badge
      position="absolute"
      top={3}
      right={3}
      colorScheme="yellow"
      fontSize="sm"
      px={2}
      py={0.5}
      borderRadius="md"
      display="flex"
      alignItems="center"
      gap={1}
    >
      <FaStar />
      {movie.vote_average.toFixed(1)}
    </Badge>
  );
};

export default RatingBadge;

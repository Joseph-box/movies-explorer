import type { MovieDetail } from "@/entities/Movie";
import { HStack, VStack, Text } from "@chakra-ui/react";
import { IoTimeOutline } from "react-icons/io5";

const MovieRuntime = ({ movie }: { movie: MovieDetail }) => {
  return (
    <VStack align="start" gap={1}>
      <HStack color="gray.400">
        <IoTimeOutline />
        <Text fontSize="sm">Runtime</Text>
      </HStack>
      <Text fontWeight="medium">{movie.runtime} minutes</Text>
    </VStack>
  );
};

export default MovieRuntime;

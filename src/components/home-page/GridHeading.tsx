import { Heading, HStack, Box } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import useMovieQueryStore from "@/store/movieStore";
import movieLists from "@/constants/movieLists";
import SortSelector from "./SortSelector";

const GridHeading = () => {
  const { genreId, movieList, searchText } = useMovieQueryStore(
    (s) => s.movieQuery,
  );

  const genre = useGenre(genreId);

  let heading = "Movies";

  if (searchText) {
    heading = `Results for "${searchText}"`;
  } else if (genreId) {
    heading = `${genre?.name || "Genre"} Movies`;
  } else if (movieList) {
    heading = movieLists[movieList] || "Movies";
  }

  const showSortSelector = !!genreId;

  return (
    <Box mb={6}>
      <HStack
        align="flex-start"
        justify="space-between"
        wrap={{ base: "wrap", md: "nowrap" }}
        gap={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "3xl" }}
          lineHeight="tight"
          css={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {heading}
        </Heading>

        {showSortSelector && (
          <Box minW={{ base: "full", md: "240px" }}>
            <SortSelector />
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default GridHeading;

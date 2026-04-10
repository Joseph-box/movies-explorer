import { Flex, Heading, List } from "@chakra-ui/react";
import SidebarLinkItem from "./SidebarLinkItem";
import useMovieQueryStore from "@/store/movieStore";
import type { MovieList } from "@/entities/MovieQuery";
import movieLists from "@/constants/movieLists";
import SearchInput from "./SearchInput";
import GenreList from "./GenreList";

const Sidebar = () => {
  const movieList = useMovieQueryStore((s) => s.movieQuery.movieList);
  const setMovieList = useMovieQueryStore((s) => s.setMovieList);

  return (
    <Flex direction="column" marginX={0} paddingX={0}>
      <SearchInput />
      <Heading fontSize="2xl" marginBottom={3} mt={6}>
        Movie Lists
      </Heading>
      <List.Root variant="plain" gapY={1}>
        {(Object.keys(movieLists) as Exclude<MovieList, undefined>[]).map(
          (listKey) => (
            <SidebarLinkItem
              key={listKey}
              title={movieLists[listKey]}
              onClick={() => setMovieList(listKey)}
              isCurrent={movieList === listKey}
            />
          ),
        )}
      </List.Root>
      <Heading fontSize="2xl" marginBottom={3} mt={6}>
        Discover
      </Heading>
      <GenreList />
    </Flex>
  );
};

export default Sidebar;

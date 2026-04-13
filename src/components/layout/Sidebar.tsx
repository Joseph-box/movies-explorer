import { Flex, Heading, List, Spinner } from "@chakra-ui/react";
import SidebarLinkItem from "./SidebarLinkItem";
import useMovieQueryStore from "@/store/movieStore";
import type { MovieList } from "@/entities/MovieQuery";
import movieLists from "@/constants/movieLists";
import SearchInput from "./SearchInput";
import useGenres from "@/hooks/useGenres";

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const movieList = useMovieQueryStore((s) => s.movieQuery.movieList);
  const setMovieList = useMovieQueryStore((s) => s.setMovieList);
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
              onClick={() => {
                setMovieList(listKey);
                onClose?.();
              }}
              isCurrent={movieList === listKey}
            />
          ),
        )}
      </List.Root>
      <Heading fontSize="2xl" marginBottom={3} mt={6}>
        Discover
      </Heading>
      <List.Root variant="plain" gapY={1}>
        {data?.genres.map((genre) => (
          <SidebarLinkItem
            key={genre.id}
            title={genre.name}
            onClick={() => {
              setGenreId(genre.id);
              onClose?.();
            }}
            isCurrent={genre.id === genreId}
          />
        ))}
      </List.Root>
    </Flex>
  );
};

export default Sidebar;

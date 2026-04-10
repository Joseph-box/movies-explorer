import { List } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import useMovieQueryStore from "@/store/movieStore";
import useGenres from "@/hooks/useGenres";
import SidebarLinkItem from "./SidebarLinkItem";

const GenreList = () => {
  const genreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const setGenreId = useMovieQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root variant="plain" gapY={1}>
      {data?.genres.map((genre) => (
        <SidebarLinkItem
          key={genre.id}
          title={genre.name}
          onClick={() => setGenreId(genre.id)}
          isCurrent={genre.id === genreId}
        />
      ))}
    </List.Root>
  );
};

export default GenreList;

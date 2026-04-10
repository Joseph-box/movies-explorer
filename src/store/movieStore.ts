import type { MovieList, MovieQuery, SortOrder } from "@/entities/MovieQuery";
import { create } from "zustand";

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSortOrder: (sortOrder: SortOrder) => void;
  setSearchText: (searchText: string | undefined) => void;
  setGenreId: (genreId: number | undefined) => void;
  setMovieList: (movieList: MovieList) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSortOrder: (sortOrder: SortOrder) =>
    set((state) => ({
      movieQuery: { genreId: state.movieQuery.genreId, sortOrder },
    })),

  setSearchText: (searchText: string | undefined) =>
    set(() => ({ movieQuery: { searchText } })),

  setMovieList: (movieList: MovieList) =>
    set(() => ({ movieQuery: { movieList } })),

  setGenreId: (genreId: number | undefined) =>
    set((state) => ({
      movieQuery: { sortOrder: state.movieQuery.sortOrder, genreId },
    })),
}));

export default useMovieQueryStore;

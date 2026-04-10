import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import type { MoviesResponse } from "@/entities/Movie";
import ms from "ms";
import useMovieQueryStore from "@/store/movieStore";

const apiClientGenre = new APIClient<MoviesResponse>("/discover/movie");
const apiClientSearch = new APIClient<MoviesResponse>("/search/movie");

const apiClientNowPlaying = new APIClient<MoviesResponse>("/movie/now_playing");
const apiClientPopular = new APIClient<MoviesResponse>("/movie/popular");
const apiClientTopRated = new APIClient<MoviesResponse>("/movie/top_rated");

export const useMoviesInfinite = () => {
  const { movieQuery } = useMovieQueryStore();

  const fetchMovies = (pageParam: number | unknown) => {
    const page = typeof pageParam === "number" ? pageParam : 1;

    if (movieQuery.genreId) {
      return apiClientGenre.getAll({
        params: {
          page,
          with_genres: movieQuery.genreId,
          sort_by: movieQuery.sortOrder,
          include_adult: false,
          with_original_language: "en",
          "with_runtime.gte": 45,
        },
      });
    } else if (movieQuery.searchText) {
      return apiClientSearch.getAll({
        params: {
          page,
          query: movieQuery.searchText,
          include_adult: false,
          with_original_language: "en",
          "with_runtime.gte": 45,
        },
      });
    } else if (movieQuery.movieList) {
      const movieList = movieQuery.movieList;

      switch (movieList) {
        case "popular":
          return apiClientPopular.getAll({
            params: {
              page,
            },
          });
        case "now_playing":
          return apiClientNowPlaying.getAll({
            params: {
              page,
            },
          });

        case "top_rated":
          return apiClientTopRated.getAll({
            params: {
              page,
            },
          });

        default:
          return apiClientPopular.getAll({
            params: {
              page,
            },
          });
      }
    }
    return apiClientGenre.getAll({
      params: {
        page,
        include_adult: false,
        include_video: true,
      },
    });
  };

  return useInfiniteQuery<MoviesResponse>({
    queryKey: ["movies", movieQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchMovies(pageParam),
    staleTime: ms("24h"),
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
  });
};

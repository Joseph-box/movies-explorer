import type { MovieDetail } from "@/entities/Movie";
import APIClient from "@/services/apiClient";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useMovie = (movieId: string | number) => {
  const apiClient = new APIClient<MovieDetail>(`/movie/${movieId}`);

  return useQuery<MovieDetail>({
    queryKey: ["movie", movieId],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieId,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    placeholderData: keepPreviousData,
  });
};

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import type Genres from "@/entities/Genres";
import APIClient from "@/services/apiClient";

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
    placeholderData: keepPreviousData,
  });
};

export default useGenres;

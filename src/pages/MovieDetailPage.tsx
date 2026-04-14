import { Text } from "@chakra-ui/react";
import { useMovie } from "@/hooks/useMovie";
import { useParams } from "react-router";
import MovieDetailSkeleton from "@/components/movie-detail-page/MovieDetailsSkeleton";
import MovieDetailsContent from "@/components/movie-detail-page/MovieDetailsContent";

const MovieDetailPage = () => {
  const { movie_id } = useParams();
  const { data: movie, isLoading, error } = useMovie(movie_id!);

  if (isLoading) return <MovieDetailSkeleton />;

  if (error || !movie)
    return <Text color="red.400">Failed to load movie details</Text>;

  return <MovieDetailsContent movie={movie} />;
};

export default MovieDetailPage;

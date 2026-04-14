import { Text } from "@chakra-ui/react";
import { useMovie } from "@/hooks/useMovie";
import { useParams } from "react-router";
import { lazy, Suspense } from "react";
import MovieDetailSkeleton from "@/components/movie-detail-page/MovieDetailsSkeleton";

const MovieDetailsContent = lazy(
  () => import("@/components/movie-detail-page/MovieDetailsContent"),
);

const MovieDetailPage = () => {
  const { movie_id } = useParams();
  const { data: movie, isLoading, error } = useMovie(movie_id!);

  if (isLoading) return <MovieDetailSkeleton />;

  if (error || !movie)
    return <Text color="red.400">Failed to load movie details</Text>;

  return (
    <Suspense fallback={<MovieDetailSkeleton />}>
      <MovieDetailsContent movie={movie} />
    </Suspense>
  );
};

export default MovieDetailPage;

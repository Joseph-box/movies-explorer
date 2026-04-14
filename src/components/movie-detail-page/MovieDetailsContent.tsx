import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  GridItem,
  Separator,
} from "@chakra-ui/react";
import MovieRating from "@/components/movie-detail-page/MovieRating";
import MovieGenres from "@/components/movie-detail-page/MovieGenres";
import MoviePoster from "@/components/movie-detail-page/MoviePoster";
import MovieReleaseDate from "@/components/movie-detail-page/MovieReleaseDate";
import MovieStatus from "@/components/movie-detail-page/MovieStatus";
import MovieRuntime from "@/components/movie-detail-page/MovieRuntime";
import MovieHeading from "@/components/movie-detail-page/MovieHeading";
import MovieProductionCountries from "@/components/movie-detail-page/MovieProductionCountries";
import MovieOriginCountries from "@/components/movie-detail-page/MovieOriginCountries";
import MovieProductionCompanies from "@/components/movie-detail-page/MovieProductionCompanies";
import MovieHomePage from "@/components/movie-detail-page/MovieHomePage";
import MovieBackdrop from "@/components/movie-detail-page/MovieBackdrop";
import MovieOverview from "@/components/movie-detail-page/MovieOverview";
import MovieBudget from "@/components/movie-detail-page/MovieBudget";
import MovieRevenue from "@/components/movie-detail-page/MovieRevenue";
import type { MovieDetail } from "@/entities/Movie";

const MovieDetailsContent = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Box position="relative" minH="100%" bg="gray.900" color="white">
      <MovieBackdrop movie={movie} />

      <Container maxW="7xl" pt={8} pb={16}>
        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={10}>
          {/* Left Column */}
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <MoviePoster movie={movie} />
            <MovieRating movie={movie} />
            <MovieGenres movie={movie} />
          </GridItem>

          {/* Right Column - Details */}
          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <VStack align="stretch" gap={6}>
              <MovieHeading movie={movie} />
              <MovieOverview overview={movie.overview} />

              <Separator borderColor="gray.700" />

              {/* Movie Info */}
              <SimpleGrid columns={{ base: 2, md: 3 }} gap={6}>
                <MovieReleaseDate movie={movie} />
                <MovieRuntime movie={movie} />
                <MovieStatus movie={movie} />
                <MovieBudget movie={movie} />
                <MovieRevenue movie={movie} />
              </SimpleGrid>

              {/* Additional Info */}
              {(movie.origin_country?.length > 0 ||
                movie.production_countries?.length > 0 ||
                movie.production_companies?.length > 0) && (
                <>
                  <Separator borderColor="gray.700" />
                  <Box>
                    <Heading size="md" mb={5} color="gray.300">
                      Production & Origin
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                      <MovieOriginCountries movie={movie} />
                      <MovieProductionCountries movie={movie} />
                      <MovieProductionCompanies movie={movie} />
                    </SimpleGrid>
                  </Box>
                </>
              )}

              {/* More */}
              <MovieHomePage movie={movie} />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MovieDetailsContent;

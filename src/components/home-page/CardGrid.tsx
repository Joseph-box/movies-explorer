import { SimpleGrid, Spinner, Text, Center, HStack } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { useMoviesInfinite } from "@/hooks/useMovies";
import React from "react";
import { TbMovieOff } from "react-icons/tb";
import GridCard from "./GridCard";

const CardGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useMoviesInfinite();

  if (error) {
    return (
      <Center>
        <Text color="red.400" fontSize="lg">
          {error.message || "Something went wrong while loading movies."}
        </Text>
      </Center>
    );
  }

  const fetchedMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  const skeletons = Array.from({ length: 8 }, (_, i) => i);

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={
        <Center py={8}>
          <Spinner size="lg" color="purple.500" />
        </Center>
      }
      endMessage={
        !isLoading && fetchedMoviesCount > 0 ? (
          <Center py={10}>
            <HStack>
              <Text color="gray.500" fontSize="md">
                You've reached the end!
              </Text>
              <TbMovieOff size={20} />
            </HStack>
          </Center>
        ) : null
      }
      scrollThreshold={0.8}
      style={{ overflow: "visible" }}
    >
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 3, lg: 4, xl: 5 }}
        gap={6}
        alignItems="stretch"
        px={{ base: 4, md: 0 }}
        pb={6}
      >
        {/* Skeletons on initial load */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton />
            </CardContainer>
          ))}

        {/* Render fetched pages */}
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.results.map((movie) => (
              <CardContainer key={movie.id}>
                <GridCard movie={movie} />
              </CardContainer>
            ))}
          </React.Fragment>
        ))}

        {/* Skeletons while fetching next page */}
        {isFetchingNextPage &&
          skeletons.slice(0, 4).map((skeleton) => (
            <CardContainer key={`loading-${skeleton}`}>
              <CardSkeleton />
            </CardContainer>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default CardGrid;

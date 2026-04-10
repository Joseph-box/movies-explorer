import {
  Box,
  Container,
  SimpleGrid,
  GridItem,
  Skeleton,
  SkeletonText,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";

const MovieDetailSkeleton = () => {
  return (
    <Box position="relative" minH="100%" bg="gray.900">
      {/* Backdrop */}
      <Skeleton
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="100%"
        opacity={0.2}
      />

      <Container maxW="7xl" pt={8} pb={16}>
        <SimpleGrid columns={{ base: 1, lg: 5 }} gap={10}>
          {/* LEFT COLUMN */}
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            {/* Poster */}
            <Skeleton borderRadius="xl" height="500px" mb={6} />

            {/* Rating */}
            <Flex align="center" gap={4} mb={6}>
              <Skeleton height="24px" width="80px" />
              <Skeleton height="16px" width="120px" />
            </Flex>

            {/* Genres */}
            <HStack wrap="wrap" gap={2} mb={8}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  key={i}
                  height="24px"
                  width="60px"
                  borderRadius="full"
                />
              ))}
            </HStack>
          </GridItem>

          {/* RIGHT COLUMN! */}
          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <VStack align="stretch" gap={6}>
              {/* Title */}
              <Box>
                <Skeleton height="40px" width="70%" mb={2} />
                <Skeleton height="20px" width="50%" mb={3} />
                <Skeleton height="20px" width="60%" />
              </Box>

              {/* Overview */}
              <SkeletonText noOfLines={5} />

              {/* Divider */}
              <Skeleton height="1px" />

              {/* Key Info */}
              <SimpleGrid columns={{ base: 2, md: 3 }} gap={6}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <VStack key={i} align="start" gap={2}>
                    <Skeleton height="12px" width="80px" />
                    <Skeleton height="16px" width="100px" />
                  </VStack>
                ))}
              </SimpleGrid>

              {/* Production Section */}
              <Box>
                <Skeleton height="20px" width="200px" mb={5} />

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                  <VStack align="start" gap={2}>
                    <Skeleton height="12px" width="120px" />
                    <Skeleton height="18px" width="160px" />
                  </VStack>

                  <VStack align="start" gap={2}>
                    <Skeleton height="12px" width="150px" />
                    <Skeleton height="18px" width="200px" />
                  </VStack>

                  <VStack align="start" gap={2} gridColumn={{ md: "span 2" }}>
                    <Skeleton height="12px" width="180px" />
                    <HStack wrap="wrap" gap={3}>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton
                          key={i}
                          height="24px"
                          width="100px"
                          borderRadius="md"
                        />
                      ))}
                    </HStack>
                  </VStack>
                </SimpleGrid>
              </Box>

              {/* Homepage link */}
              <Skeleton height="20px" width="220px" />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MovieDetailSkeleton;

import { Box, Card, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card.Root height="full" bg="transparent" border="none" overflow="hidden">
      {/* Poster */}
      <Box position="relative" aspectRatio="2/3">
        <Skeleton w="100%" h="100%" />

        {/* Rating badge */}
        <Skeleton
          position="absolute"
          top={3}
          right={3}
          height="20px"
          width="50px"
          borderRadius="md"
        />
      </Box>

      {/* Body */}
      <Card.Body p={4}>
        <VStack align="stretch" gap={2}>
          {/* Title */}
          <SkeletonText noOfLines={2} />

          {/* Year */}
          <Skeleton height="12px" width="40%" />
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default CardSkeleton;

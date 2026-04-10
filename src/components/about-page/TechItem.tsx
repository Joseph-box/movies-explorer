import { Box, HStack, Badge, Text } from "@chakra-ui/react";

const TechItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box>
    <HStack mb={1}>
      <Badge colorPalette="purple" variant="solid" fontSize="xs">
        {title.split(" ")[0]}
      </Badge>
    </HStack>
    <Text fontWeight="semibold" mb={1}>
      {title}
    </Text>
    <Text fontSize="sm" color="gray.400">
      {description}
    </Text>
  </Box>
);

export default TechItem;

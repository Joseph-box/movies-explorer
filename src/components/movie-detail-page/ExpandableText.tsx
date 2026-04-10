import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;
  const limit = 500;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);
  return (
    <>
      <Text>
        {expanded ? children : summary + "..."}
        <Button
          size="xs"
          marginX={2}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;

import { HStack, Text, Stat, type StatRootProps } from "@chakra-ui/react";
import { Activity, type ReactNode } from "react";

const MovieStat = ({
  icon,
  label,
  value,
  element,
  props,
}: {
  icon?: ReactNode;
  label: string;
  value?: string;
  element?: ReactNode;
  props?: StatRootProps;
}) => {
  return (
    <Stat.Root {...props}>
      <Stat.Label>
        <HStack>
          {icon}
          <Text>{label}</Text>
        </HStack>
      </Stat.Label>
      <Activity mode={value ? "visible" : "hidden"}>
        <Stat.ValueText fontSize={"sm"}>{value}</Stat.ValueText>
      </Activity>
      {element}
    </Stat.Root>
  );
};

export default MovieStat;

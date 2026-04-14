import { Button, Collapsible, Text } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { Activity, useEffect, useRef, useState } from "react";

const COLLAPSED_HEIGHT = 85;

const MovieOverview = ({ overview }: { overview: string }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const el = contentRef.current;
      if (!el) return;
      setIsOverflowing(el.scrollHeight > COLLAPSED_HEIGHT);
    };
    const el = contentRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsOverflowing(el.scrollHeight > COLLAPSED_HEIGHT);
    };

    checkOverflow();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [overview]);

  return (
    <Activity mode={overview ? "visible" : "hidden"}>
      <Collapsible.Root collapsedHeight={`${COLLAPSED_HEIGHT}px`}>
        <Collapsible.Content
          ref={contentRef}
          _closed={
            isOverflowing
              ? {
                  shadow: "inset 0 -12px 12px -12px var(--shadow-color)",
                  shadowColor: "blackAlpha.500",
                }
              : {}
          }
        >
          <Text>{overview}</Text>
        </Collapsible.Content>

        <Activity mode={isOverflowing ? "visible" : "hidden"}>
          <Collapsible.Trigger asChild mt="4">
            <Button size="sm">
              <Collapsible.Context>
                {(api) => (api.open ? "Read Less" : "Read More")}
              </Collapsible.Context>
              <Collapsible.Indicator
                transition="transform 0.2s"
                _open={{ transform: "rotate(180deg)" }}
              >
                <LuChevronDown />
              </Collapsible.Indicator>
            </Button>
          </Collapsible.Trigger>
        </Activity>
      </Collapsible.Root>
    </Activity>
  );
};

export default MovieOverview;

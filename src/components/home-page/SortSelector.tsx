import { NativeSelect } from "@chakra-ui/react";
import sortOptions from "@/constants/sortOptions";
import type { SortOrder } from "@/entities/MovieQuery";
import useMovieQueryStore from "@/store/movieStore";

const SortSelector = () => {
  const sortOrder = useMovieQueryStore((s) => s.movieQuery.sortOrder);
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);

  return (
    <NativeSelect.Root>
      <NativeSelect.Field
        value={sortOrder || ""}
        onChange={(e) =>
          setSortOrder(e.currentTarget.value as Exclude<SortOrder, undefined>)
        }
        bg="gray.800"
        borderColor="gray.600"
        _hover={{ borderColor: "gray.500" }}
        fontSize="sm"
      >
        <option value="" disabled>
          Sort by...
        </option>
        {(Object.keys(sortOptions) as Exclude<SortOrder, undefined>[]).map(
          (optionKey) => (
            <option key={optionKey} value={optionKey}>
              {sortOptions[optionKey]}
            </option>
          ),
        )}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export default SortSelector;

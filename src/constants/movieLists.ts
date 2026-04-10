import type { MovieList } from "@/entities/MovieQuery";

const movieLists = {
  now_playing: "Now Playing",
  popular: "Popular",
  top_rated: "Top Rated",
} satisfies Record<Exclude<MovieList, undefined>, string>;

export default movieLists;

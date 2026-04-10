import type { SortOrder } from "@/entities/MovieQuery";

const sortOptions = {
  "original_title.asc": "Original Title (Asc)",
  "original_title.desc": "Original Title (Desc)",
  "popularity.asc": "Popularity (Asc)",
  "popularity.desc": "Popularity (Desc)",
  "revenue.asc": "Revenue (Asc)",
  "revenue.desc": "Revenue (Desc)",
  "primary_release_date.asc": "Primary Release Date (Asc)",
  "primary_release_date.desc": "Primary Release Date (Desc)",
  "title.asc": "Title (Asc)",
  "title.desc": "Title (Desc)",
  "vote_average.asc": "Vote Average (Asc)",
  "vote_average.desc": "Vote Average (Desc)",
  "vote_count.asc": "Vote Count (Asc)",
  "vote_count.desc": "Vote Count (Desc)",
} satisfies Record<Exclude<SortOrder, undefined>, string>;

export default sortOptions;

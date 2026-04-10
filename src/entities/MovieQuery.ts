export type SortOrder =
  | "original_title.asc"
  | "original_title.desc"
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "title.asc"
  | "title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc"
  | undefined;

export type MovieList = "now_playing" | "popular" | "top_rated" | undefined;

export interface MovieQuery {
  genreId?: number | undefined;
  sortOrder?: SortOrder;
  searchText?: string | undefined;
  page?: number;
  pageSize?: number;
  movieList?: MovieList;
}

import axios, { type AxiosRequestConfig } from "axios";

const TMDB_TOKEN =
  import.meta.env.VITE_TMDB_ACCESS_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQ1MDE2OWQ4YWI2NGUwMDQ0MzIxYTE2YWQ1NWZjMSIsIm5iZiI6MTc1NDMwMzA3MC43NjEsInN1YiI6IjY4OTA4YTVlMTU4NGJmNmM5ZjYxZjRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwKLy8iTDSZn6NkXlya5He1MiQWJ-XbI9QMOz64VLNw";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  get = (slug: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };
}

export default APIClient;

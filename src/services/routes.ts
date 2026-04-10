import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import MovieDetailPage from "@/pages/MovieDetailPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "movie/:movie_id", Component: MovieDetailPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MovieListPage from "./pages/movie_list_page/index.tsx";
import "./reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

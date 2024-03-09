import MovieListItem from "./movieListItem";

export default interface MovieListResponse {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
}

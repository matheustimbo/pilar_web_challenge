import axios from "axios";
import { GetMovieListParams } from "../types/getMovieListParam";
import MovieListResponse from "../types/movieListResponse";
import { API_BASE_URL } from "../utils/constants";

export class MoviesDatasource {
  api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY, //injector.get("TMDB_API_KEY"),
    },
  });

  async getPopularMovies({
    page,
    language,
  }: GetMovieListParams): Promise<MovieListResponse> {
    const response = await this.api.get<MovieListResponse>("/movie/popular", {
      params: {
        page,
        language,
      },
    });
    return response.data;
  }
}

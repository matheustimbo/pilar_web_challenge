import { MoviesDatasource } from "../datasources/movies_datasource";
import { ApiFailure } from "../failures/apiFailure";
import { injector } from "../injector";
import { GetMovieListParams } from "../types/getMovieListParam";
import MovieListResponse from "../types/movieListResponse";
import { Either, makeLeft, makeRight } from "../utils/either";

export class MoviesRepository {
  datasource = injector.get(MoviesDatasource);

  async getPopularMovies({
    page,
    language,
  }: GetMovieListParams): Promise<Either<ApiFailure, MovieListResponse>> {
    try {
      return makeRight(
        await this.datasource.getPopularMovies({
          page,
          language,
        })
      );
    } catch (e) {
      return makeLeft(new ApiFailure());
    }
  }
}

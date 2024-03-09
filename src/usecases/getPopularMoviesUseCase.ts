import { Failure } from "../failures/failure";
import { injector } from "../injector";
import { MoviesRepository } from "../repositories/moviesRepository";
import { GetMovieListParams } from "../types/getMovieListParam";
import MovieListResponse from "../types/movieListResponse";
import { Either } from "../utils/either";
import { UseCase } from "../utils/usecase";

export class GetPopularMoviesUseCase
  implements UseCase<GetMovieListParams, MovieListResponse>
{
  moviesRepository = injector.get(MoviesRepository);

  execute(
    params?: GetMovieListParams | undefined
  ): Promise<Either<Failure, MovieListResponse>> {
    return this.moviesRepository.getPopularMovies(params!);
  }
}

import { DependencyInjector, makeInjector } from "@mindspace-io/utils";
import { MoviesDatasource } from "./datasources/movies_datasource";
import { MoviesRepository } from "./repositories/moviesRepository";
import { GetPopularMoviesUseCase } from "./usecases/getPopularMoviesUseCase";

export const injector: DependencyInjector = makeInjector([
  {
    provide: MoviesDatasource,
    useClass: MoviesDatasource,
  },
  {
    provide: MoviesRepository,
    useClass: MoviesRepository,
    deps: [MoviesDatasource],
  },
  {
    provide: GetPopularMoviesUseCase,
    useClass: GetPopularMoviesUseCase,
    deps: [MoviesRepository],
  },
]);

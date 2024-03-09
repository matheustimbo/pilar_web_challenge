import { injector } from "../../../injector";
import MovieListResponse from "../../../types/movieListResponse";
import { GetPopularMoviesUseCase } from "../../../usecases/getPopularMoviesUseCase";
import { isLeft, unwrapEither } from "../../../utils/either";
import { useMovieListPageStore } from "../stores/useMovieListPageStore";

export default () => {
  const getPopularMoviesUseCase = injector.get(GetPopularMoviesUseCase);
  const {
    popularMovies,
    setPopularMovies,
    isLoadingPopularMovies,
    setIsLoadingPopularMovies,
    setHasErrorLoadingPopularMovies,
    totalPopularMoviesPages,
    lastPopularMoviesFetchedPage,
    setIsLoadingMorePopularMovies,
    setLastPopularMoviesFetchedPage,
    setTotalPopularMoviesPages,
    isLoadingMorePopularMovies,
  } = useMovieListPageStore((store) => store);

  const fetchInitialPopularMoviesList = async () => {
    if (isLoadingPopularMovies) return;
    setIsLoadingPopularMovies(true);
    setHasErrorLoadingPopularMovies(false);
    const response = await getPopularMoviesUseCase.execute({
      page: 1,
      language: "pt-BR",
    });
    setIsLoadingPopularMovies(false);
    if (isLeft(response)) {
      setHasErrorLoadingPopularMovies(true);
      return;
    }
    const movieListResponse = unwrapEither(response);
    setPopularMovies((movieListResponse as MovieListResponse).results);
    setLastPopularMoviesFetchedPage(
      (movieListResponse as MovieListResponse).page
    );
    setTotalPopularMoviesPages(
      (movieListResponse as MovieListResponse).total_pages
    );
  };

  const fetchMorePopularMovies = async () => {
    console.log("fetchMorePopularMovies", { isLoadingMorePopularMovies });
    const hasReachedEndOfList =
      totalPopularMoviesPages != null &&
      lastPopularMoviesFetchedPage != null &&
      lastPopularMoviesFetchedPage >= totalPopularMoviesPages;
    if (isLoadingMorePopularMovies || hasReachedEndOfList) return;
    console.log("passou");
    setIsLoadingMorePopularMovies(true);
    const result = await getPopularMoviesUseCase.execute({
      page: (lastPopularMoviesFetchedPage ?? 0) + 1,
      language: "pt-BR",
    });
    setIsLoadingMorePopularMovies(false);
    if (isLeft(result)) {
      return;
    }
    const movieListResponse = unwrapEither(result) as MovieListResponse;
    setPopularMovies([...popularMovies, ...movieListResponse.results]);
    setLastPopularMoviesFetchedPage(movieListResponse.page);
  };

  return {
    fetchInitialPopularMoviesList,
    fetchMorePopularMovies,
  };
};

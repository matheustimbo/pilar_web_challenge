import AppBar from "../../components/appBar";
import Header from "./components/header";
import MovieListSection from "./components/movieListSection";
import useMovieListPage from "./hooks/useMovieListPage";
import { useMovieListPageStore } from "./stores/useMovieListPageStore";

export default function MovieListPage() {
  const { fetchInitialPopularMoviesList, fetchMorePopularMovies } =
    useMovieListPage();
  const {
    popularMovies,
    isLoadingPopularMovies,
    hasErrorLoadingPopularMovies,
    isLoadingMorePopularMovies,
  } = useMovieListPageStore((store) => store);

  return (
    <div className="h-[100vdh] w-full overflow-x-hidden overflow-y-scroll">
      <AppBar />
      <Header />
      <MovieListSection
        movies={popularMovies}
        sectionLabel={"Popular"}
        onRetry={fetchInitialPopularMoviesList}
        isLoading={isLoadingPopularMovies}
        hasError={hasErrorLoadingPopularMovies}
        onReachEndOfList={fetchMorePopularMovies}
        onInit={fetchInitialPopularMoviesList}
        isLoadingMore={isLoadingMorePopularMovies}
      />
    </div>
  );
}

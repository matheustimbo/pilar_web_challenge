import { create } from "zustand";
import MovieListItem from "../../../types/movieListItem";

interface MovieListPageStoreState {
  popularMovies: MovieListItem[];
  setPopularMovies: (movies: MovieListItem[]) => void;
  isLoadingPopularMovies: boolean;
  setIsLoadingPopularMovies: (isLoading: boolean) => void;
  hasErrorLoadingPopularMovies: boolean;
  setHasErrorLoadingPopularMovies: (hasError: boolean) => void;
  lastPopularMoviesFetchedPage: number | null;
  setLastPopularMoviesFetchedPage: (page: number | null) => void;
  totalPopularMoviesPages: number | null;
  setTotalPopularMoviesPages: (totalPages: number | null) => void;
  isLoadingMorePopularMovies: boolean;
  setIsLoadingMorePopularMovies: (isLoading: boolean) => void;
  hasErrorLoadingMorePopularMovies: boolean;
  setHasErrorLoadingMorePopularMovies: (hasError: boolean) => void;
  reset: () => void;
}

export const useMovieListPageStore = create<MovieListPageStoreState>((set) => ({
  popularMovies: [],
  setPopularMovies: (movies) => set({ popularMovies: movies }),
  isLoadingPopularMovies: false,
  setIsLoadingPopularMovies: (isLoading) =>
    set({ isLoadingPopularMovies: isLoading }),
  hasErrorLoadingPopularMovies: false,
  setHasErrorLoadingPopularMovies: (hasError) =>
    set({ hasErrorLoadingPopularMovies: hasError }),
  lastPopularMoviesFetchedPage: null,
  setLastPopularMoviesFetchedPage: (page) =>
    set({ lastPopularMoviesFetchedPage: page }),
  totalPopularMoviesPages: null,
  setTotalPopularMoviesPages: (totalPages) =>
    set({ totalPopularMoviesPages: totalPages }),
  isLoadingMorePopularMovies: false,
  setIsLoadingMorePopularMovies: (isLoading) =>
    set({ isLoadingMorePopularMovies: isLoading }),
  hasErrorLoadingMorePopularMovies: false,
  setHasErrorLoadingMorePopularMovies: (hasError) =>
    set({ hasErrorLoadingMorePopularMovies: hasError }),
  reset: () =>
    set({
      popularMovies: [],
      isLoadingPopularMovies: false,
      hasErrorLoadingPopularMovies: false,
      lastPopularMoviesFetchedPage: null,
      totalPopularMoviesPages: null,
      isLoadingMorePopularMovies: false,
      hasErrorLoadingMorePopularMovies: false,
    }),
}));

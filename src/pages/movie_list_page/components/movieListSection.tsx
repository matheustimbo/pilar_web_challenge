import { useEffect, useState } from "react";
import LoadingIcon from "../../../components/loadingIcon";
import MovieListItem from "../../../types/movieListItem";
import MovieListSectionItem from "./movieListSectionItem";

type MovieListSectionProps = {
  movies: MovieListItem[];
  sectionLabel: string;
  onRetry: () => void;
  isLoading: boolean;
  hasError: boolean;
  onReachEndOfList: () => void;
  onInit: () => void;
  isLoadingMore: boolean;
};

export default function MovieListSection({
  movies,
  sectionLabel,
  onRetry,
  isLoading,
  hasError,
  onReachEndOfList,
  onInit,
  isLoadingMore,
}: MovieListSectionProps) {
  useEffect(() => {
    onInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [amountScrolled, setAmountScrolled] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (e: any) => {
    setAmountScrolled(e.target.scrollLeft);
    const hasReachedBottom =
      e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    if (hasReachedBottom) {
      onReachEndOfList();
    }
  };

  const renderList = () => {
    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center">
          <p>Erro ao carregar filmes</p>
          <button onClick={onRetry}>Tentar novamente</button>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center">
          <LoadingIcon />
        </div>
      );
    }

    if (movies.length === 0) {
      return <p>No movies found</p>;
    }

    return (
      <div className="relative">
        <div
          className="flex flex-row overflow-x-scroll gap-5 px-[1.25rem]"
          onScroll={handleScroll}
        >
          {movies.map((movie) => (
            <MovieListSectionItem movie={movie} />
          ))}
          {true && <LoadingIcon />}
        </div>
        <div
          style={{
            opacity: amountScrolled > 0 ? 0 : 1,
          }}
          className="transition-all w-[50px] h-[350px] absolute right-0 top-0 bg-gradient-to-r from-transparent to-white"
        ></div>
      </div>
    );
  };

  return (
    <div className="py-[1.875rem]  flex flex-col gap-[1.25rem]">
      <h2 className="text-2xl font-bold px-[1.25rem] text-black">
        {sectionLabel}
      </h2>
      {renderList()}
    </div>
  );
}

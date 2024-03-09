import MovieListItem from "../../../types/movieListItem";
import { MOVIE_POSTER_PATH_W500_BASE_URL } from "../../../utils/constants";

type MovieListSectionProps = {
  movie: MovieListItem;
};

export default function MovieListSectionItem({ movie }: MovieListSectionProps) {
  return (
    <div className="flex flex-col w-[9.375rem] ">
      <img
        className="min-w-[9.375rem] h-[14.0625rem] object-cover rounded"
        src={MOVIE_POSTER_PATH_W500_BASE_URL + movie.poster_path}
      />
      <div className="px-[0.625rem] py-[1.625rem]">
        <h3 className="text-black text-base font-bold">{movie.title}</h3>
        <p className="text-black text-base">{movie.release_date}</p>
      </div>
    </div>
  );
}

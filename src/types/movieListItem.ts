export default interface MovieListItem {
  adult: boolean;
  id: number;
  title: string;
  vote_average: number;
  poster_path?: string;
  backdrop_path?: string;
  overview: string;
  release_date: string;
}

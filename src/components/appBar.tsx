import { TMDB_LOGO } from "../utils/constants";

export default function AppBar() {
  return (
    <div className=" w-full h-16 bg-tmdbDarkBlue flex justify-center items-center">
      <img src={TMDB_LOGO} className=" h-5 w-[154px] " />
    </div>
  );
}

import { MOVIE_LIST_HOME_HEADER_URL } from "../../../utils/constants";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${MOVIE_LIST_HOME_HEADER_URL})`,
      }}
      className="w-full h-[22.5rem] bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
    >
      <div className="p-5 flex flex-col w-full ">
        <h1 className="text-5xl text-white font-bold">Bem-Vindo(a)</h1>
        <h2 className="text-4xl text-white">
          Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
        </h2>
        <div className="h-5" />
        <div className="w-[calc(100vw - 1.25rem)] h-11 bg-white rounded-[30px]  flex flex-row">
          <input
            className="flex flex-1 px-5 py-[0.625rem] outline-none rounded-[30px]"
            type="text"
          />
          <button className="h-11 rounded-[30px] px-[1.625rem] py-[0.625rem] flex justify-center items-center bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue text-white font-bold">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

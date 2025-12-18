import { useState } from "react";
import Card from "./Card";
import presetMovies from "../data/presetMovie.json";
import Search from "./Search";
import useApiCall from "../hooks/useApiCall";
import Loader from "./Loader";
import PageNotFound from "./PageNotFound";

const Main = () => {
  // const [movieList, setMovieList] = useState();
  const { data, loading, error, dataFetch } = useApiCall("s"); // s = search
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setSearch(search);
    if (!search) return;
    dataFetch(search.trim());
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div
        className="flex flex-col max-w-300 items-center justify-center mx-auto gap-4 sm:gap-4
       py-6 px-5 mt-4 sm:mb-2 sm:mt-8"
      >
        <h1 className="text-4xl dark:text-white font-bold text-center">
          Discover your next{" "}
          <span
            className="bg-linear-to-r from-red-700 via-red-600 to-rose-600
            dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
            bg-clip-text text-transparent"
          >
            Favourite Movie
          </span>
        </h1>
        <h3 className="dark:text-white text-md sm:text-xl text-center mx-3 sm:mx-0">
          Search to find the perfect film for any mood. Find the film that
          matches your vibe. Grabbed your popcorn?{" "}
          <span className="text-xl">🍿</span>
        </h3>
      </div>
      <Search setSearch={setSearch} search={search} onSearch={handleClick} />
      <div
        className="main px-4 pt-10 gap-6 flex-1 sm:px-0 sm:gap-8 sm:pt-16 pb-15 flex justify-center items-center
       flex-wrap sm:max-w-300 sm:mx-auto"
      >
        {data?.Search?.length > 0 ? (
          data.Search.map((movie) => <Card key={movie.imdbID} movie={movie} />)
        ) : data?.Response === "False" ? (
          <PageNotFound />
        ) : (
          presetMovies.map((movie) => <Card key={movie.imdbID} movie={movie} />)
        )}
      </div>
    </>
  );
};

export default Main;

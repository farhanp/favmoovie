import { useState } from "react";
import Card from "./Card";
import presetMovies from "../data/presetMovie.json";
import Search from "./Search";
import useApiCall from "../hooks/useApiCall";
import Loader from "./Loader";
import PageNotFound from "./PageNotFound";
import Hero from "./Hero";
import Error from "./Error";

const Main = () => {
  // const [movieList, setMovieList] = useState();
  const { data, loading, error, dataFetch } = useApiCall("s"); // s = search
  const [search, setSearch] = useState("");
  const moviesToRender =
    data?.Search?.length > 0
      ? data.Search
      : data?.Response === "False"
      ? null
      : presetMovies;

  const handleClick = () => {
    setSearch(search);
    if (!search) return;
    dataFetch(search.trim());
  };

  // if (loading) {
  //   return <Loader />;
  // }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Hero />
      <Search setSearch={setSearch} search={search} onSearch={handleClick} />

      {loading ? (
        <Loader />
      ) : (
        <div
          className="main px-4 pt-10 gap-6 sm:gap-4 flex-1 xl:px-0 xl:gap-8 xl:pt-16 pb-15 flex 
       flex-wrap xl:max-w-300 xl:mx-auto"
        >
          {moviesToRender ? (
            moviesToRender.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <PageNotFound />
          )}
        </div>
      )}
    </>
  );
};

export default Main;

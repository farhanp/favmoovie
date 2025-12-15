import { Clapperboard } from "lucide-react";
import React, { useState } from "react";
import Card from "./Card";
import presetMovies from "../data/presetMovie.json";
import Search from "./search";
import useApiCall from "../hooks/useApiCall";
import Loader from "./Loader";

const Main = () => {
  // const [movieList, setMovieList] = useState();
  const { data, loading, error, dataFetch } = useApiCall("s"); // s = search
  const [search, setSearch] = useState("");
  console.log(search);

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
      <Search setSearch={setSearch} search={search} onSearch={handleClick} />
      <div className="main px-4 pt-10 gap-6 sm:px-0 sm:gap-8 sm:pt-20 pb-15 flex flex-wrap sm:max-w-300 sm:mx-auto">
        {data && data?.Search?.length > 0
          ? data?.Search?.map((movie) => (
              <Card key={movie?.imdbID} movie={movie} />
            ))
          : presetMovies.map((movie) => (
              <Card key={movie?.imdbID} movie={movie} />
            ))}
      </div>
    </>
  );
};

export default Main;

import { BadgeInfo, Calendar, Loader, Star } from "lucide-react";
import React, { useRef, useState } from "react";
import dummyPoster from "../assets/blank-poster.webp";
import Modal from "./Modal";
import useApiCall from "../hooks/useApiCall";
import MovieDetails from "./MovieDetails";

const Card = ({ movie }) => {
  const { Poster, Title, Year, Type, imdbRating: Rating } = movie;
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const { data, loading, dataFetch } = useApiCall("t"); // t = title

  const handleMoreInfo = () => {
    dataFetch(Title?.trim());
    dialogRef.current?.showModal();
  };

  return (
    <div
      className="group touch-manipulation card w-full sm:w-[calc(50%-8px)]  lg:w-[23%] rounded-xl
        shadow-lg relative overflow-hidden
        transition-all duration-300 ease-in-out
        sm:hover:scale-110 sm:hover:z-90   cursor-pointer"
      onClick={() => {
        if (window.innerWidth < 769) {
          setOpen((prev) => !prev);
        }
      }}
    >
      <figure className="relative">
        <img
          src={Poster || dummyPoster}
          onError={(e) => (e.currentTarget.src = dummyPoster)}
          className="rounded-xl min-h-105 object-cover w-full"
          alt="Movie poster"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>

        {/* Overlay */}
        <div
          className={`
          absolute inset-0 bg-black/30 backdrop-blur-sm
          flex flex-col items-center justify-center gap-4
          transition-opacity duration-300
          opacity-0 z-80
          sm:group-hover:opacity-100
          ${open ? "opacity-100" : ""}
          `}
        >
          <BadgeInfo size={64} color="gold" />
          <Modal
            dialogRef={dialogRef}
            loading={loading}
            onOpen={handleMoreInfo}
          >
            <MovieDetails data={data} />
          </Modal>
        </div>
      </figure>
      <div className="card-body gap-3 w-full px-4 py-8 absolute bottom-0 bg-linear-to-t from-black/90 via-black/70 to-transparent">
        <h2 className="card-title text-xl sm:text-lg text-white ">{Title}</h2>
        <div className="text-gray-500  flex items-center gap-1">
          <Calendar size={16} className="" /> <span>{Year}</span>
        </div>

        <div className="card-actions justify-start">
          <div className="badge badge-warning badge-sm">
            {Type.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

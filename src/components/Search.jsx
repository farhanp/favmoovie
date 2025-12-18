const Search = ({ setSearch, search, onSearch }) => {
  return (
    <div className="search pt-4 px-4 sm:pt-0 sm:px-0 items-center justify-center flex gap-4">
      <label
        className="
    flex items-center gap-2
    input input-bordered
    border-gray-400 bg-white text-black      /* light mode border visible */
    dark:border-gray-700 dark:bg-gray-800 dark:text-white
    focus-within:outline-none focus:ring-0
    max-h-10
    rounded-md
    px-2
  "
      >
        <svg
          className="h-5 w-5 opacity-50 text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          name="movie"
          tabIndex={1}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(e)}
          required
          type="search"
          placeholder="Search your favmoovie..."
          className="
      flex-1
      bg-transparent
      text-black dark:text-white
      placeholder-gray-500 dark:placeholder-gray-400
      focus:outline-none
    "
        />
      </label>

      <button
        onClick={() => onSearch()}
        className="btn border-0
         btn-md rounded-sm 
           px-6 py-3  font-semibold text-white
  bg-linear-to-r from-red-700 via-red-600 to-rose-600
  dark:bg-linear-to-r dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
  transition-all duration-300
  hover:scale-[1.03]
  hover:brightness-110
  focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-amber-500
         "
      >
        Search
      </button>
    </div>
  );
};

export default Search;

const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-1 max-w-300 mx-auto">
      <span
        className="
      loading loading-infinity min-w-24 sm:min-w-30
      bg-linear-to-r
      from-red-700 via-red-600 to-rose-600
      dark:bg-linear-to-r
      dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
    "
      ></span>
    </div>
  );
};

export default Loader;

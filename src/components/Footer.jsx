import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer sm:footer-horizontal footer-center 
        dark:bg-zinc-900
      bg-white shadow-md p-4"
      >
        <aside>
          <p
            className="sm:text-lg
            text-gradient  bg-linear-to-r from-red-700 via-red-600 to-rose-600
  dark:bg-linear-to-r dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
  bg-clip-text text-transparent
          "
          >
            Copyright © {new Date().getFullYear()} - All right reserved by
            favMoovie Ltd.
            <br />
            <span className="text-black dark:text-white">
              {" "}
              Made with <span className="text-red-400">&hearts;</span> by Farhan
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

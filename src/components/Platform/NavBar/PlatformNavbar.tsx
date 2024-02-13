import { Link } from "react-router-dom";
import "pages/Platform/platform.css";

import { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function PlatformNavbar() {
  return (
    <nav className="nav bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/platform"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          style={{ display: "flex" }}
        >
          <img
            className="tobeto-logo"
            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div className="navbar navbar-platform">
              <li>
                <Link
                  to="/platform"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/profilim"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Profilim
                </Link>
              </li>
              <li>
                <Link
                  to="/degerlendirmeler"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700e"
                >
                  Değerlendirmeler
                </Link>
              </li>
              <li>
                <Link
                  to="/katalog"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Katalog
                </Link>
              </li>
              <li>
                <Link
                  to="/takvim"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {" "}
                  Takvim
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  İstanbul Kodluyor
                </Link>
                <Link
                  to="/"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "8.5rem",
                    boxShadow: "0 2px 20px rgba(64, 64, 64, 0.25)",
                  }}
                >
                  {" "}
                  <img
                    alt="Tobeto Logo"
                    src="https://tobeto.com/_next/static/media/tbtlogo-gradient.7979f966.svg"
                  />
                </Link>
              </li>
            </div>
          </ul>

          <DropdownItem />
        </div>
      </div>
    </nav>
  );
}

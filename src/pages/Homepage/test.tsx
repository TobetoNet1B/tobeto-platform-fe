import React, { useEffect, useState } from "react";

export default function test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show3, setshow3] = useState(false);
  return (
    <div className="flex flex-col">
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <button
            aria-label="show menu"
            onClick={() => setshow3(!show3)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
          >
            <svg
              className={`fill-stroke ${show3 ? "block" : "hidden"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L5 1L1 5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`fill-stroke ${show3 ? "hidden" : "block"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menu3"
        className={`flex-col jusitfy-start items-start mt-12 ${
          show3 ? "flex" : "hidden"
        }`}
      >
        <div>
          <p className="tracking-tight text-xs leading-3 text-gray-800">
            MK617
          </p>
        </div>
        <div className="mt-2">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            Beige brown
          </p>
        </div>
        <div className="mt-6">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            42 size
          </p>
        </div>
        <div className="mt-6">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            $1,000
          </p>
        </div>
        <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
          <div className="w-full">
            <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
              More information
            </button>
          </div>
          <div className="w-full">
            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

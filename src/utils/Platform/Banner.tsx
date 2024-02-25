import React from "react";
type Props = { url: string; spanText: string };
const Banner = (props:Props) => {
  return (
    <div
    className="edu-banner-cont mb-5 bg-cover bg-center mx-auto mt-2 relative rounded-xl h-[170px] w-11/12 "
    style={{ backgroundImage: `url(${props.url})` }}
  >
    <div className="row flex  items-center  w-full h-full">
    <span className="banner-text text-white text-4xl font-semibold  ml-10 bottom-5 left-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        {props.spanText}
      </span>
    </div>
  </div>
  );
};

export default Banner;
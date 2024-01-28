import React, { useState } from 'react'
import CourseContents from './CourseContents'
import CourseAbout from './CourseAbout'

type Props = {}

const Course = (props: Props) => {
  const [showFirst, setShowFirst] = useState(0);

  const handleButtonClick = (num: number) => {
    setShowFirst(num);
  };
  return (
    <div className="mt-5">
      <div className="!overflow-visible box-border m-0 p-0 text-[#1a1a1a] text-sm list-none flex flex-col" style={{ overflow: "unset" }}>
        <div className="relative flex flex-none items-center mx-0 mt-0 mb-4 before:bottom-0 before:absolute before:right-0 before:left-0 before:border before:border-solid before:border-[#f0f0f0] before:content-['']">
          <div className="relative flex flex-auto self-stretch overflow-hidden whitespace-nowrap translate-x-0 translate-y-0 before:absolute before:z-[1] before:opacity-0 before:transition-opacity before:duration-[300ms] before:content-[''] before:pointer-events-none before:left-0 before:shadow-[10px_0_8px_-8px_rgba(0,0,0,0.08)] before:top-0 before:bottom-0 before:w-8 after:absolute after:z-[1] after:opacity-0 after:transition-opacity after:duration-[300ms] after:content-[''] after:pointer-events-none after:right-0 after:shadow-[10px_0_8px_-8px_rgba(0,0,0,0.08)] after:top-0 after:bottom-0 after:w-8">
            <div className="relative flex transition-opacity duration-[300ms]" style={{ transform: "translate(0px, 0px)" }}>
              <div onClick={() => handleButtonClick(0)} className="relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer text-black">
                <div className={`transition-none font-medium outline-none ${showFirst === 0 ? "text-black" : "text-[#7f7f7f]"}`}>
                  <div className="relative cursor-pointer">
                    <span className="text-lg">İçerik</span>
                  </div>
                </div>
              </div>
              <div onClick={() => handleButtonClick(1)} className="text-[#7f7f7f] my-0 mr-0 ml-8 relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer">
                <div className={`transition-none font-medium outline-none ${showFirst === 1 ? "text-black" : "text-[#7f7f7f]"}`}>
                  <div className="relative cursor-pointer">
                    <span className="text-lg">Hakkında</span>
                  </div>
                </div>
              </div>
              <div className={`!bg-black bottom-0 h-0.5 absolute pointer-events-none  ${showFirst === 0 ? "left-0 w-12" : "left-20 w-[88px]"}`} />
            </div>
          </div>
          <div className="flex self-stretch absolute invisible pointer-events-none">
            <button type="button" className="p-2 relative bg-transparent border-0 text-[#1a1a1a] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[5px] after:transform after:translate-y-[100%] after:content-['']" style={{ visibility: "hidden", order: 1 }}>
              <span className="inline-flex items-center text-inherit font-normal leading-[0px] text-center normal-case align-[-0.125em] antialiased" style={{textRendering:"optimizeLegibility"}}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-2xl inline-block leading-none">
                  <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="flex-auto min-w-0 min-h-0">
          <div className="relative w-full">
            <div className={` ${showFirst === 0 ? "" : "hidden"}`}>
              <CourseContents />
            </div>
            <div className={` ${showFirst === 1 ? "" : "hidden"}`}>
              <CourseAbout />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
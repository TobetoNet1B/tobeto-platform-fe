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
    <div className="mt-5">{/*className="activity-detail-tabs" */}
      <div className="!overflow-visible box-border m-0 p-0 text-[#1a1a1a] text-sm list-none flex flex-col" style={{ overflow: "unset" }}>{/*className="ant-tabs ant-tabs-top" */}
        <div role="tablist" className="relative flex flex-none items-center mx-0 mt-0 mb-4 before:bottom-0 before:absolute before:right-0 before:left-0 before:border before:border-solid before:border-[#f0f0f0] before:content-['']">{/*className="ant-tabs-nav" */}
          <div className="relative flex flex-auto self-stretch overflow-hidden whitespace-nowrap transform translate-x-0 translate-y-0 before:absolute before:z-[1] before:opacity-0 before:transition-opacity before:duration-[300ms] before:content-[''] before:pointer-events-none before:left-0 before:shadow-[10px_0_8px_-8px_rgba(0, 0, 0, 0.08)] before:top-0 before:bottom-0 before:w-8 after:absolute after:z-[1] after:opacity-0 after:transition-opacity after:duration-[300ms] after:content-[''] after:pointer-events-none after:right-0 after:shadow-[10px_0_8px_-8px_rgba(0, 0, 0, 0.08)] after:top-0 after:bottom-0 after:w-8">{/*className="ant-tabs-nav-wrap" */}
            <div className="relative flex transition-opacity duration-[300ms]" style={{ transform: "translate(0px, 0px)" }}>{/*className="ant-tabs-nav-list" */}
              <div onClick={() => handleButtonClick(0)} data-node-key="content" className="relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer  text-black">{/*className="ant-tabs-tab ant-tabs-tab-active" */}
                <div role="tab" aria-selected="true" className={`transition-none font-medium outline-none ${showFirst === 0 ? "text-black" : "text-[#7f7f7f]"}`} tabIndex={0} id="rc-tabs-0-tab-content" aria-controls="rc-tabs-0-panel-content">{/*className="ant-tabs-tab-btn" */}
                  <div className="relative cursor-pointer">{/*className="tabs-nav " */}
                    <span className="text-lg">İçerik</span>{/*className="tabs-nav-title" */}
                  </div>
                </div>
              </div>
              <div onClick={() => handleButtonClick(1)} data-node-key="about" className="text-[#7f7f7f] my-0 mr-0 ml-8 relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer">{/*className="ant-tabs-tab" */}
                <div role="tab" aria-selected="false" className={` transition-none font-medium outline-none ${showFirst === 1 ? "text-black" : "text-[#7f7f7f]"}`} tabIndex={0} id="rc-tabs-0-tab-about" aria-controls="rc-tabs-0-panel-about">{/*className="ant-tabs-tab-btn" */}
                  <div className="relative cursor-pointer">{/*className="tabs-nav " */}
                    <span className="text-lg">Hakkında</span>{/*className="tabs-nav-title" */}
                  </div>
                </div>
              </div>
              <div className={`!bg-black bottom-0 h-0.5 absolute pointer-events-none  ${showFirst === 0 ? "left-0 w-12" : "left-20 w-[88px]"}`} />{/*className="ant-tabs-ink-bar" */}
            </div>
          </div>
          <div className="flex self-stretch absolute invisible pointer-events-none">{/*className="ant-tabs-nav-operations ant-tabs-nav-operations-hidden" */}
            <button
              type="button"
              className="p-2 relative bg-transparent border-0 text-[#1a1a1a] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[5px] after:transform after:translate-y-[100%] after:content-['']"
              tabIndex={-1}
              aria-hidden="true"
              aria-haspopup="listbox"
              aria-controls="rc-tabs-0-more-popup"
              id="rc-tabs-0-more"
              aria-expanded="false"
              style={{ visibility: "hidden", order: 1 }}
            >{/*className="ant-tabs-nav-more" */}
              <span
                role="img"
                aria-label="ellipsis"
                className="inline-flex items-center text-inherit font-normal leading-[0px] text-center normal-case align-[-0.125em] antialiased"
              >{/*className="anticon anticon-ellipsis" */}
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="ellipsis"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true" className="text-2xl inline-block"
                >
                  <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="flex-auto min-w-0 min-h-0">{/*className="ant-tabs-content-holder" */}
          <div className="relative w-full">{/*className="ant-tabs-content ant-tabs-content-top" */}
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
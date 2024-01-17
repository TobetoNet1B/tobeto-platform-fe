import { Link } from "react-router-dom"
import "./ModuleSet.css"
import { url } from "inspector"
import { useState } from "react"
import Course from "pages/Course/Course"
import ModuleSetHeader from "./ModuleSetHeader"

type Props = {}

const ModuleSet = (props: Props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);


  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className='!overflow-x-hidden !overflow-y-scroll !w-full !h-screen bg-white !font-["Poppins",Helvetica,Arial,sans_serif] !not-italic !text-[14px] !text-black antialiased m-0'>
      <div style={{ position: 'fixed', zIndex: 2147483647, top: '10px', left: '10px', backgroundColor: 'rgb(153, 51, 255)', padding: '11px 1em', cursor: 'pointer', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Link to="/Platform" style={{ cursor: 'pointer' }}>
          <svg width="8" height="14" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
          </svg>
        </Link>
      </div>

      <div id="root">
        <div id="wrapper-content" className="relative mt-0 mx-auto mb-[-80px] min-h-screen h-auto overflow-hidden">{/*className="wrapper without-slide */}
          <div id="dynamicContent" className="py-10 px-0 w-[88%] m-auto">{/*className="content" */}
            <div className="rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] inline-block align-middle w-full h-auto p-5 mb-12">{/*className="page-content activity-detail" */}
              
              <ModuleSetHeader/>


              <Course />


            </div>
          </div>

          <div className="w-[450px] h-auto transition-all duration-500 absolute right-0 top-[77px] left-auto bottom-auto z-[10001] opacity-100 block invisible ">{/*className="growl-container show top-right" */}
            <div className="shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px]  border-solid border-t-8 border-[#3dcb79]">{/*className="growl-item success" */}
              <div className="flex justify-between items-center ">
                <div className="flex items-center space-x-2">
                  <span className="text-[28px] rounded-[0px] text-[#3dcb79]">{/*className="icon"*/}
                    <span role="img" aria-label="check-circle" className="inline-block  text-[#3dcb79] my-0 mx-[5px] text-2xl">{/*className="anticon anticon-check-circle"*/}
                      <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" />
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                      </svg>
                    </span>
                  </span>
                  <div className="inline-block align-middle text-base leading-none text-black w-[80%] ">{/*className="growl-item-content" */}
                    <p className="m-0">Favorilerden çıkarma işlemin başarıyla gerçekleşti.</p>
                  </div>
                </div>
                <Link to={""} id="growl-item-close" className="sg-icon sg-delete z-[1] w-5 h-5 text-lg text-gray-500">{/*className="sg-icon sg-delete close"*/}
                  <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-20 clear-both" />{/*className="push" */}
        </div>

        <div className="top-0 absolute overflow-visible" />{/*className="overlay" */}
      </div>

    </div>
  )
}

export default ModuleSet

import { Link } from "react-router-dom"
import "./ModuleSet.css"
import Course from "pages/Course/Course"
import ModuleSetHeader from "./ModuleSetHeader"

type Props = {}

const ModuleSet = (props: Props) => {

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
              <ModuleSetHeader />

              <Course />
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

import React from 'react'
import VideoScreen from 'utils/VideoScreen/VideoScreen'
import CourseDetail from './CourseDetail'
import { GrLike } from "react-icons/gr";
import "./Course.css"

type Props = {}

const CourseContents = (props: Props) => {
  return (
    <div className="outline-none">
      <div className="w-full h-auto">
        <div className="!-mx-2 box-border flex flex-row flex-wrap flex-initial" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
          <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[41.66666667%] xl:basis-[41.66666667%] lg:max-w-[41.66666667%] lg:basis-[41.66666667%] md:basis-[100%] md:max-w-[100%] w-full basis-full">
            <div id='courseVideo' className="max-h-[600px] overflow-x-hidden overflow-y-auto">
              <details className="open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg pb-2 rounded-[0_0_8px_8px] cursor-pointer mb-3" open>
                <summary className="text-base leading-[18px] font-semibold dark:!text-black select-none !text-black me-auto flex-auto w-full">
                  Skillsoft ile İnsan ve İş Yönetimi
                </summary>
                <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 ">
                  <div className="pt-0 pr-0 pb-0 pl-6 rounded-[0_0_8px_8px] bg-white text-black/[0.88] w-full">
                    <div className=" ">
                      <div className="ml-[-13px] cursor-pointer flex">
                        <div className="inline-block align-middle w-[calc((100%-28px))] mx-2 mr-0 ml-2 cursor-pointer">
                          <div className="break-all font-medium text-base mr-[10px] leading-[18px] text-black">
                            4 Dakika Kuralı - Steve McDermott
                          </div>
                          <div className="leading-[18px] mt-[3px]">
                            <span className="text-[#818181] font-medium text-xs">
                              Video - <span>2 dk</span>
                            </span>
                          </div>
                        </div>
                        <div className="inline-block align-middle my-[7px] mx-0 text-right">
                          <div className="w-[13px] h-[13px] inline-block align-middle !bg-contain !bg-no-repeat bg-[url('https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/unit-completed.svg')]" />
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <div className="ml-[-13px] cursor-pointer flex">
                        <div className="inline-block align-middle w-full mx-2 mr-0 ml-2 cursor-pointer">
                          <div className="break-all font-medium text-base mr-3 leading-5 text-black">
                            Pazarları Yeniden Tanımlayan Müşteri Öngörüleri - Peter Fisk
                          </div>
                          <div className="leading-4 mt-1">
                            <span className="text-[#818181] font-medium text-xs">
                              Video - <span>4 dk</span>
                            </span>
                          </div>
                        </div>
                        <div className="inline-block align-middle m-2 text-right">
                          <div className="w-3 h-3 inline-block align-middle bg-contain bg-no-repeat bg-[url('https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/unit-completed.svg')]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[58.33333333%] xl:basis-[58.33333333%] lg:max-w-[58.33333333%] lg:basis-[58.33333333%] md:basis-[100%] md:max-w-[100%] w-full basis-full">
            <div className="shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-[15px] overflow-hidden">
              <div className="rounded-tl-2xl rounded-tr-2xl relative w-full h-auto">
                <div>
                  <VideoScreen videoSource='https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4' />
                </div>
              </div>
              <div className="py-[15px] px-5">
                <div className="!-mx-2 box-border flex flex-row flex-wrap" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[75%] xl:basis-[75%] lg:max-w-[66.66666667%] lg:basis-[66.66666667%] md:basis-[75%] md:max-w-[75%] w-full basis-full">
                    <div className="text-base font-semibold mb-[15px] block">
                      <div>
                        Dışarıdan İçeriye Pazarlama Stratejisi -
                        Peter Fisk
                      </div>
                    </div>
                    <div className="inline-block align-middle mr-5 text-[#818181]">
                      Video - <span>4 dk</span>
                    </div>
                    <div className="inline-block align-middle mr-5 ">
                      <div className="-mt-0.5 bg-[#818181] rounded-[50px] w-[13px] h-[13px] inline-block align-middle !bg-contain !bg-no-repeat" />
                      Başlamadın
                    </div>
                    <div className='m-0 align-middle hidden !text-[#3dcb79]'>
                      <div className='flex'>
                        <GrLike className='mr-1' />
                        Tebrikler tamamladın!
                      </div>
                    </div>
                  </div>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 xl:basis-[25%] xl:max-w-[25%] lg:basis-[33.33333333%] lg:max-w-[33.33333333%] md:basis-[25%] md:max-w-[25%] w-full basis-full">
                    <div className="m-3 xl:text-left lg:text-left md:text-left text-center">
                      <div className="w-full inline-flex flex-col" style={{ gap: 8 }}>
                        <div className="empty:hidden" />
                        <div className="">

                          <CourseDetail />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseContents
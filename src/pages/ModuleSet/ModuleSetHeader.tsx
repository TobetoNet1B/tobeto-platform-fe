import React, { useEffect, useState, } from 'react'
import { GrLike } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import HeartButton from 'utils/Buttons/HeartButton';
import FavButton from 'utils/Buttons/FavButton';
import { GetModuleSetResponse } from 'models/responses/modulesets/getModuleSetResponse';
import { GetStudentLessonResponse } from 'models/responses/student-lessons/getStudentLessonResponse';
import CountUp from 'react-countup';

type Props = {
  name?: string;
  endDate: GetModuleSetResponse["classroomModules"];
  imgUrl?: string;
  courseModules: GetModuleSetResponse["courseModules"];
  studentModules: GetModuleSetResponse["studentModules"];
  studentLessons: GetStudentLessonResponse;
  //lessons: GetModuleSetResponse["courseModules"][number]["lessons"];
}

const ModuleSetHeader = (props: Props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const [lessonsCount, setLessonsCount] = useState(0);
  const [endDate, setEndDate] = useState("");
  const [isLike, setIsLike] = useState<boolean>();
  const [isFav, setIsFav] = useState<boolean>();
  const [watchedLessonsCount, setWatchedLessonsCount] = useState(0);

  const lessonsCountFunc = () => {
    if (!props.courseModules) { return; }
    props.courseModules.forEach((module) => {
      const count = module.lessons?.length || 0;
      setLessonsCount(prevLessonCount => prevLessonCount + count);
    });
  };

  const endDateFunc = () => {
    if (!props.endDate) { return; }
    props.endDate.forEach((module) => {
      const classroomEndDate = module.classroomEndDate;
      const formattedDate: string = new Date(classroomEndDate).toLocaleDateString();
      setEndDate(formattedDate);
    });
  };

  const studentModulesFunc = () => {
    if (!props.studentModules) { return; }
    props.studentModules.forEach((module) => {
      const isLike = module.isLiked;
      const isFav = module.isFav;
      setIsLike(isLike);
      setIsFav(isFav);
    });
  };

  const watchedLessonsCountFunc = () => {
    if (!props.studentLessons) { return; }
    props.studentLessons.forEach((module) => {
      if (module.isWatched) {
        setWatchedLessonsCount(prevWatchedLessonsCount => prevWatchedLessonsCount + 1);
      }
    });
  };

  useEffect(() => {
    lessonsCountFunc();
    endDateFunc();
    studentModulesFunc();
    watchedLessonsCountFunc();
  }, []);

  return (
    <div>
      <div className="">
        <div className="!-mx-2 box-border flex flex-grow-0 flex-shrink basis-auto flex-row flex-wrap" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
          <div className="!px-2 flex-grow-0 flex-shrink-0 box-border xl:block xl:visible xl:basis-[8.33333333%] xl:max-w-[8.33333333%] lg:block lg:visible lg:basis-[8.33333333%] lg:max-w-[8.33333333%] md:block md:visible md:basis-[16.66666667%] md:max-w-[16.66666667%] hidden invisible basis-full max-w-full">
            <img className="align-middle border-none rounded-lg w-full h-auto" src={props.imgUrl} alt={props.name} />
          </div>
          <div className="!px-2 flex-grow-0 flex-shrink-0 box-border xl:max-w-[91.66666667%] xl:basis-[91.66666667%] lg:max-w-[91.66666667%] lg:basis-[91.66666667%] md:max-w-[83.33333333%] md:basis-[83.33333333%] max-w-full basis-full">
            <div className="!-mx-2 box-border flex flex-grow-0 flex-shrink basis-auto flex-row flex-wrap" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
              <div className="!px-2 flex-grow-0 flex-shrink-0 box-border max-w-full basis-full">
                <div className="!-mx-2 box-border flex flex-grow-0 flex-shrink basis-auto flex-row flex-wrap" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 box-border xl:max-w-[58.33333333%] xl:basis-[58.33333333%] lg:max-w-[58.33333333%] lg:basis-[58.33333333%] md:max-w-[33.33333333%] md:basis-[33.33333333%] basis-full max-w-full">
                    <div className="">
                      <h3 className="my-0 mr-[10px] ml-0 inline align-middle font-semibold text-lg text-black">{props.name}</h3>
                      <span className="!hidden rounded-[5px] align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] leading-normal mb-[1px] bg-[#ffd228] border-solid border-[#ffd228] border-[1px] text-[#000]">
                        YENİ
                      </span>
                      <span className="!hidden rounded-[5px] align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] leading-normal mb-[1px] bg-[#549be6] border-solid border-[#549be6] border-[1px] text-[#fff]">
                        GELİŞİM YOLCULUĞU
                      </span>
                      <span className="!hidden rounded-[5px] align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] leading-normal mb-[1px] bg-[#e02020] border-solid border-[#e02020] border-[1px] text-[#fff]">
                        ZORUNLU
                      </span>
                      <div className="w-fit">
                        <span className="flex">
                          <div className={`mt-4 font-bold flex ${lessonsCount === watchedLessonsCount ? "!text-[#3dcb79]" : "!text-[#2372ba]"}`}>
                            <GrLike className={`mr-2 mt-0.5 text-[#3dcb79] ${lessonsCount === watchedLessonsCount ? "block" : "hidden"}`} />
                            <span className="flex">
                              {lessonsCount === watchedLessonsCount ? "Tamamladın" : `${endDate} tarihine kadar bitirebilirsin`}
                            </span>
                          </div>
                          <span onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)} aria-label="question-circle"
                            className="text-[#7a8292] ml-1 h-8 inline-flex items-end not-italic leading-[0] text-center normal-case align-[-0.125em] antialiased relative " style={{ textRendering: "optimizeLegibility" }}>
                            <FaRegQuestionCircle />
                            {tooltipStatus === 3 && (
                              <div role="tooltip" className="z-20 -top-[72px] w-max absolute transition duration-150 ease-in-out left-0 ml-8 bg-white p-4 rounded-md" style={{ boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)' }}>
                                <svg className="absolute left-0 -ml-2 bottom-0 top-0 h-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                      <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                        <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                          <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                                <div className="!pt-3 !px-3 !pb-1 text-black whitespace-normal !text-center text-sm font-normal min-w-8 min-h-8 no-underline break-words">
                                  <div className="text-left">
                                    <p className="font-bold mt-0 mb-[1em] block ">Eğitimi nasıl tamamlayabilirim?</p>
                                    <div className="flex my-3 ">
                                      <span className="mb-1 flex before:content-[''] before:inline-block before:rounded-[0.375rem] before:h-[0.4rem] before:w-[0.4rem] before:mr-[0.4rem] before:mb-[0.07rem] before:ml-[0.1rem] before:bg-[#4a485b] before:mt-2">
                                        Eğitimde yer alan tüm içerikleri tamamladığında ({watchedLessonsCount} / {lessonsCount})
                                      </span>
                                    </div>
                                    <p className="mt-4 !mb-1 font-bold block">Eğitimi nasıl başarabilirim?</p>
                                    <div className="flex my-3">
                                      <span className="mb-1 flex before:content-[''] before:inline-block before:rounded-[0.375rem] before:h-[0.4rem] before:w-[0.4rem] before:mr-[0.4rem] before:mb-[0.07rem] before:ml-[0.1rem] before:bg-[#4a485b] before:mt-2">
                                        Eğitimde yer alan tüm içerikleri tamamladığında ({watchedLessonsCount} / {lessonsCount})
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 box-border xl:text-right xl:max-w-[41.66666667%] xl:basis-[41.66666667%] lg:text-right lg:max-w-[41.66666667%] lg:basis-[41.66666667%] md:text-right md:basis-[66.66666667%] md:max-w-[66.66666667%] text-center basis-full max-w-full">
                    <div className="inline-flex items-center" style={{ gap: 8 }}>
                      <div className="">
                        <div className={`inline-block align-middle rounded-[5px] py-2 px-2 text-lg font-semibold text-center mr-3 text-white ${lessonsCount === watchedLessonsCount ? "bg-[#3dcb79]" : "bg-[#549be6]"}`}>
                          <span className=""><CountUp end={(100 / lessonsCount) * watchedLessonsCount} duration={7} delay={1}/> PUAN</span>
                        </div>
                      </div>
                      <div className="empty:hidden" />
                      <div className="">
                        <div className="inline-block !align-bottom !h-8">
                          <HeartButton isLiked={isLike ? false : true} />
                        </div>
                      </div>
                      <FavButton isFav={isFav ? false : true} />
                      <div className="empty:hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="!px-2 flex-grow-0 flex-shrink-0 box-border max-w-full basis-full">
                <div className="text-right">
                  <div className="text-left relative w-full text-sm me-2 mb-2 box-border m-0 p-0 text-black/[0.88] list-none inline-block">
                    <div className={"w-full h-[3px] mr-[calc(-2em-20px)] pr-[calc(2em+20px)] me-[calc(-2em-8px)] pe-[calc(2em+8px)] inline-block"} onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                      <div className="relative inline-block w-full overflow-hidden align-middle bg-black/[0.06] rounded-[100px]">
                        <div className="!h-[6.5px] relative bg-[#1677ff] rounded-[100px] transition-all duration-300 bg-gradient-to-r from-[#2ddfff] to-[#b7df2d] before:absolute before:inset-0 before:bg-white before:rounded-[100px] before:opacity-0 before:animate-antProgresActive before:content-['']" style={{ width: `${(watchedLessonsCount / lessonsCount) * 100}%`, height: 3 }} />
                      </div>
                      {tooltipStatus === 1 && (
                        <div role="tooltip" className="z-20 mx-[calc((50%-8rem))] mb-7 w-64 absolute transition duration-150 ease-in-out bottom-0 shadow-2xl bg-white p-4 rounded-lg">
                          <svg className="absolute right-0 -ml-2 -bottom-3 w-full" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                              <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                  <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                    <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-180.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <p className="text-sm leading-4 text-gray-600 text-center">Eğitim Tamamlama Oranı</p>
                        </div>
                      )}
                    </div>
                    <span className="text-[#565656] inline-block w-[2em] ms-2 leading-none whitespace-nowrap text-start align-middle break-normal" title={`${(watchedLessonsCount / lessonsCount) * 100}%`}>
                      {Math.round((watchedLessonsCount / lessonsCount) * 100)}%
                    </span>
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

export default ModuleSetHeader
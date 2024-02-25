import React, { useEffect, useState } from 'react'
import VideoScreen from 'utils/VideoScreen/VideoScreen'
import CourseDetailSoftSkill from './CourseDetailSoftSkill';
import CourseDetailAsenkron from './CourseDetailAsenkron';
import { GrLike } from "react-icons/gr";
import "./Course.css"
import { GetModuleSetResponse, Lesson } from 'models/responses/modulesets/getModuleSetResponse';
import { GetStudentLessonResponse } from 'models/responses/student-lessons/getStudentLessonResponse';
import { FcClock } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

type Props = {
  courses: GetModuleSetResponse["courseModules"];
  studentLessons: GetStudentLessonResponse;
  moduleSetTypes: string;
}

const CourseContents = (props: Props) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | undefined>(undefined);
  const [studentLessonId, setStudentLessonId] = useState<string | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [isWatched, setIsWatched] = useState<boolean | null>(null);
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [unwatchedVideoExists, setUnwatchedVideoExists] = useState<boolean>(false);
  const [uncompletedCoursesExist, setUncompletedCoursesExist] = useState<boolean>(false);

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    handleStudentLessonTableData(lesson.id);
  };

  useEffect(() => {
    //handleLessonClick(props.courses[0].lessons[0]);
    let unwatchedVideoExists = false;
    let uncompletedCoursesExist = false;

    for (const course of props.courses) {
      for (const lesson of course.lessons) {
        const studentLesson = props.studentLessons.find(sl => sl.lessonId === lesson.id);
        if (studentLesson && !studentLesson.isWatched) {
          setSelectedLesson(lesson);
          handleStudentLessonTableData(lesson.id);
          unwatchedVideoExists = true;
          break;
        }
      }
      if (unwatchedVideoExists) break;
      else {
        handleLessonClick(props.courses[0].lessons[0]);
      }

    }

    for (const course of props.courses) {
      const isCourseCompleted = course.lessons.every(lesson => {
        const studentLesson = props.studentLessons.find(sl => sl.lessonId === lesson.id);
        return studentLesson && studentLesson.isWatched;
      });
      if (!isCourseCompleted) {
        uncompletedCoursesExist = true;
        break;
      }
    }
    setUnwatchedVideoExists(unwatchedVideoExists);
    setUncompletedCoursesExist(uncompletedCoursesExist);
  }, [])

  useEffect(() => {
    if (selectedLesson) {
      const detailElement = document.getElementById(selectedLesson.id);
      if (detailElement) {
        detailElement.setAttribute('open', '');
      }
    }
  }, [selectedLesson]);

  const handleStudentLessonTableData = (lesson: Lesson['id']) => {
    const studentLesson = props.studentLessons.find(sl => sl.lessonId === lesson);
    if (studentLesson) {
      setStudentLessonId(studentLesson.id);
      setStudentId(studentLesson.studentId);
      setIsWatched(studentLesson.isWatched);
      setIsLiked(studentLesson.isLiked)
    }
  }

  const getLessonStatusIcon = (lesson: Lesson) => {
    const studentLesson = props.studentLessons.find(sl => sl.lessonId === lesson.id);
    if (studentLesson) {
      return studentLesson.isWatched ? <FcOk /> : <FcClock />;
    }
    return null;
  };

  const isLessonCompleted = (lesson: Lesson) => {
    const studentLesson = props.studentLessons.find(sl => sl.lessonId === lesson.id);
    return studentLesson && studentLesson.isWatched;
  };

  const renderCourseDetailComponent = (lesson: Lesson) => {
    if (props.moduleSetTypes === "Asenkron") {
      return <CourseDetailAsenkron lessonDetail={lesson} studentLessons={props.studentLessons} />;
    } else {
      return <CourseDetailSoftSkill lessonDetail={lesson} studentLessons={props.studentLessons} />;
    }
  };

  return (
    <div className="outline-none">
      <div className="w-full h-auto">
        <div className="!-mx-2 box-border flex flex-row flex-wrap flex-initial" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
          <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[41.66666667%] xl:basis-[41.66666667%] lg:max-w-[41.66666667%] lg:basis-[41.66666667%] md:basis-[100%] md:max-w-[100%] w-full basis-full">
            <div id='courseVideo' className="max-h-[600px] overflow-x-hidden overflow-y-auto">
              {props.courses.map((module, moduleIndex) => (
                <details key={moduleIndex} className="open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg pb-2 rounded-[0_0_8px_8px] cursor-pointer mb-3" open={selectedLesson && module.lessons.some(lesson => lesson.id === selectedLesson.id)}>
                  <summary className="text-base leading-[18px] font-semibold dark:!text-black select-none !text-black me-auto flex-auto w-full">
                    {module.name}
                  </summary>
                  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 ">
                    <div className="pt-0 pr-0 pb-0 pl-6 rounded-[0_0_8px_8px] bg-white text-black/[0.88] w-full">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className=" " onClick={() => handleLessonClick(lesson)}>
                          <div className="ml-[-13px] cursor-pointer flex">
                            <div className="inline-block align-middle w-[calc((100%-28px))] mx-2 mr-0 ml-2 cursor-pointer">
                              <div className="break-all font-medium text-base mr-[10px] leading-[18px] text-black">
                                {lesson.name}
                              </div>
                              <div className="leading-[18px] mt-[3px]">
                                <span className="text-[#818181] font-medium text-xs">
                                  Video - <span>{lesson.duration} dk</span>
                                </span>
                              </div>
                            </div>
                            <div className="inline-block align-middle my-[7px] mx-0 text-right">
                              {/* <FcOk />
                              <FcClock /> */}
                              {getLessonStatusIcon(lesson)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[58.33333333%] xl:basis-[58.33333333%] lg:max-w-[58.33333333%] lg:basis-[58.33333333%] md:basis-[100%] md:max-w-[100%] w-full basis-full">
            <div className="shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-[15px] overflow-hidden">
              <div className="rounded-tl-2xl rounded-tr-2xl relative w-full h-auto">
                <div>
                  {selectedLesson && <VideoScreen videoSource={selectedLesson.lessonUrl} videoImg={selectedLesson.imgUrl} lessonId={selectedLesson.id} studentLessonId={studentLessonId} studentId={studentId} isLiked={isLiked} />}
                </div>
              </div>
              <div className="py-[15px] px-5">
                <div className="!-mx-2 box-border flex flex-row flex-wrap" style={{ WebkitBoxOrient: "horizontal", WebkitBoxDirection: "normal" }}>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 xl:max-w-[75%] xl:basis-[75%] lg:max-w-[66.66666667%] lg:basis-[66.66666667%] md:basis-[75%] md:max-w-[75%] w-full basis-full">
                    <div className="text-base font-semibold mb-[15px] block">
                      <div>{selectedLesson && selectedLesson.name}</div>
                    </div>
                    <div className="inline-block align-middle mr-1 text-[#818181]">
                      Video - <span>{selectedLesson && selectedLesson.duration} dk</span>
                    </div>
                    <div className="inline-block align-middle mr-5 ">
                      {/* <div className="-mt-0.5 bg-[#818181] rounded-[50px] w-[13px] h-[13px] inline-block align-middle !bg-contain !bg-no-repeat" />
                      Başlamadın */}
                      {selectedLesson && !isLessonCompleted(selectedLesson) &&
                        <div className="-mt-0.5 mr-1 bg-[#818181] rounded-[50px] w-[13px] h-[13px] inline-block align-middle !bg-contain !bg-no-repeat" />
                      }
                      {selectedLesson && !isLessonCompleted(selectedLesson) ? "Başlamadın" : null}
                    </div>
                    <div className='inline-block m-0 align-middle !text-[#3dcb79]'>
                      {selectedLesson && isLessonCompleted(selectedLesson) &&
                        <div className='flex'>
                          <span className='mr-4'>100 Puan</span>
                          <GrLike className='mr-1' />
                          <span className=''>Tebrikler tamamladın!</span>
                        </div>}
                    </div>
                  </div>
                  <div className="!px-2 flex-grow-0 flex-shrink-0 xl:basis-[25%] xl:max-w-[25%] lg:basis-[33.33333333%] lg:max-w-[33.33333333%] md:basis-[25%] md:max-w-[25%] w-full basis-full">
                    <div className="m-3 xl:text-left lg:text-left md:text-left text-center">
                      <div className="w-full inline-flex flex-col" style={{ gap: 8 }}>
                        <div className="empty:hidden" />
                        <div className="">
                          {/* {selectedLesson && <CourseDetailSoftSkill lessonDetail={selectedLesson} />} */}
                          {selectedLesson && renderCourseDetailComponent(selectedLesson)}
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
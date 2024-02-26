import { GetModuleSetResponse } from 'models/responses/modulesets/getModuleSetResponse';
import React, { useEffect, useState } from 'react'
import { FaBuilding, FaCalendarAlt, FaFile, FaStopwatch, FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
  courseDate: GetModuleSetResponse["classroomModules"];
  estimatedTime: number;
  companyName: string;
  courseModules: GetModuleSetResponse["courseModules"];
  studentModules: GetModuleSetResponse["studentModules"];
  moduleSetCategorys: GetModuleSetResponse["moduleSetCategorys"];
}

const CourseAbout = (props: Props) => {
  const [lessonsCount, setLessonsCount] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [lessonsTotalDuration, setLessonsTotalDuration] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [studentTimeSpent, setStudentTimeSpent] = useState<number>(0);

  const lessonsCountFunc = () => {
    if (!props.courseModules) { return; }
    props.courseModules.forEach((module) => {
      const count = module.lessons?.length || 0;
      setLessonsCount(prevLessonCount => prevLessonCount + count);
    });
  };

  const categoryNameFunc = () => {
    if (!props.moduleSetCategorys) { return; }
    props.moduleSetCategorys.forEach((module) => {
      const name = module.name;
      setCategoryName(name);
    });
  };

  const lessonsTotalDurationFunc = () => {
    if (!props.courseModules) { return; }
    props.courseModules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        const count = lesson.duration || 0;
        setLessonsTotalDuration(prevLessonCount => prevLessonCount + count);
      })
    });
  };

  const dateFunc = () => {
    if (!props.courseDate) { return; }
    props.courseDate.forEach((module) => {
      const classroomStartDate = module.classroomStartDate
      const formattedStartDate: string = new Date(classroomStartDate).toLocaleDateString();
      const classroomEndDate = module.classroomEndDate;
      const formattedEndDate: string = new Date(classroomEndDate).toLocaleDateString();
      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);
    });
  };

  const timeSpentFunc = () => {
    props.studentModules.forEach((element) => {
      if (element.studentId === "fa5fd100-f8bc-40a7-d196-08dc32305081") {
        setStudentTimeSpent(element.timeSpent)
      }
    })
  }

  useEffect(() => {
    lessonsCountFunc();
    categoryNameFunc();
    lessonsTotalDurationFunc();
    dateFunc();
    timeSpentFunc();
  }, []);
  return (
    <div className="outline-none">
      <div className="">
        <div className="pt-0 px-0 pb-[15px]">
          <div className="!-mx-2 box-border flex flex-row flex-wrap">
            <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666%] xl:max-w-[16.66666%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
              <FaCalendarAlt />
              <strong className='ml-1'>Başlangıç</strong>
            </div>
            <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
              <span>{startDate}</span>
            </div>
          </div>
          <div className="!-mx-2 box-border flex flex-row flex-wrap">
            <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
              <FaCalendarAlt className='invisible' />

              <strong className='ml-1'>Bitiş</strong>
            </div>
            <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
              <span>{endDate}</span>
            </div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
            <FaStopwatch />
            <strong className='ml-1'>Geçirdiğin Süre</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
            <span>{studentTimeSpent}</span>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
            <FaStopwatch />
            <strong className='ml-1'>Tahmini Süre</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">{lessonsTotalDuration} dk</div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
            <FaTag className='rotate-90' />
            <strong className='ml-1'>Kategori</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
            <div>{categoryName}</div>
          </div>
        </div>
        <div className="pt-0 px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
            <FaFile />
            <strong className='ml-1'>İçerik</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{lessonsCount}</div>
        </div>
        <div className="pt-0 px-0 pb-[5px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
            <FaFile className='invisible' />
            <span className='ml-1'>Video</span>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">{lessonsCount}</div>
        </div>
        <div id="last-section" className="!pt-[15px] !px-0 pb-[15px] !-mx-2 box-border flex flex-row flex-wrap">
          <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[41.66666667%] max-w-[41.66666667%]">
            <FaBuilding />
            <strong className='ml-1'>Üretici Firma</strong>
          </div>
          <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[58.33333333%] max-w-[58.33333333%]">
            <Link to={"#"} className="text-[#1677ff] bg-transparent transition-colors duration-300 touch-manipulation ">{props.companyName}</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CourseAbout
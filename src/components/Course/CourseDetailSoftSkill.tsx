import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaCubes, FaGlobe, FaStopwatch, FaTag } from 'react-icons/fa'
import { FaEllipsis, FaRegEye } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { Lesson } from 'models/responses/modulesets/getModuleSetResponse';
import { GetStudentLessonResponse } from 'models/responses/student-lessons/getStudentLessonResponse';
import HeartButtonLesson from 'utils/Buttons/HeartButtonLesson';

type Props = {
  lessonDetail: Lesson;
  studentLessons: GetStudentLessonResponse;
}

const CourseDetailSoftSkill = (props: Props) => {
  const [isLike, setIsLike] = useState<boolean>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isLikedsFunc = () => {
    if (!props.studentLessons) { return; }
    const foundLesson = props.studentLessons.find(item => item.lessonId === props.lessonDetail.id);
    setIsLike(foundLesson?.isLiked);
  };

  useEffect(() => {
    isLikedsFunc();
  }, [props.lessonDetail, props.studentLessons]);

  const handleOutsideClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div onClick={handleOutsideClick} className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button text-[#9933FF] border-solid !border-[#9933FF] border-[1px] bg-white w-full text-base h-10 py-[7px] px-[15px] rounded-lg inline-flex justify-center items-center font-semibold transition-none shadow-[0_2px_0_rgba(0,0,0,0.02)] outline-none relative whitespace-nowrap text-center cursor-pointer select-none touch-none leading-[1.5px]">DETAY</label>
      </div>
      <div className="drawer-side overflow-x-hidden">
        <label onClick={handleOutsideClick} htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-10 w-3/5 min-h-full text-base-content bg-white">
          <label onClick={handleOutsideClick} htmlFor="my-drawer-4" aria-label="close sidebar"
            className={`bg-[#9933FF] absolute -left-[26px] right-auto bottom-auto z-[1] text-white p-1 text-lg leading-normal cursor-pointer rounded-tl-[50%] rounded-bl-[50%] inline-block align-middle ${isDrawerOpen ? "" : "hidden"}`}>
            <IoClose className="h-5 block" />
          </label>
          <div>
            <div className="!-mx-2 box-border flex flex-row flex-wrap flex-grow-0 flex-shrink basis-auto" style={{ WebkitBoxDirection: "normal", WebkitBoxOrient: "horizontal" }}>
              <div className="-mx-2 flex justify-center text-center box-border flex-grow-0 flex-shrink-0 basis-full max-w-full md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[16.66666667%] md:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%]">
                <div className="!w-[120px] !h-[120px]">
                  <img className="w-full h-auto rounded-[14px] border-none align-middle" src={props.lessonDetail.imgUrl} alt={props.lessonDetail.name} />
                </div>
              </div>
              <div className="xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[50%] xl:max-w-[50%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[50%] lg:max-w-[50%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[41.66666667%] md:max-w-[41.66666667%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full">
                <div>
                  <h3 className="mb-3 mt-0 font-semibold text-lg text-black leading-normal">{props.lessonDetail.name}</h3>
                  <div className="flex items-center my-2">
                    <span className="btn px-[6px] btn-primary pointer-events-none text-white mr-2">VİDEO</span>
                    <span className="flex mr-2  items-center text-black font-semibold"><FaStopwatch className="mr-1 mb-1" />{props.lessonDetail.duration} dk</span>
                    <span className="flex items-center text-black font-semibold"><FaRegEye className="mr-1" />56</span>
                  </div>
                  <div className="min-h-9 mt-2 !p-0 xl:max-w-[100%] xl:basis-[100%] xl:box-border xl:flex-grow-0 xl:flex-shrink-0 lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                    <HeartButtonLesson isLiked={isLike ? false : true} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[33.33333333%] xl:max-w-[33.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[33.33333333%] lg:max-w-[33.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[41.66666667%] md:max-w-[41.66666667%] !px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full">
                <div className="flex items-center justify-end xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[100%] xl:max-w-[100%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] !px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full" style={{ flexBasis: "unset" }}>
                  <div className="inline-flex items-center" style={{ gap: 8 }}>
                    <div className="">
                      <Link className="btn bg-[#9933FF] hover:bg-[#a64dff] text-white" to="#">EĞİTİME GİT</Link>
                    </div>
                    <div className="">
                      <button id="course-header-button" type="button" className="btn btn-ghost">
                        <FaEllipsis />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 items-center justify-end xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[100%] xl:max-w-[100%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] !px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full" style={{ flexBasis: "unset" }}>
                  <span className="text-[#3dcb79] items-center mr-2 flex">
                    <SlLike className="mr-2 inline-block" />
                    <span className="inline-block">Tebrikler, tamamladın!</span>
                  </span>
                  <span className="text-[#3dcb79] font-semibold">
                    100 PUAN
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-10" >
            <div className="">
              <div className="my-5 flex font-semibold items-center">
                <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666%] xl:max-w-[16.66666%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <FaTag className='rotate-90' />
                  <span className='ml-1'>Kategori</span>
                </div>
                <div className="!px-2 flex items-center xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <div className="w-full break-all">
                    <span className='ml-1'>İş'te Mükemmellik /</span>
                    <span className='ml-1'>Müşteri Duyarlılık /</span>
                    <span className='ml-1'>Müşteri Memnuniyeti / Deneyimi</span>
                  </div>
                </div>
              </div>
              <div className="my-5 flex font-semibold items-center">
                <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <FaGlobe />
                  <span className='ml-1'>Dili</span>
                </div>
                <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <span className='ml-1'>Türkçe</span>
                </div>
              </div>
              <div className="my-5 flex font-semibold items-center">
                <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <FaCubes />
                  <span className='ml-1'>Alt Tip</span>
                </div>
                <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <span className='ml-1'>Konu Uzmanı Videosu</span>
                </div>
              </div>
              <div className="my-5 flex font-semibold items-center">
                <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <FaBuilding />
                  <span className='ml-1'>Üretici Firma</span>
                </div>
                <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                  <Link to={"#"} className="text-[#1677ff] bg-transparent transition-colors duration-300 touch-manipulation ">Enocta</Link>
                </div>
              </div>
              <div className="my-5">
                <h4 className="text-base font-semibold text-black mt-0 mb-[0.5em]">İçerik</h4>
                <p className="mt-0 mb-[1em] ">
                  Bir pazar seçtikten sonra, o pazardaki müşterilerin ne
                  istediğini belirleyin. Birçok pazar araştırma aracı
                  var ama bunlar çoğunlukla, önceden bilinenleri
                  desteklemek için kullanılıyor. Bunun yerine,
                  müşterinin dünyasına derin bir dalış yapın. Onlarla
                  zaman geçirin. Ürünlerinizi sevip sevmediklerini
                  değil, ne yapmaya çalıştıklarını öğrenmeye çalışın.
                  İnovasyon şirketlerini ziyaret edin. Dünyayı,
                  müşterinin perspektifinden görün.
                </p>
              </div>
              <div className="my-5">
                <h4 className="mt-0 mx-0 mb-[15px] text-base font-semibold text-black">İlgi Alanları</h4>
                <div className="">
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">LDC</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Skillsoft</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Quick Talks</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Exclusive</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Müşteri Odaklılık</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Skillsoft ile İnsan ve İş Yönetimi</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Peter Fisk</Link>
                  <Link to="#" className="btn bg-[#d6d9de] text-[#444] mx-1 mb-1">Pazarları Yeniden Tanımlayan Müşteri Öngörüleri</Link>
                </div>
              </div>
              <div className="my-5">
                <h4 className="text-base font-semibold text-black mt-0 mb-[0.5em]">Konuşmacı</h4>
                <p className="mt-0 mb-[1em]">Peter Fisk</p>
              </div>
              <div className="my-5">
                <h4 className="text-base font-semibold text-black mt-0 mb-[0.5em]">Konuşmacı Hakkında</h4>
                <p className="mt-0 mb-[1em]">
                  The Genius Works’ün kurucusu ve CEO’sudur. Peter
                  oldukça deneyimli bir pazarlama uzmanıdır. British
                  Airways, Coca Cola, Microsoft, M&amp;S, Virgin ve
                  Vodafone gibi markalarla uzun yıllar çalışmıştır.
                  Dünyanın en büyük profesyonel pazarlama kuruluşu olan
                  Chart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailSoftSkill
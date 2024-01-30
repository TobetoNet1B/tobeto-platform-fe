import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaCubes, FaGlobe, FaStopwatch, FaTag } from 'react-icons/fa'
import { FaEllipsis, FaRegEye } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

type Props = {}

const CourseDetail = (props: Props) => {
  const [likedDetail, setLikedDetail] = useState(false);

  const handleHeartClickDetail = () => {
    setLikedDetail(!likedDetail);
  };


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


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
                  <img className="w-full h-auto rounded-[14px] border-none align-middle" src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEJMI14cKs7Ww%3d%3d" alt="Softskill: İş Yönetimi Becerileri 1" />
                </div>
              </div>
              <div className="xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[50%] xl:max-w-[50%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[50%] lg:max-w-[50%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[41.66666667%] md:max-w-[41.66666667%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full">
                <div>
                  <h3 className="mb-3 mt-0 font-semibold text-lg text-black leading-normal">Softskill: İş Yönetimi Becerileri 1</h3>
                  <div className="flex items-center my-2">
                    <span className="btn px-[6px] btn-primary pointer-events-none text-white mr-2">VİDEO</span>
                    <span className="flex mr-2  items-center text-black font-semibold"><FaStopwatch className="mr-1 mb-1" />4 dk</span>
                    <span className="flex items-center text-black font-semibold"><FaRegEye className="mr-1" />56</span>
                  </div>
                  <div className="min-h-9 mt-2 !p-0 xl:max-w-[100%] xl:basis-[100%] xl:box-border xl:flex-grow-0 xl:flex-shrink-0 lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                    <div className="flex cursor-pointer">
                      <span className="text-3xl my-0 mr-2 ml-0">
                        <div className="absolute flex items-center justify-center text-center h-9">
                          <div className="cursor-pointer w-7">
                            <input checked={likedDetail}
                              onChange={handleHeartClickDetail} type="checkbox" id="checkbox1" className="hidden box-border p-0  " />
                            <label id="checkbox-label" htmlFor="checkbox1" className="transform -translate-x-3 translate-y-0 block font-semibold text-black touch-manipulation" >
                              <svg className="cursor-pointer overflow-visible w-14"
                                id="heart-svg"
                                viewBox="467 392 58 57"
                              >
                                <g id="Group"
                                  fill="none"
                                  fillRule="evenodd"
                                  transform="translate(467 392)"
                                >
                                  <path
                                    d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                    className={`fill-none origin-center ${likedDetail ? 'fill-red-500 scale-100  animate-animateHeart' : 'animate-animateHeartOut stroke-2 !stroke-[#7f7f7f]'}`}
                                    id="heart"
                                    fill="#AAB8C2"
                                  />
                                  <circle id="main-circ"
                                    className={`origin-[29.5px_29.5px] ${likedDetail ? 'transition-all animate-animateCircle  opacity-100' : ' '}`}
                                    fill="#E2264D"
                                    opacity={0}
                                    cx="29.5"
                                    cy="29.5"
                                    r="1.5"
                                  />
                                  <g id="grp7"
                                    opacity={0}
                                    transform="translate(7 6)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval1"
                                      fill="#9CD8C3"
                                      cx={2}
                                      cy={6}
                                      r={2} className={` ${likedDetail ? 'transition-transform duration-500 delay-300 scale-0 -translate-x-8 -translate-y-4 origin-[0_0]' : ' '}`}
                                    />
                                    <circle
                                      id="oval2"
                                      fill="#8CE8C3"
                                      cx={5}
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 -translate-x-14 -translate-y-8 origin-[0_0] transition-transform	duration-[1500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp6"
                                    opacity={0}
                                    transform="translate(0 28)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval1"
                                      fill="#CC8EF5"
                                      cx={2}
                                      cy={7}
                                      r={2} className={` ${likedDetail ? 'scale-0 -translate-x-8 translate-y-0 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval2"
                                      fill="#91D2FA"
                                      cx={3}
                                      cy={2}
                                      r={2} className={`${likedDetail ? 'scale-0 -translate-x-16 -translate-y-2 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp3"
                                    opacity={0}
                                    transform="translate(52 28)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval2"
                                      fill="#9CD8C3"
                                      cx={2}
                                      cy={7}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-16 translate-y-3 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval1"
                                      fill="#8CE8C3"
                                      cx={4}
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-8 translate-y-0 origin-[0_0] transition-transform	duration-[500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp2"
                                    opacity={0}
                                    transform="translate(44 6)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval2"
                                      fill="#CC8EF5"
                                      cx={5}
                                      cy={6}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-16 -translate-y-4 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval1"
                                      fill="#CC8EF5"
                                      cx={2}
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-8 -translate-y-4 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp5"
                                    opacity={0}
                                    transform="translate(14 50)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval1"
                                      fill="#91D2FA"
                                      cx={6}
                                      cy={5}
                                      r={2} className={` ${likedDetail ? 'scale-0 -translate-x-3 translate-y-5 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval2"
                                      fill="#91D2FA"
                                      cx={2}
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 -translate-x-16 translate-y-8 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp4"
                                    opacity={0}
                                    transform="translate(35 50)" className={` ${likedDetail ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval1"
                                      fill="#F48EA7"
                                      cx={6}
                                      cy={5}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-8 translate-y-4 origin-[0_0] transition-transform	duration-[500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval2"
                                      fill="#F48EA7"
                                      cx={2}
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-10 translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                  <g id="grp1"
                                    opacity={0}
                                    transform="translate(24)" className={` ${likedDetail ? 'opacity-100 transition-all delay-300' : ' '}`}
                                  >
                                    <circle
                                      id="oval1"
                                      fill="#9FC7FA"
                                      cx="2.5"
                                      cy={3}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-0 -translate-y-8 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                    />
                                    <circle
                                      id="oval2"
                                      fill="#9FC7FA"
                                      cx="7.5"
                                      cy={2}
                                      r={2} className={` ${likedDetail ? 'scale-0 translate-x-2 -translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                    />
                                  </g>
                                </g>
                              </svg>
                            </label>
                          </div>
                        </div>
                      </span>
                      <span className={`font-medium text-2xl z-[1] translate-x-0 translate-y-[-0.125ex] mt-2 ml-7 leading-none cursor-pointer`}>
                        <span className={` ${likedDetail ? '!text-[#ff4757]' : '!text-[#7f7f7f]'}`}>106</span>
                      </span>
                    </div>
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

export default CourseDetail
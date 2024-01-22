import CourseAbout from "pages/Course/CourseAbout";
import CourseContents from "pages/Course/CourseContents";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "utils/Toast";
import VideoScreen from "utils/VideoScreen/VideoScreen";
import { FaBuilding, FaCalendarAlt, FaCubes, FaFile, FaGlobe, FaStopwatch, FaTag } from 'react-icons/fa'
import { CiStopwatch } from "react-icons/ci";
import { FaEllipsis, FaRegEye } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

export default function TestPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tooltipStatus, setTooltipStatus] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [liked, setLiked] = useState(false);

    const handleHeartClick = () => {
        setLiked(!liked);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [favIcon, setFavIcon] = useState(false);

    // -----------------------------------------------



    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    

    const handleOutsideClick = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    




    //-------------------------------------
    const favIconFalse = () =>
        toast.success("Favorilerden çıkarma işlemin başarıyla gerçekleşti.", {
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            className:
                "shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px]  border-solid border-t-8 border-[#3dcb79] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8",
        });

    const favIconTrue = () =>
        toast.success("Favorilere ekleme işlemin başarıyla gerçekleşti.", {
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            className:
                "shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px]  border-solid border-t-8 border-[#3dcb79] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8",
        });

    const handleFavIconClick = () => {
        setFavIcon(!favIcon);
        !favIcon ? favIconTrue() : favIconFalse();
    };

    // ---------------------------------
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showFirst, setShowFirst] = useState(0);

    const handleButtonClick = (num: number) => {
        setShowFirst(num);
    };
    //----------------------***********************-------------------------

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const videoRef = useRef<HTMLVideoElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPlaying, setIsPlaying] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTime, setCurrentTime] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [duration, setDuration] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [volume, setVolume] = useState<number>(100);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [playbackRate, setPlaybackRate] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isFullScreen, setIsFullScreen] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);

            // Videonun hangi sürede olduğuna bağlı olarak seek bar rengini ayarla
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                const progressPercentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                progressBar.style.background = `linear-gradient(to right, #f50 0%, #f50 ${progressPercentage}%, #ccc ${progressPercentage}%, #ccc 100%)`;
            }
        }
    };

    const handleSeek = (value: number, event: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.currentTime = value;
            setCurrentTime(value);
            const progressBar = (value / duration) * 100;
            event.target.style.background = `linear-gradient(to right, #f50 ${progressBar}%, #ccc ${progressBar}%)`;
        }
    };


    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume / 100;
        }
    };



    const handlePlaybackRateChange = (value: number) => {
        if (videoRef.current) {
            videoRef.current.playbackRate = value;
            setPlaybackRate(value);
        }
    };



    const fullscreenHandler = () => {
        if (videoRef.current) {
            if (isFullScreen) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
            setIsFullScreen(!isFullScreen);
        }
    };



    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        return formattedTime;
    };




    //***************************************************************************-------- */
    return (
        <div className="">


            <div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div onClick={handleOutsideClick} className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label onClick={handleOutsideClick} htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 w-3/5 min-h-full text-base-content bg-white">
                            <label onClick={handleOutsideClick} htmlFor="my-drawer-4" aria-label="close sidebar"
                                className={`bg-[#9933FF] absolute -left-[26px] right-auto bottom-auto z-[1] text-white p-1 text-lg leading-normal cursor-pointer rounded-tl-[50%] rounded-bl-[50%] inline-block align-middle ${isDrawerOpen ? "" : "hidden"}`}>
                                <IoClose className="h-5 block" />
                            </label>

                            <div className="">
                                <div className="!-mx-2 flex flex-row flex-wrap box-border">
                                    <div className="-mx-2 px-2 justify-center text-center box-border flex-grow-0 flex-shrink-0 basis-full max-w-full md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[16.66666667%] md:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%]">
                                        <div className="!w-[120px] !h-[120px]">
                                            <img className="w-full h-auto rounded-2xl border-none align-middle" src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEJMI14cKs7Ww%3d%3d" alt="Softskill: İş Yönetimi Becerileri 1" />
                                        </div>
                                    </div>
                                    <div className="xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[50%] xl:max-w-[50%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[50%] lg:max-w-[50%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[41.66666667%] md:max-w-[41.66666667%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full">
                                        <div>
                                            <h3 className="mb-3 mt-0 font-semibold text-lg text-black leading-normal">Softskill: İş Yönetimi Becerileri 1</h3>
                                            <div className="flex items-center my-2">
                                                <span className="btn p-[6px] btn-primary pointer-events-none text-white mr-2">VİDEO</span>
                                                <span className="flex mr-2  items-center text-black font-semibold"><FaStopwatch className="mr-1 mb-1" />4 dk</span>
                                                <span className="flex  items-center text-black font-semibold"><FaRegEye className="mr-1" />56</span>
                                            </div>
                                            <div className="my-4">
                                                <div className="inline-block !align-bottom !h-8">
                                                    <div className="flex cursor-pointer items-center">
                                                        <span className="w-7 ml-1 text-3xl !text-[#7f7f7f] cursor-pointer ">
                                                            <div id="main-content" className="transform translate-x-0 translate-y-[-0.4ex] flex items-center justify-center text-center h-9 ">
                                                                <div id="sub-content" className="cursor-pointer w-7 ">
                                                                    <input checked={liked}
                                                                        onChange={handleHeartClick} type="checkbox" id="checkbox" className="hidden box-border p-0  " />
                                                                    <label id="checkbox-label" htmlFor="checkbox" className="transform -translate-x-5 translate-y-0 block font-semibold text-black touch-manipulation" >
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
                                                                                    className={`fill-none origin-center ${liked ? 'fill-red-500 scale-100  animate-animateHeart' : 'animate-animateHeartOut stroke-2 !stroke-[#7f7f7f]'}`}
                                                                                    id="heart"
                                                                                    fill="#AAB8C2"
                                                                                />
                                                                                <circle id="main-circ"
                                                                                    className={`origin-[29.5px_29.5px] ${liked ? 'transition-all animate-animateCircle  opacity-100' : ' '}`}
                                                                                    fill="#E2264D"
                                                                                    opacity={0}
                                                                                    cx="29.5"
                                                                                    cy="29.5"
                                                                                    r="1.5"
                                                                                />
                                                                                <g id="grp7"
                                                                                    opacity={0}
                                                                                    transform="translate(7 6)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#9CD8C3"
                                                                                        cx={2}
                                                                                        cy={6}
                                                                                        r={2} className={` ${liked ? 'transition-transform duration-500 delay-300 scale-0 -translate-x-8 -translate-y-4 origin-[0_0]' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#8CE8C3"
                                                                                        cx={5}
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 -translate-x-14 -translate-y-8 origin-[0_0] transition-transform	duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp6"
                                                                                    opacity={0}
                                                                                    transform="translate(0 28)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#CC8EF5"
                                                                                        cx={2}
                                                                                        cy={7}
                                                                                        r={2} className={` ${liked ? 'scale-0 -translate-x-8 translate-y-0 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#91D2FA"
                                                                                        cx={3}
                                                                                        cy={2}
                                                                                        r={2} className={`${liked ? 'scale-0 -translate-x-16 -translate-y-2 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp3"
                                                                                    opacity={0}
                                                                                    transform="translate(52 28)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#9CD8C3"
                                                                                        cx={2}
                                                                                        cy={7}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-16 translate-y-3 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#8CE8C3"
                                                                                        cx={4}
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-8 translate-y-0 origin-[0_0] transition-transform	duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp2"
                                                                                    opacity={0}
                                                                                    transform="translate(44 6)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#CC8EF5"
                                                                                        cx={5}
                                                                                        cy={6}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-16 -translate-y-4 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#CC8EF5"
                                                                                        cx={2}
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-8 -translate-y-4 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp5"
                                                                                    opacity={0}
                                                                                    transform="translate(14 50)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#91D2FA"
                                                                                        cx={6}
                                                                                        cy={5}
                                                                                        r={2} className={` ${liked ? 'scale-0 -translate-x-3 translate-y-5 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#91D2FA"
                                                                                        cx={2}
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 -translate-x-16 translate-y-8 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp4"
                                                                                    opacity={0}
                                                                                    transform="translate(35 50)" className={` ${liked ? 'opacity-100 transition-opacity delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#F48EA7"
                                                                                        cx={6}
                                                                                        cy={5}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-8 translate-y-4 origin-[0_0] transition-transform	duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#F48EA7"
                                                                                        cx={2}
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-10 translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                                <g id="grp1"
                                                                                    opacity={0}
                                                                                    transform="translate(24)" className={` ${liked ? 'opacity-100 transition-all delay-300' : ' '}`}
                                                                                >
                                                                                    <circle
                                                                                        id="oval1"
                                                                                        fill="#9FC7FA"
                                                                                        cx="2.5"
                                                                                        cy={3}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-0 -translate-y-8 origin-[0_0] transition-transform duration-[500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                    <circle
                                                                                        id="oval2"
                                                                                        fill="#9FC7FA"
                                                                                        cx="7.5"
                                                                                        cy={2}
                                                                                        r={2} className={` ${liked ? 'scale-0 translate-x-2 -translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300' : ' '}`}
                                                                                    />
                                                                                </g>
                                                                            </g>
                                                                        </svg>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <span className={`!text-[#7f7f7f] font-medium text-2xl z-[1] translate-x-[0.2em] translate-y-[-0.15ex] mr-4 leading-none cursor-pointer ${liked ? ' ' : ' '}`}>
                                                            <span className={`cursor-pointer ${liked ? '!text-[#ff4757]' : '!text-[#7f7f7f]'}`}>106</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[33.33333333%] xl:max-w-[33.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[33.33333333%] lg:max-w-[33.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[41.66666667%] md:max-w-[41.66666667%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full">
                                        <div className="flex items-center justify-end xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[100%] xl:max-w-[100%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full" style={{ flexBasis: "unset" }}>
                                            <div className="inline-flex  ant-space-horizontal items-center" style={{ gap: 8 }}>
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
                                        <div className="flex mt-4 items-center justify-end xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[100%] xl:max-w-[100%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[100%] lg:max-w-[100%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[100%] md:max-w-[100%] px-2 box-border flex-grow-0 flex-shrink-0 basis-full max-w-full" style={{ flexBasis: "unset" }}>
                                            <span className="text-[#3dcb79] items-center mr-2">
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
                                        <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666%] xl:max-w-[16.66666%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-6" */}
                                            <FaTag className='rotate-90' />
                                            <span className='ml-1'>Kategori</span>
                                        </div>
                                        <div className="!px-2 flex items-center xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-6" */}
                                            <div className="w-full break-all">
                                                <span className='ml-1'>İş'te Mükemmellik /</span>
                                                <span className='ml-1'>Müşteri Duyarlılık /</span>
                                                <span className='ml-1'>Müşteri Memnuniyeti / Deneyimi</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-5 flex font-semibold items-center">
                                        <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-6" */}
                                            <FaGlobe />
                                            <span className='ml-1'>Dili</span>
                                        </div>
                                        <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-6" */}
                                            <span className='ml-1'>Türkçe</span>
                                        </div>
                                    </div>
                                    <div className="my-5 flex font-semibold items-center">
                                        <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-6" */}
                                            <FaCubes />
                                            <span className='ml-1'>Alt Tip</span>
                                        </div>
                                        <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">
                                            <span className='ml-1'>Konu Uzmanı Videosu</span>
                                        </div>{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-6" */}
                                    </div>
                                    <div className="my-5 flex font-semibold items-center">
                                        <div className="!px-2 flex xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[16.66666667%] xl:max-w-[16.66666667%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[16.66666667%] lg:max-w-[16.66666667%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[25%] md:max-w-[25%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-2 col-md-2 col-sm-3 col-xs-6" */}
                                            <FaBuilding />
                                            <span className='ml-1'>Üretici Firma</span>
                                        </div>
                                        <div className="!px-2 xl:px-2 xl:box-border xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[83.33333333%] xl:max-w-[83.33333333%] lg:px-2 lg:box-border lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[83.33333333%] lg:max-w-[83.33333333%] md:px-2 md:box-border md:flex-grow-0 md:flex-shrink-0 md:basis-[75%] md:max-w-[75%] box-border flex-grow-0 flex-shrink-0 basis-[50%] max-w-[50%]">{/*className="col-lg-10 col-md-10 col-sm-9 col-xs-6" */}
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
            </div>


















































            {/* <ToastContainer /> */}
            {/* <Toast /> */}

            {/* <VideoScreen videoSource="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"/> */}



            <div className="hidden">
                <div className={`flex justify-center items-center h-screen `}>
                    <style>
                        {`
              input[type="range"] {
                /* removing default appearance */
                -webkit-appearance: none;
                appearance: none; 
                /* creating a custom design */
                width: 100%;
                cursor: pointer;
                outline: none;
                border-radius: 15px;
                /*  overflow: hidden;  remove this line*/
                
                /* New additions */
                height: 6px;
                background: #ccc;
              }
              
              /* Thumb: webkit */
              input[type="range"]::-webkit-slider-thumb {
                /* removing default appearance */
                -webkit-appearance: none;
                appearance: none; 
                /* creating a custom design */
                height: 15px;
                width: 15px;
                background-color: #f50;
                border-radius: 50%;
                border: none;
              
                /* box-shadow: -407px 0 0 400px #f50; emove this line */
                transition: .2s ease-in-out;
              }
              input[type="range"]::-webkit-slider-thumb:hover {
                box-shadow: 0 0 0 10px rgba(255,85,0, .1)
              }
              input[type="range"]:active::-webkit-slider-thumb {
                box-shadow: 0 0 0 13px rgba(255,85,0, .2)
              }
              input[type="range"]:focus::-webkit-slider-thumb {
                box-shadow: 0 0 0 13px rgba(255,85,0, .2)
              }
              
                  
                  `}
                    </style>
                    <div className="w-1/2 ">
                        <video
                            ref={videoRef}
                            className="w-full"
                            src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
                            poster="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670d428d1921eed8/614be30d69b7947c1b3aebd5/9242021_StateofGameplayArticle_Header.jpg"
                            onClick={togglePlay}
                            onTimeUpdate={handleTimeUpdate}
                        ></video>

                        <div className="flex items-center mt-4">
                            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                            <input
                                id="progress-bar"
                                type="range"
                                value={currentTime}
                                max={duration}
                                onChange={(e) => handleSeek(parseFloat(e.target.value), e)}
                            />
                            <span >{formatTime(duration)} -- {formatTime(currentTime)}</span>
                            <input
                                type="range"
                                value={volume}
                                min={0}
                                max={100}
                                step={0.1}
                                onChange={handleVolumeChange}
                                style={{ background: `linear-gradient(to right, #7a29cc 0%, #7a29cc ${volume}%, #ccc ${volume}%, #ccc 100%)` }}
                            />
                            <select
                                value={playbackRate}
                                onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                            >
                                <option value="0.5">0.5x</option>
                                <option value="1">1x</option>
                                <option value="1.5">1.5x</option>
                                <option value="2">2x</option>
                                <option value="4">4x</option>
                            </select>
                            <button onClick={fullscreenHandler}>
                                {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative mt-0 mx-auto mb-[-80px] min-h-screen h-auto overflow-hidden hidden">
                {/*className="wrapper without-slide */}
                <div className="py-10 px-0 w-[88%] m-auto ">
                    {/*className="content" */}
                    <div className="rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] inline-block align-middle w-full h-auto p-5 mb-12">
                        {/*className="page-content activity-detail" */}
                        <div className="">
                            {/*className="activity-detail-header" */}
                            <div className="!-mx-2 flex">
                                {/*className="row" */}
                                <div className="mx-2 sm:w-full xl:block xl:visible lg:block lg:visible md:block md:visible sm:hidden sm:invisible px-2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[8.3%] lg:max-w-[8.3%] xl:flex-grow-0 xl:flex-shrink-0 xl:basis-[8.3%] xl:max-w-[8.3%]">
                                    {/*className="col-lg-1 col-md-1 col-sm-2 col-xs-12 show-text-lg show-text-md show-text-sm hidden-text-xs" */}
                                    <img
                                        className="align-middle border-none rounded-lg w-full"
                                        src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOEJMI14cKs7Ww%3d%3d"
                                        alt="Softskill: İş Yönetimi Becerileri 1"
                                    />
                                    {/*className="activity-image" */}
                                </div>
                                <div className="!px-2 w-full">
                                    {/*className="col-lg-11 col-md-11 col-sm-10 col-xs-12" */}
                                    <div className="!-mx-2 ">
                                        {/*className="row" */}
                                        <div className="!mx-2  ">
                                            {/*className="col-xs-12" */}
                                            <div className="!-mx-2 flex justify-between">
                                                {/*className="row" */}
                                                <div className="!px-2">
                                                    {/*className="col-lg-7 col-md-7 col-sm-4 col-xs-12" */}
                                                    <div
                                                        className="activity-info"
                                                        data-gtm-vis-first-on-screen103964688_7={1887}
                                                        data-gtm-vis-recent-on-screen103964688_7={3692263}
                                                        data-gtm-vis-total-visible-time103964688_7={100}
                                                        data-gtm-vis-has-fired103964688_7={1}
                                                    >
                                                        <h3 className="my-0 mr-[10px] ml-0 inline align-middle font-semibold text-lg text-black">
                                                            Softskill: İş Yönetimi Becerileri 1
                                                        </h3>
                                                        <span
                                                            style={{ visibility: "hidden" }}
                                                            className="rounded-[5px] inline-block align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] mb-[1px] bg-[#ffd228] border-solid border-[#ffd228] border-[1px] text-[#000]"
                                                        >
                                                            {/*className="new-tag orange" */}
                                                            YENİ
                                                        </span>
                                                        <span
                                                            style={{ visibility: "hidden" }}
                                                            className="rounded-[5px] inline-block align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] mb-[1px] bg-[#549be6] border-solid border-[#549be6] border-[1px] text-[#fff]"
                                                        >
                                                            {/*className="new-tag blue" */}
                                                            GELİŞİM YOLCULUĞU
                                                        </span>
                                                        <span
                                                            style={{ visibility: "hidden" }}
                                                            className="rounded-[5px] inline-block align-middle pt-[6px] pr-1 pb-1 pl-[6px] text-sm mr-[5px] mb-[1px] bg-[#e02020] border-solid border-[#e02020] border-[1px] text-[#fff]"
                                                        >
                                                            {/*className="new-tag red" */}
                                                            ZORUNLU
                                                        </span>
                                                        <div className="w-fit">
                                                            {/*className="date-info-container" */}
                                                            <span className="flex">
                                                                <div className="mt-4 font-bold flex !text-[#2372ba]">
                                                                    {/*className="date-info text-dark-blue */}{" "}
                                                                    <span className="flex">
                                                                        30 Haziran 2024 tarihine kadar
                                                                        bitirebilirsin
                                                                    </span>
                                                                </div>
                                                                <span
                                                                    onMouseEnter={() => setTooltipStatus(3)}
                                                                    onMouseLeave={() => setTooltipStatus(0)}
                                                                    role="img"
                                                                    aria-label="question-circle"
                                                                    id="info-text-question"
                                                                    className="text-[#7a8292] ml-1 h-8 inline-flex items-end not-italic leading-[0] text-center normal-case align-[-0.125em] antialiased"
                                                                >
                                                                    {/*className="anticon anticon-question-circle */}
                                                                    <svg
                                                                        viewBox="64 64 896 896"
                                                                        focusable="false"
                                                                        className="inline-block"
                                                                        data-icon="question-circle"
                                                                        width="1em"
                                                                        height="1em"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                                                                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                                                                    </svg>
                                                                    {tooltipStatus === 3 && (
                                                                        <div
                                                                            role="tooltip"
                                                                            className="text-black bg-slate-300 m-0 p-0 list-none absolute z-[1070] w-max max-w-[250px] visible"
                                                                            style={{
                                                                                left: "500px",
                                                                                top: 35,
                                                                                boxSizing: "border-box",
                                                                                transformOrigin: "-12px 50%",
                                                                                pointerEvents: "none",
                                                                            }}
                                                                        >
                                                                            {/* className="ant-tooltip ant-tooltip-hidden info-text-tooltip ant-tooltip-placement-right" */}
                                                                            <div
                                                                                className="mt-2 transform -translate-y-1/2 -translate-x-full rotate-[-90deg] z-[1] block pointer-events-none w-4 h-4 overflow-hidden tooltip before:bg-white/[.85] before:absolute before:bottom-0 before:start-0 before:w-4 before:h-4 before:content-[''] after:content-[''] after:absolute after:w-[9px] after:h-[9px] after:bottom-0 after:start-0 after:m-auto after:rounded-tl-none after:rounded-bl-none after:rounded-tr-none after:rounded-br-sm after:transform after:translate-y-1/2 after:rotate-[-135deg] after:shadow-[2px_2px_5px_rgba(0, 0, 0, 0.05)] after:z-0 after:bg-transparent"
                                                                                style={{
                                                                                    position: "absolute",
                                                                                    top: "75px",
                                                                                    left: 8,
                                                                                }}
                                                                            ></div>
                                                                            {/* className="ant-tooltip-arrow" */}

                                                                            <div className="w-max relative">
                                                                                {/*className="ant-tooltip-content" */}
                                                                                <div
                                                                                    className="!pt-3 !px-3 !pb-1 rounded-md   bg-white text-black whitespace-normal !text-center text-sm font-normal min-w-8 min-h-8 no-underline break-words"
                                                                                    style={{
                                                                                        boxShadow:
                                                                                            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
                                                                                    }}
                                                                                    role="tooltip"
                                                                                >
                                                                                    {/*className="ant-tooltip-inner" */}
                                                                                    <div className="text-left">
                                                                                        {/*className="tooltip-container " */}
                                                                                        <p className="font-bold mt-0 mb-[1em] block ">
                                                                                            Eğitimi nasıl tamamlayabilirim?
                                                                                        </p>
                                                                                        <div className="flex my-3 ">
                                                                                            {/*className="info-text-line" */}
                                                                                            <span className="mb-1 flex before:content-[''] before:inline-block before:rounded-[0.375rem] before:h-[0.4rem] before:w-[0.4rem] before:mr-[0.4rem] before:mb-[0.07rem] before:ml-[0.1rem] before:bg-[#4a485b] before:mt-2">
                                                                                                {/*className="bullets" */}
                                                                                                Eğitimde yer alan tüm içerikleri
                                                                                                tamamladığında (2 / 131)
                                                                                            </span>
                                                                                        </div>
                                                                                        <p className="mt-4 !mb-1 font-bold block">
                                                                                            Eğitimi nasıl başarabilirim?
                                                                                        </p>
                                                                                        <div className="flex my-3">
                                                                                            {/*className="info-text-line" */}
                                                                                            <span className="mb-1 flex before:content-[''] before:inline-block before:rounded-[0.375rem] before:h-[0.4rem] before:w-[0.4rem] before:mr-[0.4rem] before:mb-[0.07rem] before:ml-[0.1rem] before:bg-[#4a485b] before:mt-2">
                                                                                                {/*className="bullets" */}
                                                                                                Eğitimde yer alan tüm içerikleri
                                                                                                tamamladığında (2 / 131)
                                                                                            </span>
                                                                                        </div>
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
                                                <div className="!px-2 ">
                                                    {/*className="activity-process col-lg-5 col-md-5 col-sm-8 col-xs-12 text-lg-right text-md-right text-sm-right text-xs-center" */}
                                                    <div
                                                        className="inline-flex items-center"
                                                        style={{ gap: 8 }}
                                                    >
                                                        {/*className="ant-space ant-space-horizontal ant-space-align-center" */}
                                                        <div className="" style={{}}>
                                                            {/*className="ant-space-item" */}
                                                            <div className="inline-block align-middle rounded-[5px] py-2 px-[5px] text-lg font-semibold text-center mr-3">
                                                                {/*className="activity-score " */}
                                                                <span className="account-balance">1.5</span>
                                                                {/*className="account-balance" */} PUAN
                                                            </div>
                                                        </div>
                                                        <div className="empty:hidden" style={{}} />
                                                        {/*className="ant-space-item"  */}
                                                        <div className="" style={{}}>
                                                            <div className="inline-block !align-bottom !h-8">
                                                                {/*className="like" */}
                                                                <div className="flex cursor-pointer">
                                                                    {/*className="like-area" */}
                                                                    <span className="w-7 ml-1 text-3xl !text-[#7f7f7f] cursor-pointer ">
                                                                        {/*className="like-button liked" */}
                                                                        <div
                                                                            id="main-content"
                                                                            className="transform translate-x-0 translate-y-[-0.4ex] flex items-center justify-center text-center h-9 "
                                                                        >
                                                                            <div
                                                                                id="sub-content"
                                                                                className="cursor-pointer w-7 "
                                                                            >
                                                                                <input
                                                                                    checked={liked}
                                                                                    onChange={handleHeartClick}
                                                                                    type="checkbox"
                                                                                    id="checkbox"
                                                                                    className="hidden box-border p-0  "
                                                                                />
                                                                                <label
                                                                                    id="checkbox-label"
                                                                                    htmlFor="checkbox"
                                                                                    className="transform -translate-x-5 translate-y-0 block font-semibold text-black touch-manipulation"
                                                                                >
                                                                                    <svg
                                                                                        className="cursor-pointer overflow-visible w-[68px]"
                                                                                        id="heart-svg"
                                                                                        viewBox="467 392 58 57"
                                                                                    >
                                                                                        <g
                                                                                            id="Group"
                                                                                            fill="none"
                                                                                            fillRule="evenodd"
                                                                                            transform="translate(467 392)"
                                                                                        >
                                                                                            <path
                                                                                                d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                                                                                className={`fill-none origin-center ${liked
                                                                                                    ? "fill-red-500 scale-100  animate-animateHeart"
                                                                                                    : "animate-animateHeartOut stroke-2 !stroke-[#7f7f7f]"
                                                                                                    }`}
                                                                                                id="heart"
                                                                                                fill="#AAB8C2"
                                                                                            />
                                                                                            <circle
                                                                                                id="main-circ"
                                                                                                className={`origin-[29.5px_29.5px] ${liked
                                                                                                    ? "transition-all animate-animateCircle  opacity-100"
                                                                                                    : " "
                                                                                                    }`}
                                                                                                fill="#E2264D"
                                                                                                opacity={0}
                                                                                                cx="29.5"
                                                                                                cy="29.5"
                                                                                                r="1.5"
                                                                                            />
                                                                                            <g
                                                                                                id="grp7"
                                                                                                opacity={0}
                                                                                                transform="translate(7 6)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#9CD8C3"
                                                                                                    cx={2}
                                                                                                    cy={6}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "transition-transform duration-500 delay-300 scale-0 -translate-x-8 -translate-y-4 origin-[0_0]"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#8CE8C3"
                                                                                                    cx={5}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 -translate-x-14 -translate-y-8 origin-[0_0] transition-transform	duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp6"
                                                                                                opacity={0}
                                                                                                transform="translate(0 28)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#CC8EF5"
                                                                                                    cx={2}
                                                                                                    cy={7}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 -translate-x-8 translate-y-0 origin-[0_0] transition-transform duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#91D2FA"
                                                                                                    cx={3}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={`${liked
                                                                                                        ? "scale-0 -translate-x-16 -translate-y-2 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp3"
                                                                                                opacity={0}
                                                                                                transform="translate(52 28)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#9CD8C3"
                                                                                                    cx={2}
                                                                                                    cy={7}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-16 translate-y-3 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#8CE8C3"
                                                                                                    cx={4}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-8 translate-y-0 origin-[0_0] transition-transform	duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp2"
                                                                                                opacity={0}
                                                                                                transform="translate(44 6)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#CC8EF5"
                                                                                                    cx={5}
                                                                                                    cy={6}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-16 -translate-y-4 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#CC8EF5"
                                                                                                    cx={2}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-8 -translate-y-4 origin-[0_0] transition-transform duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp5"
                                                                                                opacity={0}
                                                                                                transform="translate(14 50)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#91D2FA"
                                                                                                    cx={6}
                                                                                                    cy={5}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 -translate-x-3 translate-y-5 origin-[0_0] transition-transform duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#91D2FA"
                                                                                                    cx={2}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 -translate-x-16 translate-y-8 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp4"
                                                                                                opacity={0}
                                                                                                transform="translate(35 50)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-opacity delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#F48EA7"
                                                                                                    cx={6}
                                                                                                    cy={5}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-8 translate-y-4 origin-[0_0] transition-transform	duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#F48EA7"
                                                                                                    cx={2}
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-10 translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                            <g
                                                                                                id="grp1"
                                                                                                opacity={0}
                                                                                                transform="translate(24)"
                                                                                                className={` ${liked
                                                                                                    ? "opacity-100 transition-all delay-300"
                                                                                                    : " "
                                                                                                    }`}
                                                                                            >
                                                                                                <circle
                                                                                                    id="oval1"
                                                                                                    fill="#9FC7FA"
                                                                                                    cx="2.5"
                                                                                                    cy={3}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-0 -translate-y-8 origin-[0_0] transition-transform duration-[500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                                <circle
                                                                                                    id="oval2"
                                                                                                    fill="#9FC7FA"
                                                                                                    cx="7.5"
                                                                                                    cy={2}
                                                                                                    r={2}
                                                                                                    className={` ${liked
                                                                                                        ? "scale-0 translate-x-2 -translate-y-12 origin-[0_0] transition-transform duration-[1500ms] delay-300"
                                                                                                        : " "
                                                                                                        }`}
                                                                                                />
                                                                                            </g>
                                                                                        </g>
                                                                                    </svg>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                    <span
                                                                        className={`!text-[#7f7f7f] font-medium text-3xl z-[1] translate-x-[0.2em] translate-y-[-0.15ex] mr-4 leading-none cursor-pointer ${liked ? " " : " "
                                                                            }`}
                                                                    >
                                                                        {/*className="like-text liked" */}
                                                                        <span
                                                                            className={`cursor-pointer ${liked
                                                                                ? "!text-[#ff4757]"
                                                                                : "!text-[#7f7f7f]"
                                                                                }`}
                                                                        >
                                                                            106
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            onClick={handleFavIconClick}
                                                            className=""
                                                            style={{}}
                                                        >
                                                            <div className="w-9 h-9 inline-block align-middle cursor-pointer">
                                                                {/*className="activity-favorite" */}
                                                                <span
                                                                    className={`w-full h-full block !bg-cover !bg-no-repeat !bg-center ${favIcon
                                                                        ? 'bg-[url("https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/remove-favorite.svg")]'
                                                                        : 'bg-[url("https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/add-favorite.svg")]'
                                                                        }`}
                                                                />
                                                                {/*className="remove-favorite" */}
                                                            </div>
                                                        </div>
                                                        <div className="empty:hidden" />
                                                        {/*className="ant-space-item" */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="!px-2 ">
                                            {/*className="col-xs-12" */}
                                            <div className="text-right w-full sm:w-full md:w-full">
                                                {/*className="activity-progress-bar" */}
                                                <div
                                                    className="text-left box-border m-0 p-0 text-slate-900 list-none inline-block relative w-full text-sm me-2 mb-2"
                                                    role="progressbar"
                                                >
                                                    {/*className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default ant-tooltip-open" */}
                                                    <div
                                                        className={
                                                            " -mr-[52] pr-[52] -me-10 pe-10 inline-block"
                                                        }
                                                        onMouseEnter={() => setTooltipStatus(1)}
                                                        onMouseLeave={() => setTooltipStatus(0)}
                                                        style={{ width: "100%", height: 3 }}
                                                    >
                                                        {/*className="ant-progress-outer" */}
                                                        <div className="relative inline-block w-full overflow-hidden align-middle bg-slate-200 text-[#e6e6e6] rounded-[100px]">
                                                            {/*className="ant-progress-inner" */}
                                                            <div
                                                                className="!h-[6.5px] relative bg-[#1677ff] rounded-[100px] transition-all duration-300 bg-gradient-to-r from-[#2ddfff] to-[#b7df2d] before:absolute before:inset-0 before:bg-white before:rounded-[100px] before:opacity-0 before:duration-[2400] before:animate-[antProgresActive_ease-[cubic-bezier(0.95,0.05,0.795,0.035)]_infinite] before:content-['']"
                                                                style={{ width: "2%", height: 3 }}
                                                            />
                                                            {/*className="ant-progress-bg" */}
                                                        </div>
                                                        {tooltipStatus === 1 && (
                                                            <div
                                                                role="tooltip"
                                                                className="z-20 mx-[calc((50%-8rem))] mb-7 w-64 absolute transition duration-150 ease-in-out bottom-0 shadow-2xl bg-white p-4 rounded-lg"
                                                            >
                                                                <svg
                                                                    className="absolute right-0 -ml-2 -bottom-3 w-full"
                                                                    width="9px"
                                                                    height="16px"
                                                                    viewBox="0 0 9 16"
                                                                    version="1.1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                >
                                                                    <g
                                                                        id="Page-1"
                                                                        stroke="none"
                                                                        strokeWidth={1}
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <g
                                                                            id="Tooltips-"
                                                                            transform="translate(-874.000000, -1029.000000)"
                                                                            fill="#FFFFFF"
                                                                        >
                                                                            <g
                                                                                id="Group-3-Copy-16"
                                                                                transform="translate(850.000000, 975.000000)"
                                                                            >
                                                                                <g
                                                                                    id="Group-2"
                                                                                    transform="translate(24.000000, 0.000000)"
                                                                                >
                                                                                    <polygon
                                                                                        id="Triangle"
                                                                                        transform="translate(4.500000, 62.000000) rotate(-180.000000) translate(-4.500000, -62.000000) "
                                                                                        points="4.5 57.5 12.5 66.5 -3.5 66.5"
                                                                                    />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                <p className="text-sm leading-4 text-gray-600 text-center">
                                                                    Eğitim Tamamlama Oranı
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <span
                                                        className="text-[#565656] inline-block w-[2em] ms-2 leading-none whitespace-nowrap text-start align-middle break-normal"
                                                        title="2%"
                                                    >
                                                        {/*className="ant-progress-text" */}
                                                        2%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            {/*className="activity-detail-tabs" */}
                            <div
                                className="!overflow-visible box-border m-0 p-0 text-[#1a1a1a] text-sm list-none flex flex-col"
                                style={{ overflow: "unset" }}
                            >
                                {/*className="ant-tabs ant-tabs-top" */}
                                <div
                                    role="tablist"
                                    className="relative flex flex-none items-center mx-0 mt-0 mb-4 before:bottom-0 before:absolute before:right-0 before:left-0 before:border before:border-solid before:border-[#f0f0f0] before:content-['']"
                                >
                                    {/*className="ant-tabs-nav" */}
                                    <div className="relative flex flex-auto self-stretch overflow-hidden whitespace-nowrap transform translate-x-0 translate-y-0 before:absolute before:z-[1] before:opacity-0 before:transition-opacity before:duration-[300ms] before:content-[''] before:pointer-events-none before:left-0 before:shadow-[10px_0_8px_-8px_rgba(0, 0, 0, 0.08)] before:top-0 before:bottom-0 before:w-8 after:absolute after:z-[1] after:opacity-0 after:transition-opacity after:duration-[300ms] after:content-[''] after:pointer-events-none after:right-0 after:shadow-[10px_0_8px_-8px_rgba(0, 0, 0, 0.08)] after:top-0 after:bottom-0 after:w-8">
                                        {/*className="ant-tabs-nav-wrap" */}
                                        <div
                                            className="relative flex transition-opacity duration-[300ms]"
                                            style={{ transform: "translate(0px, 0px)" }}
                                        >
                                            {/*className="ant-tabs-nav-list" */}
                                            <div
                                                onClick={() => handleButtonClick(0)}
                                                data-node-key="content"
                                                className="relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer  text-black"
                                            >
                                                {/*className="ant-tabs-tab ant-tabs-tab-active" */}
                                                <div
                                                    role="tab"
                                                    aria-selected="true"
                                                    className={`transition-none font-medium outline-none ${showFirst === 0 ? "text-black" : "text-[#7f7f7f]"
                                                        }`}
                                                    tabIndex={0}
                                                    id="rc-tabs-0-tab-content"
                                                    aria-controls="rc-tabs-0-panel-content"
                                                >
                                                    {/*className="ant-tabs-tab-btn" */}
                                                    <div className="relative cursor-pointer">
                                                        {/*className="tabs-nav " */}
                                                        <span className="text-lg">İçerik</span>
                                                        {/*className="tabs-nav-title" */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => handleButtonClick(1)}
                                                data-node-key="about"
                                                className="text-[#7f7f7f] my-0 mr-0 ml-8 relative inline-flex items-center py-3 px-0 text-sm bg-transparent border-0 outline-none cursor-pointer"
                                            >
                                                {/*className="ant-tabs-tab" */}
                                                <div
                                                    role="tab"
                                                    aria-selected="false"
                                                    className={` transition-none font-medium outline-none ${showFirst === 1 ? "text-black" : "text-[#7f7f7f]"
                                                        }`}
                                                    tabIndex={0}
                                                    id="rc-tabs-0-tab-about"
                                                    aria-controls="rc-tabs-0-panel-about"
                                                >
                                                    {/*className="ant-tabs-tab-btn" */}
                                                    <div className="relative cursor-pointer">
                                                        {/*className="tabs-nav " */}
                                                        <span className="text-lg">Hakkında</span>
                                                        {/*className="tabs-nav-title" */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`!bg-black bottom-0 h-0.5 absolute pointer-events-none  ${showFirst === 0 ? "left-0 w-12" : "left-20 w-[88px]"
                                                    }`}
                                            />
                                            {/*className="ant-tabs-ink-bar" */}
                                        </div>
                                    </div>
                                    <div className="flex self-stretch absolute invisible pointer-events-none">
                                        {/*className="ant-tabs-nav-operations ant-tabs-nav-operations-hidden" */}
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
                                        >
                                            {/*className="ant-tabs-nav-more" */}
                                            <span
                                                role="img"
                                                aria-label="ellipsis"
                                                className="inline-flex items-center text-inherit font-normal leading-[0px] text-center normal-case align-[-0.125em] antialiased"
                                            >
                                                {/*className="anticon anticon-ellipsis" */}
                                                <svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    data-icon="ellipsis"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="text-2xl inline-block"
                                                >
                                                    <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-auto min-w-0 min-h-0">
                                    {/*className="ant-tabs-content-holder" */}
                                    <div className="relative w-full">
                                        {/*className="ant-tabs-content ant-tabs-content-top" */}
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
                    </div>
                </div>
            </div>

            <div
                className="absolute !top-[50%] !right-[50%] !left-0 !bottom-0 hidden"
                style={{
                    position: "absolute",
                    inset: "0px 10px 0px 0px",
                    overflow: "hidden",
                }}
            >
                {/*className="ScrollbarsCustom-Wrapper" */}
                <div
                    className=""
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden scroll",
                        marginRight: "-24px",
                    }}
                >
                    {/*className="ScrollbarsCustom-Scroller" */}
                    <div
                        className="inline-block"
                        style={{
                            boxSizing: "border-box",
                            display: "table-cell",
                            minWidth: "100%",
                        }}
                    >
                        {/*className="ScrollbarsCustom-Content" */}
                        <div id="directory-collapse-0">
                            <div className="my-0 mx-6 bg-transparent border-0 box-border p-0 text-[#1a1a1a] leading-6 list-none rounded-lg">
                                {/*className="ant-collapse ant-collapse-icon-position-start"> */}
                                <div className="flex relative flex-nowrap transition-all cursor-pointer bg-transparent text-black p-0">
                                    {/*className="ant-collapse-header" */}
                                    <span className="w-full text-black text-lg font-semibold me-auto flex-auto">
                                        {/*className="ant-collapse-header-text" */}
                                        <details
                                            className="open:bg-white dark:open:bg-white open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg cursor-pointer mb-3"
                                            open
                                        >
                                            <summary className="text-base leading-[18px] font-semibold dark:text-black select-none text-black me-auto flex-auto w-full">
                                                {/*className="collapse-panel-title" */}
                                                Skillsoft ile İnsan ve İş Yönetimi
                                            </summary>
                                            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 ">
                                                <div className="pt-0 pr-0 pb-0 pl-6 rounded-lg bg-white text-[#1a1a1a] w-full">
                                                    {/*className="ant-collapse-content ant-collapse-content-active" */}
                                                    <div className="p-0 ">
                                                        {/*className="ant-collapse-content-box" */}
                                                        <div
                                                            className="ml-[-13px] cursor-pointer flex"
                                                            id="directory-18475"
                                                        >
                                                            {/*className="unit-info " */}
                                                            <div className="inline-block align-middle w-full mx-2 mr-0 ml-2 cursor-pointer">
                                                                {/*className="unit-info-left-block" */}
                                                                <div className="break-all font-medium text-base mr-3 leading-5 text-black">
                                                                    {/*className="unit-info-title" */}4 Dakika
                                                                    Kuralı - Steve McDermott
                                                                </div>
                                                                <div className="leading-4 mt-1">
                                                                    {/*className="unit-info-type" */}
                                                                    <span className="text-[#818181] font-medium text-xs">
                                                                        {/*className="unit-info-type-name" */}
                                                                        Video - <span>2 dk</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="inline-block align-middle m-2 text-right">
                                                                {/*className="unit-info-right-block" */}
                                                                <div className="w-3 h-3 inline-block align-middle bg-contain bg-no-repeat bg-[url('https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/unit-completed.svg')]" />
                                                                {/*className="unit-icon unit-completed" */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-0 ">
                                                        {/*className="ant-collapse-content-box" */}
                                                        <div
                                                            className="ml-[-13px] cursor-pointer flex"
                                                            id="directory-18475"
                                                        >
                                                            {/*className="unit-info " */}
                                                            <div className="inline-block align-middle w-full mx-2 mr-0 ml-2 cursor-pointer">
                                                                {/*className="unit-info-left-block" */}
                                                                <div className="break-all font-medium text-base mr-3 leading-5 text-black">
                                                                    {/*className="unit-info-title" */}
                                                                    Pazarları Yeniden Tanımlayan Müşteri
                                                                    Öngörüleri - Peter Fisk
                                                                </div>
                                                                <div className="leading-4 mt-1">
                                                                    {/*className="unit-info-type" */}
                                                                    <span className="text-[#818181] font-medium text-xs">
                                                                        {/*className="unit-info-type-name" */}
                                                                        Video - <span>4 dk</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="inline-block align-middle m-2 text-right">
                                                                {/*className="unit-info-right-block" */}
                                                                <div className="w-3 h-3 inline-block align-middle bg-contain bg-no-repeat bg-[url('https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/unit-completed.svg')]" />
                                                                {/*className="unit-icon unit-completed" */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

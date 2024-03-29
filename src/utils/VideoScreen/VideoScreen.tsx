import React, { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaCompress, FaBackward, FaForward, FaVolumeMute } from "react-icons/fa";
import "./VideoScreen.css"
import { useDispatch, useSelector } from 'react-redux';
import { updateWatchedStatus } from 'store/studentLesson/studentLessonSlice';

type Props = {
  videoSource: string;
  videoImg: string;
  lessonId: string;
  studentLessonId: string | null;
  studentId: string | null;
  isLiked: boolean | null;
}

const VideoScreen = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(100);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [controlsVisible, setControlsVisible] = useState<boolean>(false);
  const [videoStarted, setVideoStarted] = useState<boolean>(false);

  const dispatch = useDispatch<any>();

  const playPauseHandler = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        setControlsVisible(true);
        setVideoStarted(true);
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoChange = () => {
    setControlsVisible(false); // Yeni video seçildiğinde kontrol çubuğunu gizle
    setVideoStarted(false); // Yeni video seçildiğinde video başlama durumunu sıfırla
    setIsPlaying(false); // Video değiştiğinde oynatma durumunu sıfırla
  };

  const handlePlaybackRateChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = value;
      setPlaybackRate(value);
    }
  };

  const muteUnmuteHandler = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        setVolume(0);
      }
      else {
        setVolume(100);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
  };

  const fullscreenHandler = () => {
    if (videoRef.current?.parentElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        //setIsFullScreen(false);
      } else {
        videoRef.current.requestFullscreen();
        //setIsFullScreen(true);
      }
    }
  };

  const timeUpdateHandler = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);

      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        const progressPercentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        progressBar.style.background = `linear-gradient(to right, #7a29cc 0%, #7a29cc ${progressPercentage}%, #ccc ${progressPercentage}%, #ccc 100%)`;
      }
    }
  };

  const handleSeek = (value: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
      const progressBar = (value / duration) * 100;
      event.target.style.background = `linear-gradient(to right, #7a29cc ${progressBar}%, #ccc ${progressBar}%)`;
    }
  };

  const skipHandler = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  };

  const handleVideoEnd = () => {
    dispatch(updateWatchedStatus(props.studentLessonId, props.studentId, props.lessonId, props.isLiked));
    window.location.reload();
  }

  return (
    <div className={`w-full h-full relative`} onMouseMove={() => setControlsVisible(true)}>
      <video
        preload='auto'
        className="w-full h-full m-auto overflow-hidden"
        ref={videoRef}
        src={props.videoSource}
        poster={props.videoImg}
        onClick={playPauseHandler}
        onTimeUpdate={timeUpdateHandler}
        onMouseEnter={() => setControlsVisible(true)}
        onMouseLeave={() => setControlsVisible(false)}
        onLoadedMetadata={handleVideoChange}
        onEnded={handleVideoEnd}
      ></video>
      <div className={`absolute bottom-1 left-0 right-0 transition-opacity duration-500 ${controlsVisible && videoStarted ? 'opacity-100' : 'opacity-0'} `}>
        <input
          id="progress-bar"
          type="range"
          value={currentTime}
          max={duration}
          onChange={(e) => handleSeek(parseFloat(e.target.value), e)}
          className='flex flex-1 mb-1'
        />
        <div className=" flex items-center justify-between">
          <div className='flex'>
            <div className="flex items-center">
              <button className='my-0 mx-1 p-1 cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={() => skipHandler(-10)}>
                <FaBackward />
              </button>
              <button className='my-0 mx-1 p-1 cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={playPauseHandler}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className='my-0 mx-1 p-1 cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={() => skipHandler(10)}>
                <FaForward />
              </button>
            </div>
            <select
              value={playbackRate}
              onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
              className='rounded-full border-none mr-1 leading-none text-black font-medium bg-slate-300 hover:bg-slate-200 cursor-pointer'
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
              <option value="4">4x</option>
            </select>
            <div className='flex p-1'>
              <span className='my-0 pt-1 text-[#93f] font-medium'>{`${formatTime(currentTime)}-`}</span>
              <span className='my-0 pt-1 text-[#93f] font-medium'>{`${formatTime(duration)}`}</span>
            </div>
          </div>
          <div className="flex">
            <input
              id='volume-bar'
              type="range"
              value={volume}
              step={0.1}
              min={0}
              max={100}
              onChange={handleVolumeChange}
              style={{ background: `linear-gradient(to right, #7a29cc 0%, #7a29cc ${volume}%, #ccc ${volume}%, #ccc 100%)` }}
              className='mx-1 mt-2 '
            />
            <button className='m-[0px_5px] ml-auto p-[5px] cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={muteUnmuteHandler}>
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <button className='m-[0px_5px] ml-auto p-[5px] cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={fullscreenHandler}>
              {isFullScreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoScreen
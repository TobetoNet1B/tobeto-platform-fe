import React, { useRef, useState } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaCompress, FaBackward, FaForward } from "react-icons/fa";
type Props = {
  videoSource: string;
}


const VideoScreen = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);



  const playPauseHandler = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
    }
  };
  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolume(value);
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

  const timeUpdateHandler = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };
  const handleSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const skipHandler = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  return (

    <div>
      <div className="relative">
        <style>
          {`
              input[type="range"]::-webkit-slider-thumb {
                background-color: #26004d;
                  }
                  `}
        </style>
        <video
          ref={videoRef}
          src={props.videoSource}
          className="w-full"
          poster='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670d428d1921eed8/614be30d69b7947c1b3aebd5/9242021_StateofGameplayArticle_Header.jpg'
          onClick={playPauseHandler}
          onTimeUpdate={timeUpdateHandler}
        ></video>

        <div className="absolute bottom-[10px] left-0 right-0 flex justify-between items-center">
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
            <span className='my-0 mx-1 p-1 text-white font-semibold'>{`${Math.floor(currentTime)} / ${Math.floor(duration)}`}</span>
          </div>
          <div className='flex items-center w-[75%]'>
            <select
              value={playbackRate}
              onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
              className='rounded-full border-none mr-1 leading-none text-black font-semibold bg-slate-300 hover:bg-slate-200'
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
              <option value="4">4x</option>
            </select>
            <input
              type="range"
              value={currentTime}
              max={duration}
              onChange={(e) => handleSeek(parseFloat(e.target.value))}
              className='w-full appearance-none bg-transparent cursor-pointer bg-[#7a29cc] rounded-full h-2'
            />
          </div>
          <div className="flex items-centers">
            <input
              type="range"
              value={volume}
              step={0.1}
              max={1}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className='mr-1 mt-2 appearance-none bg-transparent cursor-pointer bg-[#7a29cc] rounded-full h-2'
            />
            <button className='m-[0px_5px] ml-auto p-[5px] cursor-pointer bg-[#7a29cc] hover:bg-[#93f] text-white border-none rounded-[5px]' onClick={muteUnmuteHandler}>
              <FaVolumeUp />
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
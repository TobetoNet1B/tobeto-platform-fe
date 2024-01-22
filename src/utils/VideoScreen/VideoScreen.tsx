import React, { useRef, useState } from 'react'
import { FaPlay, FaPause, FaVolumeUp, FaExpand, FaCompress, FaBackward, FaForward, FaVolumeMute } from "react-icons/fa";
import "./VideoScreen.css"
type Props = {
  videoSource: string;
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
      if (!isMuted) {
        setVolume(0);
      }
      else {
        setVolume(100);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(event.target.value, 10);//İlk parametre olarak dönüştürülecek metin dizesi, ikinci parametre olarak ise kullanılacak olan sayı tabanını alır. Burada, metin dizesinin onluk sistemde olduğunu belirtmek için 10 kullanılır. Yani, event.target.value değeri (input elemanının değeri) onluk bir sayıya dönüştürülür. Bu işlem, ses seviyesini kontrol etmek amacıyla kullanılır ve genellikle bir input elemanının değeri 0 ile 100 arasında bir sayıdır.
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;//Bu ifade ise video elementinin ses seviyesini kontrol eder. newVolume değişkeni, yukarıdaki parseInt ifadesi tarafından elde edilen 0 ile 100 arasındaki sayıyı temsil eder. Ancak, HTML5 video elementinin volume özelliği 0 ile 1 arasında bir değer alır. Bu nedenle, 0 ile 100 arasındaki ses seviyesini 0 ile 1 arasındaki bir değere dönüştürmek için bu ifadede 100 kullanılır. Yani, newVolume değeri 0 ile 100 arasında bir sayıyı temsil ederken, videoRef.current.volume değeri 0 ile 1 arasında bir sayı olacaktır.
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
      // Videonun hangi sürede olduğuna bağlı olarak seek bar rengini ayarla
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

  return (

    <div>
      <div className="">

        <video
          ref={videoRef}
          src={props.videoSource}
          className="w-full h-full"
          poster='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt670d428d1921eed8/614be30d69b7947c1b3aebd5/9242021_StateofGameplayArticle_Header.jpg'
          onClick={playPauseHandler}
          onTimeUpdate={timeUpdateHandler}
        ></video>

        <div className="absolute bottom-1 left-0 right-0 flex  items-center">
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
            <div className='flex p-1'>
              <span className='my-0 pt-1 text-white font-medium'>{`${formatTime(currentTime)}-`}</span>
              <span className='my-0 pt-1 text-white font-medium'>{`${formatTime(duration)}`}</span>
            </div>
          </div>
          <div className='items-center'>
            <select
              value={playbackRate}
              onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
              className='rounded-full border-none mr-1 leading-none text-black font-medium bg-slate-300 hover:bg-slate-200'
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
              <option value="4">4x</option>
            </select>
          </div>
          <input
            id="progress-bar"
            type="range"
            value={currentTime}
            max={duration}
            onChange={(e) => handleSeek(parseFloat(e.target.value), e)}
            className=''
          />
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
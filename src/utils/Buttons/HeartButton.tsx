import React, { useState } from 'react'

type Props = {
  isLiked: boolean;
}

const HeartButton = (props: Props) => {
  const [liked, setLiked] = useState<boolean>(props.isLiked);
  const [count, setCount] = useState<number>(props.isLiked ? 1 : 0);

  const handleHeartClick = () => {
    setLiked(!liked);
    if (!liked) {
      setCount(count + 1);
    } else {
      if(count > 0){
        setCount(count - 1);
      }
    }
  };

  return (
    <div className="flex cursor-pointer">
      <span className="w-7 ml-1 text-3xl !text-[#7f7f7f] cursor-pointer ">
        <div id="main-content" className="transform translate-x-0 translate-y-[-0.4ex] flex items-center justify-center text-center h-9 ">
          <div id="sub-content" className="cursor-pointer w-7 ">
            <input checked={liked}
              onChange={handleHeartClick} type="checkbox" id="checkbox" className="hidden box-border p-0  " />
            <label id="checkbox-label" htmlFor="checkbox" className="transform -translate-x-5 translate-y-0 block font-semibold text-black touch-manipulation" >
              <svg className="cursor-pointer overflow-visible w-[68px]"
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
      <span className={`!text-[#7f7f7f] font-medium text-3xl  translate-x-[0.2em] translate-y-[-0.15ex] mr-4 leading-none cursor-pointer ${liked ? ' ' : ' '}`}>
        <span className={`cursor-pointer ${liked ? '!text-[#ff4757]' : '!text-[#7f7f7f]'}`}>{count}</span>
      </span>
    </div>
  )
}

export default HeartButton
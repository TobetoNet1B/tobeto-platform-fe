import React, { useEffect, useState } from 'react'

type Props = {
  isLiked: boolean;
}

const HeartButtonLesson = (props: Props) => {
  const [likedDetail, setLikedDetail] = useState<boolean>(props.isLiked);

  const handleHeartClickDetail = () => {
    setLikedDetail(!likedDetail);
  };

  useEffect(() => {
    handleHeartClickDetail();
  }, [props.isLiked]);
  
  return (
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
  )
}

export default HeartButtonLesson
import React from 'react'

type Props = {}

const Skeleton = (props: Props) => {
  return (
    <div className="flex justify-center mt-20 items-center flex-col">
        <div className="skeleton w-4/5 mb-2 h-32"></div>
        <div className="skeleton w-4/5 h-[500px]"></div>
      </div>
  )
}

export default Skeleton
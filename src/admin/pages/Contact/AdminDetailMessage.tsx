import React from 'react'
import { BsPaperclip } from 'react-icons/bs'
import { FaReply } from 'react-icons/fa'
import { FaFaceGrin } from 'react-icons/fa6'
import { HiPrinter } from 'react-icons/hi'
import { HiOutlinePhoto } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

type Props = {}

const AdminDetailMessage = (props: Props) => {
  return (
    <div className="lg:w-4/5 flex h-full flex-col border-l border-stroke dark:border-strokedark">
      <div className="p-5 h-full">
        <div className="items-center flex mb-4">
          <div className="">
            <div className=" font-semibold text-base text-ellipsis overflow-hidden whitespace-nowrap">
              Bonnie Green
            </div>
            <div className="text-slate-500 text-sm">
              email@windster.com
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-xl mb-4">
          Website Hosting Reviews Free The Best Resource For Hosting Comparison
        </h1>
        <div className="font-normal text-base">
          <p className="">
            Do you know what could beat the exciting feeling of having a new computer?
            Make your own PC easy and compatible!
          </p>
          <p className="">
            So insisted received is occasion advanced honoured. Among ready to which
            up. Attacks smiling and may out assured moments man nothing outward.
            Thrown any behind afford either the set depend one temper. Instrument
            melancholy in acceptance collecting frequently be if. Zealously now
            pronounce existence add you instantly say offending. Merry their far had
            widen was. Concerns no in expenses raillery formerly.
          </p>
          <p className="">
            Best Regards,
            <br />
            Bonnie Green, CEO Themesberg LLC
          </p>
        </div>
      </div>
      <div className="flex items-center p-5">
        <div className="flex">
          <Link to={"/admin/contact/adminsendmessage"} className="btn btn-primary">
            Yanıtla
            <FaReply className="w-5 h-5" />
          </Link>
        </div>
        <div className="flex pl-2">
          <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
            <FaFaceGrin className="w-8 h-8" />
          </Link>
          <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
            <BsPaperclip className="w-8 h-8" />
          </Link>
          <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
            <HiOutlinePhoto className="w-8 h-8" />
          </Link>
          <Link to={""} className="p-1 justify-center rounded cursor-pointer inline-flex m-1 hover:text-gray-400">
            <HiPrinter className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>

  )
}

export default AdminDetailMessage
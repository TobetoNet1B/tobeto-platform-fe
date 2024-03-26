import { CiInboxIn, CiStar, CiTrash } from 'react-icons/ci'
import { IoSend } from 'react-icons/io5'
import { RiDraftLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = {}

const ContactSideNav = (props: Props) => {
  return (
    <div className="lg:w-1/5 fixed bottom-0 top-22.5 z-999 flex w-[230px] -translate-x-[120%] flex-col rounded-md border border-stroke bg-white dark:border-strokedark dark:bg-boxdark lg:static lg:translate-x-0 lg:border-none false">
      <button className="absolute -right-20 z-99999 block rounded-md border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden false">
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M 22.1875 2.28125 L 20.78125 3.71875 L 25.0625 8 L 4 8 L 4 10 L 25.0625 10 L 20.78125 14.28125 L 22.1875 15.71875 L 28.90625 9 Z M 9.8125 16.28125 L 3.09375 23 L 9.8125 29.71875 L 11.21875 28.28125 L 6.9375 24 L 28 24 L 28 22 L 6.9375 22 L 11.21875 17.71875 Z" />
        </svg>
      </button>
      <div className="px-4 pt-4">
        <Link to={"adminsendmessage"} className="w-full btn btn-primary px-5.5 py-2.5">
          Yeni Mesaj Oluştur
        </Link>
      </div>
      <div className="no-scrollbar max-h-full overflow-auto py-6">
        <ul className="flex flex-col gap-2 !text-start">
          <li className='w-full'>
            <Link
              className="relative flex items-center gap-2.5 py-2.5 px-5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full"
              to={"admininboxmessage"}
            >
              <CiInboxIn className='w-7 h-7' />
              Gelen Kutusu
            </Link>
          </li>
          <li className='w-full'>
            <Link
              className="relative flex items-center gap-2.5 py-2.5 px-5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full"
              to={""}
            >
              <IoSend className='w-5 h-5' />
              Giden Kutusu
            </Link>
          </li>
          <li className='w-full'>
            <Link
              className="relative flex items-center gap-2.5 py-2.5 px-5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full"
              to={""}
            >
              <CiStar className='w-7 h-7' />
              Önemli
            </Link>
          </li>
          <li className='w-full'>
            <Link
              className="relative flex items-center gap-2.5 py-2.5 px-5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full"
              to={""}
            >
              <RiDraftLine className='w-6 h-6' />
              Taslaklar
            </Link>
          </li>
          <li className='w-full'>
            <Link
              className="relative flex items-center gap-2.5 py-2.5 px-5 font-medium duration-300 ease-linear before:absolute before:left-0 before:h-0 before:w-1 before:bg-primary before:duration-300 before:ease-linear hover:bg-primary/5 hover:text-primary hover:before:h-full"
              to={""}
            >
              <CiTrash className='w-7 h-7' />
              Çöp Kutusu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactSideNav
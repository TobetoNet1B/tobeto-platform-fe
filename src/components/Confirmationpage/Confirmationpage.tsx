import React from 'react'
import { FcOk } from "react-icons/fc";
import { Link } from 'react-router-dom';

type Props = {}

const Confirmationpage = (props: Props) => {
  return (
    <div className='flex justify-center items-center m-auto bg-[#d9d9d9] w-screen h-screen'>
      <div className='bg-white m-auto w-4/5 h-3/4 p-8 flex flex-col items-center justify-between'>
        <FcOk className='w-40 h-40' />
        <div className='items-center justify-center text-center w-3/4'>
          <p className='font-extrabold text-3xl  m-auto'>Tobeto Platform'a kaydınız başarıyla gerçekleşti.Gİriş yapabilmek için e-posta adresinize iletilen doğrulama linkine tıklayarak hesabınızı aktifleştirin.</p>
          <p className='font-extrabold text-3xl  m-auto'></p>
        </div>
        <Link to={"/"} className='btn bg-[#4caf50] hover:bg-[#3e8e41] hover:border-[#3e8e41] border-[#4caf50] text-white text-lg w-36'>Giriş Yap</Link>
      </div>
    </div>
  )
}

export default Confirmationpage
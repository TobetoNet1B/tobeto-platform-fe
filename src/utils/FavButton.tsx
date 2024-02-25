import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';

type Props = {
  isFav: boolean;
}

const FavButton = (props: Props) => {

  const [favIcon, setFavIcon] = useState<boolean>(props.isFav)

  const handleFavIconClick = () => {
    setFavIcon(!favIcon)
    !favIcon ? favIconTrue() : favIconFalse()
  };


  const favIconFalse = () => toast.success("Favorilerden çıkarma işlemin başarıyla gerçekleşti.", {
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    className: 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px]  border-solid border-t-8 border-[#3dcb79] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8'
  });

  const favIconTrue = () => toast.success("Favorilere ekleme işlemin başarıyla gerçekleşti.", {
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    className: 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px]  border-solid border-t-8 border-[#3dcb79] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8'
  });

  return (
    <div>
      <ToastContainer />
      <div onClick={handleFavIconClick} className="">
        <div className="w-9 h-9 inline-block align-middle cursor-pointer">
          <span className={`w-full h-full block !bg-cover !bg-no-repeat !bg-center ${favIcon ? 'bg-[url("https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/remove-favorite.svg")]' : 'bg-[url("https://lms.tobeto.com/tobeto/eep/Styles/assets/css/img/icon/learning-experience-platform/add-favorite.svg")]'}`} />
        </div>
      </div>
    </div>
  )
}

export default FavButton
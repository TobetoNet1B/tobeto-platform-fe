import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import "./Toast.css"

type Props = {}

const Toast = (props: Props) => {
  const [buttonData, setButtonData] = useState<string | null>(null);

  const handleClick = async (status: string) => {
    setButtonData(status);

    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();


      if (data.id) {
        setButtonData('success');
      }
      else {
        setButtonData('error');
      }
    } catch (error) {
      setButtonData('warning')
      console.log(`Error: ${error}`);
    }


  };
  let className = '';


  switch (buttonData) {
    case 'success':
      className = `${"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#65b996] after:content-['*_Giriş_Başarılı']"}`;
      toast('TOBETO', {
        className,
        hideProgressBar: true,
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case 'error':
      className = `${"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#fc5c46] after:content-['*_Başarısız']"}`;
      toast('TOBETO', {
        className,
        hideProgressBar: true,
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case 'info':
      className = `${"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#4d4d4d] after:content-['*_Bilgilendirme']"}`;
      toast('TOBETO', {
        className,
        hideProgressBar: true,
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case 'warning':
      className = `${"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#ed9c56] after:content-['*_Uyarı']"}`;
      toast('TOBETO', {
        className,
        hideProgressBar: true,
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    default:
      break;
  }
  return (
    <div>
      <button onClick={() => handleClick('warning')}>Toast Göster</button>

      <ToastContainer/>
    </div>
  )
}

export default Toast
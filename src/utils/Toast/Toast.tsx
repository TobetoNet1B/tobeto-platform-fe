import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import "./Toast.css"

type Props = {
  message:string,
  type:string
}

const Toast = (props: Props) => {
  let className = '';
  switch (props.type) {
    case 'success':
      className = `"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#65b996] after:content-['*_${props.message}']"}`;
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
      className = `"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#fc5c46] after:content-['*_${props.message}']"}`;
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
      className = `"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#4d4d4d] after:content-['*_${props.message}']"}`;
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
      className = `"after:h-14 after:w-full after:absolute after:bottom-0 after:left-0 after:flex after:justify-start after:items-center after:text-white after:font-semibold after:p-2 after:bg-[#ed9c56] after:content-['*${props.message}']"}`;
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
      <ToastContainer/>
    </div>
  )
}

export default Toast
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function FooterBar() {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
      };
       const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
<div className='relative bottom-0 left-0 w-full mt-10 bg-purple-600 h-28 flex items-center justify-between'>
    <Link to={"/platform"} onClick={toTop} className='ml-[10rem]'>
        <img className='max-w-[10.8%] h-auto' src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75" alt="" />
    </Link>
    <button onClick={toHome} className='mr-[10rem] w-96 h-9 rounded-full bg-white text-black font-black text-sm'>Bize Ulaşın</button>
</div>

  )
}

export default FooterBar
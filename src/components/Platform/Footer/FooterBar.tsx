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
    <div className='footer-bar'>
       <Link to={"/platform"} onClick={toTop}>
        <img className='footerbar-logo'  src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=128&q=75" alt="" />
        </Link>
        <button onClick={toHome} className='btn-footerbar font-black text-sm'>Bize Ulaşın</button>
    </div>
  )
}

export default FooterBar
import React from 'react'
function FooterBoxes() {
    return (
      <div className="footer-container">
        <div className='footer-box box1'>
            <p className='text-2xl  font-extrabold text-white'>Profilini oluştur</p>
        </div>
        <div className='footer-box box2'>
        <p className='text-2xl  font-extrabold text-white'> <span style={{display:'flex', justifyContent:'center'}}> Kendini </span> değerlendir</p>
        </div>
        <div className='footer-box box3'>
        <p className='text-2xl font-extrabold text-white'> <span style={{display:'flex', justifyContent:'center'}}> Öğrenmeye </span> <span style={{marginLeft:'38px'}}> başla </span></p>
        </div>
      </div>
    );
  }
  

export default FooterBoxes
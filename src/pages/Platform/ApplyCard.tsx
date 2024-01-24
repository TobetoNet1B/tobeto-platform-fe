import React from 'react'

export default function ApplyCard() {
  return (
    <div className="applyInfo">

    <div className="theGreenBar">
    <p className="text-xs">Kabul Edildi</p>
    </div>
    
    <h3 className="text-sm font-semibold" style={{margin:"35px 20px 10px 15px"}}>İstanbul Kodluyor</h3>
    <h3 className="text-sm font-semibold" style={{margin:"2px 30px 10px 15px"}}>Bilgilendirme</h3>
    
    
    <div className="applyInfoNote1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-5 h-5"> 
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg> 
    <p className="text-sm">İstanbul Kodluyor Başvuru Formu onaylandı.</p> 
    </div>
    
    <div className="applyInfoNote2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
    <p className="text-sm">İstanbul Kodluyor Belge Yükleme Formu onaylandı.</p>
    </div>
    
    </div>
    
        
  )
}

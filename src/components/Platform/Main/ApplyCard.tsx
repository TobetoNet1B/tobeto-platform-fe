import React from 'react'

export default function ApplyCard() {
  return (
    <div className="applyInfo max-w-[550px] md:max-w-full md:w-3/4 xl:w-[550px] mx-auto">
    <div className="theGreenBar mt-36">
        <p className="text-xs ">Kabul Edildi</p>
    </div>
    <h3 className="text-sm font-semibold  ml-3 md:ml-4">İstanbul Kodluyor</h3>
<h3 className="text-sm font-semibold ml-3 md:ml-4">Bilgilendirme</h3>

    <div className="flex items-center mt-2 md:ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        <p className="text-sm ml-2">İstanbul Kodluyor Başvuru Formu onaylandı.</p>
    </div>
    <div className="flex items-center md:ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        <p className="text-sm ml-2">İstanbul Kodluyor Belge Yükleme Formu onaylandı.</p>
    </div>
</div>

    
        
  )
}

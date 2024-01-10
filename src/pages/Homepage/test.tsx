import React, { useEffect, useState } from "react";

export default function test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show3, setshow3] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeButton, setActiveButton] = useState('button1');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [p1Visible, setP1Visible] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [p2Visible, setP2Visible] = useState(false);

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
    // Butonlara göre p elementlerinin görünürlüğünü kontrol et
  if (buttonId === 'button1') {
    setP1Visible(true);
    setP2Visible(false);
  } else {
    setP1Visible(false);
    setP2Visible(true);
  }
  };
  
  return (
    <div className="flex flex-col">
      
      <div className="mt-6 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <button
            aria-label="show menu"
            onClick={() => setshow3(!show3)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
          >
            <svg
              className={`fill-stroke ${show3 ? "block" : "hidden"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L5 1L1 5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`fill-stroke ${show3 ? "hidden" : "block"}`}
              width={10}
              height={6}
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="menu3"
        className={`flex-col jusitfy-start items-start mt-12 ${
          show3 ? "flex" : "hidden"
        }`}
      >
        <div>
          <p className="tracking-tight text-xs leading-3 text-gray-800">
            MK617
          </p>
        </div>
        <div className="mt-2">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            Beige brown
          </p>
        </div>
        <div className="mt-6">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            42 size
          </p>
        </div>
        <div className="mt-6">
          <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
            $1,000
          </p>
        </div>
        <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
          <div className="w-full">
            <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
              More information
            </button>
          </div>
          <div className="w-full">
            <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <br />
      <div>
      <button
        className={`px-6 py-3 ${activeButton === 'button1' ? ' bg-white' : ' bg-black'}`}
        onClick={() => handleButtonClick('button1')}
      >
        <div className={`${activeButton === 'button1' ? 'text-black ' : 'text-white'}`}>
        Button 1
        </div>
      </button>
      <button
        className={`px-6 py-3 ${activeButton === 'button2' ? ' bg-white' : ' bg-black'}`}
        onClick={() => handleButtonClick('button2')}
      >
        <div className={`${activeButton === 'button2' ? 'text-black ' : 'text-white '}`}>
        Button 2
        </div>
      </button>
      <br />
      <button onClick={() => handleButtonClick('button1')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl m-0 mb-5 ${activeButton === 'button1' ? 'bg-white' : 'bg-[#181717] '}`}>{/*className="tab-button active mb-5"*/}
												<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button1' ? 'text-gray-700 ' : 'text-white'}`}>{/* className="title" */}
													Teknik ve Profesyonel Eğitimler
												</div>
												<div className="text-base text-[#828282] font-normal text-left">{/*className="desc" */}
													Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.
												</div>
											</button>
											<button onClick={() => handleButtonClick('button2')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl mb-5  ${activeButton === 'button2' ? ' bg-white' : ' bg-[#181717]'}`}>{/*className="tab-button*/}
												<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button2' ? 'text-gray-700 ' : 'text-white '}`}>{/* className="title" */}
												Yeni bir meslek
												</div>
												<div className="text-base text-[#828282] font-normal text-left">{/*className="desc" */}
												İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
												</div>
											</button>
    </div>
    <div>
        {/* İlk p elementi */}
        {p1Visible && <p>İlk paragraf içeriği</p>}
        
        {/* İkinci p elementi */}
        {p2Visible && <p>İkinci paragraf içeriği</p>}
      </div>
    </div>
  );
}

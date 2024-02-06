import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import CountryAndCallingCode from './CountryAndCallingCode.json'

interface CountryData {
  name: string;
  dial_code: string;
  code: string;
}

type Props = {
}

const ContractsModal = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [countryDataList, setCountryDataList] = useState<CountryData[] | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked1, setIsChecked1] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked2, setIsChecked2] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked3, setIsChecked3] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked4, setIsChecked4] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isButtonActive, setIsButtonActive] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setIsButtonActive(
      isChecked1 && isChecked2 && isChecked3 && isChecked4 && phoneNumber.length > 0);
  }, [isChecked1, isChecked2, isChecked3, isChecked4, phoneNumber]);

  // İlk renderda ülke verilerini yükle
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setCountryDataList(CountryAndCallingCode);
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryName = e.target.value;
    setSelectedCountry(selectedCountryName);

    // countryDataList null ise işlemi durdur
    if (!countryDataList) return;

    const selectedCountryData = countryDataList.find((item: CountryData) => item.name === selectedCountryName);
    setCountryData(selectedCountryData || null);
  };
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/confirm")// Çıkma işlemi yapacağımız zaman ana sayfaya dönmemizi sağlar
  }
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box p-0">
        <div className='p-2'>
          <div className="flex items-start justify-between">
            <span className="bg-[url('https://tobeto.com/_next/static/media/alert.309dc4c0.svg')] w-[3em] h-[3em] bg-no-repeat bg-center bg-contain flex"></span>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 w-[3em] h-[3em] mt-1">✕</button>
            </form>
          </div>
          <p className="text-[#282828] font-semibold text-[16px] mx-3 mt-[1em]">Kayıt oluşturmak için gerekli sözleşmeler</p>
          <label className="flex mt-5 text-left justify-center">
            <small className="text-[#1c1917] w-full mx-3 text-[0.875rem]">
              Kişisel verileriniz{" "}
              <Link target="_blank" to="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni" className='text-[#93f] hover:text-[#7a29cc] underline'>
                Aydınlatma Metni
              </Link>{" "}
              kapsamında işlenmektedir.
            </small>
          </label>
          <label className="flex mt-1 text-left justify-center">
            <small className="text-[#1c1917] w-full mx-3 text-[0.875rem]">
              <input name="contact" className="mr-2 checked:bg-[#7a29cc] rounded" type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} />
              <Link target="_blank" to="https://tobeto.com/yasal-metinler/acik-riza-metni" className='text-[#93f] hover:text-[#7a29cc] underline'>Açık Rıza Metni</Link> ’ni okudum ve anladım.*
            </small>
          </label>
          <label className="flex mt-1 text-left justify-center">
            <small className="text-[#1c1917] w-full mx-3 text-[0.875rem]">
              <input name="membershipContrat" className="mr-2 checked:bg-[#7a29cc] rounded" type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />
              <Link target="_blank" to="https://tobeto.com/yasal-metinler/tobeto-uyelik-sozlesmesi" className='text-[#93f] hover:text-[#7a29cc] underline'>Üyelik Sözleşmesi ve Kullanım Koşulları</Link>
              ’nı okudum ve anladım.*
            </small>
          </label>
          <label className="flex mt-3 text-left justify-center">
            <small className="text-[#1c1917] w-full mx-3 text-[0.875rem]">
              İletişim bilgilerim üzerinden pazarlama ve tanıtım amaçlı
              irtibata geçilmesini kabul ediyorum.
              <label className="flex mt-2 text-left">
                <input name="emailConfirmation" className="mr-2 checked:bg-[#7a29cc] rounded" type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} />
                <small className="text-[#1c1917] w-full text-[0.875rem]">E-posta gönderim izni.*</small>
              </label>
              <label className="flex mt-1 text-left">
                <input name="phoneConfirmation" className="mr-2 checked:bg-[#7a29cc] rounded" type="checkbox" checked={isChecked4} onChange={() => setIsChecked4(!isChecked4)} />
                <small className="text-[#1c1917] w-full text-[0.875rem]">Arama izni.*</small>
              </label>
            </small>
          </label>
          {isChecked4 && (<div className="flex items-center mt-5 text-[#1c1917] w-full text-[0.875rem]">
            <div className="flex space-x-4 relative self-stretch items-center">
              <select value={selectedCountry} onChange={handleCountryChange} className="p-2 border border-gray-300 cursor-pointer absolute top-0 left-0 h-full w-full z-10 opacity-0">
                <option value="">-- Ülke Seçin --</option>
                {countryDataList && countryDataList.map((country: CountryData, index: number) => (
                  <option key={index} value={country.name}>{country.name}</option>
                ))}
              </select>
              {countryData ? (<div className="w-[calc(1em*1.5)] h-[1em]"><img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryData.code}.svg`} alt={`${countryData.name} flag`} className="block w-full h-full align-middle" /></div>) : (<div className='flex items-center'>
                <FaPhoneAlt className='z-20 mt-1 -mr-2' /> <CiGlobe className='w-5 h-5' />
              </div>)}
              <div className="block content-[''] w-[0.5em] h-[0.5em]  border-solid border-t-0 border-b-[1px] border-l-0 border-r-[1px] rotate-45 opacity-45 border-black">
              </div>
            </div>
            {<input className="input input-bordered w-full mx-4" type="tel" autoComplete='tel' placeholder='(5XX) XXX XX XX' id='phoneNumber' name='phoneNumber' value={countryData?.dial_code} onChange={(e) => setPhoneNumber(e.target.value)}></input>}
          </div>)}
          <div className='flex justify-center' style={{ margin: "30px auto 0px" }}>
            <div>
              <div className='w-[304px] h-[78px]'>
                <div>
                  <iframe title="reCAPTCHA" width={304} height={78} role="presentation" name="a-fh41nk2garel" frameBorder={0} scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdXItghAAAAANPUfYw81TI55i6vggSCUVNIawnM&co=aHR0cHM6Ly90b2JldG8uY29tOjQ0Mw..&hl=tr&type=image&v=MHBiAvbtvk5Wb2eTZHoP1dUd&theme=light&size=normal&badge=bottomright&cb=5zzvcvvqyr4q"
                  />
                </div>
                <textarea
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                  className="g-recaptcha-response"
                  style={{
                    width: 250,
                    height: 40,
                    border: "1px solid rgb(193, 193, 193)",
                    margin: "10px 25px",
                    padding: 0,
                    resize: "none",
                    display: "none"
                  }}
                  defaultValue={""}
                />
              </div>
              <iframe style={{ display: "none" }} />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between bg-[#e0dddd] mt-[3em] py-2 px-4 gap-[1em]'>
          <div className="modal-action mt-0 w-full">
            <form method="dialog" className='w-full'>
              <button className="btn my-3 w-full hover:bg-[#93f] hover:border-[#93f] text-base shadow-[0_4px_8px_0_rgba(0,0,0,.2)] text-[#828282] hover:text-white"><IoClose className='w-6 h-6' /> Kapat</button>
            </form>
          </div>
          <div className="modal-action mt-0 w-full">
            <form className='w-full'>
              <button onClick={handleButtonClick} disabled={!isButtonActive} className={`btn my-3 w-full text-base shadow-[0_4px_8px_0_rgba(0,0,0,.2)] ${isButtonActive ? 'hover:bg-[#93f] hover:border-[#93f] hover:text-white text-[#828282]' : 'cursor-not-allowed'}`}><MdOutlineDone className='w-6 h-6' /> Devam Et</button>
            </form>
          </div>

        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  )
}

export default ContractsModal
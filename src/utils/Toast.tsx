import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';

type Props = {}

const Toast = (props: Props) => {
  const [buttonData, setButtonData] = useState<string | null>(null);

  const handleClick = async (status: string) => {
    setButtonData(status);

    try {
      // Örnek asenkron işlem
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();

      // İşleminiz başarılı ise status durumunu 'success' olarak güncelleyebilirsiniz.
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
      className = 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px] border-solid border-t-8 border-[#3dcb79] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8';
      toast.success('Başarılı Mesaj', {
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
      className = 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px] border-solid border-t-8 border-[#cc0000] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8';
      toast.error('Hatalı Mesaj', {
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
      className = 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px] border-solid border-t-8 border-[#0000b3] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8';
      toast.info('Bilgi Mesajı', {
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
      className = 'shadow-[0_10px_10px_rgba(0,0,0,0.1)] rounded-md relative p-4 mb-1 bg-white last:mb-0 first:mt-[18px] border-solid border-t-8 border-[#ffcc00] cursor-pointer flex p-5 w-[450px] left-auto bottom-auto right-[120px] top-[0px] mb-8';
      toast.warning('Uyarı Mesajı', {
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
      <button onClick={() => handleClick('')}>Toast Göster</button>

      <ToastContainer />
    </div>
  )
}

export default Toast
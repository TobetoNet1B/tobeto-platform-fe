import { FaRegStar } from 'react-icons/fa'
import ContactSideNav from './ContactSideNav'
import { useEffect, useState } from 'react';
import tobetoContactService from 'services/tobetoContactService';
import { TobetoContact } from 'models/responses/tobeto-contact/getAllTobetoContactResponse';
import { Outlet } from 'react-router-dom';

type Props = {}

const AdminContact = (props: Props) => {
  // const [messages, setMessages] = useState<TobetoContact[]>([]);

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const response = await tobetoContactService.getAll(0, 999);
  //       if (!response) {
  //         throw new Error('Mesajlar alınamadı');
  //       }
  //       const data = await response;
  //       setMessages(data.data.items.reverse());
  //     } catch (error) {
  //       console.error('Mesajlar alınırken hata oluştu:', error);
  //     }
  //   };

  //   fetchMessages();
  // }, []);
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Gelen E-Mail
          </h2>
        </div>
        <div className="sm:h-[calc(100vh-174px)] h-[calc(100vh-186px)] overflow-hidden">
          <div className="h-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark lg:flex">
            <ContactSideNav />
            <Outlet/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminContact
import ContactSideNav from './ContactSideNav'
import { Outlet } from 'react-router-dom';

type Props = {}

const AdminContact = (props: Props) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-4">
        <div className="sm:h-[calc(100vh-160px)] h-[calc(100vh-186px)] overflow-hidden">
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
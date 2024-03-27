import { useEffect, useState } from 'react'
import AdminHeader from './components/AdminHeader/AdminHeader'
import AdminFooter from './components/AdminFooter/AdminFooter'
import AdminSideNav from './components/AdminSideNav/AdminSideNav'
import { Outlet, useLocation } from 'react-router-dom'
import PreLoader from 'utils/PreLoader'

type Props = {
}

const AdminLayout = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    loading ? (
      <PreLoader />
    ) : (
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <div className="flex h-screen overflow-hidden">
          <AdminSideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
        {/* <AdminFooter/> */}
      </div>
    )
  )
}

export default AdminLayout
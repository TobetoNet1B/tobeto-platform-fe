import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { MdPlayLesson } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaBlog } from 'react-icons/fa';

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const AdminSideNav = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !props.sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      props.setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!props.sidebarOpen || keyCode !== 27) return;
      props.setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <aside ref={sidebar} className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${props.sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/admin">
          <img src={"https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"} alt="Logo" />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={props.sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>
            <ul className="mb-6 flex flex-col gap-1.5 !text-start">
              <li className='w-full'>
                <NavLink
                  to="lessonvideoupload"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('lessonvideoupload') && 'bg-graydark dark:bg-meta-4'}`}>
                  <MdPlayLesson />
                  Videolar
                </NavLink>
                <NavLink
                  to="User"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('user') && 'bg-graydark dark:bg-meta-4'}`}>
                  <CiUser />
                  Kullanıcılar
                </NavLink>
                <NavLink
                  to="contact/admininboxmessage"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('contact/admininboxmessage') && 'bg-graydark dark:bg-meta-4'}`}>
                  <CiMail />
                  E-Mail
                </NavLink>
                <NavLink
                  to="contact"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('blog') && 'bg-graydark dark:bg-meta-4'}`}>
                  <FaBlog />
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>

  )
}

export default AdminSideNav
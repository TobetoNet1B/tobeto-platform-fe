import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { logout } from "store/Auth/AuthSlice";
import { SelectFullName } from "store/user/userSlice";

export default function DropdownItem() {

    const dispatch = useDispatch();
		const fullName = useSelector(SelectFullName)
    const imgUrl = useSelector((state:any) => state.user.imgUrl)

    return (
        <div className="navbar">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex-nowrap avatar lg:min-w-52 lg:bg-slate-200 text-slate-900 hover:text-slate-200">
                    <div className="flex rounded-full w-[33px] ">
                        <img style={{ width: '32px', height: '32px' }} alt="Tailwind CSS Navbar component" src={imgUrl || '/pp.png'} />
                    </div>
                    <span className="lg:flex hidden">{fullName === ' ' ? 'Pair 3 Tobeto' : fullName}</span>
                    <IoIosArrowDown />
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] py-2 px-0 text-end shadow menu menu-sm dropdown-content dropdown-content-platform rounded-box min-w-32 w-fit !bg-[#93f] text-white">
                    <li className="w-full"><Link to="/profilim" className="block text-right">Profil Bilgileri</Link></li>
                    <hr />
                    <li className="w-full"><Link to="/giris" className="block text-right" onClick={() => dispatch(logout())}>Oturumu Kapat</Link></li>
                </ul>
            </div>
        </div>
    );
}
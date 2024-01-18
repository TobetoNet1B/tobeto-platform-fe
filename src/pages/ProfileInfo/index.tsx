import SideBar from 'components/ProfileInfo/SideBar'
import { Outlet } from 'react-router-dom'

type Props = {}

const ProfileInfo = (props: Props) => {
	return (
		<div className='grid grid-cols-12 container lg:max-w-6xl mx-auto lg:pt-40 pt-20'>
			<div className='lg:col-span-4 col-span-12 mx-auto md:max-w-full max-w-sm overflow-x-scroll'>
				<SideBar />
			</div>
			<div className='lg:col-span-8 col-span-12 ml-10 lg:mt-0 mt-10'>
				<Outlet />
			</div>
		</div>
	)
}

export default ProfileInfo
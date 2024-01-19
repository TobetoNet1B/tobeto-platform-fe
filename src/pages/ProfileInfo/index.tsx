import SideBar from 'components/ProfileInfo/SideBar'
import { Outlet } from 'react-router-dom'

type Props = {}

const ProfileInfo = (props: Props) => {
	return (
		<div className='grid grid-cols-12 container lg:max-w-6xl mx-auto lg:pt-40 pt-20'>
			<div className='lg:col-span-3 col-span-12 md:max-w-full max-w-sm mx-0 sm:mx-auto lg:mx-0 overflow-x-auto'>
				<SideBar />
			</div>
			<div className='lg:col-span-9 col-span-12 lg:mt-0 mt-10'>
				<Outlet />
			</div>
		</div>
	)
}

export default ProfileInfo
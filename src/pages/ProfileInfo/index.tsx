import SideBar from 'components/ProfileInfo/SideBar'
import { Outlet } from 'react-router-dom'

type Props = {}

const ProfileInfo = (props: Props) => {
	return (
		<div className='grid grid-cols-12 container max-w-6xl mx-auto pt-40 gap-8'>
			<div className='lg:col-span-4 col-span-12'>
				<SideBar />
			</div>
			<div className='lg:col-span-8 col-span-12'>
				<Outlet />
			</div>
		</div>
	)
}

export default ProfileInfo
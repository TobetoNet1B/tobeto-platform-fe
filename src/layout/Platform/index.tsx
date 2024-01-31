import PlatformNavbar from 'components/Platform/NavBar/PlatformNavbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Platform = (props: Props) => {
	return (
		<>
			<PlatformNavbar />
			<Outlet />
			{/* <PlatformFooter /> */}
		</>
	)
}

export default Platform
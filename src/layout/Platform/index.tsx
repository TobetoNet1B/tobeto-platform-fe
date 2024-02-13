import FooterBar from 'components/Platform/Footer/FooterBar'
import PlatformNavbar from 'components/Platform/NavBar/PlatformNavbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Platform = (props: Props) => {
	return (
		<>
			<PlatformNavbar />
			<Outlet />
		   <FooterBar/>
		</>
	)
}

export default Platform
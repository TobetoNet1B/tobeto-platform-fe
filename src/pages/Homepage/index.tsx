import FooterComp from 'components/Footer'
import NavBar from 'components/NavBar'
import AnotherNav from 'components/NavBar/AnotherNav'
import Homepage from './Homepage'
import Main from './Main'

const Home = () => {
	return (
		<div className='block box-border font-pop'>
			<div className='bg-zinc-900' style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
				<AnotherNav />
				<NavBar />
				<Main />
				<Homepage />
				<FooterComp />
			</div>
		</div>
	)
}

export default Home
import FooterComp from 'components/Footer'
import NavBar from 'components/NavBar'
import React from 'react'

const Home = () => {
	return (
		<div className='block box-border font-pop'>
			<div className='bg-zinc-900' style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>
				<NavBar />
				{/* Main */}
				<FooterComp />
			</div>
		</div>
	)
}

export default Home
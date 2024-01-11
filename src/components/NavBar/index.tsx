
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavBar() {
	return (
		<Navbar fluid className='w-full h-16 !bg-[#181717]' >
			<Navbar.Brand href="/">
				<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" className="mr-3 h-6 sm:h-9" />
				{/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
			</Navbar.Brand>
			<div className="flex md:order-2">
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
					}
				>
					<Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">name@flowbite.com</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="#" active>Home</Navbar.Link>{/* 
				<Dropdown arrowIcon={false} inline label={"asdas"}>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle /> */}
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

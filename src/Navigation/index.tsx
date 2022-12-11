import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' >
			Home
		</NavLink>
		<NavLink to='/addEvents' >
			Add Events
		</NavLink>
		<NavLink to='/profile' >
			Profile
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/'>Sign Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

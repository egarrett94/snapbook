import React, {Component} from 'react';
// gonna need links
import {Navbar, NavItem} from 'react-materialize';


class Nav extends Component {

	render() {

		return (
			<div>
				<Navbar brand='SnapBook' className='purple darken-3' right>
					<NavItem href='/login'>Login</NavItem>
				</Navbar>
			</div>
		)
	}

}

export default Nav;